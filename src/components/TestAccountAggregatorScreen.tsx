'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Star, CheckCircle } from 'lucide-react';

export default function TestAccountAggregatorScreen() {
  const router = useRouter();
  const [selectedStep, setSelectedStep] = useState(1);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleBackClick = () => {
    router.back();
  };

  const handleNext = () => {
    if (selectedStep < 4) {
      setSelectedStep(selectedStep + 1);
    } else {
      // Navigate to loan offers screen
      router.push('/loan-offers');
    }
  };

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false);
      setSelectedStep(2);
    }, 2000);
  };

  const renderStep = () => {
    switch (selectedStep) {
      case 1:
        return (
          <div className="px-6 pb-8">
            {/* FinVu Logo and Info */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg">
                <Image
                  src="https://finvu.in/static/media/brand.231c3b634835c642df41.png"
                  alt="FinVu Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">FinVu Account Aggregator</h2>
              <p className="text-gray-400 text-sm">Connect your bank accounts securely</p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white text-sm">RBI approved Account Aggregator</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white text-sm">Bank-grade security</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white text-sm">Instant account verification</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white text-sm">No passwords stored</span>
              </div>
            </div>

            {/* Connect Button */}
            <button
              onClick={handleConnect}
              disabled={isConnecting}
              className={`w-full py-4 px-6 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-all ${
                isConnecting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90 cursor-pointer'
              }`}
              style={{ 
                backgroundColor: '#2170BC',
                height: '56px'
              }}
            >
              {isConnecting ? (
                <>
                  Connecting to FinVu...
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </>
              ) : (
                <>
                  Connect with FinVu
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        );

      case 2:
        return (
          <div className="px-6 pb-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Connected Successfully!</h2>
              <p className="text-gray-400 text-sm">Your FinVu account has been linked</p>
            </div>

            {/* Account Summary */}
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <h3 className="text-white font-medium mb-3">Connected Accounts</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Savings Account</span>
                  <span className="text-green-400 text-sm">Connected</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Current Account</span>
                  <span className="text-green-400 text-sm">Connected</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Fixed Deposit</span>
                  <span className="text-green-400 text-sm">Connected</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-4 px-6 rounded-lg font-medium text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: '#2170BC',
                height: '56px'
              }}
            >
              Continue
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        );

      case 3:
        return (
          <div className="px-6 pb-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Data Consent</h2>
              <p className="text-gray-400 text-sm">Review your data sharing preferences</p>
            </div>

            {/* Consent Details */}
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <h3 className="text-white font-medium mb-3">Data Access Permission</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Account Balance</p>
                    <p className="text-gray-400 text-xs">Current balance information</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Transaction History</p>
                    <p className="text-gray-400 text-xs">Last 12 months transactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Account Profile</p>
                    <p className="text-gray-400 text-xs">Basic account information</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-4 px-6 rounded-lg font-medium text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: '#2170BC',
                height: '56px'
              }}
            >
              Approve Consent
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        );

      case 4:
        return (
          <div className="px-6 pb-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">All Set!</h2>
              <p className="text-gray-400 text-sm">Your financial data is now ready for loan processing</p>
            </div>

            {/* Summary */}
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <h3 className="text-white font-medium mb-3">Setup Complete</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Account Aggregator</span>
                  <span className="text-green-400 text-sm">FinVu</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Accounts Linked</span>
                  <span className="text-green-400 text-sm">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Data Consent</span>
                  <span className="text-green-400 text-sm">Approved</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Valid Until</span>
                  <span className="text-white text-sm">Dec 2025</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-4 px-6 rounded-lg font-medium text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: '#2170BC',
                height: '56px'
              }}
            >
              Continue to Loan Offers
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="bg-black">
        <div className="flex items-center justify-between p-6">
          <button
            onClick={handleBackClick}
            className="text-white hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Step {selectedStep} of 4</span>
          </div>
        </div>

        {/* Logo and Title Section */}
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
          <h1 className="text-2xl font-bold text-white mb-2">Account Aggregator Setup</h1>
          <p className="text-gray-400 text-sm">Securely connect your financial accounts</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(selectedStep / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Dynamic Content */}
      {renderStep()}
    </div>
  );
}
