'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BusinessDetailsFormProps {
  onSubmit: (formData: BusinessFormData) => void;
}

interface BusinessFormData {
  gstUsername: string;
  gstin: string;
  mobileNumber: string;
  otp: string;
}

export default function BusinessDetailsForm({ onSubmit }: BusinessDetailsFormProps) {
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
                className="text-red-500"
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
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
              </svg>
            </div>
            <input
              type="text"
              value={formData.gstin}
              onChange={(e) => handleInputChange('gstin', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-black placeholder-gray-400"
              placeholder="Enter GSTIN"
              style={{ color: 'black' }}
            />
          </div>

          {/* Mobile Number & OTP */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                <Image
                  src="/india-flag.png"
                  alt="India Flag"
                  width={16}
                  height={12}
                  className="rounded-sm"
                />
                <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>
              <input
                type="tel"
                value={formData.mobileNumber}
                onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-black placeholder-gray-400"
                placeholder="Enter Mobile Number"
                style={{ color: 'black' }}
              />
            </div>
            <div className="w-px bg-gray-300"></div>
            <div className="w-32 relative">
              <input
                type="text"
                value={formData.otp}
                onChange={(e) => handleInputChange('otp', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-black placeholder-gray-400"
                placeholder="Enter OTP"
                style={{ color: 'black' }}
              />
            </div>
          </div>
        </form>
      </div>

      {/* Verify Details Button outside the white card */}
      <div className="px-6 pb-8">
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          style={{ backgroundColor: '#2170BC' }}
        >
          Verify Details
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
} 