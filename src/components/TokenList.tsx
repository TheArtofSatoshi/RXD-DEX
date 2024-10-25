import React from 'react';
import { TrendingUp, Star, ExternalLink } from 'lucide-react';

interface Token {
  symbol: string;
  name: string;
  price: string;
  change24h: number;
  volume24h: string;
  marketCap: string;
  favorite?: boolean;
}

export function TokenList() {
  const tokens: Token[] = [
    {
      symbol: 'RXD',
      name: 'Radiant',
      price: '0.842',
      change24h: 2.4,
      volume24h: '12.4M',
      marketCap: '84.2M',
      favorite: true
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: '52,341.20',
      change24h: -1.2,
      volume24h: '24.1B',
      marketCap: '1.02T'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: '2,841.15',
      change24h: 0.8,
      volume24h: '12.8B',
      marketCap: '342.1B'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Top Tokens</h3>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg bg-gray-100 hover:bg-gray-200">
              <TrendingUp className="w-4 h-4" />
              Trending
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg bg-gray-100 hover:bg-gray-200">
              <Star className="w-4 h-4" />
              Favorites
            </button>
          </div>
        </div>
      </div>

      {/* Token List */}
      <div className="divide-y">
        {tokens.map((token, i) => (
          <div key={i} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-blue-600">{token.symbol.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-medium">{token.symbol}</div>
                  <div className="text-sm text-gray-500">{token.name}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-right font-medium">${token.price}</div>
                  <div className={`text-sm ${token.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {token.change24h >= 0 ? '+' : ''}{token.change24h}%
                  </div>
                </div>
                
                <div className="hidden md:block">
                  <div className="text-right font-medium">${token.volume24h}</div>
                  <div className="text-sm text-gray-500">24h Volume</div>
                </div>
                
                <div className="hidden lg:block">
                  <div className="text-right font-medium">${token.marketCap}</div>
                  <div className="text-sm text-gray-500">Market Cap</div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Star className={`w-5 h-5 ${token.favorite ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}