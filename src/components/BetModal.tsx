import React, { useState } from 'react';
import { X } from 'lucide-react';

interface BetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (amount: string) => void;
  type: 'buy' | 'sell';
  balance: number;
  title: string;
}

const BetModal: React.FC<BetModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  type,
  balance,
  title
}) => {
  const [amount, setAmount] = useState('0');

  if (!isOpen) return null;

  const handleQuickAmount = (value: string) => {
    setAmount(value);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-800 rounded-xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">
            {type === 'buy' ? 'Buy Yes' : 'Buy No'}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-400">{title}</p>
        </div>

        <div className="bg-gray-700 rounded-lg p-4 mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Amount</span>
            <span className="text-gray-400">Balance: ${balance}</span>
          </div>
          
          <div className="text-center text-3xl text-white mb-4">${amount}</div>
          
          <div className="grid grid-cols-4 gap-2 mb-4">
            <button
              onClick={() => handleQuickAmount('1')}
              className="bg-gray-600 rounded p-2 text-white hover:bg-gray-500"
            >
              +$1
            </button>
            <button
              onClick={() => handleQuickAmount('20')}
              className="bg-gray-600 rounded p-2 text-white hover:bg-gray-500"
            >
              +$20
            </button>
            <button
              onClick={() => handleQuickAmount('100')}
              className="bg-gray-600 rounded p-2 text-white hover:bg-gray-500"
            >
              +$100
            </button>
            <button
              onClick={() => handleQuickAmount(balance.toString())}
              className="bg-gray-600 rounded p-2 text-white hover:bg-gray-500"
            >
              Max
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => onConfirm(amount)}
            className={`w-full py-3 rounded-lg font-bold ${
              type === 'buy'
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
          >
            Confirm {type === 'buy' ? 'Buy' : 'Buy'}
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 rounded-lg font-bold bg-gray-700 hover:bg-gray-600 text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetModal