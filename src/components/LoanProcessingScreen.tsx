'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function LoanProcessingScreen() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  const handleBackClick = () => {
    // Prevent going back during processing
    console.log('Back navigation disabled during processing');
  };

  const handleHelpClick = () => {
    console.log('Help clicked');
  };

  // Simulate processing progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Navigate to Aadhaar KYC page after processing
          setTimeout(() => {
            router.push('/aadhar-kyc');
          }, 1000);
          return 100;
        }
        return prev + 4; // Increase by 4% every interval
      });
    }, 75); // Update every 75ms

    return () => clearInterval(interval);
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
      </div>

      {/* Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/logo.png"
            alt="Navdhan Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        {/* Processing Message */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-medium text-white mb-4">
            Initiating loan process with lender...
          </h1>
          
          {/* Progress Indicator */}
          <div className="mb-6">
            <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto">
              <div 
                className="h-2 rounded-full transition-all duration-300 ease-out"
                style={{ 
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #ff8c00 0%, #ffffff 50%, #00ff00 100%)'
                }}
              ></div>
            </div>
            <div className="text-gray-400 text-sm mt-2">{progress}%</div>
          </div>

          {/* Status Text */}
          <div className="bg-white text-black px-6 py-2 rounded-full inline-block">
            <span className="text-sm font-medium">
              {progress < 30 ? 'Connecting...' : 
               progress < 60 ? 'Verifying details...' : 
               progress < 90 ? 'Processing...' : 
               'Almost done...'}
            </span>
          </div>
        </div>
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
