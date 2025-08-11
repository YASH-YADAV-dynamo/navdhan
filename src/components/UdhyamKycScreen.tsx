'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, User, CreditCard, MessageCircleDashed } from 'lucide-react';

export default function UdhyamKycScreen() {
  const router = useRouter();
  const [udhyamNumber, setUdhyamNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [sendOtpTo, setSendOtpTo] = useState('phone'); // 'phone' or 'email'
  const [agreeToShare, setAgreeToShare] = useState(false);

  const handleBackClick = () => {
    router.back();
  };

  const handleSendOtp = () => {
    console.log('Send OTP clicked for:', sendOtpTo);
  };

  const handleSubmit = () => {
    if (!agreeToShare) {
      alert('Please agree to share your Udyam certificate');
      return;
    }
    console.log('Submit clicked');
    // Navigate to lender loading screen
    router.push('/lender-loading');
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
        </div>

        {/* Logo and Title */}
        <div className="flex flex-col items-center pb-6">
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="Navdhan Logo"
              width={80}
              height={40}
              className="object-contain"
            />
          </div>
          
          {/* SIDBI Logo */}
          <div className="flex items-center mb-4">
            <Image
              src="/sidbi2.png"
              alt="SIDBI Logo"
              width={40}
              height={40}
              className="object-contain mr-3"
            />
            <h1 className="text-2xl font-bold text-white">Udyam KYC</h1>
          </div>
          
          <p className="text-gray-400 text-sm text-center px-6">
            Validate Udyam registration via OTP to share your Udyam details for KYC with lender
          </p>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        <div className="space-y-6">
          {/* Combined Input Boxes */}
          <div className="bg-white rounded-lg overflow-hidden">
            {/* Udyam Registration Number */}
            <div className="relative border-b border-gray-200">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#2170BC' }} />
              <input
                type="text"
                value={udhyamNumber}
                onChange={(e) => setUdhyamNumber(e.target.value)}
                className="w-full bg-white border-0 pl-12 pr-4 py-4 text-gray-600 placeholder-gray-400 focus:outline-none"
                placeholder="Udyam Registration Number"
              />
            </div>

            {/* Mobile Number */}
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#2170BC' }} />
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full bg-white border-0 pl-12 pr-4 py-4 text-gray-600 placeholder-gray-400 focus:outline-none"
                placeholder="Mobile Number Linked to Udyam Account"
              />
            </div>
          </div>

          {/* Send OTP to Section */}
          <div>
            <h3 className="text-white text-sm font-medium mb-4">Send OTP to:</h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="otpMethod"
                  value="phone"
                  checked={sendOtpTo === 'phone'}
                  onChange={(e) => setSendOtpTo(e.target.value)}
                  className="w-4 h-4 text-white bg-white border-white focus:ring-white accent-white"
                />
                <span className="ml-3 text-white text-sm">Udyam Phone Number</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="radio"
                  name="otpMethod"
                  value="email"
                  checked={sendOtpTo === 'email'}
                  onChange={(e) => setSendOtpTo(e.target.value)}
                  className="w-4 h-4 text-white bg-white border-white focus:ring-white accent-white"
                />
                <span className="ml-3 text-white text-sm">Udyam Email ID</span>
              </label>
            </div>
          </div>

          {/* Send OTP Button */}
          <button
            onClick={handleSendOtp}
            className="text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            style={{ backgroundColor: '#2170BC' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1a5a9a'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#2170BC'}
          >
            Send OTP
          </button>

          {/* Enter OTP */}
          <div>
            <div className="relative">
              <MessageCircleDashed className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full bg-white border-0 rounded-lg pl-12 pr-4 py-4 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': '#2170BC' } as React.CSSProperties}
                placeholder="Enter OTP"
              />
            </div>
          </div>

          {/* Agreement Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="agreeShare"
              checked={agreeToShare}
              onChange={(e) => setAgreeToShare(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mt-1"
            />
            <label htmlFor="agreeShare" className="text-white text-sm leading-relaxed">
              I agree to share my Udyam certificate with the lender for completing this loan process
            </label>
          </div>
        </div>
      </div>

      {/* Fixed Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-black p-6">
        <button
          onClick={handleSubmit}
          className="w-full text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center"
          style={{ backgroundColor: '#2170BC' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1a5a9a'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2170BC'}
        >
          Submit
          <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
        </button>
      </div>
    </div>
  );
}
