'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function LoanDisbursedStatusScreen() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleHelpClick = () => {
    console.log('Help clicked');
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
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Navdhan Logo */}
        <div className="mb-12">
          <Image
            src="/logo.png"
            alt="Navdhan Logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
        
        {/* Success Message */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-white mb-6">
            Loan disbursed!
          </h1>
          
          <p className="text-white text-base leading-relaxed max-w-sm">
            Congratulations! Loans have been disbursed to your account.
          </p>
        </div>
      </div>

      {/* Warning Message */}
      <div className="bg-black p-6 text-center">
        <p className="text-white text-sm">
          Please do not press back or exit
        </p>
      </div>
    </div>
  );
}
