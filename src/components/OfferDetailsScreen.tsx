'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function OfferDetailsScreen() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleHelpClick = () => {
    console.log('Help clicked');
  };

  const handleNext = () => {
    // Navigate to loan processing
    router.push('/loan-processing');
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
          
          <button
            onClick={handleHelpClick}
            className="border border-white text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-white hover:text-black transition-colors"
          >
            Help?
          </button>
        </div>

        {/* Logo and Title Section */}
        <div className="px-6 pb-6 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="Navdhan Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Offer Details</h1>
          <div className="text-sm space-y-1 text-white">
            <p>Lender: SIDBI</p>
            <p>KYC: To be done</p>
          </div>
        </div>
      </div>

      {/* Valid For Badge */}
      <div className="px-6 mb-6">
        <div className="flex justify-center">
          <div className="bg-white text-green-600 px-4 py-1 rounded-full text-sm font-medium">
            Valid for: 1h 48m
          </div>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Loan */}
          <div className="text-center">
            <div className="text-gray-400 text-xs mb-1">Loan</div>
            <div className="text-white font-medium text-sm">₹ 30,595</div>
          </div>

          {/* Interest */}
          <div className="text-center">
            <div className="text-gray-400 text-xs mb-1">Interest</div>
            <div className="text-white font-medium text-sm">₹ 949</div>
          </div>

          {/* Duration */}
          <div className="text-center">
            <div className="text-gray-400 text-xs mb-1">Duration</div>
            <div className="text-white font-medium text-sm">90 Days</div>
          </div>
        </div>

        {/* Loan Details Section */}
        <div className="mb-6">
          <h3 className="text-white font-medium mb-3 underline">Loan Details</h3>
          
          <div className="space-y-0">
            {/* Loan */}
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-300">Loan</span>
              <div className="text-right">
                <div className="text-white font-medium">₹ 30,595</div>
                <div className="text-gray-400 text-xs">95% of order value</div>
              </div>
            </div>
            <div className="border-b border-gray-600"></div>

            {/* Interest */}
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-300">Interest</span>
              <div className="text-right">
                <div className="text-white font-medium">₹ 949</div>
                <div className="text-gray-400 text-xs">@13% p.a.</div>
              </div>
            </div>
            <div className="border-b border-gray-600"></div>

            {/* Processing charge */}
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-300">Processing charge</span>
              <span className="text-white font-medium">₹ 200</span>
            </div>
            <div className="border-b border-gray-600"></div>

            {/* Deposit */}
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-300">Deposit</span>
              <span className="text-white font-medium">₹ 29,446</span>
            </div>
            <div className="border-b border-gray-600"></div>

            {/* Repayment */}
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-300">Repayment</span>
              <span className="text-white font-medium">₹ 30,595</span>
            </div>
            <div className="border-b border-gray-600"></div>

            {/* Repay Before */}
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-300">Repay Before</span>
              <span className="text-white font-medium">01 Dec 20</span>
            </div>
            <div className="border-b border-gray-600"></div>

            {/* Late charge */}
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-300">Late charge</span>
              <span className="text-white font-medium">8% per month</span>
            </div>
            <div className="border-b border-gray-600"></div>

            {/* Prepayment penalty */}
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-300">Prepayment penalty</span>
              <span className="text-white font-medium">Zero</span>
            </div>
          </div>
        </div>

        {/* Repayment Terms Section */}
        <div className="mb-6">
          <h3 className="text-white font-medium mb-2 underline text-sm">Repayment Terms</h3>
          
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-white text-xs">You may reduce the interest by repaying before the due date</span>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-white text-xs">Late repayment will lead to penalty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Next Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-black">
        <button
          onClick={handleNext}
          className="w-full py-4 px-6 rounded-lg font-medium text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          style={{ 
            backgroundColor: '#2170BC',
            height: '56px'
          }}
        >
          Next
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
