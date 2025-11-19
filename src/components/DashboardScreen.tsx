'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { HandCoins, BanknoteIcon, Receipt, WalletCards, House, IndianRupee, FileText, Settings, ChevronDown, Clock, XCircle, CheckCircle2, TrendingUp, Edit, Users, CreditCard, Download, Unlink, Bell, Globe, HelpCircle, MessageCircle, LogOut, ChevronRight } from 'lucide-react';

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
              className="relative bg-white text-black px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-100 transition-all duration-300 whitespace-nowrap overflow-hidden"
              style={{ width: '150px', height: '28px' }}
            >
              <span className="relative z-10">+ Get a new Loan</span>
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, #00000020 20%, #00000040 40%, #00000060 50%, #00000040 60%, #00000020 80%, transparent 100%)',
                  animation: 'cloudyFlow 2s ease-in-out infinite',
                  width: '200%',
                  left: '-50%'
                }}
              ></div>
              <style jsx>{`
                @keyframes cloudyFlow {
                  0% {
                    transform: translateX(-100%);
                  }
                  100% {
                    transform: translateX(100%);
                  }
                }
              `}</style>
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="px-6 space-y-6 overflow-y-auto pt-6 opacity-30">
        {activeTab === 'home' && (
          <>
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
                  <span className="text-sm text-gray-200">Active Loans</span>
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
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <div>
                    <p className="text-sm text-gray-400">HDFC Bank</p>
                    <p className="font-medium text-white">Business Loan</p>
                    <p className="text-xs text-gray-500">Sanctioned: ₹5,00,000</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">₹3,50,000</span>
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <div>
                    <p className="text-sm text-gray-400">ICICI Bank</p>
                    <p className="font-medium text-white">Working Capital</p>
                    <p className="text-xs text-gray-500">Sanctioned: ₹8,00,000</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">₹6,20,000</span>
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
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <div>
                    <p className="text-sm text-gray-400">Axis Bank</p>
                    <p className="font-medium text-white">Term Loan</p>
                    <p className="text-xs text-gray-500">Completed: Jan 2024</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">₹10,00,000</span>
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'loans' && (
          <div className="space-y-6 pb-4">
            {/* Loan Statistics Title */}
            <div className="text-center pt-2">
              <h2 className="text-2xl font-bold text-white">Loan Statistics</h2>
            </div>

            {/* Loan Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Active Loans */}
              <div className="bg-black rounded-lg p-5 border border-gray-800">
                <div className="flex flex-col items-center gap-3">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">4</p>
                    <p className="text-sm text-gray-400">Active Loans</p>
                  </div>
                </div>
              </div>

              {/* Pending Decisions */}
              <div className="bg-black rounded-lg p-5 border border-gray-800">
                <div className="flex flex-col items-center gap-3">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">2</p>
                    <p className="text-sm text-gray-400">Pending Decisions</p>
                  </div>
                </div>
              </div>

              {/* Rejected Loans */}
              <div className="bg-black rounded-lg p-5 border border-gray-800">
                <div className="flex flex-col items-center gap-3">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">1</p>
                    <p className="text-sm text-gray-400">Rejected Loans</p>
                  </div>
                </div>
              </div>

              {/* Finished Loans */}
              <div className="bg-black rounded-lg p-5 border border-gray-800">
                <div className="flex flex-col items-center gap-3">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">8</p>
                    <p className="text-sm text-gray-400">Finished Loans</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Loans List */}
            <div className="bg-black rounded-lg p-4 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white text-lg">Active Loans</h3>
                <span className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded-full">4 Active</span>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">HDFC Business Loan</p>
                      <p className="text-xs text-gray-400 mt-1">Loan ID: HDFC-2024-001</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹3,50,000</p>
                      <p className="text-xs text-green-500">Active</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-gray-500">Sanctioned: ₹5,00,000</span>
                    <span className="text-xs text-gray-500">EMI: ₹12,500</span>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">ICICI Working Capital</p>
                      <p className="text-xs text-gray-400 mt-1">Loan ID: ICICI-2024-002</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹6,20,000</p>
                      <p className="text-xs text-green-500">Active</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-gray-500">Sanctioned: ₹8,00,000</span>
                    <span className="text-xs text-gray-500">EMI: ₹18,000</span>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">SBI Term Loan</p>
                      <p className="text-xs text-gray-400 mt-1">Loan ID: SBI-2024-003</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹2,80,000</p>
                      <p className="text-xs text-green-500">Active</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-gray-500">Sanctioned: ₹4,00,000</span>
                    <span className="text-xs text-gray-500">EMI: ₹15,000</span>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">Axis Business Credit</p>
                      <p className="text-xs text-gray-400 mt-1">Loan ID: AXIS-2024-004</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹1,90,000</p>
                      <p className="text-xs text-green-500">Active</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-gray-500">Sanctioned: ₹3,00,000</span>
                    <span className="text-xs text-gray-500">EMI: ₹10,500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Decisions */}
            <div className="bg-black rounded-lg p-4 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white text-lg">Pending Decisions</h3>
                <span className="text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded-full">2 Pending</span>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">Kotak Business Loan</p>
                      <p className="text-xs text-gray-400 mt-1">Application: KOTAK-2024-005</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹7,50,000</p>
                      <p className="text-xs text-blue-500">Under Review</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-gray-500">Submitted: 2 days ago</span>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">IDFC First Credit Line</p>
                      <p className="text-xs text-gray-400 mt-1">Application: IDFC-2024-006</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹5,00,000</p>
                      <p className="text-xs text-blue-500">Under Review</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-gray-500">Submitted: 5 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'invoices' && (
          <div className="space-y-6 pb-4">
            {/* Invoice Statistics Title */}
            <div className="text-center pt-2">
              <h2 className="text-2xl font-bold text-white">Invoice Statistics</h2>
            </div>

            {/* Invoice Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Total Invoices */}
              <div className="bg-black rounded-lg p-5 border border-gray-800">
                <div className="flex flex-col items-center gap-3">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">24</p>
                    <p className="text-sm text-gray-400">Total Invoices</p>
                  </div>
                </div>
              </div>

              {/* Pending Invoices */}
              <div className="bg-black rounded-lg p-5 border border-gray-800">
                <div className="flex flex-col items-center gap-3">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">8</p>
                    <p className="text-sm text-gray-400">Pending</p>
                  </div>
                </div>
              </div>

              {/* Paid Invoices */}
              <div className="bg-black rounded-lg p-5 border border-gray-800">
                <div className="flex flex-col items-center gap-3">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">14</p>
                    <p className="text-sm text-gray-400">Paid</p>
                  </div>
                </div>
              </div>

              {/* Overdue Invoices */}
              <div className="bg-black rounded-lg p-5 border border-gray-800">
                <div className="flex flex-col items-center gap-3">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">2</p>
                    <p className="text-sm text-gray-400">Overdue</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Invoices */}
            <div className="bg-black rounded-lg p-4 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white text-lg">Recent Invoices</h3>
                <span className="text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded-full">24 Total</span>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">INV-2024-001</p>
                      <p className="text-xs text-gray-400 mt-1">Client: ABC Enterprises</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹45,000</p>
                      <p className="text-xs text-green-500">Paid</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-gray-500">Date: 15 Jan 2024</span>
                    <span className="text-xs text-gray-500">Due: 30 Jan 2024</span>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">INV-2024-002</p>
                      <p className="text-xs text-gray-400 mt-1">Client: XYZ Corporation</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹78,500</p>
                      <p className="text-xs text-yellow-500">Pending</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-gray-500">Date: 18 Jan 2024</span>
                    <span className="text-xs text-gray-500">Due: 02 Feb 2024</span>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">INV-2024-003</p>
                      <p className="text-xs text-gray-400 mt-1">Client: Tech Solutions Ltd</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹1,25,000</p>
                      <p className="text-xs text-green-500">Paid</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-gray-500">Date: 20 Jan 2024</span>
                    <span className="text-xs text-gray-500">Due: 05 Feb 2024</span>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">INV-2024-004</p>
                      <p className="text-xs text-gray-400 mt-1">Client: Global Industries</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹92,300</p>
                      <p className="text-xs text-yellow-500">Pending</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-gray-500">Date: 22 Jan 2024</span>
                    <span className="text-xs text-gray-500">Due: 07 Feb 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Invoices */}
            <div className="bg-black rounded-lg p-4 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white text-lg">Pending Invoices</h3>
                <span className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded-full">8 Pending</span>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">INV-2024-002</p>
                      <p className="text-xs text-gray-400 mt-1">Client: XYZ Corporation</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹78,500</p>
                      <p className="text-xs text-yellow-500">Pending</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-gray-500">Due Date: 02 Feb 2024</span>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">INV-2024-004</p>
                      <p className="text-xs text-gray-400 mt-1">Client: Global Industries</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹92,300</p>
                      <p className="text-xs text-yellow-500">Pending</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-gray-500">Due Date: 07 Feb 2024</span>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">INV-2024-005</p>
                      <p className="text-xs text-gray-400 mt-1">Client: Digital Services Inc</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹56,800</p>
                      <p className="text-xs text-yellow-500">Pending</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-gray-500">Due Date: 10 Feb 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overdue Invoices */}
            <div className="bg-black rounded-lg p-4 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white text-lg">Overdue Invoices</h3>
                <span className="text-xs bg-red-500/20 text-red-500 px-2 py-1 rounded-full">2 Overdue</span>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">INV-2023-098</p>
                      <p className="text-xs text-gray-400 mt-1">Client: Old Client Co</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹35,000</p>
                      <p className="text-xs text-red-500">Overdue</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-red-500">Overdue by 15 days</span>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-white">INV-2023-099</p>
                      <p className="text-xs text-gray-400 mt-1">Client: Legacy Business</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₹42,500</p>
                      <p className="text-xs text-red-500">Overdue</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-red-500">Overdue by 8 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6 pb-4">
            {/* Organisation Section */}
            <div className="bg-black rounded-lg p-4 border border-gray-800">
              <button className="w-full flex items-center justify-between py-3 px-2 hover:bg-gray-900/50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <Edit className="w-5 h-5 text-blue-500" />
                  <span className="text-blue-500 font-medium">EDIT Organisation Details</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
              
              <button className="w-full flex items-center justify-between py-3 px-2 hover:bg-gray-900/50 rounded-lg transition-colors mt-2">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-blue-500 font-medium">Add members to Organisation</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* User Profile Section */}
            <div className="bg-black rounded-lg p-4 border border-gray-800">
              <div className="flex items-center gap-2 mb-3 px-2">
                <Edit className="w-5 h-5 text-white" />
                <h3 className="font-semibold text-white text-base">EDIT User Profile</h3>
              </div>
              
              <div className="space-y-1">
                <button className="w-full flex items-center justify-between py-3 px-4 pl-8 hover:bg-gray-900/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-4 h-4 text-gray-400" />
                    <span className="text-white text-sm">Manage payment modes</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between py-3 px-4 pl-8 hover:bg-gray-900/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <Download className="w-4 h-4 text-gray-400" />
                    <span className="text-white text-sm">Export my data</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between py-3 px-4 pl-8 hover:bg-gray-900/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <Unlink className="w-4 h-4 text-gray-400" />
                    <span className="text-white text-sm">Unlink my data</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Notification Preferences Section */}
            <div className="bg-black rounded-lg p-4 border border-gray-800">
              <div className="flex items-center gap-2 mb-3 px-2">
                <Bell className="w-5 h-5 text-white" />
                <h3 className="font-semibold text-white text-base">Notification Preferences</h3>
              </div>
              
              <div className="space-y-1">
                <button className="w-full flex items-center justify-between py-3 px-4 pl-8 hover:bg-gray-900/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <span className="text-white text-sm">Change Language</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between py-3 px-4 pl-8 hover:bg-gray-900/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-gray-400" />
                    <span className="text-white text-sm">FAQ</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between py-3 px-4 pl-8 hover:bg-gray-900/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-gray-400" />
                    <span className="text-white text-sm">Support</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Log Out Section */}
            <div className="bg-black rounded-lg p-4 border border-gray-800">
              <button className="w-full flex items-center justify-center gap-3 py-3 px-2 hover:bg-red-900/20 rounded-lg transition-colors">
                <LogOut className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Log Out</span>
              </button>
            </div>
          </div>
        )}
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
