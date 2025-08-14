'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, User, CreditCard, MessageCircleDashed } from 'lucide-react';

export default function UdhyamKycScreen() {
  const router = useRouter();
  const [udhyamNumber, setUdhyamNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [agreeToShare, setAgreeToShare] = useState(false);

  const handleBackClick = () => {
    router.back();
  };

  const handleSendOtp = async () => {
    if (!udhyamNumber || !phoneNumber) {
      setOtpError('Please enter both Udyam number and phone number');
      return;
    }

    if (phoneNumber.length < 10) {
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

  const handleSubmit = async () => {
    if (!agreeToShare) {
      setOtpError('Please agree to share your Udyam certificate');
      return;
    }

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
        console.log('OTP verified successfully');
        // Navigate to lender loading screen
        router.push('/lender-loading');
      } else {
        setOtpError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setOtpError('Failed to verify OTP. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="bg-black">
        <div className="flex items-center justify-between p-6">
          <button
            onClick={handleBackClick}
            className="text-white hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Logo and Title */}
        <div className="flex flex-col items-center pb-6">
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="Navdhan Logo"
              width={80}
              height={40}
              className="object-contain"
            />
          </div>
          
          {/* SIDBI Logo */}
          <div className="flex items-center mb-4">
            <Image
              src="/sidbi2.png"
              alt="SIDBI Logo"
              width={40}
              height={40}
              className="object-contain mr-3"
            />
            <h1 className="text-2xl font-bold text-white">Udyam KYC</h1>
          </div>
          
          <p className="text-gray-400 text-sm text-center px-6">
            Validate Udyam registration via OTP to share your Udyam details for KYC with lender
          </p>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        <div className="space-y-6">
          {/* Combined Input Boxes */}
          <div className="bg-white rounded-lg overflow-hidden">
            {/* Udyam Registration Number */}
            <div className="relative border-b border-gray-200">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#2170BC' }} />
              <input
                type="text"
                value={udhyamNumber}
                onChange={(e) => {
                  setUdhyamNumber(e.target.value);
                  setOtpError('');
                  if (isOtpSent) setIsOtpSent(false);
                }}
                className="w-full bg-white border-0 pl-12 pr-4 py-4 text-gray-600 placeholder-gray-400 focus:outline-none"
                placeholder="Udyam Registration Number"
              />
            </div>

            {/* Phone Number */}
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#2170BC' }} />
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setOtpError('');
                  if (isOtpSent) setIsOtpSent(false);
                }}
                className="w-full bg-white border-0 pl-12 pr-4 py-4 text-gray-600 placeholder-gray-400 focus:outline-none"
                placeholder="Phone Number Linked to Udyam Account"
                maxLength={10}
              />
            </div>
          </div>

          {/* Error Message */}
          {otpError && (
            <div className="text-red-400 text-sm text-center">{otpError}</div>
          )}

          {/* Send OTP Button */}
          <button
            onClick={handleSendOtp}
            disabled={isSendingOtp || !udhyamNumber || !phoneNumber || phoneNumber.length < 10}
            className="text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#2170BC' }}
            onMouseEnter={(e) => {
              if (!isSendingOtp && udhyamNumber && phoneNumber && phoneNumber.length >= 10) {
                (e.target as HTMLButtonElement).style.backgroundColor = '#1a5a9a';
              }
            }}
            onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2170BC'}
          >
            {isSendingOtp ? 'Sending OTP...' : 'Send OTP'}
          </button>

          {/* Enter OTP */}
          <div>
            <div className="relative">
              <MessageCircleDashed className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                  setOtpError('');
                }}
                className="w-full bg-white border-0 rounded-lg pl-12 pr-4 py-4 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 disabled:opacity-50"
                style={{ '--tw-ring-color': '#2170BC' } as React.CSSProperties}
                placeholder="Enter OTP"
                disabled={!isOtpSent}
              />
            </div>
            
            {/* Resend OTP */}
            {isOtpSent && (
              <button
                onClick={handleResendOtp}
                disabled={isSendingOtp}
                className="text-blue-400 text-sm underline hover:text-blue-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isSendingOtp ? 'Sending...' : 'Resend OTP'}
              </button>
            )}
          </div>

          {/* Agreement Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="agreeShare"
              checked={agreeToShare}
              onChange={(e) => setAgreeToShare(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mt-1"
            />
            <label htmlFor="agreeShare" className="text-white text-sm leading-relaxed">
              I agree to share my Udyam certificate with the lender for completing this loan process
            </label>
          </div>
        </div>
      </div>

      {/* Fixed Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-black p-6">
        <button
          onClick={handleSubmit}
          disabled={!isOtpSent || !otp || !agreeToShare}
          className="w-full text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: '#2170BC' }}
          onMouseEnter={(e) => {
            if (isOtpSent && otp && agreeToShare) {
              (e.target as HTMLButtonElement).style.backgroundColor = '#1a5a9a';
            }
          }}
          onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2170BC'}
        >
          Submit
          <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
        </button>
      </div>
    </div>
  );
}
