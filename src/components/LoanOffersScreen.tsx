'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Star } from 'lucide-react';

interface LoanOffer {
  id: string;
  companyName: string;
  date: string;
  gstNumber: string;
  amount: string;
  logo: string;
  offerCount: number;
  offerText: string;
}

export default function LoanOffersScreen() {
  const router = useRouter();
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  // Mock loan offers data
  const loanOffers: LoanOffer[] = [
    {
      id: 'amazon',
      companyName: 'Amazon Pvt. Ltd.',
      date: '24 Aug 20',
      gstNumber: '23001832188',
      amount: '₹ 32,205',
      logo: 'star',
      offerCount: 1,
      offerText: '1 offer'
    },
    {
      id: 'urbanclap',
      companyName: 'UrbanClap Pvt. Ltd.',
      date: '24 Aug 20',
      gstNumber: '23001832187',
      amount: '₹ 64,410',
      logo: 'star-f',
      offerCount: 2,
      offerText: '2 offers'
    },
    {
      id: 'swiggy',
      companyName: 'Swiggy Pvt. Ltd.',
      date: '23 Aug 20',
      gstNumber: '23001832186',
      amount: '₹ 15,000',
      logo: 'star',
      offerCount: 1,
      offerText: '1 offer'
    }
  ];

  const handleBackClick = () => {
    router.back();
  };

  const handleHelpClick = () => {
    console.log('Help clicked');
  };

  const handleOfferSelect = (offerId: string) => {
    setSelectedOffer(offerId);
  };

  const handleNext = () => {
    // Navigate to select offer screen
    router.push('/select-offer');
  };

  const handleSort = () => {
    console.log('Sort clicked');
    // Implement sorting logic
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
          <h1 className="text-2xl font-bold text-white mb-2">Your Loan Offers</h1>
          <p className="text-gray-400 text-sm">Select an invoice from the below list to check the loan offers from lenders</p>
        </div>
      </div>

      {/* Valid For Badge */}
      <div className="px-6 mb-6">
        <div className="flex justify-center">
          <div className="bg-white text-green-600 px-4 py-1 rounded-full text-sm font-medium">
            Valid for: 1 h 48m
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-8 max-w-full overflow-x-hidden">
        {/* Loan Offers List */}
        <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
          {loanOffers.map((offer) => (
            <div
              key={offer.id}
              onClick={() => handleOfferSelect(offer.id)}
              className="cursor-pointer hover:bg-gray-900 transition-colors"
            >
              {/* Company Name */}
              <div className="mb-2">
                <h3 className="text-white font-medium text-base">{offer.companyName}</h3>
              </div>
              
              {/* Company Details */}
              <div className="flex items-center gap-1 mb-3 text-gray-400 text-sm">
                <span>{offer.date}</span>
                <span>•</span>
                <span>{offer.gstNumber}</span>
                <span>•</span>
                <span className="text-white font-medium">{offer.amount}</span>
              </div>
              
              {/* Logos and Offers Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Bank Logos */}
                  <div className="flex items-center gap-2">
                    {offer.offerCount === 1 && (
                      <div className="w-8 h-8 flex items-center justify-center bg-white rounded-lg">
                        <Image
                          src="/sidbi.png"
                          alt="SIDBI Logo"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    )}
                    
                    {offer.offerCount === 2 && (
                      <>
                        <div className="w-8 h-8 flex items-center justify-center bg-white rounded-lg">
                          <Image
                            src="/sidbi.png"
                            alt="SIDBI Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center bg-white rounded-lg">
                          <Image
                            src="/icici.png"
                            alt="ICICI Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Offer Count */}
                <div className="text-blue-400 text-sm font-medium">
                  {offer.offerText}
                </div>
              </div>
              
              {/* Divider */}
              {offer.id !== loanOffers[loanOffers.length - 1].id && (
                <div className="border-b border-gray-800 mt-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* Sort Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={handleSort}
            className="border border-gray-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            ↕ SORT
          </button>
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
