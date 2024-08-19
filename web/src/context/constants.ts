import { BalanceAPI, Coin } from "context/interfaces";

export enum ErrorKey {
  ALREADY_REGISTERED,
  INVALID_EXTENSION,
  INVALID_QRCODE,
  INVALID_VAULT,
  INVALID_FILE,
}

export enum Chain {
  ARBITRUM = "Arbitrum",
  AVALANCHE = "Avalanche",
  BASE = "Base",
  BITCOIN = "Bitcoin",
  BITCOINCASH = "BitcoinCash",
  BLAST = "Blast",
  BSCCHAIN = "BSC",
  CRONOSCHAIN = "CronosChain",
  DASH = "Dash",
  DOGECOIN = "Dogecoin",
  DYDX = "Dydx",
  ETHEREUM = "Ethereum",
  GAIACHAIN = "Cosmos",
  KUJIRA = "Kujira",
  LITECOIN = "Litecoin",
  MAYACHAIN = "MayaChain",
  OPTIMISM = "Optimism",
  POLKADOT = "Polkadot",
  POLYGON = "Polygon",
  SOLANA = "Solana",
  SUI = "Sui",
  THORCHAIN = "THORChain",
  ZKSYNC = "Zksync",
}

export const balanceAPIs: BalanceAPI = {
  [Chain.ARBITRUM]: "https://arbitrum-one-rpc.publicnode.com",
  [Chain.AVALANCHE]: "https://avalanche-c-chain-rpc.publicnode.com",
  [Chain.BASE]: "https://base-rpc.publicnode.com",
  [Chain.BITCOIN]:
    "https://api.vultisig.com/blockchair/bitcoin/dashboards/address", //$address?state=latest
  [Chain.BITCOINCASH]:
    "https://api.vultisig.com/blockchair/bitcoin-cash/dashboards/address", //$address?state=latest
  [Chain.BLAST]: "https://rpc.ankr.com/blast",
  [Chain.BSCCHAIN]: "https://bsc-rpc.publicnode.com",
  [Chain.CRONOSCHAIN]: "https://cronos-evm-rpc.publicnode.com",
  [Chain.DASH]: "https://api.vultisig.com/blockchair/dash/dashboards/address", //$address?state=latest
  [Chain.DOGECOIN]:
    "https://api.vultisig.com/blockchair/dogecoin/dashboards/address", //$address?state=latest
  [Chain.DYDX]: "https://dydx-rest.publicnode.com/cosmos/bank/v1beta1/balances", //$address
  [Chain.ETHEREUM]: "https://ethereum-rpc.publicnode.com",
  [Chain.GAIACHAIN]:
    "https://cosmos-rest.publicnode.com/cosmos/bank/v1beta1/balances", //$address
  [Chain.KUJIRA]:
    "https://kujira-rest.publicnode.com/cosmos/bank/v1beta1/balances", //$address
  [Chain.LITECOIN]:
    "https://api.vultisig.com/blockchair/litecoin/dashboards/address", //$address?state=latest
  [Chain.MAYACHAIN]:
    "https://mayanode.mayachain.info/cosmos/bank/v1beta1/balances", //$address
  [Chain.OPTIMISM]: "https://optimism-rpc.publicnode.com",
  [Chain.POLKADOT]: "https://polkadot.api.subscan.io/api/v2/scan/search",
  [Chain.POLYGON]: "https://polygon-bor-rpc.publicnode.com",
  [Chain.SOLANA]: "https://api.mainnet-beta.solana.com",
  [Chain.SUI]: "",
  [Chain.THORCHAIN]:
    "https://thornode.ninerealms.com/cosmos/bank/v1beta1/balances", //$address
  [Chain.ZKSYNC]: "",
};

export const coins: Coin.MetaData[] = [
  {
    chain: Chain.ARBITRUM,
    contractAddress: "",
    decimals: 18,
    isNative: true,
    providerId: "ethereum",
    ticker: "ETH",
  },
  {
    chain: Chain.AVALANCHE,
    contractAddress: "",
    decimals: 18,
    isNative: true,
    providerId: "avalanche-2",
    ticker: "AVAX",
  },
  {
    chain: Chain.BASE,
    contractAddress: "",
    decimals: 18,
    isNative: true,
    providerId: "ethereum",
    ticker: "ETH",
  },
  {
    chain: Chain.BITCOIN,
    contractAddress: "",
    decimals: 8,
    isNative: true,
    providerId: "bitcoin",
    ticker: "BTC",
  },
  {
    chain: Chain.BITCOINCASH,
    contractAddress: "",
    decimals: 8,
    isNative: true,
    providerId: "bitcoin-cash",
    ticker: "BCH",
  },
  {
    chain: Chain.BLAST,
    contractAddress: "",
    decimals: 18,
    isNative: true,
    providerId: "ethereum",
    ticker: "ETH",
  },
  {
    chain: Chain.BSCCHAIN,
    contractAddress: "",
    decimals: 18,
    isNative: true,
    providerId: "binancecoin",
    ticker: "BNB",
  },
  {
    chain: Chain.CRONOSCHAIN,
    contractAddress: "",
    decimals: 18,
    isNative: true,
    providerId: "crypto-com-chain",
    ticker: "CRO",
  },
  {
    chain: Chain.DOGECOIN,
    contractAddress: "",
    decimals: 8,
    isNative: true,
    providerId: "dogecoin",
    ticker: "DOGE",
  },
  {
    chain: Chain.DYDX,
    contractAddress: "",
    decimals: 18,
    isNative: true,
    providerId: "dydx-chain",
    ticker: "DYDX",
  },
  {
    chain: Chain.DASH,
    contractAddress: "",
    decimals: 8,
    isNative: true,
    providerId: "dash",
    ticker: "DASH",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "",
    decimals: 18,
    isNative: true,
    providerId: "ethereum",
    ticker: "ETH",
  },
  {
    chain: Chain.GAIACHAIN,
    contractAddress: "",
    decimals: 6,
    isNative: true,
    providerId: "cosmos",
    ticker: "ATOM",
  },
  {
    chain: Chain.KUJIRA,
    contractAddress: "",
    decimals: 6,
    isNative: true,
    providerId: "kujira",
    ticker: "KUJI",
  },
  {
    chain: Chain.LITECOIN,
    contractAddress: "",
    decimals: 8,
    isNative: true,
    providerId: "litecoin",
    ticker: "LTC",
  },
  {
    chain: Chain.MAYACHAIN,
    contractAddress: "",
    decimals: 10,
    isNative: true,
    providerId: "cacao",
    ticker: "CACAO",
  },
  {
    chain: Chain.OPTIMISM,
    contractAddress: "",
    decimals: 18,
    isNative: true,
    providerId: "ethereum",
    ticker: "ETH",
  },
  {
    chain: Chain.POLKADOT,
    contractAddress: "",
    decimals: 10,
    isNative: true,
    providerId: "polkadot",
    ticker: "DOT",
  },
  {
    chain: Chain.POLYGON,
    contractAddress: "",
    decimals: 18,
    isNative: true,
    providerId: "matic-network",
    ticker: "MATIC",
  },
  {
    chain: Chain.SOLANA,
    contractAddress: "",
    decimals: 9,
    isNative: true,
    providerId: "solana",
    ticker: "SOL",
  },
  {
    chain: Chain.THORCHAIN,
    contractAddress: "",
    decimals: 8,
    isNative: true,
    providerId: "thorchain",
    ticker: "RUNE",
  },

  {
    chain: Chain.ARBITRUM,
    contractAddress: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    decimals: 18,
    isNative: false,
    providerId: "arbitrum",
    ticker: "ARB",
  },
  {
    chain: Chain.ARBITRUM,
    contractAddress: "0x429fEd88f10285E61b12BDF00848315fbDfCC341",
    decimals: 18,
    isNative: false,
    providerId: "thorwallet",
    ticker: "TGT",
  },
  {
    chain: Chain.ARBITRUM,
    contractAddress: "0xf929de51D91C77E42f5090069E0AD7A09e513c73",
    decimals: 18,
    isNative: false,
    providerId: "shapeshift-fox-token",
    ticker: "FOX",
  },
  {
    chain: Chain.ARBITRUM,
    contractAddress: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    decimals: 6,
    isNative: false,
    providerId: "USDT",
    ticker: "USDT",
  },
  {
    chain: Chain.ARBITRUM,
    contractAddress: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    decimals: 6,
    isNative: false,
    providerId: "USDC.e",
    ticker: "USDC.e",
  },
  {
    chain: Chain.ARBITRUM,
    contractAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    decimals: 6,
    isNative: false,
    providerId: "USDC",
    ticker: "USDC",
  },
  {
    chain: Chain.ARBITRUM,
    contractAddress: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
    decimals: 8,
    isNative: false,
    providerId: "WBTC",
    ticker: "WBTC",
  },
  {
    chain: Chain.ARBITRUM,
    contractAddress: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
    decimals: 18,
    isNative: false,
    providerId: "LINK",
    ticker: "LINK",
  },
  {
    chain: Chain.ARBITRUM,
    contractAddress: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    decimals: 18,
    isNative: false,
    providerId: "DAI",
    ticker: "DAI",
  },
  {
    chain: Chain.ARBITRUM,
    contractAddress: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
    decimals: 18,
    isNative: false,
    providerId: "UNI",
    ticker: "UNI",
  },
  {
    chain: Chain.ARBITRUM,
    contractAddress: "0x25d887Ce7a35172C62FeBFD67a1856F20FaEbB00",
    decimals: 18,
    isNative: false,
    providerId: "PEPE",
    ticker: "PEPE",
  },
  {
    chain: Chain.ARBITRUM,
    contractAddress: "0x9623063377AD1B27544C965cCd7342f7EA7e88C7",
    decimals: 18,
    isNative: false,
    providerId: "GRT",
    ticker: "GRT",
  },
  {
    chain: Chain.ARBITRUM,
    contractAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
    decimals: 18,
    isNative: false,
    providerId: "ezETH",
    ticker: "ezETH",
  },
  {
    chain: Chain.ARBITRUM,
    contractAddress: "0xE4D5c6aE46ADFAF04313081e8C0052A30b6Dd724",
    decimals: 6,
    isNative: false,
    providerId: "PYTH",
    ticker: "PYTH",
  },
  {
    chain: Chain.ARBITRUM,
    contractAddress: "0x13Ad51ed4F1B7e9Dc168d8a00cB3f4dDD85EfA60",
    decimals: 18,
    isNative: false,
    providerId: "LDO",
    ticker: "LDO",
  },
  {
    chain: Chain.AVALANCHE,
    contractAddress: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",
    decimals: 6,
    isNative: false,
    providerId: "usd-coin",
    ticker: "USDC",
  },
  {
    chain: Chain.AVALANCHE,
    contractAddress: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    decimals: 6,
    isNative: false,
    providerId: "",
    ticker: "USDT",
  },
  {
    chain: Chain.AVALANCHE,
    contractAddress: "0x152b9d0FdC40C096757F570A51E494bd4b943E50",
    decimals: 8,
    isNative: false,
    providerId: "",
    ticker: "BTC.b",
  },
  {
    chain: Chain.AVALANCHE,
    contractAddress: "0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "sAVAX",
  },
  {
    chain: Chain.AVALANCHE,
    contractAddress: "0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "JOE",
  },
  {
    chain: Chain.AVALANCHE,
    contractAddress: "0x60781C2586D68229fde47564546784ab3fACA982",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "PNG",
  },
  {
    chain: Chain.AVALANCHE,
    contractAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "WAVAX",
  },
  {
    chain: Chain.AVALANCHE,
    contractAddress: "0x625E7708f30cA75bfd92586e17077590C60eb4cD",
    decimals: 6,
    isNative: false,
    providerId: "",
    ticker: "aAvaUSDC",
  },
  {
    chain: Chain.AVALANCHE,
    contractAddress: "0x46B9144771Cb3195D66e4EDA643a7493fADCAF9D",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "BLS",
  },
  {
    chain: Chain.AVALANCHE,
    contractAddress: "0x420FcA0121DC28039145009570975747295f2329",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "COQ",
  },
  {
    chain: Chain.BASE,
    contractAddress: "0x6b9bb36519538e0C073894E964E90172E1c0B41F",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "WEWE",
  },
  {
    chain: Chain.BASE,
    contractAddress: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    decimals: 6,
    isNative: false,
    providerId: "usd-coin",
    ticker: "USDC",
  },
  {
    chain: Chain.BASE,
    contractAddress: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    decimals: 18,
    isNative: false,
    providerId: "dai",
    ticker: "DAI",
  },
  {
    chain: Chain.BASE,
    contractAddress: "0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c",
    decimals: 18,
    isNative: false,
    providerId: "reth",
    ticker: "rETH",
  },
  {
    chain: Chain.BASE,
    contractAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
    decimals: 18,
    isNative: false,
    providerId: "ezETH",
    ticker: "ezETH",
  },
  {
    chain: Chain.BASE,
    contractAddress: "0x4c5d8A75F3762c1561D96f177694f67378705E98",
    decimals: 18,
    isNative: false,
    providerId: "pyth",
    ticker: "PYTH",
  },
  {
    chain: Chain.BASE,
    contractAddress: "0x3992B27dA26848C2b19CeA6Fd25ad5568B68AB98",
    decimals: 18,
    isNative: false,
    providerId: "om",
    ticker: "OM",
  },
  {
    chain: Chain.BASE,
    contractAddress: "0xB0fFa8000886e57F86dd5264b9582b2Ad87b2b91",
    decimals: 18,
    isNative: false,
    providerId: "w",
    ticker: "W",
  },
  {
    chain: Chain.BASE,
    contractAddress: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
    decimals: 18,
    isNative: false,
    providerId: "cbETH",
    ticker: "cbETH",
  },
  {
    chain: Chain.BASE,
    contractAddress: "0x22e6966B799c4D5B13BE962E1D117b56327FDa66",
    decimals: 18,
    isNative: false,
    providerId: "SNX",
    ticker: "SNX",
  },
  {
    chain: Chain.BASE,
    contractAddress: "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
    decimals: 18,
    isNative: false,
    providerId: "AERO",
    ticker: "AERO",
  },
  {
    chain: Chain.BLAST,
    contractAddress: "0x4300000000000000000000000000000000000004",
    decimals: 18,
    isNative: false,
    providerId: "ethereum",
    ticker: "WETH",
  },
  {
    chain: Chain.BLAST,
    contractAddress: "0xF7bc58b8D8f97ADC129cfC4c9f45Ce3C0E1D2692",
    decimals: 8,
    isNative: false,
    providerId: "",
    ticker: "WBTC",
  },
  {
    chain: Chain.BLAST,
    contractAddress: "0x4300000000000000000000000000000000000003",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "USDB",
  },
  {
    chain: Chain.BLAST,
    contractAddress: "0xb1a5700fA2358173Fe465e6eA4Ff52E36e88E2ad",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "BLAST",
  },
  {
    chain: Chain.BLAST,
    contractAddress: "0x76DA31D7C9CbEAE102aff34D3398bC450c8374c1",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "MIM",
  },
  {
    chain: Chain.BLAST,
    contractAddress: "0x406F10d635be12ad33D6B133C6DA89180f5B999e",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "bLOOKS",
  },
  {
    chain: Chain.BLAST,
    contractAddress: "0xb9dfCd4CF589bB8090569cb52FaC1b88Dbe4981F",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "BAG",
  },
  {
    chain: Chain.BLAST,
    contractAddress: "0x357f93E17FdabEcd3fEFc488a2d27dff8065d00f",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "ZERO",
  },
  {
    chain: Chain.BLAST,
    contractAddress: "0x764933fbAd8f5D04Ccd088602096655c2ED9879F",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "AI",
  },
  {
    chain: Chain.BLAST,
    contractAddress: "0x818a92bc81Aad0053d72ba753fb5Bc3d0C5C0923",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "JUICE",
  },
  {
    chain: Chain.BLAST,
    contractAddress: "0x9e20461bc2c4c980f62f1B279D71734207a6A356",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "OMNI",
  },
  {
    chain: Chain.BLAST,
    contractAddress: "0x47C337Bd5b9344a6F3D6f58C474D9D8cd419D8cA",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "DACKIE",
  },
  {
    chain: Chain.BSCCHAIN,
    contractAddress: "0x55d398326f99059fF775485246999027B3197955",
    decimals: 18,
    isNative: false,
    providerId: "tether",
    ticker: "USDT",
  },
  {
    chain: Chain.BSCCHAIN,
    contractAddress: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    decimals: 18,
    isNative: false,
    providerId: "usd-coin",
    ticker: "USDC",
  },
  {
    chain: Chain.BSCCHAIN,
    contractAddress: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "DAI",
  },
  {
    chain: Chain.BSCCHAIN,
    contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "WETH",
  },
  {
    chain: Chain.BSCCHAIN,
    contractAddress: "0xfb6115445bff7b52feb98650c87f44907e58f802",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "AAVE",
  },
  {
    chain: Chain.BSCCHAIN,
    contractAddress: "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "COMP",
  },
  {
    chain: Chain.BSCCHAIN,
    contractAddress: "0x947950bcc74888a40ffa2593c5798f11fc9124c4",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "SUSHI",
  },
  {
    chain: Chain.BSCCHAIN,
    contractAddress: "0xfe56d5892bdffc7bf58f2e84be1b2c32d21c308b",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "KNC",
  },
  {
    chain: Chain.BSCCHAIN,
    contractAddress: "0x25d887ce7a35172c62febfd67a1856f20faebb00",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "PEPE",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    decimals: 6,
    isNative: false,
    providerId: "usd-coin",
    ticker: "USDC",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    decimals: 6,
    isNative: false,
    providerId: "tether",
    ticker: "USDT",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    decimals: 6,
    isNative: false,
    providerId: "uniswap",
    ticker: "UNI",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    decimals: 6,
    isNative: false,
    providerId: "matic-network",
    ticker: "MATIC",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    decimals: 6,
    isNative: false,
    providerId: "wrapped-bitcoin",
    ticker: "WBTC",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0x514910771af9ca656af840dff83e8264ecf986ca",
    decimals: 6,
    isNative: false,
    providerId: "chainlink",
    ticker: "LINK",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0x826180541412d574cf1336d22c0c0a287822678a",
    decimals: 6,
    isNative: false,
    providerId: "chainflip",
    ticker: "FLIP",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0x108a850856Db3f85d0269a2693D896B394C80325",
    decimals: 18,
    isNative: false,
    providerId: "thorwallet",
    ticker: "TGT",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0xc770eefad204b5180df6a14ee197d99d808ee52d",
    decimals: 18,
    isNative: false,
    providerId: "shapeshift-fox-token",
    ticker: "FOX",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    decimals: 18,
    isNative: false,
    providerId: "dai",
    ticker: "DAI",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    decimals: 18,
    isNative: false,
    providerId: "weth",
    ticker: "WETH",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
    decimals: 18,
    isNative: false,
    providerId: "yearn-finance",
    ticker: "YFI",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
    decimals: 18,
    isNative: false,
    providerId: "aave",
    ticker: "AAVE",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0xc00e94cb662c3520282e6f5717214004a7f26888",
    decimals: 18,
    isNative: false,
    providerId: "compound-governance-token",
    ticker: "COMP",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    decimals: 18,
    isNative: false,
    providerId: "basic-attention-token",
    ticker: "BAT",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    decimals: 18,
    isNative: false,
    providerId: "havven",
    ticker: "SNX",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0xba100000625a3754423978a60c9317c58a424e3d",
    decimals: 18,
    isNative: false,
    providerId: "balancer",
    ticker: "BAL",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    decimals: 18,
    isNative: false,
    providerId: "sushi",
    ticker: "SUSHI",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    decimals: 18,
    isNative: false,
    providerId: "maker",
    ticker: "MKR",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202",
    decimals: 18,
    isNative: false,
    providerId: "kyber-network-crystal",
    ticker: "KNC",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
    decimals: 18,
    isNative: false,
    providerId: "the-graph",
    ticker: "GRT",
  },
  {
    chain: Chain.ETHEREUM,
    contractAddress: "0x6982508145454ce325ddbe47a25d4ec3d2311933",
    decimals: 18,
    isNative: false,
    providerId: "pepe",
    ticker: "PEPE",
  },
  {
    chain: Chain.MAYACHAIN,
    contractAddress: "",
    decimals: 4,
    isNative: false,
    providerId: "maya",
    ticker: "MAYA",
  },
  {
    chain: Chain.OPTIMISM,
    contractAddress: "0x4200000000000000000000000000000000000042",
    decimals: 18,
    isNative: false,
    providerId: "optimism",
    ticker: "OP",
  },
  {
    chain: Chain.OPTIMISM,
    contractAddress: "0xf1a0da3367bc7aa04f8d94ba57b862ff37ced174",
    decimals: 18,
    isNative: false,
    providerId: "shapeshift-fox-token",
    ticker: "FOX",
  },
  {
    chain: Chain.OPTIMISM,
    contractAddress: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    decimals: 6,
    isNative: false,
    providerId: "",
    ticker: "USDT",
  },
  {
    chain: Chain.OPTIMISM,
    contractAddress: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
    decimals: 6,
    isNative: false,
    providerId: "",
    ticker: "USDC",
  },
  {
    chain: Chain.OPTIMISM,
    contractAddress: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
    decimals: 6,
    isNative: false,
    providerId: "",
    ticker: "USDC.e",
  },
  {
    chain: Chain.OPTIMISM,
    contractAddress: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
    decimals: 8,
    isNative: false,
    providerId: "",
    ticker: "WBTC",
  },
  {
    chain: Chain.OPTIMISM,
    contractAddress: "0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "LINK",
  },
  {
    chain: Chain.OPTIMISM,
    contractAddress: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "DAI",
  },
  {
    chain: Chain.OPTIMISM,
    contractAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "ezETH",
  },
  {
    chain: Chain.OPTIMISM,
    contractAddress: "0x99C59ACeBFEF3BBFB7129DC90D1a11DB0E91187f",
    decimals: 6,
    isNative: false,
    providerId: "",
    ticker: "PYTH",
  },
  {
    chain: Chain.OPTIMISM,
    contractAddress: "0xFdb794692724153d1488CcdBE0C56c252596735F",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "LDO",
  },
  {
    chain: Chain.POLYGON,
    contractAddress: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    decimals: 18,
    isNative: false,
    providerId: "ethereum",
    ticker: "WETH",
  },
  {
    chain: Chain.POLYGON,
    contractAddress: "0x65a05db8322701724c197af82c9cae41195b0aa8",
    decimals: 18,
    isNative: false,
    providerId: "shapeshift-fox-token",
    ticker: "FOX",
  },
  {
    chain: Chain.POLYGON,
    contractAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    decimals: 6,
    isNative: false,
    providerId: "",
    ticker: "USDT",
  },
  {
    chain: Chain.POLYGON,
    contractAddress: "0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "BNB",
  },
  {
    chain: Chain.POLYGON,
    contractAddress: "0xd93f7E271cB87c23AaA73edC008A79646d1F9912",
    decimals: 9,
    isNative: false,
    providerId: "",
    ticker: "SOL",
  },
  {
    chain: Chain.POLYGON,
    contractAddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
    decimals: 6,
    isNative: false,
    providerId: "",
    ticker: "USDC",
  },
  {
    chain: Chain.POLYGON,
    contractAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    decimals: 6,
    isNative: false,
    providerId: "",
    ticker: "USDC.e",
  },
  {
    chain: Chain.POLYGON,
    contractAddress: "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "BUSD",
  },
  {
    chain: Chain.POLYGON,
    contractAddress: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
    decimals: 8,
    isNative: false,
    providerId: "",
    ticker: "WBTC",
  },
  {
    chain: Chain.POLYGON,
    contractAddress: "0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "AVAX",
  },
  {
    chain: Chain.POLYGON,
    contractAddress: "0x6f8a06447Ff6FcF75d803135a7de15CE88C1d4ec",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "SHIB",
  },
  {
    chain: Chain.POLYGON,
    contractAddress: "0xb0897686c545045aFc77CF20eC7A532E3120E0F1",
    decimals: 18,
    isNative: false,
    providerId: "",
    ticker: "LINK",
  },
];
