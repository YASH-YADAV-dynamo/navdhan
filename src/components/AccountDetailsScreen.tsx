'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Check } from 'lucide-react';

export default function AccountDetailsScreen() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleHelpClick = () => {
    console.log('Help clicked');
  };

  const handleAuthenticate = () => {
    console.log('Authenticate clicked');
    // Navigate to internet banking screen
    router.push('/internet-banking');
  };

  const handleDebitCardClick = () => {
    console.log('Debit Card authentication clicked');
  };

  const handleNetBankingClick = () => {
    console.log('Net Banking authentication clicked');
  };

  const handleAadharClick = () => {
    console.log('Aadhar authentication clicked');
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
          </div>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        <div className="space-y-6">
          {/* First Account Details Section */}
          <div>
            <h2 className="text-white text-lg font-medium mb-4 underline">Account Details</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white text-sm">Account Number</span>
                <div className="text-right">
                  <div className="text-white font-medium">5271297564</div>
                  <div className="text-gray-400 text-xs">Axis Bank</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-white text-sm">IFSC</span>
                <span className="text-white font-medium">AXIS0000104</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-white text-sm">Account Holder</span>
                <span className="text-white font-medium">PlainTech Suppliers</span>
              </div>
            </div>
          </div>

          {/* Second Account Details Section */}
          <div className="mt-8">
            <h2 className="text-white text-lg font-medium mb-4 underline">Account Details</h2>
            
            <div className="space-y-4">
              {/* Debit Card Option */}
              <div className="w-full flex justify-between items-center py-4">
                <div className="flex items-center">
                  <span className="text-white text-sm">Debit Card</span>
                </div>
                <div className="w-6 h-6 bg-black border border-white rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Net Banking Option */}
              <div className="w-full flex justify-between items-center py-4">
                <div className="flex items-center">
                  <span className="text-white text-sm">Net Banking</span>
                </div>
                <div className="w-6 h-6 bg-black border border-white rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Aadhar Option */}
              <div className="w-full flex justify-between items-center py-4">
                <div className="flex items-center">
                  <span className="text-white text-sm">Aadhar</span>
                </div>
                <div className="w-6 h-6 bg-black border border-white rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Authenticate Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-black p-6">
        <button
          onClick={handleAuthenticate}
          className="w-full text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center"
          style={{ backgroundColor: '#2170BC' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1a5a9a'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2170BC'}
        >
          Authenticate
          <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
        </button>
      </div>
    </div>
  );
}
