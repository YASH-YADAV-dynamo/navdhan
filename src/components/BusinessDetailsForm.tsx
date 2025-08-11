'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BusinessDetailsFormProps {
  onSubmit: (formData: BusinessFormData) => void;
  isLoading?: boolean;
}

interface BusinessFormData {
  gstUsername: string;
  gstin: string;
  mobileNumber: string;
  otp: string;
}

export default function BusinessDetailsForm({ onSubmit, isLoading = false }: BusinessDetailsFormProps) {
  const [formData, setFormData] = useState<BusinessFormData>({
    gstUsername: '',
    gstin: '',
    mobileNumber: '',
    otp: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: keyof BusinessFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* White Card with Input Fields */}
      <div className="bg-white mx-6 my-8 p-6 rounded-lg shadow-lg flex-1">
        <form className="space-y-6">
          {/* GST Username */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Image
                src="/user.svg"
                alt="User Icon"
                width={20}
                height={20}
                style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(78%) saturate(1827%) hue-rotate(201deg) brightness(95%) contrast(92%)' }}
              />
            </div>
            <input
              type="text"
              value={formData.gstUsername}
              onChange={(e) => handleInputChange('gstUsername', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-black placeholder-gray-400"
              placeholder="Enter GST Username"
              style={{ color: 'black' }}
            />
          </div>

          {/* GSTIN */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#2170BC' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
              </svg>
            </div>
            <input
              type="text"
              value={formData.gstin}
              onChange={(e) => handleInputChange('gstin', e.target.value)}
              className="w-full pl-10 pr-20 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-black placeholder-gray-400"
              placeholder="Enter GSTIN"
              style={{ color: 'black' }}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <span className="text-sm font-medium cursor-pointer hover:opacity-80" style={{ color: '#2170BC' }}>
                Get OTP
              </span>
            </div>
          </div>

          {/* Mobile Number */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#2170BC' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
              </svg>
            </div>
            <input
              type="tel"
              value={formData.mobileNumber}
              onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-black placeholder-gray-400"
              placeholder="Enter Mobile Number"
              style={{ color: 'black' }}
            />
          </div>

          {/* OTP */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#2170BC' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} strokeDasharray="3 3" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
            <input
              type="text"
              value={formData.otp}
              onChange={(e) => handleInputChange('otp', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-black placeholder-gray-400"
              placeholder="Enter OTP"
              style={{ color: 'black' }}
            />
          </div>
        </form>
      </div>

      {/* Verify Details Button outside the white card */}
      <div className="px-6 pb-8">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
          style={{ backgroundColor: '#2170BC' }}
        >
          {isLoading ? (
            <>
              Creating Account...
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </>
          ) : (
            <>
              Create Account
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
} 