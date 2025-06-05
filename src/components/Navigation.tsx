import { Link } from 'react-router-dom';
import { Home, BarChart2, ArrowRightLeft, Briefcase } from 'lucide-react';
import { usePrivy } from '@privy-io/react-auth';


const Navigation = () => {
  const { authenticated } = usePrivy();
  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold">Attention Market</Link>
            </div>
            <div className="flex items-center space-x-4">
              {!authenticated && <Link to="/auth" className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign In</Link>}
              {authenticated && <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Out</button>}
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white z-50">
        <div className="flex justify-around py-2">
          <Link to="/" className="flex flex-col items-center">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/markets" className="flex flex-col items-center">
            <ArrowRightLeft className="w-6 h-6" />
            <span className="text-xs">Your Bets</span>
          </Link>
          <Link to="/leaderboard" className="flex flex-col items-center">
            <BarChart2 className="w-6 h-6" />
            <span className="text-xs">Leaderboard</span>
          </Link>
          <Link to="/portfolio" className="flex flex-col items-center">
            <Briefcase className="w-6 h-6" />
            <span className="text-xs">Portfolio</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation