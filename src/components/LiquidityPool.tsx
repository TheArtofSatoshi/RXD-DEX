import React from 'react';
import { Plus, Minus } from 'lucide-react';

export function LiquidityPool() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Liquidity Pools</h3>
      
      <div className="grid gap-4">
        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="font-medium">RXD/USDT</span>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-lg hover:bg-gray-100">
                <Plus className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-lg hover:bg-gray-100">
                <Minus className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-500">Pool Share</div>
              <div className="font-medium">2.5%</div>
            </div>
            <div>
              <div className="text-gray-500">Your Liquidity</div>
              <div className="font-medium">$12,450</div>
            </div>
            <div>
              <div className="text-gray-500">APR</div>
              <div className="font-medium text-green-600">24.6%</div>
            </div>
            <div>
              <div className="text-gray-500">Volume (24h)</div>
              <div className="font-medium">$1.2M</div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="font-medium">RXD/BTC</span>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-lg hover:bg-gray-100">
                <Plus className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-lg hover:bg-gray-100">
                <Minus className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-500">Pool Share</div>
              <div className="font-medium">1.8%</div>
            </div>
            <div>
              <div className="text-gray-500">Your Liquidity</div>
              <div className="font-medium">$8,320</div>
            </div>
            <div>
              <div className="text-gray-500">APR</div>
              <div className="font-medium text-green-600">18.2%</div>
            </div>
            <div>
              <div className="text-gray-500">Volume (24h)</div>
              <div className="font-medium">$845K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}