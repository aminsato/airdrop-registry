package handlers

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/vultisig/airdrop-registry/internal/models"
)

func (a *Api) registerVaultHandler(c *gin.Context) {
	var vault models.VaultRequest
	if err := c.ShouldBindJSON(&vault); err != nil {
		_ = c.Error(errInvalidRequest)
		return
	}
	// check vault already exists , should we tell front-end that vault already registered?
	if v, err := a.s.GetVault(vault.PublicKeyECDSA, vault.PublicKeyEDDSA); err == nil {
		a.logger.Error(err)
		c.JSON(http.StatusOK, models.VaultResponse{
			UId:            v.Uid,
			Name:           v.Name,
			Alias:          v.Alias,
			PublicKeyECDSA: v.ECDSA,
			PublicKeyEDDSA: v.EDDSA,
			TotalPoints:    v.TotalPoints,
			JoinAirdrop:    v.JoinAirdrop,
			Coins:          []models.ChainCoins{},
		})
		return
	}
	vaultModel := models.Vault{
		Name:         vault.Name,
		Alias:        vault.Name,
		ECDSA:        vault.PublicKeyECDSA,
		EDDSA:        vault.PublicKeyEDDSA,
		Uid:          vault.Uid,
		HexChainCode: vault.HexChainCode,
		TotalPoints:  0,
		JoinAirdrop:  false,
	}

	if err := a.s.RegisterVault(&vaultModel); err != nil {
		if errors.Is(err, models.ErrAlreadyExist) {
			_ = c.Error(errVaultAlreadyRegist)
			return
		}
		a.logger.Error(err)
		_ = c.Error(errFailedToRegisterVault)
		return
	}

	c.JSON(http.StatusOK, models.VaultResponse{
		UId:            vaultModel.Uid,
		Name:           vaultModel.Name,
		Alias:          vaultModel.Alias,
		PublicKeyECDSA: vaultModel.ECDSA,
		PublicKeyEDDSA: vaultModel.EDDSA,
		TotalPoints:    vaultModel.TotalPoints,
		JoinAirdrop:    vaultModel.JoinAirdrop,
		Coins:          []models.ChainCoins{},
	})

}

func (a *Api) getVaultHandler(c *gin.Context) {
	ecdsaPublicKey := c.Param("ecdsaPublicKey")
	eddsaPublicKey := c.Param("eddsaPublicKey")
	vault, err := a.s.GetVault(ecdsaPublicKey, eddsaPublicKey)
	if err != nil {
		a.logger.Error(err)
		_ = c.Error(errFailedToGetVault)
		return
	}
	coins, err := a.s.GetCoins(vault.ID)
	if err != nil {
		a.logger.Error(err)
		_ = c.Error(errFailedToGetCoin)
		return
	}
	vaultResp := models.VaultResponse{
		UId:            vault.Uid,
		Name:           vault.Name,
		Alias:          vault.Alias,
		PublicKeyECDSA: vault.ECDSA,
		PublicKeyEDDSA: vault.EDDSA,
		TotalPoints:    vault.TotalPoints,
		JoinAirdrop:    vault.JoinAirdrop,
		Coins:          []models.ChainCoins{},
	}
	for _, coin := range coins {
		found := false
		for i, _ := range vaultResp.Coins {
			if vaultResp.Coins[i].Name == coin.Chain {
				vaultResp.Coins[i].Coins = append(vaultResp.Coins[i].Coins, models.NewCoin(coin))
				found = true
			}
		}
		if !found {
			vaultResp.Coins = append(vaultResp.Coins, models.ChainCoins{
				Name:         coin.Chain,
				Address:      coin.Address,
				HexPublicKey: coin.HexPublicKey,
				Coins:        []models.Coin{models.NewCoin(coin)},
			})
		}
	}
	c.JSON(http.StatusOK, vaultResp)
}

func (a *Api) getVaultByUIDHandler(c *gin.Context) {
	uid := c.Param("uid")
	if uid == "" {
		_ = c.Error(errInvalidRequest)
		return
	}
	vault, err := a.s.GetVaultByUID(uid)
	if err != nil {
		a.logger.Error(err)
		_ = c.Error(errFailedToGetVault)
		return
	}
	if vault == nil {
		_ = c.Error(errVaultNotFound)
		return
	}
	coins, err := a.s.GetCoins(vault.ID)
	if err != nil {
		a.logger.Error(err)
		_ = c.Error(errFailedToGetCoin)
		return
	}
	if vault.Alias == "" {
		vault.Alias = vault.Name
	}
	vaultResp := models.VaultResponse{
		UId:            vault.Uid,
		Name:           vault.Alias,
		Alias:          vault.Alias,
		PublicKeyECDSA: "",
		PublicKeyEDDSA: "",
		TotalPoints:    vault.TotalPoints,
		JoinAirdrop:    vault.JoinAirdrop,
		Coins:          []models.ChainCoins{},
	}
	for i, _ := range coins {
		coin := coins[i]
		coin.VaultID = 0
		coin.HexPublicKey = ""
		found := false
		for j, _ := range vaultResp.Coins {
			if vaultResp.Coins[j].Name == coin.Chain {
				vaultResp.Coins[j].Coins = append(vaultResp.Coins[j].Coins, models.NewCoin(coin))
				found = true
			}
		}
		if !found {
			vaultResp.Coins = append(vaultResp.Coins, models.ChainCoins{
				Name:         coin.Chain,
				Address:      coin.Address,
				HexPublicKey: coin.HexPublicKey,
				Coins:        []models.Coin{models.NewCoin(coin)},
			})
		}
	}
	c.JSON(http.StatusOK, vaultResp)
}
func (a *Api) joinAirdrop(c *gin.Context) {
	var vault models.VaultRequest
	if err := c.ShouldBindJSON(&vault); err != nil {
		a.logger.Error(err)
		_ = c.Error(errInvalidRequest)
		return
	}
	// check vault already exists , should we tell front-end that vault already registered?
	v, err := a.s.GetVault(vault.PublicKeyECDSA, vault.PublicKeyEDDSA)
	if err != nil {
		a.logger.Error(err)
		_ = c.Error(errFailedToGetVault)
		return
	}
	if v == nil {
		_ = c.Error(errVaultNotFound)
		return
	}
	if v.HexChainCode == vault.HexChainCode && v.Uid == vault.Uid {
		v.JoinAirdrop = true
		if err := a.s.UpdateVault(v); err != nil {
			a.logger.Error(err)
			_ = c.Error(errFailedToJoinRegistry)
			return
		}
	} else {
		_ = c.Error(errForbiddenAccess)
		return
	}
	c.Status(http.StatusOK)
}
func (a *Api) exitAirdrop(c *gin.Context) {
	var vault models.VaultRequest
	if err := c.ShouldBindJSON(&vault); err != nil {
		a.logger.Error(err)
		_ = c.Error(errInvalidRequest)
		return
	}
	// check vault already exists , should we tell front-end that vault already registered?
	v, err := a.s.GetVault(vault.PublicKeyECDSA, vault.PublicKeyEDDSA)
	if err != nil {
		a.logger.Error(err)
		_ = c.Error(errFailedToGetVault)
		return
	}
	if v == nil {
		_ = c.Error(errVaultNotFound)
		return
	}
	if v.HexChainCode == vault.HexChainCode && v.Uid == vault.Uid {
		v.JoinAirdrop = false
		if err := a.s.UpdateVault(v); err != nil {
			a.logger.Error(err)
			_ = c.Error(errFailedToExitRegistry)
			return
		}
	}
	c.Status(http.StatusOK)
}
func (a *Api) deleteVaultHandler(c *gin.Context) {
	ecdsaPublicKey := c.Param("ecdsaPublicKey")
	eddsaPublicKey := c.Param("eddsaPublicKey")
	hexChainCode := c.GetHeader("x-hex-chain-code")
	if hexChainCode == "" {
		_ = c.Error(errForbiddenAccess)
		return
	}
	vault, err := a.s.GetVault(ecdsaPublicKey, eddsaPublicKey)
	if err != nil {
		a.logger.Error(err)
		_ = c.Error(errFailedToGetVault)
		return
	}
	if vault == nil {
		_ = c.Error(errVaultNotFound)
		return
	}
	if hexChainCode == vault.HexChainCode {
		if err := a.s.DeleteVault(ecdsaPublicKey, eddsaPublicKey); err != nil {
			a.logger.Error(err)
			_ = c.Error(errFailedToDeleteVault)
			return
		}
	} else {
		_ = c.Error(errForbiddenAccess)
		return
	}
	c.Status(http.StatusOK)
}

func (a *Api) updateAliasHandler(c *gin.Context) {
	var vault models.VaultRequest
	if err := c.ShouldBindJSON(&vault); err != nil {
		a.logger.Error(err)
		_ = c.Error(errInvalidRequest)
		return
	}
	// check vault already exists , should we tell front-end that vault already registered?
	v, err := a.s.GetVault(vault.PublicKeyECDSA, vault.PublicKeyEDDSA)
	if err != nil {
		a.logger.Error(err)
		_ = c.Error(errFailedToGetVault)
		return
	}

	if v == nil {
		_ = c.Error(errVaultNotFound)
		return
	}
	if v.HexChainCode == vault.HexChainCode && v.Uid == vault.Uid {
		v.Alias = vault.Name
		if err := a.s.UpdateVault(v); err != nil {
			a.logger.Error(err)
			_ = c.Error(errFailedToJoinRegistry)
			return
		}
	} else {
		_ = c.Error(errForbiddenAccess)
		return
	}
	c.Status(http.StatusOK)
}
