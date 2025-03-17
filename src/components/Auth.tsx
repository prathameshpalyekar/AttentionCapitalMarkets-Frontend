import { useState, useEffect } from 'react';
import 'react-phone-number-input/style.css';
import { useAuthActions } from '../context/authContext';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
// const API_URL = 'https://qelghzqusoefhkdjiscv.supabase.co/functions/v1';
const API_URL = 'http://localhost:54321/functions/v1';

const Auth = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const { onLogin } = useAuthActions();
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleSendOtp = () => {
    // Here you would integrate with your OTP service
    setStep('otp');
  };

  const handleVerifyOtp = async () => {
    // Here you would verify the OTP
    console.log('Verifying OTP:', otp, name, phoneNumber);
    const response = await fetch(`${API_URL}/user-login`, {
      method: 'POST',
      body: JSON.stringify({ otp, name, phoneNumber }),
    });
    const { user } = await response.json();
    console.log(user);
    onLogin?.(user);
  };

  useEffect(() => {
    if (user?.id) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
        </div>
        
        {step === 'phone' ? (
          <div className="mt-8 space-y-6">
            <div>
              <label className="text-white" htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full bg-gray-700 p-2 border-gray-600 rounded-md shadow-sm text-white"
                placeholder="Enter your name"
                id="name"
              />
            </div>
            <div>
              <label className="text-white" htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 block w-full bg-gray-700 p-2 border-gray-600 rounded-md shadow-sm text-white"
                placeholder="Enter your phone number"
                id="phoneNumber"
              />
            </div>
            <button
              onClick={handleSendOtp}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Send OTP
            </button>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            <div>
              <label className="text-white" htmlFor="otp">Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 block w-full bg-gray-700 p-2 border-gray-600 rounded-md shadow-sm text-white"
                placeholder="Enter 6-digit code"
                id="otp"
              />
            </div>
            <button
              onClick={handleVerifyOtp}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Verify OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth