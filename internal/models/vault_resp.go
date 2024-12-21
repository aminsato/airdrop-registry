package models

// VaultResponse to client side(front-end web)
type VaultResponse struct {
	UId            string       `json:"uid"`
	Name           string       `json:"name"`
	Alias          string       `json:"alias"`
	PublicKeyECDSA string       `json:"public_key_ecdsa"`
	PublicKeyEDDSA string       `json:"public_key_eddsa"`
	TotalPoints    float64      `json:"total_points"`
	JoinAirdrop    bool         `json:"join_airdrop"`
	Rank           int64        `json:"rank"`
	Balance        int64        `json:"balance"`
	LPValue        int64        `json:"lp_value"`
	Coins          []ChainCoins `json:"chains"`
	RegisteredAt   int64        `json:"registered_at"`
	AvatarURL      string       `json:"avatar_url"`
}

type VaultsResponse struct {
	Vaults          []VaultResponse `json:"vaults"`
	TotalVaultCount int64           `json:"total_vault_count"`
	TotalBalance    int64           `json:"total_balance"`
	TotalLP         int64           `json:"total_lp"`
}
