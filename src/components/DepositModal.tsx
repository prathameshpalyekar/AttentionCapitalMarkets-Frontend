import React, { useState } from 'react';
import { X, Copy, QrCode } from 'lucide-react';

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  balance: number;
}

const DepositModal: React.FC<DepositModalProps> = ({
  isOpen,
  onClose,
  balance
}) => {
  const [selectedToken, setSelectedToken] = useState('USDC');
  const [selectedChain, setSelectedChain] = useState('Polygon');
  const walletAddress = '0x1FFF6988A85B6ba6f795E20af0a75ec2511Cf6Ae';

  if (!isOpen) return null;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-800 rounded-xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Transfer Crypto</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="text-sm text-gray-400 mb-6">
          Polymarket Balance: ${balance}
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Token</label>
            <select
              value={selectedToken}
              onChange={(e) => setSelectedToken(e.target.value)}
              className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white border-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="USDC">USDC</option>
              <option value="USDT">USDT</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Chain</label>
            <select
              value={selectedChain}
              onChange={(e) => setSelectedChain(e.target.value)}
              className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white border-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Polygon">Polygon</option>
              <option value="Arbitrum">Arbitrum</option>
            </select>
          </div>
        </div>

        <div className="bg-gray-700 rounded-lg p-4 mb-6">
          <div className="flex justify-center mb-4">
            <QrCode className="w-32 h-32 text-white" />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm text-gray-400">Your deposit address</label>
            <div className="flex items-center bg-gray-600 rounded-lg p-2">
              <code className="flex-1 text-sm text-white font-mono overflow-hidden overflow-ellipsis">
                {walletAddress}
              </code>
              <button
                onClick={handleCopyAddress}
                className="ml-2 p-1 hover:text-blue-400 text-gray-400"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <p className="mb-2">Important:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Only send {selectedToken} on {selectedChain} network</li>
            <li>Minimum deposit: $1</li>
            <li>Funds are usually credited within 5 minutes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DepositModal;