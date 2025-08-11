'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

export default function AadharKycScreen() {
  const router = useRouter();
  const [aadharNumber, setAadharNumber] = useState('8765 7823 0987');
  const [otp, setOtp] = useState('');
  const [totp, setTotp] = useState('');
  const [showShareCode, setShowShareCode] = useState(false);

  const handleBackClick = () => {
    router.back();
  };

  const handleHelpClick = () => {
    console.log('Help clicked');
  };

  const handleSendOtp = () => {
    console.log('Send OTP clicked');
  };

  const handleDownload = () => {
    console.log('Download clicked');
    // Navigate to Udyam KYC after download
    router.push('/udhyam-kyc');
  };

  const toggleShareCode = () => {
    setShowShareCode(!showShareCode);
  };

  return (
    <div className="min-h-screen bg-black text-white">
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
            className="border border-blue-500 text-blue-500 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-500 hover:text-white transition-colors"
          >
            Help?
          </button>
        </div>

        {/* Logo and Title */}
        <div className="flex flex-col items-center pb-6">
          <Image
            src="/logo.png"
            alt="Navdhan Logo"
            width={60}
            height={60}
            className="object-contain mb-4"
          />
          <h1 className="text-xl font-semibold text-white">Aadhaar KYC</h1>
          <p className="text-gray-400 text-sm mt-2 text-center px-6">
            Enter Aadhaar details and request an OTP or TOTP for verification
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        {/* UIDAI Logo Section */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xs font-bold">UI</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">
                  Unique Identification Authority of India
                </p>
                <p className="text-gray-400 text-xs">uidai.gov.in</p>
              </div>
            </div>
            <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">UIDAI</span>
            </div>
          </div>
        </div>

        {/* OTP Notification */}
        <div className="bg-green-100 border border-green-300 rounded-lg p-3 mb-6">
          <p className="text-green-800 text-sm">
            <span className="font-medium">OTP sent to your Registered Mobile number.</span>
            <br />
            Check your mobile.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Aadhaar Number */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-white text-sm font-medium">Aadhaar Number</label>
              <label className="text-gray-400 text-sm">Virtual ID</label>
            </div>
            <div className="relative">
              <input
                type="text"
                value={aadharNumber}
                onChange={(e) => setAadharNumber(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white text-lg tracking-wider focus:border-blue-500 focus:outline-none"
                placeholder="Enter Aadhaar Number"
              />
              <div className="absolute right-3 top-3">
                <Image
                  src="/india-flag.png"
                  alt="India Flag"
                  width={24}
                  height={16}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-1">
              12 Digit UID (1234/1234/1234)
            </p>
          </div>

          {/* Send OTP Button */}
          <button
            onClick={handleSendOtp}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Send OTP
          </button>

          {/* Enter TOTP */}
          <div>
            <label className="text-white text-sm font-medium mb-2 block">Enter TOTP</label>
            <input
              type="text"
              value={totp}
              onChange={(e) => setTotp(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              placeholder="Enter TOTP"
            />
          </div>

          {/* Share Code Section */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs">i</span>
                </div>
                <span className="text-white text-sm font-medium">
                  Create a Share Code for your paperless Offline eKYC *
                </span>
              </div>
              <button
                onClick={toggleShareCode}
                className="text-blue-500 hover:text-blue-400"
              >
                {showShareCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Create a Share Code of 4 Characters to secure your paperless Offline eKYC. It is important for Aadhaar Number holder to remember this Share Code as it will be required Offline eKYC unlock the ZIP file.
            </p>
          </div>

          {/* Enter OTP */}
          <div>
            <label className="text-white text-sm font-medium mb-2 block">
              Enter OTP / TOTP *
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              placeholder="Please enter 6 Digit OTP or 8 Digit TOTP"
            />
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
