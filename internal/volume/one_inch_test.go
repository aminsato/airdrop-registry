package volume

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/sirupsen/logrus"
	"github.com/stretchr/testify/assert"
)

func TestOneInchVolume(t *testing.T) {
	mockServer := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		etherscanResponse := map[string]any{
			"status":  "1",
			"message": "OK",
			"result": []map[string]any{
				{
					"blockNumber":     "19883907",
					"timeStamp":       "1715879039",
					"hash":            "0x7a541e32d9ce12a7413d716b2870b5d2fe2ac31a91d67ee1f765d0b24e27f774",
					"from":            "0xe37e799d5077682fa0a244d46e5649f71457bd09",
					"to":              "0xa4a4f610e89488eb4ecc6c63069f241a54485269",
					"value":           "28000000000000",
					"contractAddress": "",
					"input":           "",
					"type":            "call",
					"gas":             "498356",
					"gasUsed":         "0",
					"traceId":         "0_1_1_1",
					"isError":         "0",
					"errCode":         "",
				},
			},
		}
		ethplorerResponse := map[string]any{
			"hash": "0x7a541e32d9ce12a7413d716b2870b5d2fe2ac31a91d67ee1f765d0b24e27f774",
			"operations": []map[string]any{
				{
					"timestamp":       1715879039,
					"transactionHash": "0x7a541e32d9ce12a7413d716b2870b5d2fe2ac31a91d67ee1f765d0b24e27f774",
					"value":           "3972000000000000",
					"intValue":        3972000000000000,
					"type":            "issuance",
					"isEth":           false,
					"priority":        178,
					"addresses": []string{
						"0xe37e799d5077682fa0a244d46e5649f71457bd09",
					},
					"usdPrice": 2954.23699160504,
					"tokenInfo": map[string]any{
						"address":     "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
						"decimals":    "18",
						"lastUpdated": 1741249802,
						"name":        "WETH",
						"owner":       "",
						"price": map[string]any{
							"rate":            2289.92294422654,
							"bid":             2716.58,
							"diff":            4.17,
							"diff7d":          -2.75,
							"ts":              1741249140,
							"marketCapUsd":    7729217199.45363,
							"availableSupply": 3375317.5926469,
							"volume24h":       902743667.564282,
							"volDiff1":        -22.6586680906801,
							"volDiff7":        3.37327402936241,
							"volDiff30":       -26.4878028005405,
							"diff30d":         -17.8161676636198,
							"currency":        "USD",
						},
						"symbol":            "WETH",
						"totalSupply":       "2920248965006666342993221",
						"transfersCount":    344866582,
						"txsCount":          18936011,
						"issuancesCount":    73160656,
						"holdersCount":      1159278,
						"website":           "https://weth.io",
						"image":             "/images/WETHc02aaa39.png",
						"ethTransfersCount": 6581253,
					},
					"address": "0xe37e799d5077682fa0a244d46e5649f71457bd09",
				},
				{
					"timestamp":       1715879039,
					"transactionHash": "0x7a541e32d9ce12a7413d716b2870b5d2fe2ac31a91d67ee1f765d0b24e27f774",
					"value":           "3972000000000000",
					"intValue":        3972000000000000,
					"type":            "transfer",
					"isEth":           false,
					"priority":        179,
					"from":            "0xe37e799d5077682fa0a244d46e5649f71457bd09",
					"to":              "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
					"addresses": []string{
						"0xe37e799d5077682fa0a244d46e5649f71457bd09",
						"0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
					},
					"usdPrice": 2954.23699160504,
					"tokenInfo": map[string]any{
						"address":     "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
						"decimals":    "18",
						"lastUpdated": 1741249802,
						"name":        "WETH",
						"owner":       "",
						"price": map[string]any{
							"rate":            2289.92294422654,
							"bid":             2716.58,
							"diff":            4.17,
							"diff7d":          -2.75,
							"ts":              1741249140,
							"marketCapUsd":    7729217199.45363,
							"availableSupply": 3375317.5926469,
							"volume24h":       902743667.564282,
							"volDiff1":        -22.6586680906801,
							"volDiff7":        3.37327402936241,
							"volDiff30":       -26.4878028005405,
							"diff30d":         -17.8161676636198,
							"currency":        "USD",
						},
						"symbol":            "WETH",
						"totalSupply":       "2920248965006666342993221",
						"transfersCount":    344866582,
						"txsCount":          18936011,
						"issuancesCount":    73160656,
						"holdersCount":      1159278,
						"website":           "https://weth.io",
						"image":             "/images/WETHc02aaa39.png",
						"ethTransfersCount": 6581253,
					},
				},
				{
					"timestamp":       1715879039,
					"transactionHash": "0x7a541e32d9ce12a7413d716b2870b5d2fe2ac31a91d67ee1f765d0b24e27f774",
					"value":           "11695420",
					"intValue":        11695420,
					"type":            "transfer",
					"isEth":           false,
					"priority":        180,
					"from":            "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
					"to":              "0x111111125421ca6dc452d289314280a0f8842a65",
					"addresses": []string{
						"0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
						"0x111111125421ca6dc452d289314280a0f8842a65",
					},
					"usdPrice": 1.0002118290011,
					"tokenInfo": map[string]any{
						"address":     "0xdac17f958d2ee523a2206206994597c13d831ec7",
						"decimals":    "6",
						"lastUpdated": 1741249045,
						"name":        "Tether USD",
						"owner":       "0xc6cde7c39eb2f0f0095f41570af89efc2c1ea828",
						"price": map[string]any{
							"rate":            1.00013456367456,
							"diff":            0.03,
							"diff7d":          0.1,
							"ts":              1741250280,
							"marketCapUsd":    142737623046.925,
							"availableSupply": 142718418332.127,
							"volume24h":       94582616442.2923,
							"volDiff1":        -19.8255079108222,
							"volDiff7":        24.5366325480316,
							"volDiff30":       -24.0701656272348,
							"diff30d":         -0.0553284974032664,
							"currency":        "USD",
						},
						"symbol":            "USDT",
						"totalSupply":       "75918584460692261",
						"transfersCount":    293955783,
						"txsCount":          228938966,
						"issuancesCount":    1,
						"holdersCount":      6998038,
						"website":           "https://tether.to/",
						"image":             "/images/tether.png",
						"ethTransfersCount": 0,
					},
				},
				{
					"timestamp":       1715879039,
					"transactionHash": "0x7a541e32d9ce12a7413d716b2870b5d2fe2ac31a91d67ee1f765d0b24e27f774",
					"value":           "11695420",
					"intValue":        11695420,
					"type":            "transfer",
					"isEth":           false,
					"priority":        183,
					"from":            "0x111111125421ca6dc452d289314280a0f8842a65",
					"to":              "0x121a38277e0ba795edf8cb6be7935a9773e1ac25",
					"addresses": []string{
						"0x111111125421ca6dc452d289314280a0f8842a65",
						"0x121a38277e0ba795edf8cb6be7935a9773e1ac25",
					},
					"usdPrice": 1.0002118290011,
					"tokenInfo": map[string]any{
						"address":     "0xdac17f958d2ee523a2206206994597c13d831ec7",
						"decimals":    "6",
						"lastUpdated": 1741249045,
						"name":        "Tether USD",
						"owner":       "0xc6cde7c39eb2f0f0095f41570af89efc2c1ea828",
						"price": map[string]any{
							"rate":            1.00013456367456,
							"diff":            0.03,
							"diff7d":          0.1,
							"ts":              1741250280,
							"marketCapUsd":    142737623046.925,
							"availableSupply": 142718418332.127,
							"volume24h":       94582616442.2923,
							"volDiff1":        -19.8255079108222,
							"volDiff7":        24.5366325480316,
							"volDiff30":       -24.0701656272348,
							"diff30d":         -0.0553284974032664,
							"currency":        "USD",
						},
						"symbol":            "USDT",
						"totalSupply":       "75918584460692261",
						"transfersCount":    293955783,
						"txsCount":          228938966,
						"issuancesCount":    1,
						"holdersCount":      6998038,
						"website":           "https://tether.to/",
						"image":             "/images/tether.png",
						"ethTransfersCount": 0,
					},
				},
			},
		}
		if r.URL.Query().Get("address") == "0xa4a4f610e89488eb4ecc6c63069f241a54485269" {
			w.WriteHeader(http.StatusOK)
			json.NewEncoder(w).Encode(etherscanResponse)
		} else {
			w.WriteHeader(http.StatusOK)
			json.NewEncoder(w).Encode(ethplorerResponse)
		}
	}))
	defer mockServer.Close()
	oneInch := oneInchVolumeTrack{
		logger:           logrus.WithField("module", "vol_oneInch").Logger,
		etherscanbaseUrl: mockServer.URL,
		ethplorerBaseUrl: mockServer.URL,
	}
	expect := map[string]float64{
		"0x121a38277e0ba795edf8cb6be7935a9773e1ac25": 11.696993778690723,
	}
	res, err := oneInch.processVolume(1715879039, 1715889039, "0xa4a4f610e89488eb4ecc6c63069f241a54485269")
	assert.NoErrorf(t, err, "Failed to get: %v", err)
	assert.Equal(t, expect["0x121a38277e0ba795edf8cb6be7935a9773e1ac25"], res["0x121a38277e0ba795edf8cb6be7935a9773e1ac25"])
}
