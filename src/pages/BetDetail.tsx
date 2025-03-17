import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const mockData = [
  { time: '00:00', value: 65 },
  { time: '04:00', value: 68 },
  { time: '08:00', value: 72 },
  { time: '12:00', value: 70 },
  { time: '16:00', value: 67 },
  { time: '20:00', value: 65 },
];

const BetDetail = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState('0');
  
  const handleQuickAmount = (value: string) => {
    setAmount(value);
  };

  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="mb-6">
        <LineChart width={350} height={200} data={mockData}>
          <XAxis dataKey="time" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>

      <div className="bg-gray-800 rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Place your bet</h2>
        
        <div className="flex justify-between items-center mb-4">
          <span>Amount</span>
          <span>Balance: $49.99</span>
        </div>

        <div className="bg-gray-700 rounded-lg p-4 mb-4">
          <div className="text-center text-3xl mb-4">${amount}</div>
          
          <div className="grid grid-cols-4 gap-2 mb-4">
            <button
              onClick={() => handleQuickAmount('1')}
              className="bg-gray-600 rounded p-2"
            >
              +$1
            </button>
            <button
              onClick={() => handleQuickAmount('20')}
              className="bg-gray-600 rounded p-2"
            >
              +$20
            </button>
            <button
              onClick={() => handleQuickAmount('100')}
              className="bg-gray-600 rounded p-2"
            >
              +$100
            </button>
            <button
              onClick={() => handleQuickAmount('49.99')}
              className="bg-gray-600 rounded p-2"
            >
              Max
            </button>
          </div>

          <button className="w-full bg-blue-500 text-white rounded-lg py-3 font-bold">
            Buy Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetDetail