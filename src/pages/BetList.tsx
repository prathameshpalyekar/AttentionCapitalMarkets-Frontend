import { useEffect, useState } from 'react';
import BetCard from '../components/BetCard';
import { Bet } from '../types/bet';

const BetList = () => {
  const [bets, setBets] = useState<Bet[]>([]);
  useEffect(() => {
    const fetchTopics = async () => {
      const response = await fetch('https://qelghzqusoefhkdjiscv.supabase.co/functions/v1/fetch-topics');
      const data = await response.json();
      setBets(data.topics);
    };
    fetchTopics();
  }, []);

  return (
    <div className="container mx-auto px-4 pt-8">
      <div className="space-y-4">
        {bets.map(bet => (
          <BetCard key={bet.id} bet={bet} />
        ))}
      </div>
    </div>
  );
};

export default BetList