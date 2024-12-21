package services

import (
	"context"
	"fmt"
	"strings"
	"time"

	"github.com/vultisig/airdrop-registry/internal/models"
)

// RegisterVault save the given vault to db
func (s *Storage) RegisterVault(vault *models.Vault) error {
	if err := s.db.Create(vault).Error; err != nil {
		return fmt.Errorf("failed to register vault: %w", err)
	}
	return nil
}

func (s *Storage) GetVault(ecdsa, eddsa string) (*models.Vault, error) {
	ecdsa = strings.ToLower(ecdsa)
	eddsa = strings.ToLower(eddsa)
	var vault models.Vault
	if err := s.db.Where("ecdsa = ? AND eddsa = ?", ecdsa, eddsa).First(&vault).Error; err != nil {
		return nil, fmt.Errorf("failed to get vault with ECDSA %s and EDDSA %s: %w", ecdsa, eddsa, err)
	}
	return &vault, nil
}

func (s *Storage) GetVaultByUID(uid string) (*models.Vault, error) {
	var vault models.Vault
	if err := s.db.Where("uid = ?", uid).First(&vault).Error; err != nil {
		return nil, fmt.Errorf("failed to get vault with UID %s: %w", uid, err)
	}
	return &vault, nil
}

func (s *Storage) UpdateVault(vault *models.Vault) error {
	if err := s.db.Save(vault).Error; err != nil {
		return fmt.Errorf("failed to update vault: %w", err)
	}
	return nil
}
func (s *Storage) IncreaseVaultTotalPoints(id uint, newPoints int64) error {
	qry := `UPDATE vaults SET total_points = total_points + ? WHERE id = ? and join_airdrop = 1`
	if err := s.db.Exec(qry, newPoints, id).Error; err != nil {
		return fmt.Errorf("failed to update vault total points: %w", err)
	}
	return nil
}

func (s *Storage) UpdateLPValue(id uint, lpValue int64) error {
	qry := `UPDATE vaults SET lp_value = ?  WHERE id = ?`
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	if err := s.db.WithContext(ctx).Exec(qry, lpValue, id).Error; err != nil {
		return fmt.Errorf("failed to update vault: %w", err)
	}
	return nil
}
func (s *Storage) UpdateNFTValue(id uint, nftValue int64) error {
	qry := `UPDATE vaults SET nft_value = ?  WHERE id = ?`
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	if err := s.db.WithContext(ctx).Exec(qry, nftValue, id).Error; err != nil {
		return fmt.Errorf("failed to update vault: %w", err)
	}
	return nil
}

func (s *Storage) GetLPValue(id uint) (int64, error) {
	var lpValue int64
	if err := s.db.Model(&models.Vault{}).Where("id = ?", id).Select("lp_value").Scan(&lpValue).Error; err != nil {
		return 0, fmt.Errorf("failed to get lp value: %w", err)
	}
	return lpValue, nil
}

func (s *Storage) GetNFTValue(id uint) (int64, error) {
	var nftValue int64
	if err := s.db.Model(&models.Vault{}).Where("id = ?", id).Select("nft_value").Scan(&nftValue).Error; err != nil {
		return 0, fmt.Errorf("failed to get nft value: %w", err)
	}
	return nftValue, nil
}

func (s *Storage) DeleteVault(ecdsa, eddsa string) error {
	ecdsa = strings.ToLower(ecdsa)
	eddsa = strings.ToLower(eddsa)

	if err := s.db.Exec("delete from coins where vault_id in (select id from vaults where ecdsa = ? and eddsa = ?)", ecdsa, eddsa).Error; err != nil {
		return fmt.Errorf("fail to delete coins in vault,err: %w", err)
	}
	if err := s.db.Exec("delete from vault_share_appearances where vault_id in (select id from vaults where ecdsa = ? and eddsa = ?)", ecdsa, eddsa).Error; err != nil {
		return fmt.Errorf("fail to delete vault_share_appearances in vault,err: %w", err)
	}
	if err := s.db.Where("ecdsa = ? AND eddsa = ?", ecdsa, eddsa).Unscoped().Delete(&models.Vault{}).Error; err != nil {
		return fmt.Errorf("failed to delete vault with ECDSA %s and EDDSA %s: %w", ecdsa, eddsa, err)
	}

	return nil
}

func (s *Storage) GetLeaderVaults(fromRank int64, limit int) ([]models.Vault, error) {
	var vaults []models.Vault
	// where rank is not null and rank > fromRank
	if err := s.db.Where("`rank` is not null and `rank` > ?  and join_airdrop = 1", fromRank).Order("`rank` asc").Limit(limit).Find(&vaults).Error; err != nil {
		return nil, fmt.Errorf("failed to get leader vaults: %w", err)
	}
	return vaults, nil
}

func (s *Storage) GetLeaderVaultCount() (int64, error) {
	var count int64
	if err := s.db.Model(&models.Vault{}).Where("`rank` is not null and `rank` > 0  and join_airdrop = 1").Count(&count).Error; err != nil {
		return 0, fmt.Errorf("failed to get leader vault count: %w", err)
	}
	return count, nil
}

func (s *Storage) GetVaultsWithPage(startId, limit uint) ([]models.Vault, error) {
	var vaults []models.Vault
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*2)
	defer cancel()
	if err := s.db.WithContext(ctx).Model(&models.Vault{}).Where("id > ?", startId).Limit(int(limit)).Scan(&vaults).Error; err != nil {
		return vaults, fmt.Errorf("failed to get vaults: %w", err)
	}
	return vaults, nil
}

func (s *Storage) GetLeaderVaultTotalBalance() (int64, error) {
	//return sum of balance of all leader vaults
	var totalBalance int64
	if err := s.db.Model(&models.Vault{}).Select("sum(balance)").Row().Scan(&totalBalance); err != nil {
		return 0, fmt.Errorf("failed to get leader vault total balance: %w", err)
	}
	return totalBalance, nil
}

func (s *Storage) GetLeaderVaultTotalLP() (int64, error) {
	//return sum of balance of all leader vaults
	var totalLP int64
	if err := s.db.Model(&models.Vault{}).Select("sum(lp_value)").Row().Scan(&totalLP); err != nil {
		return 0, fmt.Errorf("failed to get leader vault total lp: %w", err)
	}
	return totalLP, nil
}

func (s *Storage) UpdateVaultAvatar(vault *models.Vault) error {
	qry := `UPDATE vaults SET avatar_url = ?, avatar_collection_id = ?, avatar_item_id = ? WHERE id = ?`
	if err := s.db.Exec(qry, vault.AvatarURL, vault.AvatarCollectionID, vault.AvatarItemID, vault.ID).Error; err != nil {
		return fmt.Errorf("failed to update vault avatar: %w", err)
	}
	return nil
}
