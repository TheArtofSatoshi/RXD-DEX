import React from 'react';
import { LineChart, ArrowUp } from 'lucide-react';

export function PriceChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">RXD/USDT</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-bold">$0.842</span>
            <span className="flex items-center text-green-500 text-sm">
              <ArrowUp className="w-4 h-4" />
              2.4%
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 hover:bg-gray-200">1H</button>
          <button className="px-3 py-1 text-sm rounded-lg bg-blue-600 text-white">24H</button>
          <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 hover:bg-gray-200">1W</button>
          <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 hover:bg-gray-200">1M</button>
        </div>
      </div>
      <div className="h-[300px] flex items-center justify-center text-gray-400">
        <LineChart className="w-8 h-8" />
        <span className="ml-2">Chart visualization would go here</span>
      </div>
    </div>
  );
}