export interface Token {
  rank: number;
  name: string;
  icon: string;
  marketCap: string;
  raisedToken: string;
  progress: string;
}

export interface InfinityToken {
  id: number;
  name: string;
  icon: string;
  price: string;
  change: string;
  trending: boolean;
}

export interface FormData {
  name: string;
  symbol: string;
  supply: string;
  description: string;
  website: string;
  twitter: string;
  telegram: string;
} 