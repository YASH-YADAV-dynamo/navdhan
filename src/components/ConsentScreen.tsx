'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function ConsentScreen() {
  const router = useRouter();
  const [isAgreed, setIsAgreed] = useState(false);

  const handleBackClick = () => {
    router.back();
  };

  const handleStartClick = () => {
    if (isAgreed) {
      // Navigate to GST invoice screen
      router.push('/gst-invoice');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="bg-black flex-shrink-0">
        <div className="flex items-center justify-between p-6">
          <button
            onClick={handleBackClick}
            className="text-white hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div></div> {/* Empty div for spacing */}
        </div>

        {/* Logo and Title Section - Inside black header */}
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
          <h1 className="text-2xl font-bold text-white mb-2">Apply for a new Loan</h1>
          <p className="text-gray-400 text-sm">Empower your business with Navdhan</p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-8 pt-6 ml-4 pb-24">
        {/* Consent Sections */}
        <div className="space-y-6 mb-8">
          {/* GST Data Consent */}
          <div>
            <h2 className="text-white font-semibold mb-3">GST DATA CONSENT</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              "You hereby undertake and confirm that you have permitted and allowed buyer application to pull your GST records - GSTR1, GSTR3B - for the last 12 months from the date of providing consent. You acknowledge and confirm that you have consented to the sharing of your GST Data with the lenders in the platform for the purpose of generating credit offers."
            </p>
          </div>

          {/* Credit Information Consent */}
          <div>
            <h2 className="text-white font-semibold mb-3">CREDIT INFORMATION CONSENT</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              "You hereby undertake and confirm that the information and data furnished by you to the platform is true and correct. The platform has been integrated with lenders who use Credit Information Companies (CIC) to conduct credit checks on body corporates/ MSME and Individuals. You acknowledge and confirm that you have consented to the sharing of sensitive data provided by you with such lenders and CICs for the purposes of obtaining the name and account number of banks with whom you have an open cash credit or overdraft account. In addition, you consent to the data being used to facilitate the creation of a credit offer which may include the account to which the funds may be disbursed as per prevailing RBI norms."
            </p>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3 mb-8">
          <div className="mt-1">
            <input
              type="checkbox"
              id="consent-checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-transparent border-2 border-blue-600 rounded focus:ring-blue-500 focus:ring-2"
            />
          </div>
          <label htmlFor="consent-checkbox" className="text-sm text-gray-300 leading-relaxed">
            I understand and agree to buyer app's Terms
          </label>
        </div>
      </div>

      {/* Sticky Start Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-black p-6">
        <button
          onClick={handleStartClick}
          disabled={!isAgreed}
          className={`w-full py-4 px-6 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-all ${
            isAgreed 
              ? 'hover:opacity-90 cursor-pointer' 
              : 'opacity-50 cursor-not-allowed'
          }`}
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
