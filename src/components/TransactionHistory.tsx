import React from 'react';
import { ArrowLeftRight, ArrowUpRight } from 'lucide-react';

export function TransactionHistory() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h3>
      
      <div className="space-y-4">
        {[
          {
            type: 'Swap',
            from: { amount: '100', token: 'RXD' },
            to: { amount: '84.2', token: 'USDT' },
            time: '2 mins ago',
            status: 'completed'
          },
          {
            type: 'Add Liquidity',
            from: { amount: '500', token: 'RXD' },
            to: { amount: '421', token: 'USDT' },
            time: '5 mins ago',
            status: 'completed'
          }
        ].map((tx, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-blue-100">
                {tx.type === 'Swap' ? (
                  <ArrowLeftRight className="w-4 h-4 text-blue-600" />
                ) : (
                  <ArrowUpRight className="w-4 h-4 text-blue-600" />
                )}
              </div>
              <div>
                <div className="font-medium">{tx.type}</div>
                <div className="text-sm text-gray-500">
                  {tx.from.amount} {tx.from.token} → {tx.to.amount} {tx.to.token}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{tx.time}</div>
              <div className="text-sm text-green-600">Completed</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}