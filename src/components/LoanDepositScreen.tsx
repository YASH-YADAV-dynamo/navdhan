'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, User, CreditCard } from 'lucide-react';

export default function LoanDepositScreen() {
  const router = useRouter();
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [agreeToShare, setAgreeToShare] = useState(false);

  const handleBackClick = () => {
    router.back();
  };

  const handleProceedToKyc = () => {
    if (!agreeToShare) {
      alert('Please agree to share your Udyam certificate');
      return;
    }
    console.log('Proceed to KYC clicked');
    // Navigate to setup auto repayment screen
    router.push('/setup-auto-repayment');
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
          
          <h1 className="text-2xl font-bold text-white mb-4">Share Loan Deposit A/C</h1>
          
          <p className="text-gray-400 text-sm text-center px-6">
            Enter your account where the loan needs to be disbursed by the lender
          </p>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-6 pb-32">
        <div className="space-y-6">
          {/* Combined Input Boxes */}
          <div className="bg-white rounded-lg overflow-hidden">
            {/* Account Number */}
            <div className="relative border-b border-gray-200">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#2170BC' }} />
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="w-full bg-white border-0 pl-12 pr-4 py-4 text-gray-600 placeholder-gray-400 focus:outline-none"
                placeholder="Enter Account Number"
              />
            </div>

            {/* IFSC Code */}
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#2170BC' }} />
              <input
                type="text"
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
                className="w-full bg-white border-0 pl-12 pr-4 py-4 text-gray-600 placeholder-gray-400 focus:outline-none"
                placeholder="Enter IFSC Code"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Proceed Button with Agreement */}
      <div className="fixed bottom-0 left-0 right-0 bg-black p-6">
        {/* Agreement Checkbox - Above Button */}
        <div className="flex items-start space-x-3 mb-4">
          <input
            type="checkbox"
            id="agreeShare"
            checked={agreeToShare}
            onChange={(e) => setAgreeToShare(e.target.checked)}
            className="w-4 h-4 text-white bg-white border-white rounded focus:ring-white accent-white mt-1"
          />
          <label htmlFor="agreeShare" className="text-white text-sm leading-relaxed">
            I agree to share my Udyam certificate with the lender for completing this loan process
          </label>
        </div>
        
        <button
          onClick={handleProceedToKyc}
          className="w-full text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center"
          style={{ backgroundColor: '#2170BC' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1a5a9a'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2170BC'}
        >
          PROCEED TO KYC
          <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
        </button>
      </div>
    </div>
  );
}
