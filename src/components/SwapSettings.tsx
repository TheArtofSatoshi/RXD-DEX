import React from 'react';

interface SwapSettingsProps {
  slippage: number;
  onSlippageChange: (value: number) => void;
}

export function SwapSettings({ slippage, onSlippageChange }: SwapSettingsProps) {
  return (
    <div className="mb-4 p-4 bg-gray-50 rounded-xl">
      <h3 className="font-medium mb-2">Slippage Tolerance</h3>
      <div className="flex gap-2">
        {[0.1, 0.5, 1.0].map((value) => (
          <button
            key={value}
            onClick={() => onSlippageChange(value)}
            className={`px-3 py-1 rounded-lg ${
              slippage === value ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {value}%
          </button>
        ))}
      </div>
    </div>
  );
}