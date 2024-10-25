import React from 'react';
import { Activity } from 'lucide-react';
import { SwapInterface } from './components/SwapInterface';
import { TokenList } from './components/TokenList';
import { PriceChart } from './components/PriceChart';
import { LiquidityPool } from './components/LiquidityPool';
import { TransactionHistory } from './components/TransactionHistory';

export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Activity className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Radiant DEX</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-sm text-gray-500">24h Volume</div>
              <div className="text-xl font-semibold">$12.4M</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-sm text-gray-500">Total Value Locked</div>
              <div className="text-xl font-semibold">$45.2M</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-sm text-gray-500">RXD Price</div>
              <div className="text-xl font-semibold">$0.842</div>
            </div>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Swap Interface */}
            <div>
              <SwapInterface />
            </div>

            {/* Middle Column - Price Chart & Transaction History */}
            <div className="lg:col-span-2 space-y-6">
              <PriceChart />
              <TokenList />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <LiquidityPool />
                <TransactionHistory />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;