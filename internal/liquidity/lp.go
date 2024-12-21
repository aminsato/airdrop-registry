package liquidity

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"sync"

	"github.com/sirupsen/logrus"
)

type LiquidityPositionResolver struct {
	logger            *logrus.Logger
	thorwalletBaseURL string
	wewelpResolver    *weweLpResolver
	tgtPrice          float64
	mu                sync.RWMutex
}

func NewLiquidtyPositionResolver() *LiquidityPositionResolver {
	return &LiquidityPositionResolver{
		logger:            logrus.WithField("module", "liquidity_position_resolver").Logger,
		thorwalletBaseURL: "https://api-v2-prod.thorwallet.org",
		wewelpResolver:    NewWeWeLpResolver(),
	}
}

type poolPositionResponse struct {
	RuneOrCacaoAddedUsd float64 `json:"runeOrCacaoAddedUsd,string"`
	AssetAddedUsd       float64 `json:"assetAddedUsd,string"`
}

// fetch Thorchain and Maya LP position from Thorwallet api
func (l *LiquidityPositionResolver) GetLiquidityPosition(address string) (float64, error) {
	if address == "" {
		return 0, fmt.Errorf("address cannot be empty")
	}
	url := fmt.Sprintf("%s/pools/positions?addresses=%s", l.thorwalletBaseURL, address)
	resp, err := http.Get(url)
	if err != nil {
		l.logger.Errorf("error fetching liquidity position from %s: %e", url, err)
		return 0, fmt.Errorf("error fetching liquidity position from %s: %e", url, err)
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		l.logger.Errorf("error fetching liquidity position from %s: %s", url, resp.Status)
		return 0, fmt.Errorf("error fetching liquidity position from %s: %s", url, resp.Status)
	}
	var positions map[string][]poolPositionResponse
	buf, err := io.ReadAll(resp.Body)
	if err != nil {
		return 0, fmt.Errorf("error reading liquidity position response: %e", err)
	}
	l.logger.Infof("response(%s) : %s", url, string(buf))
	if err := json.Unmarshal(buf, &positions); err != nil {
		return 0, fmt.Errorf("error decoding liquidity position response: %e", err)
	}
	var totalLiquidity float64
	if positions == nil {
		l.logger.Errorf("no liquidity position found for address %s", address)
		return 0, nil
	}
	for _, v := range positions {
		for _, p := range v {
			totalLiquidity += p.RuneOrCacaoAddedUsd + p.AssetAddedUsd
		}
	}
	return totalLiquidity, nil
}

type tgtLPPositionResponse struct {
	StakeAmount float64 `json:"stakedAmount,string"`
	Reward      float64 `json:"reward,string"`
}

func (l *LiquidityPositionResolver) GetTGTStakePosition(addresses string) (float64, error) {
	if addresses == "" {
		return 0, nil
	}

	url := fmt.Sprintf("%s/stake/%s", l.thorwalletBaseURL, addresses)
	resp, err := http.Get(url)
	if err != nil {
		l.logger.Errorf("error fetching stake position from %s: %e", url, err)
		return 0, fmt.Errorf("error fetching stake position from %s: %e", url, err)
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		l.logger.Errorf("error fetching stake position from %s: %s", url, resp.Status)
		return 0, fmt.Errorf("error fetching stake position from %s: %s", url, resp.Status)
	}
	var positions tgtLPPositionResponse
	if err := json.NewDecoder(resp.Body).Decode(&positions); err != nil {
		return 0, fmt.Errorf("error decoding stake position response: %e", err)
	}
	return positions.StakeAmount*l.GetTGTPrice() + positions.Reward, nil
}

func (l *LiquidityPositionResolver) SetTGTPrice(price float64) {
	l.mu.Lock()
	defer l.mu.Unlock()
	l.tgtPrice = price
}

func (l *LiquidityPositionResolver) GetTGTPrice() float64 {
	l.mu.RLock()
	defer l.mu.RUnlock()
	return l.tgtPrice
}

func (l *LiquidityPositionResolver) GetWeWeLPPosition(address string) (float64, error) {
	return l.wewelpResolver.GetLiquidityPosition(address)
}
