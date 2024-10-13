package services

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"
	"strings"

	"github.com/sirupsen/logrus"

	"github.com/vultisig/airdrop-registry/internal/models"
)

const CMC_Base_URL = "https://api.vultisig.com/cmc/"

type PriceResolver struct {
	logger *logrus.Logger
	cmcMap *CmcMapResp
}

func NewPriceResolver() (*PriceResolver, error) {
	pr := &PriceResolver{
		logger: logrus.WithField("module", "price_resolver").Logger,
	}
	result, err := pr.getCMCMap()
	if err != nil {
		return nil, fmt.Errorf("fail to get CMC map,err: %w", err)
	}
	pr.cmcMap = result
	return pr, nil
}

type CmcMapItemPlatform struct {
	ID           int    `json:"id"`
	Name         string `json:"name"`
	Symbol       string `json:"symbol"`
	Slug         string `json:"slug"`
	TokenAddress string `json:"token_address"`
}
type CmcMapItem struct {
	ID       int                 `json:"id"`
	Name     string              `json:"name"`
	Symbol   string              `json:"symbol"`
	Slug     string              `json:"slug"`
	IsActive int                 `json:"is_active"`
	Platform *CmcMapItemPlatform `json:"platform"`
}
type CmcMapResp struct {
	Data []CmcMapItem `json:"data"`
}

func (p *PriceResolver) getCMCMap() (*CmcMapResp, error) {
	url := CMC_Base_URL + "/v1/cryptocurrency/map"
	resp, err := http.Get(url)
	if err != nil {
		p.logger.Error(err)
		return nil, fmt.Errorf("fail to get map from CMC,err: %w", err)
	}
	defer p.closer(resp.Body)
	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("error fetching CMC map: %s", resp.Status)
	}
	var cmcMapResp CmcMapResp
	if err := json.NewDecoder(resp.Body).Decode(&cmcMapResp); err != nil {
		return nil, fmt.Errorf("error decoding CMC map response: %w", err)
	}
	return &cmcMapResp, nil
}
func (p *PriceResolver) closer(closer io.Closer) {
	if err := closer.Close(); err != nil {
		p.logger.Error(err)
	}
}

func (p *PriceResolver) resolveIds(coinIds []models.CoinIdentity) string {
	var ids []string
	for _, coinId := range coinIds {
		ids = append(ids, strconv.Itoa(coinId.CMCId))
		//for _, item := range p.cmcMap.Data {
		//	if strings.EqualFold(item.Symbol, coinId.Ticker) &&
		//		strings.EqualFold(item.Name, coinId.Chain.String()) {
		//		ids = append(ids, strconv.Itoa(item.ID))
		//	}
		//}
	}
	return strings.Join(ids, ",")
}

func (p *PriceResolver) GetAllTokenPrices(coinIds []models.CoinIdentity) (map[int]float64, error) {
	strIds := p.resolveIds(coinIds)
	url := CMC_Base_URL + "/v2/cryptocurrency/quotes/latest?id=" + strIds
	resp, err := http.Get(url)
	if err != nil {
		p.logger.Error(err)
		return nil, fmt.Errorf("fail to get prices from CMC,err: %w", err)
	}
	defer p.closer(resp.Body)
	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("error fetching CMC prices: %s", resp.Status)
	}
	type CmcQuoteResp struct {
		Data map[string]struct {
			ID     int    `json:"id"`
			Name   string `json:"name"`
			Symbol string `json:"symbol"`
			Slug   string `json:"slug"`
			Quote  struct {
				USD struct {
					Price float64 `json:"price"`
				} `json:"USD"`
			} `json:"quote"`
		} `json:"data"`
	}
	var cmcQuoteResp CmcQuoteResp
	if err := json.NewDecoder(resp.Body).Decode(&cmcQuoteResp); err != nil {
		return nil, fmt.Errorf("error decoding CMC quote response: %w", err)
	}
	priceMap := make(map[int]float64)
	for _, item := range cmcQuoteResp.Data {

		priceMap[item.ID] = item.Quote.USD.Price
	}
	return priceMap, nil
}
