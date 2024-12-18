import { InfinityToken, Token } from '../types';

export const infinityTokens: InfinityToken[] = [
  {
    id: 1,
    name: "Super Token",
    icon: "⭐",
    price: "$0.0234",
    change: "+12.34%",
    trending: true
  },
  {
    id: 2,
    name: "Mega Coin",
    icon: "🌟",
    price: "$0.0567",
    change: "+5.67%",
    trending: true
  },
  {
    id: 3,
    name: "Ultra Token",
    icon: "💫",
    price: "$0.0789",
    change: "+8.90%",
    trending: false
  },
  {
    id: 4,
    name: "Hyper Token",
    icon: "🚀",
    price: "$0.1234",
    change: "+15.67%",
    trending: true
  },
  {
    id: 5,
    name: "Power Coin",
    icon: "⚡",
    price: "$0.0345",
    change: "+7.89%",
    trending: false
  }
];

export const tokens: Token[] = [
  {
    rank: 1,
    name: "Bitcoin",
    icon: "₿",
    marketCap: "$42,000,000,000",
    raisedToken: "BTC",
    progress: "85"
  },
  {
    rank: 2,
    name: "Ethereum",
    icon: "Ξ",
    marketCap: "$20,000,000,000",
    raisedToken: "ETH",
    progress: "75"
  },
  {
    rank: 3,
    name: "Binance",
    icon: "BNB",
    marketCap: "$15,000,000,000",
    raisedToken: "BNB",
    progress: "70"
  },
  {
    rank: 4,
    name: "Solana",
    icon: "◎",
    marketCap: "$8,000,000,000",
    raisedToken: "SOL",
    progress: "65"
  },
  {
    rank: 5,
    name: "Cardano",
    icon: "₳",
    marketCap: "$5,000,000,000",
    raisedToken: "ADA",
    progress: "60"
  },
  {
    rank: 6,
    name: "Polkadot",
    icon: "●",
    marketCap: "$4,000,000,000",
    raisedToken: "DOT",
    progress: "55"
  },
  {
    rank: 7,
    name: "Avalanche",
    icon: "AVAX",
    marketCap: "$3,500,000,000",
    raisedToken: "AVAX",
    progress: "50"
  },
  {
    rank: 8,
    name: "Polygon",
    icon: "MATIC",
    marketCap: "$3,000,000,000",
    raisedToken: "MATIC",
    progress: "45"
  }
]; 