import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Auth from './components/Auth';
import Portfolio from './components/Portfolio';
import BetList from './pages/BetList';
import BetDetail from './pages/BetDetail';
import Leaderboard from './pages/Leaderboard';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <AuthProvider>
          <Navigation />
          <div className="pt-16 pb-20">
            <Routes>
              <Route path="/" element={<BetList />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/bet/:id" element={<BetDetail />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </div>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
