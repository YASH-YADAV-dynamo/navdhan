'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { HandCoins, BanknoteIcon, Receipt, WalletCards, House, IndianRupee, FileText, Settings, ChevronDown } from 'lucide-react';

export default function DashboardScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#46454543] text-white pb-20">
      {/* Header - Black background */}
      <div className="bg-black">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Navdhan Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/india-flag.png"
              alt="India Flag"
              width={16}
              height={12}
              className="rounded-sm"
            />
            <ChevronDown className="w-3 h-3 text-white" />
          </div>
        </div>

        {/* Company Info - Inside black header */}
        <div className="px-6 pb-6">
          <div className="mb-3">
            <h3 className="text-white">Welcome</h3>
            <h3 className="text-lg font-bold text-white">Plaintech Suppliers<br></br> Pvt. Ltd.</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-sm">PAN: ABCDE1234F</p>
            <button 
              onClick={() => router.push('/consent')}
              className="border border-white text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-white hover:text-black transition-colors whitespace-nowrap"
              style={{ width: '150px', height: '28px' }}
            >
              + Get a new Loan
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="px-6 space-y-6 overflow-y-auto pt-6">

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Kubar Score */}
          <div className="bg-black rounded-lg p-4">
            <div className="flex flex-col items-center gap-2 mb-2">
              <Image
                src="/logo2.png"
                alt="Kubar Logo"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-sm text-gray-400">Kubar Score</span>
            </div>
            <p className="text-2xl font-bold text-white text-center">85/100</p>
          </div>

          {/* Active Loans */}
          <div className="bg-black rounded-lg p-4">
            <div className="flex flex-col items-center gap-2 mb-2">
              <HandCoins className="w-6 h-6 text-yellow-500" />
              <span className="text-sm text-gray-400">Active Loans</span>
            </div>
            <p className="text-2xl font-bold text-white text-center">4</p>
          </div>

          {/* Payment Due */}
          <div className="bg-black rounded-lg p-4">
            <div className="flex flex-col items-center gap-2 mb-2">
              <BanknoteIcon className="w-6 h-6 text-green-500" />
              <span className="text-sm text-gray-400">Payment Due</span>
            </div>
            <p className="text-2xl font-bold text-white text-center">23/0/25</p>
          </div>

          {/* Total Credit */}
          <div className="bg-black rounded-lg p-4">
            <div className="flex flex-col items-center gap-2 mb-2">
              <Receipt className="w-6 h-6 text-purple-500" />
              <span className="text-sm text-gray-400">Total Credit</span>
            </div>
            <p className="text-2xl font-bold text-white text-center">23 Lakh</p>
          </div>
        </div>

        {/* Active Loans Section */}
        <div className="bg-black rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <WalletCards className="w-5 h-5 text-gray-400" />
            <h3 className="font-medium text-white">Active Loans</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">NBFC Name</p>
                <p className="font-medium text-white">Loan Name</p>
                <p className="text-xs text-gray-500">NBFC Name</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-white">Amount</span>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">NBFC Name</p>
                <p className="font-medium text-white">Loan Name</p>
                <p className="text-xs text-gray-500">NBFC Name</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-white">Amount</span>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Past Loans Section */}
        <div className="bg-black rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <WalletCards className="w-5 h-5 text-gray-400" />
            <h3 className="font-medium text-white">Past Loans</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">NBFC Name</p>
                <p className="font-medium text-white">Loan Name</p>
                <p className="text-xs text-gray-500">NBFC Name</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-white">Amount</span>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">NBFC Name</p>
                <p className="font-medium text-white">Loan Name</p>
                <p className="text-xs text-gray-500">NBFC Name</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-white">Amount</span>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Navigation */}
      <div 
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-6 rounded-3xl" 
        style={{ 
          backgroundColor: '#2170BC',
          width: '324.86px',
          height: '59.38px'
        }}
      >
        <div className="flex items-center justify-between h-full px-3">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 py-2 px-3 transition-colors ${
              activeTab === 'home' ? 'rounded-full' : 'rounded-3xl hover:opacity-80'
            }`}
            style={{ 
              backgroundColor: activeTab === 'home' ? '#003D77' : 'transparent',
              minWidth: '60px'
            }}
          >
            <House className="w-4 h-4 text-white" />
            <span className="text-[10px] text-white leading-tight">Home</span>
          </button>

          <button
            onClick={() => setActiveTab('loans')}
            className={`flex flex-col items-center gap-1 py-2 px-3 transition-colors ${
              activeTab === 'loans' ? 'rounded-full' : 'rounded-3xl hover:opacity-80'
            }`}
            style={{ 
              backgroundColor: activeTab === 'loans' ? '#003D77' : 'transparent',
              minWidth: '60px'
            }}
          >
            <IndianRupee className="w-4 h-4 text-white" />
            <span className="text-[10px] text-white leading-tight">Loans</span>
          </button>

          <button
            onClick={() => setActiveTab('invoices')}
            className={`flex flex-col items-center gap-1 py-2 px-3 transition-colors ${
              activeTab === 'invoices' ? 'rounded-full' : 'rounded-3xl hover:opacity-80'
            }`}
            style={{ 
              backgroundColor: activeTab === 'invoices' ? '#003D77' : 'transparent',
              minWidth: '60px'
            }}
          >
            <FileText className="w-4 h-4 text-white" />
            <span className="text-[10px] text-white leading-tight">Invoices</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex flex-col items-center gap-1 py-2 px-3 transition-colors ${
              activeTab === 'settings' ? 'rounded-full' : 'rounded-3xl hover:opacity-80'
            }`}
            style={{ 
              backgroundColor: activeTab === 'settings' ? '#003D77' : 'transparent',
              minWidth: '60px'
            }}
          >
            <Settings className="w-4 h-4 text-white" />
            <span className="text-[10px] text-white leading-tight">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}
