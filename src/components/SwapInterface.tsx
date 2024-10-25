import React, { useState } from 'react';
import { ArrowDownUp } from 'lucide-react';
import { Token, availableTokens } from '../types/token';
import { TokenModal } from './TokenModal';
import { SwapHeader } from './SwapHeader';
import { SwapSettings } from './SwapSettings';
import { TokenInput } from './TokenInput';
import { SwapStats } from './SwapStats';
import { SwapButton } from './SwapButton';

export function SwapInterface() {
  const [fromToken, setFromToken] = useState<Token>(availableTokens[0]);
  const [toToken, setToToken] = useState<Token>(availableTokens[1]);
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [showTokenList, setShowTokenList] = useState<'from' | 'to' | null>(null);
  const [slippage, setSlippage] = useState(0.5);
  const [showSettings, setShowSettings] = useState(false);

  const calculateToAmount = (amount: string) => {
    if (!amount) return '';
    const fromValue = parseFloat(amount);
    const rate = fromToken.price / toToken.price;
    return (fromValue * rate).toFixed(6);
  };

  const calculateFromAmount = (amount: string) => {
    if (!amount) return '';
    const toValue = parseFloat(amount);
    const rate = toToken.price / fromToken.price;
    return (toValue * rate).toFixed(6);
  };

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    setToAmount(calculateToAmount(value));
  };

  const handleToAmountChange = (value: string) => {
    setToAmount(value);
    setFromAmount(calculateFromAmount(value));
  };

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleTokenSelect = (token: Token) => {
    if (showTokenList === 'from') {
      if (token.symbol === toToken.symbol) {
        setToToken(fromToken);
      }
      setFromToken(token);
    } else {
      if (token.symbol === fromToken.symbol) {
        setFromToken(toToken);
      }
      setToToken(token);
    }
    setShowTokenList(null);
    if (fromAmount) {
      handleFromAmountChange(fromAmount);
    }
  };

  const handleSwap = () => {
    if (!fromAmount || !toAmount) return;
    alert(`Swapping ${fromAmount} ${fromToken.symbol} for ${toAmount} ${toToken.symbol}`);
    setFromAmount('');
    setToAmount('');
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
      <SwapHeader
        onRefresh={() => handleFromAmountChange(fromAmount)}
        onToggleSettings={() => setShowSettings(!showSettings)}
      />

      {showSettings && (
        <SwapSettings
          slippage={slippage}
          onSlippageChange={setSlippage}
        />
      )}

      <TokenInput
        label="From"
        token={fromToken}
        amount={fromAmount}
        onAmountChange={handleFromAmountChange}
        onTokenSelect={() => setShowTokenList('from')}
      />

      <div className="flex justify-center -my-3 z-10 relative">
        <button 
          onClick={handleSwapTokens}
          className="bg-white border-4 border-gray-100 rounded-xl p-2 hover:bg-gray-50 transition-colors"
        >
          <ArrowDownUp className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <TokenInput
        label="To"
        token={toToken}
        amount={toAmount}
        onAmountChange={handleToAmountChange}
        onTokenSelect={() => setShowTokenList('to')}
      />

      {showTokenList && (
        <TokenModal
          tokens={availableTokens}
          onSelect={handleTokenSelect}
          onClose={() => setShowTokenList(null)}
        />
      )}

      <SwapStats slippage={slippage} />
      
      <SwapButton
        fromAmount={fromAmount}
        toAmount={toAmount}
        onClick={handleSwap}
      />
    </div>
  );
}