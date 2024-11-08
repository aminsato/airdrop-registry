package models

import (
	"errors"
	"fmt"

	"github.com/vultisig/mobile-tss-lib/tss"
	"gorm.io/gorm"

	"github.com/vultisig/airdrop-registry/internal/address"
	"github.com/vultisig/airdrop-registry/internal/common"
)

var ErrAlreadyExist = errors.New("already exist")

type Vault struct {
	gorm.Model
	Name string `gorm:"type:varchar(255)" json:"name" binding:"required"`
	// set default value for alias to name
	Alias        string  `gorm:"type:varchar(255);default:name" json:"alias" binding:"required"`
	ECDSA        string  `gorm:"type:varchar(255);uniqueIndex:ecdsa_eddsa_idx;not null" json:"ecdsa" binding:"required"`
	EDDSA        string  `gorm:"type:varchar(255);uniqueIndex:ecdsa_eddsa_idx;not null" json:"eddsa" binding:"required"`
	HexChainCode string  `gorm:"type:varchar(255)" json:"hex_chain_code" binding:"required"`
	Uid          string  `gorm:"type:varchar(255)" json:"uid" binding:"required"`
	TotalPoints  float64 `json:"total_points"`                         // total point of the vault
	JoinAirdrop  bool    `json:"join_airdrop"`                         // join airdrop or not
	Rank         int64   `json:"rank"`                                 // rank of the vault
	Balance      int64   `gorm:"type:bigint;default:0" json:"balance"` // latest balance of the vault
	LPValue      int64   `gorm:"type:bigint;default:0" json:"lp_value"`
}

func (*Vault) TableName() string {
	return "vaults"
}
func (v *Vault) GetAddress(chain common.Chain) (string, error) {
	derivePath := chain.GetDerivePath()
	var childPublicKey string
	var err error
	if !chain.IsEdDSA() {
		childPublicKey, err = tss.GetDerivedPubKey(v.ECDSA, v.HexChainCode, derivePath, chain.IsEdDSA())
	}
	if err != nil {
		return "", fmt.Errorf("fail to get child public key")
	}
	switch chain {
	case common.THORChain:
		return address.GetBech32Address(childPublicKey, "thor")
	case common.MayaChain:
		return address.GetBech32Address(childPublicKey, "maya")
	case common.Kujira:
		return address.GetBech32Address(childPublicKey, "kujira")
	case common.GaiaChain:
		return address.GetBech32Address(childPublicKey, "cosmos")
	case common.Dydx:
		return address.GetBech32Address(childPublicKey, "dydx")
	case common.Solana:
		return address.GetSolAddress(v.EDDSA)
	case common.Bitcoin:
		return address.GetBitcoinAddress(childPublicKey)
	case common.Litecoin:
		return address.GetLitecoinAddress(childPublicKey)
	case common.BitcoinCash:
		return address.GetBitcoinCashAddress(childPublicKey)
	case common.Dogecoin:
		return address.GetDogeAddress(childPublicKey)
	case common.Dash:
		return address.GetDashAddress(childPublicKey)
	case common.Ethereum, common.BscChain, common.Polygon, common.Base, common.Avalanche, common.Arbitrum, common.Blast, common.CronosChain, common.Zksync, common.Optimism:
		return address.GetEVMAddress(childPublicKey)
	case common.Polkadot:
		return address.GetDotAddress(v.EDDSA)
	case common.Sui:
		return "", nil
	default:
		return "", fmt.Errorf("unsupported chain %s", chain)
	}
}
