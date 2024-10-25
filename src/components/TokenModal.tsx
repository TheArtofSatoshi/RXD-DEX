import React from 'react';
import { Token } from '../types/token';

interface TokenModalProps {
  tokens: Token[];
  onSelect: (token: Token) => void;
  onClose: () => void;
}

export function TokenModal({ tokens, onSelect, onClose }: TokenModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Select Token</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="space-y-2">
          {tokens.map((token) => (
            <button
              key={token.symbol}
              onClick={() => onSelect(token)}
              className="w-full p-3 hover:bg-gray-50 rounded-lg flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-blue-600">{token.symbol.charAt(0)}</span>
                </div>
                <div className="text-left">
                  <div className="font-medium">{token.symbol}</div>
                  <div className="text-sm text-gray-500">{token.name}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">${token.price.toFixed(2)}</div>
                <div className="text-sm text-gray-500">Balance: {token.balance}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}