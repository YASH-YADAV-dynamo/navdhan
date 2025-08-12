'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Star } from 'lucide-react';
import accountAggregatorsData from '@/data/account-aggregator.json';

interface AccountAggregator {
  id: string;
  name: string;
  rating: string;
  stars: number;
  icon: string;
}

export default function AccountAggregatorScreen() {
  const router = useRouter();
  const [selectedAggregator, setSelectedAggregator] = useState<string | null>(null);



  const handleBackClick = () => {
    router.back();
  };

  const handleHelpClick = () => {
    console.log('Help clicked');
  };

  const handleAggregatorSelect = (aggregatorId: string) => {
    setSelectedAggregator(aggregatorId);
  };

  const handleNext = () => {
    if (selectedAggregator) {
      // Navigate directly to the account aggregator setup flow
      router.push('/test-account-aggregator');
    }
  };

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 ${
          index < count ? 'text-white fill-white' : 'text-gray-600'
        }`}
      />
    ));
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
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="Navdhan Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Select Account Aggregator</h1>
          <p className="text-gray-400 text-sm">Choose one of the RBI approved Account Aggregators to share your financial information</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-8">
        {/* Account Aggregators List */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {accountAggregatorsData.map((aggregator: AccountAggregator) => (
            <div
              key={aggregator.id}
              onClick={() => handleAggregatorSelect(aggregator.id)}
              className="flex items-center justify-between p-4 bg-black rounded-lg cursor-pointer hover:bg-gray-900 transition-colors border border-gray-800"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg">
                  <Image
                    src={aggregator.icon.startsWith('http') ? aggregator.icon : aggregator.icon}
                    alt={`${aggregator.name} Logo`}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium">{aggregator.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-400 text-xs">Playstore Rating:</span>
                    <span className="text-white text-xs font-medium">{aggregator.rating}</span>
                    <div className="flex items-center gap-1">
                      {renderStars(aggregator.stars)}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative ml-4">
                <input
                  type="radio"
                  name="aggregator"
                  checked={selectedAggregator === aggregator.id}
                  onChange={() => handleAggregatorSelect(aggregator.id)}
                  className="w-5 h-5 text-blue-600 bg-transparent border-2 border-gray-400 focus:ring-blue-500 focus:ring-2 rounded-full"
                />
                {selectedAggregator === aggregator.id && (
                  <div className="absolute inset-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Next Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-black">
        <button
          onClick={handleNext}
          disabled={!selectedAggregator}
          className={`w-full py-4 px-6 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-all ${
            selectedAggregator
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
