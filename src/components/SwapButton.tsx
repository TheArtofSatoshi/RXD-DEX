import React from 'react';

interface SwapButtonProps {
  fromAmount: string;
  toAmount: string;
  onClick: () => void;
}

export function SwapButton({ fromAmount, toAmount, onClick }: SwapButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={!fromAmount || !toAmount}
      className={`w-full mt-4 font-semibold py-4 px-6 rounded-xl transition-colors ${
        fromAmount && toAmount
          ? 'bg-blue-600 hover:bg-blue-700 text-white'
          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
      }`}
    >
      {!fromAmount || !toAmount ? 'Enter an amount' : 'Swap Tokens'}
    </button>
  );
}