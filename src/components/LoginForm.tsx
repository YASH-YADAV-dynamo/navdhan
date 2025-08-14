'use client';

import { useState } from 'react';

interface LoginFormProps {
  onSubmit: (phoneNumber: string, otp: string, rememberMe: boolean) => void;
  onResendOtp: () => void;
}

export default function LoginForm({ onSubmit, onResendOtp }: LoginFormProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [otpError, setOtpError] = useState('');

  const handleSendOtp = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setOtpError('Please enter a valid phone number');
      return;
    }

    setIsSendingOtp(true);
    setOtpError('');

    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();

      if (data.success) {
        setIsOtpSent(true);
        setOtpError('');
      } else {
        setOtpError(data.error || 'Failed to send OTP');
      }
    } catch (error) {
      setOtpError('Failed to send OTP. Please try again.');
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isOtpSent) {
      setOtpError('Please send OTP first');
      return;
    }

    if (!otp) {
      setOtpError('Please enter OTP');
      return;
    }

    // Verify OTP first
    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, otp }),
      });

      const data = await response.json();

      if (data.success) {
        onSubmit(phoneNumber, otp, rememberMe);
      } else {
        setOtpError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setOtpError('Failed to verify OTP. Please try again.');
    }
  };

  const handleResendOtp = async () => {
    if (!phoneNumber) {
      setOtpError('Please enter phone number first');
      return;
    }
    
    setIsSendingOtp(true);
    setOtpError('');

    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();

      if (data.success) {
        setOtpError('');
        // Clear OTP field for new input
        setOtp('');
      } else {
        setOtpError(data.error || 'Failed to resend OTP');
      }
    } catch (error) {
      setOtpError('Failed to resend OTP. Please try again.');
    } finally {
      setIsSendingOtp(false);
    }
  };

  return (
    <div className="bg-white p-6 flex-1">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Phone Number Input */}
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setOtpError('');
                if (isOtpSent) setIsOtpSent(false);
              }}
              className="w-full px-4 py-3 pr-28 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-black placeholder-black"
              placeholder="Enter your phone number"
              style={{ color: 'black' }}
              maxLength={10}
            />
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={isSendingOtp || !phoneNumber || phoneNumber.length < 10}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 text-sm font-medium px-2 py-1 rounded hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
            >
              {isSendingOtp ? 'Sending...' : 'Send OTP'}
            </button>
          </div>
        </div>

        {/* OTP Input */}
        <div>
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
            OTP
          </label>
          <div className="relative">
            <input
              type={showOtp ? 'text' : 'password'}
              id="otp"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
                setOtpError('');
              }}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-black placeholder-black"
              placeholder="Enter OTP"
              style={{ color: 'black' }}
              disabled={!isOtpSent}
            />
            <button
              type="button"
              onClick={() => setShowOtp(!showOtp)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showOtp ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {otpError && (
          <div className="text-red-600 text-sm">{otpError}</div>
        )}

        {/* Remember Me and Resend OTP */}
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">Remember me</span>
          </label>
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={!isOtpSent || isSendingOtp}
            className="text-blue-600 text-sm underline hover:text-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSendingOtp ? 'Sending...' : 'Resend OTP'}
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={!isOtpSent || !otp}
          className="w-full text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: '#2170BC' }}
        >
          Log In
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </form>
    </div>
  );
} 