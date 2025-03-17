import React from 'react';
import { ArrowDownToLine, ArrowUpFromLine, Activity } from 'lucide-react';

const Portfolio = () => {
  const balance = 49.98;
  const profitLoss = 0.00;

  return (
    <div className="bg-gray-900 min-h-screen text-white pt-16 pb-20">
      <div className="p-4">
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Activity className="w-6 h-6 text-purple-500 mr-2" />
              <span className="text-lg font-bold">PORTFOLIO</span>
            </div>
            <div className="bg-gray-700 px-3 py-1 rounded">
              ${balance}
            </div>
          </div>
          
          <div className="text-3xl font-bold mb-1">${balance}</div>
          <div className="text-gray-400 mb-4">Today</div>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-500 text-white py-3 rounded-lg flex items-center justify-center">
              <ArrowDownToLine className="w-5 h-5 mr-2" />
              Deposit
            </button>
            <button className="bg-gray-700 text-white py-3 rounded-lg flex items-center justify-center">
              <ArrowUpFromLine className="w-5 h-5 mr-2" />
              Withdraw
            </button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold">PROFIT/LOSS (ALL-TIME)</span>
            <span className="text-xl font-bold">${profitLoss}</span>
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <button className="text-white border-b-2 border-white pb-2">Positions</button>
          <button className="text-gray-400">Open orders</button>
          <button className="text-gray-400">History</button>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-700 rounded-lg px-4 py-2 mb-4"
          />
          
          <div className="flex space-x-4 mb-4">
            <button className="bg-gray-700 px-4 py-2 rounded-lg flex items-center">
              Current Value
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <button className="bg-gray-700 px-4 py-2 rounded-lg">
              All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio