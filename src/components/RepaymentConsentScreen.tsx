'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Info, Check, Shield, Calendar, Database, Clock, MessageSquare, ChevronRight } from 'lucide-react';

export default function RepaymentConsentScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleBackClick = () => {
    if (currentStep === 1) {
      router.back();
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setCurrentStep(currentStep + 1);
      }, 1000);
    } else {
      // Navigate to loan disbursed screen after consent accepted
      router.push('/loan-disbursed-status');
    }
  };

  const handleResendOtp = () => {
    console.log('Resending OTP to:', mobileNumber);
  };

  // Step 1: FinVu Registration
  const renderFinVuRegistration = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <button onClick={handleBackClick} className="text-gray-600">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center text-gray-500">
            <Info className="w-4 h-4 mr-1" />
            <span className="text-sm">info</span>
          </div>
        </div>
      </div>

      {/* FinVu Logo and Content */}
      <div className="flex-1 px-6 py-8">
        <div className="flex items-center mb-8">
          <Image
            src="https://finvu.in/static/media/brand.231c3b634835c642df41.png"
            alt="FinVu Logo"
            width={80}
            height={40}
            className="object-contain"
          />
        </div>
        
        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          Register to link your accounts, view balance and approve data sharing consents.
        </p>
        
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-medium mb-3">
            Enter Mobile Number
          </label>
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your mobile number"
          />
        </div>
        
        <div className="text-xs text-gray-500 mb-8">
          By continuing, you agree to our{' '}
          <span className="text-blue-600 underline">Terms and Conditions</span>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="bg-white p-6 flex space-x-4">
        <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium">
          LOGIN
        </button>
        <button
          onClick={handleNext}
          disabled={!mobileNumber || isLoading}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium disabled:opacity-50"
        >
          {isLoading ? 'Loading...' : 'REGISTER'}
        </button>
      </div>
      
      <div className="text-center text-xs text-gray-500 p-4">
        Finvu is a brand of Cookiejar Technologies Pvt Ltd, a regulated and licensed NBFC AA by RBI
      </div>
    </div>
  );

  // Step 2: Mobile Verification
  const renderMobileVerification = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="flex items-center p-4">
          <button onClick={handleBackClick} className="text-gray-600">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8 flex flex-col items-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
            <Check className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm mb-6">
            Your mobile no needs verification to complete the registration.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mb-8">
            Mobile Verification
          </h2>
        </div>
        
        <div className="w-full mb-6">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={6}
          />
          <p className="text-xs text-gray-500 mt-2">
            Enter OTP received on XXXXXX4332
          </p>
        </div>
        
        <button
          onClick={handleResendOtp}
          className="text-blue-600 text-sm font-medium mb-8"
        >
          Resend OTP
        </button>
      </div>

      {/* Bottom Button */}
      <div className="bg-white p-6">
        <button
          onClick={handleNext}
          disabled={!otp || isLoading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium disabled:opacity-50"
        >
          {isLoading ? 'Verifying...' : 'VERIFY'}
        </button>
      </div>
    </div>
  );

  // Step 3: SIDBI Consent
  const renderSidbiConsent = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="flex items-center p-4">
          <button onClick={handleBackClick} className="text-gray-600">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto">
        {/* SIDBI Header */}
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 mr-3">
            <Image
              src="/sidbi.png"
              alt="SIDBI Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">SIDBI</h3>
            <p className="text-xs text-gray-500">
              Requires your consent to monitor account information
            </p>
            <p className="text-xs text-gray-400">
              Requested on 12 Apr 2021
            </p>
          </div>
        </div>

        <h4 className="font-semibold text-gray-900 mb-4">
          Details of access on the account information
        </h4>

        {/* Access Details */}
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <Calendar className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">Periodic</p>
              <p className="text-sm text-gray-600">Information can be fetched 20 times a DAY</p>
            </div>
          </div>

          <div className="flex items-start">
            <Calendar className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">From 12 Apr 2021 to 12 Apr 2024</p>
              <p className="text-sm text-gray-600">Profile, Summary, Transactions of the account</p>
            </div>
          </div>

          <div className="flex items-start">
            <Database className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">Aggregated Statement</p>
              <p className="text-sm text-gray-600">Purpose of Access</p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">12 Apr 2024</p>
              <p className="text-sm text-gray-600">Consent Expiry</p>
            </div>
          </div>

          <div className="flex items-start">
            <MessageSquare className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">STORE FOR 2 YEAR(s)</p>
              <p className="text-sm text-gray-600">Consent data access</p>
            </div>
          </div>
        </div>

        <h4 className="font-semibold text-gray-900 mb-4">SELECT ACCOUNTS</h4>
        <p className="text-sm text-gray-600 mb-4">
          Information will be accessed from selected accounts
        </p>

        {/* Account Selection */}
        <div className="bg-white rounded-lg border p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 mr-3">
                <Image
                  src="/axis.svg"
                  alt="Axis Bank Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">AXIS BANK</p>
                <p className="text-sm text-gray-600">XXXXXX7564</p>
                <p className="text-xs text-gray-500">SAVINGS</p>
              </div>
            </div>
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        <button className="text-blue-600 font-medium mb-8">
          ADD ACCOUNT
        </button>
      </div>

      {/* Bottom Buttons */}
      <div className="bg-white p-6 flex space-x-4">
        <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium">
          DENY
        </button>
        <button
          onClick={handleNext}
          disabled={isLoading}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium disabled:opacity-50"
        >
          {isLoading ? 'Processing...' : 'ACCEPT'}
        </button>
      </div>
    </div>
  );

  // Step 4: Consent Accepted
  const renderConsentAccepted = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      {/* Success Icon */}
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
        <Shield className="w-12 h-12 text-green-600" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Consent Accepted !
      </h2>
      
      <p className="text-gray-600 text-center mb-12">
        You will be redirected in 5 secs
      </p>
      
      <button
        onClick={handleNext}
        className="w-full max-w-sm bg-blue-600 text-white py-3 rounded-lg font-medium"
      >
        DONE
      </button>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderFinVuRegistration();
      case 2:
        return renderMobileVerification();
      case 3:
        return renderSidbiConsent();
      case 4:
        return renderConsentAccepted();
      default:
        return renderFinVuRegistration();
    }
  };

  return renderCurrentStep();
}
