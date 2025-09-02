'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Search, Shield, FileText, Clock, Calendar, BarChart3, Building2 } from 'lucide-react';
import accountAggregators from '@/data/account-aggregator.json';

export default function TestAccountAggregatorScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAggregator, setSelectedAggregator] = useState(accountAggregators[0]);
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [selectedInstitution, setSelectedInstitution] = useState('');
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleBackClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleMobileSubmit = () => {
    if (mobileNumber.length === 10) {
      handleNext();
    }
  };

  const handleOtpSubmit = () => {
    if (otp.length === 6) {
      handleNext();
    }
  };

  const handleInstitutionSelect = (institution: any) => {
    setSelectedInstitution(institution);
    handleNext();
  };

  const handleAccountLink = () => {
    handleNext();
  };

  const handleConsentAccept = () => {
    handleNext();
  };

  const handleGetLoanOffers = () => {
    router.push('/loan-offers');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: // Mobile Number Entry
        return (
          <div className="px-6 pb-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src={selectedAggregator.icon}
                  alt={selectedAggregator.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedAggregator.name}</h2>
              <p className="text-gray-600 text-sm">Register to link your accounts, view balance and approve data sharing consents.</p>
            </div>

                         <div className="space-y-6">
               <div>
                 <label className="block text-gray-700 text-sm font-medium mb-2">Enter Mobile Number</label>
                 <input
                   type="tel"
                   value={mobileNumber}
                   onChange={(e) => setMobileNumber(e.target.value)}
                   placeholder="Enter your mobile number"
                   className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   maxLength={10}
                   suppressHydrationWarning
                 />
                 <p className="text-gray-600 text-sm mt-2">You will receive a 6-digit number as OTP</p>
               </div>

              <div className="text-center">
                <p className="text-gray-600 text-sm mb-4">
                  By continuing, you agree to our <span className="text-blue-600 cursor-pointer">Terms and Conditions</span>
                </p>
                
                <div className="flex gap-3">
                  <button 
                    className="flex-1 py-3 px-4 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                    suppressHydrationWarning
                  >
                    LOGIN
                  </button>
                  <button
                    onClick={handleMobileSubmit}
                    disabled={mobileNumber.length !== 10}
                    className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-xs">
                {selectedAggregator.name} is a brand of Cookiejar Technologies Pvt Ltd, a regulated and licensed NBFC AA by RBI
              </p>
            </div>
          </div>
        );

      case 2: // OTP Verification
        return (
          <div className="px-6 pb-8 text-black">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src={selectedAggregator.icon}
                  alt={selectedAggregator.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Verify OTP</h2>
              <p className="text-gray-600 text-sm">Enter the OTP sent to {mobileNumber}</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl tracking-widest text-black"
                  maxLength={6}
                />
              </div>

              <button
                onClick={handleOtpSubmit}
                disabled={otp.length !== 6}
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Verify OTP
              </button>

              <div className="text-center">
                <p className="text-gray-500 text-sm">Didn't receive OTP?</p>
                <button className="text-blue-600 text-sm font-medium hover:underline">Resend OTP</button>
              </div>
            </div>
          </div>
        );

      case 3: // All Set Screen
        return (
          <div className="px-6 pb-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src={selectedAggregator.icon}
                  alt={selectedAggregator.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">All Set!</h2>
              <p className="text-gray-600 text-sm">Your mobile number has been verified successfully</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="font-semibold text-gray-800">Verification Complete</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>✓ Mobile number verified</p>
                <p>✓ Account aggregator connected</p>
                <p>✓ Ready to proceed</p>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Continue
            </button>
          </div>
        );

      case 4: // Select Institution
        return (
          <div className="px-6 pb-8 text-black">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Institution</h2>
              <p className="text-gray-600 text-sm">Your mobile no {mobileNumber} will be used to find your accounts with the institution.</p>
            </div>

            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search institution or type Bank"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <h3 className="text-gray-700 font-semibold mb-4">INSTITUTIONS</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Axis Bank', logo: '/axis.svg', color: 'bg-purple-100' },
                  { name: 'IndusInd Bank', logo: '/sbi.svg', color: 'bg-red-100' },
                  { name: 'FIN Bank', logo: '/hdfc.svg', color: 'bg-blue-100' },
                  { name: 'Other Bank', logo: '/icici.svg', color: 'bg-orange-100' }
                ].map((bank, index) => (
                  <div
                    key={index}
                    onClick={() => handleInstitutionSelect(bank)}
                    className={`${bank.color} p-4 rounded-lg border border-gray-200 cursor-pointer hover:border-blue-300 transition-colors text-center`}
                  >
                    <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Image
                        src={bank.logo}
                        alt={bank.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-800">{bank.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5: // Link Account
        return (
          <div className="px-6 pb-8 text-black">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Link Account</h2>
              <p className="text-gray-600 text-sm">Select from below accounts to link to your id. OTP will be sent by your institution for verification.</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { type: 'SAVINGS', number: 'XXXXXXX7564', logo: '/axis.svg', name: 'AXIS BANK' },
                { type: 'CURRENT', number: 'XXXXXXX8123', logo: '/axis.svg', name: 'AXIS BANK' }
              ].map((account, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Image
                        src={account.logo}
                        alt={account.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{account.name}</p>
                      <p className="text-sm text-gray-600">{account.number}</p>
                      <p className="text-sm text-blue-600 font-medium">{account.type}</p>
                    </div>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              ))}
            </div>

            <button
              onClick={handleAccountLink}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              LINK
            </button>
          </div>
        );

      case 6: // OTP for Account Linking
        return (
          <div className="px-6 pb-8 text-black">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/axis.svg"
                  alt="Axis Bank"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Verify Account Linking</h2>
              <p className="text-gray-600 text-sm">Enter the OTP sent by Axis Bank to verify account linking</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl tracking-widest text-black"
                  maxLength={6}
                  style={{ color: 'black' }}
                />
              </div>

              <button
                onClick={handleNext}
                disabled={otp.length !== 6}
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Verify & Continue
              </button>
            </div>
          </div>
        );

      case 7: // Consent Screen
        return (
          <div className="px-6 pb-8">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/sidbi.png"
                    alt="SIDBI"
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                    priority
                    onError={() => {
                      console.error('Failed to load SIDBI logo with Next.js Image');
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-blue-600">SIDBI</h2>
                  <p className="text-gray-600 text-sm">Requires your consent to access account information</p>
                  <p className="text-gray-500 text-xs">Requested on 12 Apr 2021</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="font-semibold text-gray-800">Details of access on the account information</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Periodic</p>
                    <p className="text-gray-600 text-sm">Information can be fetched 20 times a DAY</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <Calendar className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">From 12 Apr 2021 to 12 Apr 2024</p>
                    <p className="text-gray-600 text-sm">Profile, Summary, Transactions of the account</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Aggregated Statement</p>
                    <p className="text-gray-600 text-sm">Purpose of Access</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">12 Apr 2024</p>
                    <p className="text-gray-600 text-sm">Consent Expiry</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">STORE FOR 2 YEAR(s)</p>
                    <p className="text-gray-600 text-sm">Consent data access</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">SELECT ACCOUNTS</h3>
              <p className="text-gray-600 text-sm mb-3">Information will be accessed from selected accounts</p>
              
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/axis.svg"
                      alt="Axis Bank"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">AXIS BANK</p>
                    <p className="text-sm text-gray-600">XXXXXXX7564</p>
                    <p className="text-sm text-blue-600 font-medium">SAVINGS</p>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              
              <button className="text-blue-600 text-sm font-medium mt-2 hover:underline">ADD ACCOUNT</button>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 py-3 px-4 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                DENY
              </button>
              <button
                onClick={handleConsentAccept}
                className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                ACCEPT
              </button>
            </div>
          </div>
        );

      case 8: // Consent Accepted
        return (
          <div className="px-6 pb-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-16 h-16 text-green-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Consent Accepted!</h2>
              <p className="text-gray-600 text-sm">You will be redirected in 5 secs.</p>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              DONE
            </button>

            <div className="mt-8 text-center">
              <p className="text-green-600 text-sm">Download FINVU app to manage consents and more!</p>
            </div>
          </div>
        );

      case 9: // Information Shared
        return (
          <div className="px-6 pb-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Information shared!</h2>
              <p className="text-gray-600 text-sm">Online information sharing to get loan offers from lenders is complete. Proceed to request loan offers.</p>
            </div>

            <button
              onClick={handleGetLoanOffers}
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              GET LOAN OFFERS
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={handleBackClick}
            className="text-gray-600 hover:text-gray-800 transition-colors"
            suppressHydrationWarning
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">Step {currentStep} of 9</span>
          </div>
        </div>
      </div>

      {/* Dynamic Content */}
      {renderStep()}
    </div>
  );
}


