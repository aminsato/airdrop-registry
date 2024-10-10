// Package oapigen provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/deepmap/oapi-codegen version v1.16.3 DO NOT EDIT.
package oapigen

import (
	"bytes"
	"compress/gzip"
	"encoding/base64"
	"fmt"
	"net/url"
	"path"
	"strings"

	"github.com/getkin/kin-openapi/openapi3"
)

// ChainCoins defines model for ChainCoins.
type ChainCoins struct {
	Address      *string `json:"address,omitempty"`
	Coins        *[]Coin `json:"coins,omitempty"`
	HexPublicKey *string `json:"hex_public_key,omitempty"`
	Name         *string `json:"name,omitempty"`
}

// ChainCoinsShared defines model for ChainCoinsShared.
type ChainCoinsShared struct {
	Address      *string `json:"address,omitempty"`
	Coins        *[]Coin `json:"coins,omitempty"`
	HexPublicKey *string `json:"hex_public_key,omitempty"`
	Name         *string `json:"name,omitempty"`
}

// Coin defines model for Coin.
type Coin struct {
	CmcId           *int    `json:"cmc_id,omitempty"`
	ContractAddress *string `json:"contract_address,omitempty"`
	Decimals        *int    `json:"decimals,omitempty"`
	Id              *int    `json:"id,omitempty"`
	IsNative        *bool   `json:"is_native,omitempty"`
	Logo            *string `json:"logo,omitempty"`
	Ticker          *string `json:"ticker,omitempty"`
}

// CoinBase defines model for CoinBase.
type CoinBase struct {
	Address         string  `json:"address"`
	Chain           string  `json:"chain"`
	CmcId           *int    `json:"cmc_id,omitempty"`
	ContractAddress *string `json:"contract_address,omitempty"`
	Decimals        int     `json:"decimals"`
	HexPublicKey    string  `json:"hex_public_key"`
	IsNative        bool    `json:"is_native"`
	Logo            *string `json:"logo,omitempty"`
	PriceProviderId *string `json:"price_provider_id,omitempty"`
	Ticker          string  `json:"ticker"`
}

// DerivePublicKeyRequest defines model for DerivePublicKeyRequest.
type DerivePublicKeyRequest struct {
	// DerivePath Derivation path
	DerivePath string `json:"derive_path"`

	// HexChainCode Hex chain code
	HexChainCode string `json:"hex_chain_code"`

	// PublicKeyEcdsa ECDSA public key
	PublicKeyEcdsa string `json:"public_key_ecdsa"`
}

// ErrorResponse defines model for ErrorResponse.
type ErrorResponse struct {
	Error *string `json:"error,omitempty"`
}

// VaultRequest defines model for VaultRequest.
type VaultRequest struct {
	// HexChainCode Hex chain code
	HexChainCode string `json:"hex_chain_code"`

	// Name Name of the vault
	Name string `json:"name"`

	// PublicKeyEcdsa ECDSA public key
	PublicKeyEcdsa string `json:"public_key_ecdsa"`

	// PublicKeyEddsa EDDSA public key
	PublicKeyEddsa string `json:"public_key_eddsa"`

	// Uid Unique identifier
	Uid string `json:"uid"`
}

// VaultResponse defines model for VaultResponse.
type VaultResponse struct {
	Alias          *string       `json:"alias,omitempty"`
	Balance        *int          `json:"balance,omitempty"`
	Chains         *[]ChainCoins `json:"chains,omitempty"`
	JoinAirdrop    *bool         `json:"join_airdrop,omitempty"`
	Name           *string       `json:"name,omitempty"`
	PublicKeyEcdsa *string       `json:"public_key_ecdsa,omitempty"`
	PublicKeyEddsa *string       `json:"public_key_eddsa,omitempty"`
	Rank           *int          `json:"rank,omitempty"`
	RegisteredAt   *int          `json:"registered_at,omitempty"`
	TotalPoints    *float32      `json:"total_points,omitempty"`
	Uid            *string       `json:"uid,omitempty"`
}

// VaultResponseLeaderboard defines model for VaultResponseLeaderboard.
type VaultResponseLeaderboard struct {
	Alias        *string  `json:"alias,omitempty"`
	Balance      *string  `json:"balance,omitempty"`
	Name         *string  `json:"name,omitempty"`
	Rank         *int     `json:"rank,omitempty"`
	RegisteredAt *int     `json:"registered_at,omitempty"`
	TotalPoints  *float32 `json:"total_points,omitempty"`
}

// VaultResponseShared defines model for VaultResponseShared.
type VaultResponseShared struct {
	Alias        *string             `json:"alias,omitempty"`
	Balance      *string             `json:"balance,omitempty"`
	Chains       *[]ChainCoinsShared `json:"chains,omitempty"`
	JoinAirdrop  *bool               `json:"join_airdrop,omitempty"`
	Name         *string             `json:"name,omitempty"`
	Rank         *int                `json:"rank,omitempty"`
	RegisteredAt *int                `json:"registered_at,omitempty"`
	TotalPoints  *float32            `json:"total_points,omitempty"`
	Uid          *string             `json:"uid,omitempty"`
}

// VaultsResponse defines model for VaultsResponse.
type VaultsResponse struct {
	TotalVaultCount *int                        `json:"total_vault_count,omitempty"`
	Vaults          *[]VaultResponseLeaderboard `json:"vaults,omitempty"`
}

// PostCoinEcdsaPublicKeyEddsaPublicKeyParams defines parameters for PostCoinEcdsaPublicKeyEddsaPublicKey.
type PostCoinEcdsaPublicKeyEddsaPublicKeyParams struct {
	XHexChainCode string `json:"x-hex-chain-code"`
}

// DeleteCoinEcdsaPublicKeyEddsaPublicKeyCoinIDParams defines parameters for DeleteCoinEcdsaPublicKeyEddsaPublicKeyCoinID.
type DeleteCoinEcdsaPublicKeyEddsaPublicKeyCoinIDParams struct {
	XHexChainCode string `json:"x-hex-chain-code"`
}

// GetLeaderboardVaultsParams defines parameters for GetLeaderboardVaults.
type GetLeaderboardVaultsParams struct {
	// From Starting rank (default 0)
	From *int `form:"from,omitempty" json:"from,omitempty"`

	// Limit Number of vaults to retrieve (default 10, max 100)
	Limit *int `form:"limit,omitempty" json:"limit,omitempty"`
}

// DeleteVaultEcdsaPublicKeyEddsaPublicKeyParams defines parameters for DeleteVaultEcdsaPublicKeyEddsaPublicKey.
type DeleteVaultEcdsaPublicKeyEddsaPublicKeyParams struct {
	XHexChainCode string `json:"x-hex-chain-code"`
}

// PostCoinEcdsaPublicKeyEddsaPublicKeyJSONRequestBody defines body for PostCoinEcdsaPublicKeyEddsaPublicKey for application/json ContentType.
type PostCoinEcdsaPublicKeyEddsaPublicKeyJSONRequestBody = CoinBase

// PostDerivePublicKeyJSONRequestBody defines body for PostDerivePublicKey for application/json ContentType.
type PostDerivePublicKeyJSONRequestBody = DerivePublicKeyRequest

// PostVaultJSONRequestBody defines body for PostVault for application/json ContentType.
type PostVaultJSONRequestBody = VaultRequest

// PostVaultExitAirdropJSONRequestBody defines body for PostVaultExitAirdrop for application/json ContentType.
type PostVaultExitAirdropJSONRequestBody = VaultRequest

// PostVaultJoinAirdropJSONRequestBody defines body for PostVaultJoinAirdrop for application/json ContentType.
type PostVaultJoinAirdropJSONRequestBody = VaultRequest

// PostVaultEcdsaPublicKeyEddsaPublicKeyAliasJSONRequestBody defines body for PostVaultEcdsaPublicKeyEddsaPublicKeyAlias for application/json ContentType.
type PostVaultEcdsaPublicKeyEddsaPublicKeyAliasJSONRequestBody = VaultRequest

// Base64 encoded, gzipped, json marshaled Swagger object
var swaggerSpec = []string{

	"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",
	"uTMAAA==",
}

// GetSwagger returns the content of the embedded swagger specification file
// or error if failed to decode
func decodeSpec() ([]byte, error) {
	zipped, err := base64.StdEncoding.DecodeString(strings.Join(swaggerSpec, ""))
	if err != nil {
		return nil, fmt.Errorf("error base64 decoding spec: %w", err)
	}
	zr, err := gzip.NewReader(bytes.NewReader(zipped))
	if err != nil {
		return nil, fmt.Errorf("error decompressing spec: %w", err)
	}
	var buf bytes.Buffer
	_, err = buf.ReadFrom(zr)
	if err != nil {
		return nil, fmt.Errorf("error decompressing spec: %w", err)
	}

	return buf.Bytes(), nil
}

var rawSpec = decodeSpecCached()

// a naive cached of a decoded swagger spec
func decodeSpecCached() func() ([]byte, error) {
	data, err := decodeSpec()
	return func() ([]byte, error) {
		return data, err
	}
}

// Constructs a synthetic filesystem for resolving external references when loading openapi specifications.
func PathToRawSpec(pathToFile string) map[string]func() ([]byte, error) {
	res := make(map[string]func() ([]byte, error))
	if len(pathToFile) > 0 {
		res[pathToFile] = rawSpec
	}

	return res
}

// GetSwagger returns the Swagger specification corresponding to the generated code
// in this file. The external references of Swagger specification are resolved.
// The logic of resolving external references is tightly connected to "import-mapping" feature.
// Externally referenced files must be embedded in the corresponding golang packages.
// Urls can be supported but this task was out of the scope.
func GetSwagger() (swagger *openapi3.T, err error) {
	resolvePath := PathToRawSpec("")

	loader := openapi3.NewLoader()
	loader.IsExternalRefsAllowed = true
	loader.ReadFromURIFunc = func(loader *openapi3.Loader, url *url.URL) ([]byte, error) {
		pathToFile := url.String()
		pathToFile = path.Clean(pathToFile)
		getSpec, ok := resolvePath[pathToFile]
		if !ok {
			err1 := fmt.Errorf("path not found: %s", pathToFile)
			return nil, err1
		}
		return getSpec()
	}
	var specData []byte
	specData, err = rawSpec()
	if err != nil {
		return
	}
	swagger, err = loader.LoadFromData(specData)
	if err != nil {
		return
	}
	return
}
