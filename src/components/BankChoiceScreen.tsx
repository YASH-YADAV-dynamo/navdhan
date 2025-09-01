'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import banksData from '@/data/banks.json';

interface Bank {
  id: string;
  name: string;
  icon: string;
}

export default function BankChoiceScreen() {
  const router = useRouter();
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [helpClicked, setHelpClicked] = useState(false);

  const handleBackClick = () => {
    router.back();
  };

  const handleHelpClick = () => {
    setHelpClicked(!helpClicked);
    console.log('Help clicked');
  };

  const handleBankSelect = (bankId: string) => {
    setSelectedBank(bankId);
  };

  const handleNext = () => {
    if (selectedBank) {
      // Navigate to account aggregator screen
      router.push('/account-aggregator');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
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
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.png"
              alt="Navdhan Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h1 className="text-xl font-bold text-white mb-2">Select your bank</h1>
          <p className="text-gray-400 text-sm">Select the bank where you have an account</p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="px-6 pb-8">
        {/* Banks List - Scrollable */}
        <div className="space-y-3">
          {banksData.map((bank: Bank) => (
            <div
              key={bank.id}
              onClick={() => handleBankSelect(bank.id)}
              className="flex items-center justify-between p-4 bg-black rounded-lg cursor-pointer hover:bg-gray-900 transition-colors border border-gray-800"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src={`/${bank.icon}`}
                    alt={`${bank.name} Logo`}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-white font-medium">{bank.name}</span>
              </div>
              
              <div className="relative">
                <input
                  type="radio"
                  name="bank"
                  checked={selectedBank === bank.id}
                  onChange={() => handleBankSelect(bank.id)}
                  className="w-5 h-5 text-blue-600 bg-transparent border-2 border-gray-400 focus:ring-blue-500 focus:ring-2 rounded-full"
                />
                {selectedBank === bank.id && (
                  <div className="absolute inset-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Next Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-black">
        <button
          onClick={handleNext}
          disabled={!selectedBank}
          className={`w-full py-4 px-6 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-all ${
            selectedBank 
              ? 'hover:opacity-90 cursor-pointer' 
              : 'opacity-50 cursor-not-allowed'
          }`}
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
