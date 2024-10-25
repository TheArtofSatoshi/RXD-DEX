export interface Token {
  symbol: string;
  name: string;
  balance: string;
  price: number;
}

export const availableTokens: Token[] = [
  { symbol: 'RXD', name: 'Radiant', balance: '1000.00', price: 0.842 },
  { symbol: 'USDT', name: 'Tether', balance: '500.00', price: 1.00 },
  { symbol: 'BTC', name: 'Bitcoin', balance: '0.05', price: 52341.20 },
  { symbol: 'ETH', name: 'Ethereum', balance: '1.25', price: 2841.15 }
];