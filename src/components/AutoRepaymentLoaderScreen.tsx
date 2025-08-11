'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Check } from 'lucide-react';

export default function AutoRepaymentLoaderScreen() {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBackClick = () => {
    // Prevent going back during processing
    console.log('Back navigation disabled during processing');
  };

  const handleHelpClick = () => {
    console.log('Help clicked');
  };

  // Simulate auto repayment setup process
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccess(true);
      // Auto navigate after showing success
      setTimeout(() => {
        router.push('/setup-auto-repayment');
      }, 3000);
    }, 2000); // Show success after 2 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="bg-black">
        <div className="flex items-center justify-between p-6">
          <button
            onClick={handleBackClick}
            className="text-white hover:opacity-70 transition-opacity"
            disabled
          >
            <ArrowLeft className="w-6 h-6 opacity-50" />
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
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="Navdhan Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-4">Auto-repayment</h1>
          
          <p className="text-gray-400 text-sm text-center px-6">
            Lender will auto-deduct repayment from your deposit a/c Axis ****7564
          </p>
        </div>
      </div>

      {/* Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {showSuccess ? (
          /* Success State */
          <div className="text-center">
            {/* Green Tick Circle */}
            <div className="w-24 h-24 bg-black border-4 border-green-600 rounded-full flex items-center justify-center mb-8 mx-auto">
              <Check className="w-12 h-12 text-green-600" strokeWidth={3} />
            </div>
            
            <p className="text-white text-lg font-medium">
              Auto-repayment has been set for this loan
            </p>
          </div>
        ) : (
          /* Loading State */
          <div className="text-center">
            {/* Loading Spinner */}
            <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin mx-auto mb-8"></div>
            
            <p className="text-white text-lg font-medium">
              Setting up auto-repayment...
            </p>
          </div>
        )}
      </div>

      {/* Bottom Warning */}
      <div className="p-6 text-center">
        <p className="text-gray-400 text-sm">
          Please do not press back or exit
        </p>
      </div>
    </div>
  );
}
