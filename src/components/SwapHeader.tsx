import React from 'react';
import { Settings, RefreshCw } from 'lucide-react';

interface SwapHeaderProps {
  onRefresh: () => void;
  onToggleSettings: () => void;
}

export function SwapHeader({ onRefresh, onToggleSettings }: SwapHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">Swap</h2>
      <div className="flex gap-2">
        <button 
          onClick={onRefresh}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <RefreshCw className="w-5 h-5 text-gray-600" />
        </button>
        <button 
          onClick={onToggleSettings}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}