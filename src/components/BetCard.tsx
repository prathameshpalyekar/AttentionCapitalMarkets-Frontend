import React from 'react';
import { Link } from 'react-router-dom';
import { Bet } from '../types/bet';
import BetModal from './BetModal';
interface BetCardProps {
  bet: Bet;
}

const BetCard: React.FC<BetCardProps> = ({ bet }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [betType, setBetType] = React.useState<'buy' | 'sell'>('buy');

  const handleBetClick = (e: React.MouseEvent, type: 'buy' | 'sell') => {
    e.preventDefault();
    setBetType(type);
    setModalOpen(true);
  };

  const handleConfirmBet = (amount: string) => {
    console.log(`Confirming ${betType} bet of $${amount} for ${bet.topic}`);
    setModalOpen(false);
  };

  return (
    <>
      <Link to={`/bet/${bet.id}`} className="block">
        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-start space-x-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">{bet.topic}</h3>
              <div className="text-gray-400 text-sm mt-4">
                {bet.description}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <button className="bg-green-600/20 text-green-400 py-2 rounded text-center" onClick={(e) => handleBetClick(e, 'buy')}>
                  Buy Yes ↑
                </button>
                <button className="bg-red-600/20 text-red-400 py-2 rounded text-center" onClick={(e) => handleBetClick(e, 'sell')}>
                  Buy No ↓
                </button>
              </div>

              {/* <div className="mt-4 flex items-center justify-between text-gray-400">
                <span>${bet.volume} Vol.</span>
                <div className="flex space-x-2">
                  <Gift className="w-5 h-5" />
                  <Bookmark className="w-5 h-5" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Link>
      <BetModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmBet}
        type={betType}
        balance={49.99}
        title={bet.topic}
      />
    </>
  );
};

export default BetCard;