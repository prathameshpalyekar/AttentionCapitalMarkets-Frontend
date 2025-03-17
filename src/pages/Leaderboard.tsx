import React from 'react';
import { Trophy } from 'lucide-react';

const MOCK_LEADERS = [
  { rank: 1, name: 'trader123', profit: 50000, trades: 156 },
  { rank: 2, name: 'cryptoking', profit: 35000, trades: 98 },
  { rank: 3, name: 'betmaster', profit: 28000, trades: 234 },
  { rank: 4, name: 'predictor', profit: 21000, trades: 167 },
  { rank: 5, name: 'marketpro', profit: 18000, trades: 145 },
];

const Leaderboard = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold flex items-center">
          <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
          Leaderboard
        </h1>
        <select className="bg-gray-800 border-none rounded-lg px-4 py-2">
          <option>All Time</option>
          <option>This Month</option>
          <option>This Week</option>
        </select>
      </div>

      <div className="space-y-4">
        {MOCK_LEADERS.map((leader) => (
          <div
            key={leader.rank}
            className="bg-gray-800 rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                leader.rank === 1 ? 'bg-yellow-500' :
                leader.rank === 2 ? 'bg-gray-300' :
                leader.rank === 3 ? 'bg-orange-600' : 'bg-gray-700'
              }`}>
                {leader.rank}
              </div>
              <div>
                <div className="font-bold">{leader.name}</div>
                <div className="text-sm text-gray-400">{leader.trades} trades</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-green-400">+${leader.profit.toLocaleString()}</div>
              <div className="text-sm text-gray-400">profit</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard