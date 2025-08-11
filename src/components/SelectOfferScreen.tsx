'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, ChevronRight } from 'lucide-react';

interface LoanOffer {
  id: string;
  bankName: string;
  bankLogo: string;
  loanAmount: string;
  interest: string;
  interestRate: string;
  deposit: string;
  repaymentText: string;
  repaymentAmount: string;
  repaymentDays: string;
}

export default function SelectOfferScreen() {
  const router = useRouter();
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  // Mock loan offer data
  const loanOffer: LoanOffer = {
    id: 'sidbi-offer',
    bankName: 'SIDBI',
    bankLogo: 'sidbi.png',
    loanAmount: '₹ 30,595',
    interest: '₹ 949',
    interestRate: '(13%)',
    deposit: '₹ 29,446',
    repaymentText: 'Repay loan of',
    repaymentAmount: '₹ 30,595',
    repaymentDays: 'in 90 days'
  };

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
    // Navigate to offer details
    router.push('/offer-details');
  };

  const handleSort = () => {
    console.log('Sort clicked');
    // Implement sorting logic
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
          <h1 className="text-2xl font-bold text-white mb-2">Select Offer</h1>
          <div className= "text-sm space-y-1 text-white">
            <p>Invoice Number: 23001832188</p>
            <p>Invoice Amount: ₹ 32,205</p>
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
      <div className="flex-1 overflow-y-auto px-6 pb-8">
        {/* Loan Offer Card */}
        <div className="mb-6">
          <div
             onClick={() => handleOfferSelect(loanOffer.id)}
             className="bg-black rounded-lg border border-white cursor-pointer hover:bg-gray-900 transition-colors"
           >
             {/* Bank Header */}
             <div className="flex items-center justify-between p-4">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 flex items-center justify-center">
                   <Image
                     src="/sidbi.png"
                     alt="SIDBI Logo"
                     width={24}
                     height={24}
                     className="object-contain"
                   />
                 </div>
                 <span className="text-white font-medium">{loanOffer.bankName}</span>
               </div>
               <ChevronRight className="w-5 h-5 text-gray-400" />
             </div>

             {/* Loan Details Grid */}
             <div className="p-4">
               <div className="flex mb-4">
                 {/* Loan Amount */}
                 <div className="flex-1 text-center">
                   <div className="text-gray-400 text-xs mb-1">Loan</div>
                   <div className="text-white font-medium text-sm">{loanOffer.loanAmount}</div>
                 </div>

                 {/* Vertical Divider */}
                 <div className="w-px bg-gray-400 mx-4"></div>

                 {/* Interest */}
                 <div className="flex-1 text-center">
                   <div className="text-gray-400 text-xs mb-1">Interest</div>
                   <div className="text-white font-medium text-sm">
                     {loanOffer.interest} <span className="text-gray-400">{loanOffer.interestRate}</span>
                   </div>
                 </div>

                 {/* Vertical Divider */}
                 <div className="w-px bg-gray-400 mx-4"></div>

                 {/* Deposit */}
                 <div className="flex-1 text-center">
                   <div className="text-gray-400 text-xs mb-1">Deposit</div>
                   <div className="text-white font-medium text-sm">{loanOffer.deposit}</div>
                 </div>
               </div>

               {/* Repayment Info */}
               <div className="bg-white rounded-lg p-3 text-center">
                 <div className="text-black text-sm">
                   {loanOffer.repaymentText} <span className="text-black font-bold">{loanOffer.repaymentAmount}</span> {loanOffer.repaymentDays}
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* Sort Button - Moved to bottom */}
        <div className="flex justify-center mt-8 mb-6">
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
