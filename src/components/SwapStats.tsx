import React from 'react';

interface SwapStatsProps {
  slippage: number;
}

export function SwapStats({ slippage }: SwapStatsProps) {
  return (
    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>Price Impact</span>
        <span className="text-green-600">{'< 0.01%'}</span>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
        <span>Network Fee</span>
        <span>~0.001 RXD</span>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
        <span>Slippage Tolerance</span>
        <span>{slippage}%</span>
      </div>
    </div>
  );
}