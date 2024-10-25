import React from 'react';
import { Token } from '../types/token';

interface TokenInputProps {
  label: string;
  token: Token;
  amount: string;
  onAmountChange: (value: string) => void;
  onTokenSelect: () => void;
}

export function TokenInput({ label, token, amount, onAmountChange, onTokenSelect }: TokenInputProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-xl">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-500">{label}</span>
        <span className="text-sm text-gray-500">Balance: {token.balance}</span>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          placeholder="0.00"
          className="w-full text-2xl bg-transparent outline-none"
        />
        <button 
          onClick={onTokenSelect}
          className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 transition-colors rounded-xl px-4 py-2"
        >
          <span className="font-semibold">{token.symbol}</span>
        </button>
      </div>
    </div>
  );
}