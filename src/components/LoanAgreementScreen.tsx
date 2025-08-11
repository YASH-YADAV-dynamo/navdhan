'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, MessageCircleDashed, ArrowRight } from 'lucide-react';

export default function LoanAgreementScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState('');

  const handleBackClick = () => {
    router.back();
  };

  const handleSubmit = () => {
    console.log('OTP submitted:', otp);
    // Navigate to repayment consent screen
    router.push('/repayment-consent');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="bg-black">
        <div className="flex items-center justify-start p-6">
          <button
            onClick={handleBackClick}
            className="text-white hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Logo and Content */}
        <div className="flex flex-col items-center px-6 pb-8">
          {/* Navdhan Logo */}
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="Navdhan Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
          
          {/* SIDBI Logo and Title */}
          <div className="flex items-center mb-6">
            <Image
              src="/sidbi2.png"
              alt="SIDBI Logo"
              width={80}
              height={80}
              className="object-contain mr-2"
            />
            <h1 className="text-xl font-bold text-white">Loan Agreement</h1>
          </div>
          
          {/* Account Details */}
          <div className="text-center text-gray-400 text-sm mb-8">
            <p>Deposit A/c : Axis Bank</p>
            <p>Acc No : 52XXXXXX7564</p>
          </div>
          
          {/* OTP Status */}
          <div className="text-center text-white text-sm mb-8">
            <p>OTP Sent to Mobile Number **********4332</p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 pb-32">
        {/* OTP Input */}
        <div className="mb-8">
          <div className="relative">
            <MessageCircleDashed className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#2170BC]" />
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full bg-white text-black placeholder-gray-500 pl-12 pr-4 py-4 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={6}
            />
          </div>
        </div>
      </div>

      {/* Fixed Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-black p-6">
        <button
          onClick={handleSubmit}
          className="w-full text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center"
          style={{ backgroundColor: '#2170BC' }}
          onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1a5a9a'}
          onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2170BC'}
        >
          Submit
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}
