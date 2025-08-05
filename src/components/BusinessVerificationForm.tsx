'use client';

import { useState } from 'react';

interface BusinessVerificationFormProps {
  onSubmit: (formData: BusinessVerificationData) => void;
  onAddAnotherGstin: () => void;
}

interface BusinessVerificationData {
  legalBusinessName: string;
  placeOfBusiness: string;
  gstin: string;
  contactPerson: string;
  phoneNumber: string;
  emailAddress: string;
  website: string;
}

export default function BusinessVerificationForm({ onSubmit, onAddAnotherGstin }: BusinessVerificationFormProps) {
  const [formData, setFormData] = useState<BusinessVerificationData>({
    legalBusinessName: 'Plaintech Suppliers Pvt. Ltd.',
    placeOfBusiness: 'Karnataka',
    gstin: '29ABCDE1234F3Z6',
    contactPerson: 'John Doe',
    phoneNumber: '+91 98765 43210',
    emailAddress: 'contact@plaintechsuppliers.com',
    website: 'www.plaintechsuppliers.com'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: keyof BusinessVerificationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex-1 flex flex-col" style={{ backgroundColor: '#1A1C1E' }}>
      {/* White Card with Input Fields */}
      <div className="bg-white mx-6 my-8 p-6 rounded-lg shadow-lg flex-1">
        <form className="space-y-6">
          {/* Legal Business Name */}
          <div>
            <label 
              className="block mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '12px',
                lineHeight: '140%',
                letterSpacing: '-0.12px',
                color: '#9CA3AF'
              }}
            >
              Legal Business Name
            </label>
            <input
              type="text"
              value={formData.legalBusinessName}
              onChange={(e) => handleInputChange('legalBusinessName', e.target.value)}
              className="w-full px-4 py-3 focus:ring-0 focus:outline-none transition-colors text-black"
              style={{ 
                color: 'black',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '140%',
                letterSpacing: '-0.16px'
              }}
            />
          </div>

          {/* Place of Business */}
          <div>
            <label 
              className="block mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '12px',
                lineHeight: '140%',
                letterSpacing: '-0.12px',
                color: '#9CA3AF'
              }}
            >
              Place of Business
            </label>
            <input
              type="text"
              value={formData.placeOfBusiness}
              onChange={(e) => handleInputChange('placeOfBusiness', e.target.value)}
              className="w-full px-4 py-3 focus:ring-0 focus:outline-none transition-colors text-black"
              style={{ 
                color: 'black',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '140%',
                letterSpacing: '-0.16px'
              }}
            />
          </div>

          {/* GSTIN */}
          <div>
            <label 
              className="block mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '12px',
                lineHeight: '140%',
                letterSpacing: '-0.12px',
                color: '#9CA3AF'
              }}
            >
              GSTIN
            </label>
            <input
              type="text"
              value={formData.gstin}
              onChange={(e) => handleInputChange('gstin', e.target.value)}
              className="w-full px-4 py-3 focus:ring-0 focus:outline-none transition-colors text-black"
              style={{ 
                color: 'black',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '140%',
                letterSpacing: '-0.16px'
              }}
            />
          </div>

          {/* Contact Person */}
          <div>
            <label 
              className="block mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '12px',
                lineHeight: '140%',
                letterSpacing: '-0.12px',
                color: '#9CA3AF'
              }}
            >
              Contact Person
            </label>
            <input
              type="text"
              value={formData.contactPerson}
              onChange={(e) => handleInputChange('contactPerson', e.target.value)}
              className="w-full px-4 py-3 focus:ring-0 focus:outline-none transition-colors text-black"
              style={{ 
                color: 'black',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '140%',
                letterSpacing: '-0.16px'
              }}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label 
              className="block mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '12px',
                lineHeight: '140%',
                letterSpacing: '-0.12px',
                color: '#9CA3AF'
              }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className="w-full px-4 py-3 focus:ring-0 focus:outline-none transition-colors text-black"
              style={{ 
                color: 'black',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '140%',
                letterSpacing: '-0.16px'
              }}
            />
          </div>

          {/* Email Address */}
          <div>
            <label 
              className="block mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '12px',
                lineHeight: '140%',
                letterSpacing: '-0.12px',
                color: '#9CA3AF'
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              value={formData.emailAddress}
              onChange={(e) => handleInputChange('emailAddress', e.target.value)}
              className="w-full px-4 py-3 focus:ring-0 focus:outline-none transition-colors text-black"
              style={{ 
                color: 'black',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '140%',
                letterSpacing: '-0.16px'
              }}
            />
          </div>

          {/* Website */}
          <div>
            <label 
              className="block mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '12px',
                lineHeight: '140%',
                letterSpacing: '-0.12px',
                color: '#9CA3AF'
              }}
            >
              Website
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              className="w-full px-4 py-3 focus:ring-0 focus:outline-none transition-colors text-black"
              style={{ 
                color: 'black',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '140%',
                letterSpacing: '-0.16px'
              }}
            />
          </div>
        </form>
      </div>

      {/* Buttons outside the white card */}
      <div className="px-6 pb-8 space-y-4">
        {/* Add Another GSTIN Link */}
        <div className="text-center">
          <button
            type="button"
            onClick={onAddAnotherGstin}
            className="text-blue-600 text-sm font-medium hover:text-blue-500 transition-colors"
          >
            + ADD ANOTHER GSTIN
          </button>
        </div>

        {/* Create Account Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          style={{ backgroundColor: '#2170BC' }}
        >
          Create Account
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
} 