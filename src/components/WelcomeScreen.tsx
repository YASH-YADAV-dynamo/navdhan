'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    console.log('Learn How clicked');
    // Handle learn more functionality
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      {/* Back Arrow */}
      <div className="absolute top-8 left-6">
        <button
          onClick={() => router.back()}
          className="text-white hover:opacity-70 transition-opacity"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm w-full">
        {/* Logo */}
        <div className="w-48 h-48 mb-8 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Navdhan Logo"
            width={192}
            height={192}
            className="object-contain"
          />
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-12">
          <h1 className="text-white text-2xl font-bold mb-4">
            Welcome to Navdhan
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Get a loan for your MSME<br />
            in Just 5 Steps
          </p>
          <p 
            onClick={handleLearnMoreClick}
            className="text-white underline text-sm mt-2 cursor-pointer hover:underline"
          >
            Learn How
          </p>
        </div>
      </div>

      {/* Optional: Add a continue button or leave as success screen */}
      <div className="w-full max-w-sm pb-8">
        <button
          onClick={() => router.push('/dashboard')}
          className="w-full py-4 px-6 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#2170BC' }}
        >
          Start
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
