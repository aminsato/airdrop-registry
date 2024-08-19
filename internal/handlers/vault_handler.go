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
		c.Error(errInvalidRequest)
		return
	}
	// check vault already exists , should we tell front-end that vault already registered?
	if _, err := a.s.GetVault(vault.PublicKeyECDSA, vault.PublicKeyEDDSA); err == nil {
		a.logger.Error(err)
		c.Error(errVaultAlreadyRegist)
		return
	}
	vaultModel := models.Vault{
		Name:         vault.Name,
		ECDSA:        vault.PublicKeyECDSA,
		EDDSA:        vault.PublicKeyEDDSA,
		Uid:          vault.Uid,
		HexChainCode: vault.HexChainCode,
		TotalPoints:  0,
		JoinAirdrop:  false,
	}

	if err := a.s.RegisterVault(&vaultModel); err != nil {
		if errors.Is(err, models.ErrAlreadyExist) {
			c.Error(errVaultAlreadyRegist)
			return
		}
		a.logger.Error(err)
		c.Error(errFailedToRegisterVault)
		return
	}
	c.Status(http.StatusCreated)
}

func (a *Api) getVaultHandler(c *gin.Context) {
	ecdsaPublicKey := c.Param("ecdsaPublicKey")
	eddsaPublicKey := c.Param("eddsaPublicKey")
	vault, err := a.s.GetVault(ecdsaPublicKey, eddsaPublicKey)
	if err != nil {
		a.logger.Error(err)
		c.Error(errFailedToGetVault)
		return
	}
	coins, err := a.s.GetCoins(vault.ID)
	if err != nil {
		a.logger.Error(err)
		c.Error(errFailedToGetCoin)
		return
	}
	vaultResp := models.VaultResponse{
		Name:           vault.Name,
		PublicKeyECDSA: vault.ECDSA,
		PublicKeyEDDSA: vault.EDDSA,
		TotalPoints:    vault.TotalPoints,
		JoinAirdrop:    vault.JoinAirdrop,
		Coins:          []models.CoinBase{},
	}
	for _, coin := range coins {
		vaultResp.Coins = append(vaultResp.Coins, coin.CoinBase)
		vaultResp.Coins[len(vaultResp.Coins)-1].ID = coin.Model.ID
	}
	c.JSON(http.StatusOK, vaultResp)
}
func (a *Api) joinAirdrop(c *gin.Context) {
	var vault models.VaultRequest
	if err := c.ShouldBindJSON(&vault); err != nil {
		a.logger.Error(err)
		c.Error(errInvalidRequest)
		return
	}
	// check vault already exists , should we tell front-end that vault already registered?
	v, err := a.s.GetVault(vault.PublicKeyECDSA, vault.PublicKeyEDDSA)
	if err != nil {
		a.logger.Error(err)
		c.Error(errFailedToGetVault)
		return
	}
	if v == nil {
		c.Error(errVaultNotFound)
		return
	}
	if v.HexChainCode == vault.HexChainCode && v.Uid == vault.Uid {
		v.JoinAirdrop = true
		if err := a.s.UpdateVault(v); err != nil {
			a.logger.Error(err)
			c.Error(errFailedToJoinRegistry)
			return
		}
	}
	c.Status(http.StatusOK)
}
func (a *Api) exitAirdrop(c *gin.Context) {
	var vault models.VaultRequest
	if err := c.ShouldBindJSON(&vault); err != nil {
		a.logger.Error(err)
		c.Error(errInvalidRequest)
		return
	}
	// check vault already exists , should we tell front-end that vault already registered?
	v, err := a.s.GetVault(vault.PublicKeyECDSA, vault.PublicKeyEDDSA)
	if err != nil {
		a.logger.Error(err)
		c.Error(errFailedToGetVault)
		return
	}
	if v == nil {
		c.Error(errVaultNotFound)
		return
	}
	if v.HexChainCode == vault.HexChainCode && v.Uid == vault.Uid {
		v.JoinAirdrop = false
		if err := a.s.UpdateVault(v); err != nil {
			a.logger.Error(err)
			c.Error(errFailedToExitRegistry)
			return
		}
	}
	c.Status(http.StatusOK)
}
func (a *Api) deleteVaultHandler(c *gin.Context) {
	var vault models.VaultRequest
	if err := c.ShouldBindJSON(&vault); err != nil {
		c.Error(errInvalidRequest)
		return
	}
	// check vault already exists , should we tell front-end that vault already registered?
	v, err := a.s.GetVault(vault.PublicKeyECDSA, vault.PublicKeyEDDSA)
	if err != nil {
		a.logger.Error(err)
		c.Error(errFailedToGetVault)
		return
	}
	if v == nil {
		c.Error(errVaultNotFound)
		return
	}
	if v.HexChainCode == vault.HexChainCode && v.Uid == vault.Uid {
		if err := a.s.DeleteVault(vault.PublicKeyECDSA, vault.PublicKeyEDDSA); err != nil {
			a.logger.Error(err)
			c.Error(errFailedToDeleteVault)
			return
		}
	}
	c.Status(http.StatusOK)
}
