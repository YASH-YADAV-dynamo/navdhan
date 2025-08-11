'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function LoanDisbursedScreen() {
  const router = useRouter();

  const handleBackClick = () => {
    // Disable back button during loan disbursement
    console.log('Back button disabled during loan disbursement');
  };

  const handleHelpClick = () => {
    console.log('Help clicked');
  };

  const handleFinanceOtherInvoice = () => {
    console.log('Finance Other Invoice clicked');
    // Navigate to next route or handle action
    router.push('/loan-disbursed-status');
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
          
          <button
            onClick={handleHelpClick}
            className="border border-white text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-white hover:text-black transition-colors"
          >
            Help?
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8">
        {/* Navdhan Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Navdhan Logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
        
        {/* Success Message */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-8">
            Loan disbursed!
          </h1>
        </div>

        {/* Loan Details */}
        <div className="space-y-0 mb-12">
          {/* Status */}
          <div className="flex justify-between items-center py-4 border-b border-gray-500">
            <span className="text-white text-sm">Status</span>
            <span className="text-white text-sm font-medium">Disbursed</span>
          </div>

          {/* Lender */}
          <div className="flex justify-between items-center py-4 border-b border-gray-500">
            <span className="text-white text-sm">Lender</span>
            <span className="text-white text-sm font-medium">SIDBI</span>
          </div>

          {/* Total Loan */}
          <div className="flex justify-between items-center py-4 border-b border-gray-500">
            <span className="text-white text-sm">Total Loan</span>
            <span className="text-white text-sm font-medium">Rs. 30,595</span>
          </div>

          {/* Deposit Account */}
          <div className="flex justify-between items-center py-4 border-b border-gray-500">
            <span className="text-white text-sm">Deposit Account</span>
            <span className="text-white text-sm font-medium">AXIS ****7564</span>
          </div>

          {/* Total Repayment */}
          <div className="flex justify-between items-center py-4 border-b border-gray-500">
            <span className="text-white text-sm">Total Repayment</span>
            <span className="text-white text-sm font-medium">Rs. 31,544</span>
          </div>

          {/* Due Date */}
          <div className="flex justify-between items-center py-4 border-b border-gray-500">
            <span className="text-white text-sm">Due Date</span>
            <span className="text-white text-sm font-medium">1 Apr 20 (90 days)</span>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-black p-6">
        <button
          onClick={handleFinanceOtherInvoice}
          className="w-full text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center"
          style={{ backgroundColor: '#2170BC' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1a5a9a'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2170BC'}
        >
          FINANCE OTHER INVOICE
        </button>
      </div>
    </div>
  );
}
