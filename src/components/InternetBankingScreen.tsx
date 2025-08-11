'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Check, X } from 'lucide-react';

export default function InternetBankingScreen() {
  const router = useRouter();
  const [customerId, setCustomerId] = useState('52692007');
  const [password, setPassword] = useState('');
  const [iPin, setIPin] = useState('');

  const handleLoginToAxis = () => {
    console.log('Login to AXIS Netbanking clicked');
    // Navigate to auto repayment loader
    router.push('/auto-repayment-loader');
  };

  const handleNumberClick = (number: string) => {
    if (password.length < 8) {
      setPassword(prev => prev + '•');
    }
  };

  const handleClear = () => {
    setPassword(prev => prev.slice(0, -1));
  };

  const handleConfirm = () => {
    console.log('iPin confirmed:', iPin);
    handleLoginToAxis();
  };

  return (
    <div className="min-h-screen bg-blue-50 text-black flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex items-center p-4">
          <Image
            src="/axis.svg"
            alt="Axis Bank Logo"
            width={32}
            height={32}
            className="object-contain mr-3"
          />
          <h1 className="text-lg font-medium text-black">Axis Bank Internet Banking</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6">
        <div className="space-y-6">
          {/* Managed through text */}
          <p className="text-gray-600 text-sm">Managed through Axis Bank</p>

          {/* Customer ID */}
          <div>
            <label className="text-black text-sm font-medium mb-2 block">Customer ID</label>
            <input
              type="text"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-black text-sm font-medium mb-2 block">Password</label>
                          <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password using numpad"
                readOnly
              />
          </div>

          {/* Login Button */}
          <button
            onClick={handleLoginToAxis}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Login to AXIS Netbanking
          </button>

          {/* Warning Message */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-start">
            <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              <span className="text-white text-xs">!</span>
            </div>
            <p className="text-yellow-800 text-sm">
              Authenticate with ICICI Netbanking iPin to setup your E-NACH Mandate
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Number Pad at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 pt-4 pb-6">
        <div className="grid grid-cols-3 gap-1 px-4">
          {/* Row 1 */}
          <button
            onClick={() => handleNumberClick('1')}
            onTouchStart={() => {}}
            className="h-14 flex flex-col items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors touch-manipulation select-none"
          >
            <span className="text-xl font-semibold text-black">1</span>
          </button>
          <button
            onClick={() => handleNumberClick('2')}
            onTouchStart={() => {}}
            className="h-14 flex flex-col items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors touch-manipulation select-none"
          >
            <span className="text-xl font-semibold text-black">2</span>
            <span className="text-xs text-gray-600 font-medium">ABC</span>
          </button>
          <button
            onClick={() => handleNumberClick('3')}
            onTouchStart={() => {}}
            className="h-14 flex flex-col items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors touch-manipulation select-none"
          >
            <span className="text-xl font-semibold text-black">3</span>
            <span className="text-xs text-gray-600 font-medium">DEF</span>
          </button>

          {/* Row 2 */}
          <button
            onClick={() => handleNumberClick('4')}
            onTouchStart={() => {}}
            className="h-14 flex flex-col items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors touch-manipulation select-none"
          >
            <span className="text-xl font-semibold text-black">4</span>
            <span className="text-xs text-gray-600 font-medium">GHI</span>
          </button>
          <button
            onClick={() => handleNumberClick('5')}
            onTouchStart={() => {}}
            className="h-14 flex flex-col items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors touch-manipulation select-none"
          >
            <span className="text-xl font-semibold text-black">5</span>
            <span className="text-xs text-gray-600 font-medium">JKL</span>
          </button>
          <button
            onClick={() => handleNumberClick('6')}
            onTouchStart={() => {}}
            className="h-14 flex flex-col items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors touch-manipulation select-none"
          >
            <span className="text-xl font-semibold text-black">6</span>
            <span className="text-xs text-gray-600 font-medium">MNO</span>
          </button>

          {/* Row 3 */}
          <button
            onClick={() => handleNumberClick('7')}
            onTouchStart={() => {}}
            className="h-14 flex flex-col items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors touch-manipulation select-none"
          >
            <span className="text-xl font-semibold text-black">7</span>
            <span className="text-xs text-gray-600 font-medium">PQRS</span>
          </button>
          <button
            onClick={() => handleNumberClick('8')}
            onTouchStart={() => {}}
            className="h-14 flex flex-col items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors touch-manipulation select-none"
          >
            <span className="text-xl font-semibold text-black">8</span>
            <span className="text-xs text-gray-600 font-medium">TUV</span>
          </button>
          <button
            onClick={() => handleNumberClick('9')}
            onTouchStart={() => {}}
            className="h-14 flex flex-col items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors touch-manipulation select-none"
          >
            <span className="text-xl font-semibold text-black">9</span>
            <span className="text-xs text-gray-600 font-medium">WXYZ</span>
          </button>

          {/* Row 4 */}
          <button
            onClick={handleClear}
            onTouchStart={() => {}}
            className="h-14 flex items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors touch-manipulation select-none"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => handleNumberClick('0')}
            onTouchStart={() => {}}
            className="h-14 flex flex-col items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors touch-manipulation select-none"
          >
            <span className="text-xl font-semibold text-black">0</span>
            <span className="text-xs text-gray-600 font-medium">.</span>
          </button>
          <button
            onClick={handleConfirm}
            onTouchStart={() => {}}
            className="h-14 bg-blue-700 flex items-center justify-center hover:bg-blue-800 active:bg-blue-900 transition-colors touch-manipulation select-none rounded"
          >
            <Check className="w-5 h-5 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
