import { useEffect } from 'react';
import 'react-phone-number-input/style.css';
import { useNavigate } from 'react-router-dom';
import { usePrivy, useLogin } from '@privy-io/react-auth';
const API_URL = 'https://qelghzqusoefhkdjiscv.supabase.co/functions/v1';

const Auth = () => {
  const navigate = useNavigate();
  const { user, createWallet } = usePrivy();
  const { login } = useLogin();

  useEffect(() => {
    const handleLogin = async ({ username, name }: { username: string, name: string }) => {
      const wallet = await createWallet();
      console.log(wallet);
      await fetch(`${API_URL}/user-login`, {
        method: 'POST',
        body: JSON.stringify({ username, name }),
      });
    }

    if (user?.twitter?.username) {
      console.log(user);
      handleLogin({ username: user.twitter.username, name: user.twitter.name || '' });
      navigate('/');
    }
  }, [user, navigate]);

  const onLogin = async () => {
    login();
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
        </div>
        <div className='flex justify-center'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={onLogin}>
            Login with X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth