'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Search, RefreshCw, ChevronRight } from 'lucide-react';

interface Invoice {
  id: string;
  companyName: string;
  date: string;
  invoiceNumber: string;
  amount: number;
}

const sampleInvoices: Invoice[] = [
  {
    id: '1',
    companyName: 'Amazon Pvt. Ltd.',
    date: '24 Aug',
    invoiceNumber: '23001832188',
    amount: 32205
  },
  {
    id: '2',
    companyName: 'UrbanClap Pvt. Ltd.',
    date: '24 Aug',
    invoiceNumber: '23001832187',
    amount: 64410
  },
  {
    id: '3',
    companyName: 'Swiggy Pvt. Ltd.',
    date: '23 Aug',
    invoiceNumber: '23001832186',
    amount: 15000
  },
  {
    id: '4',
    companyName: 'Rivigo Pvt. Ltd.',
    date: '22 Aug',
    invoiceNumber: '23001832184',
    amount: 30000
  },
  {
    id: '5',
    companyName: 'Prakash Exports Pvt. Ltd.',
    date: '22 Aug',
    invoiceNumber: '23001832183',
    amount: 40000
  },
  {
    id: '6',
    companyName: 'Prakash Exports Pvt. Ltd.',
    date: '21 Aug',
    invoiceNumber: '23001832182',
    amount: 25000
  }
];

export default function GstInvoiceScreen() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);

  const handleBackClick = () => {
    router.back();
  };

  const handleHelpClick = () => {
    // Handle help functionality
    console.log('Help clicked');
  };

  const handleRefresh = () => {
    // Handle refresh functionality
    console.log('Refresh clicked');
  };

  const handleContinue = () => {
    // Navigate to bank choice screen
    router.push('/bank-choice');
  };

  const filteredInvoices = sampleInvoices.filter(invoice =>
    invoice.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.invoiceNumber.includes(searchTerm)
  );

  const toggleInvoiceSelection = (invoiceId: string) => {
    setSelectedInvoices(prev =>
      prev.includes(invoiceId)
        ? prev.filter(id => id !== invoiceId)
        : [...prev, invoiceId]
    );
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
          
          <button
            onClick={handleHelpClick}
            className="border border-white text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-white hover:text-black transition-colors"
          >
            Help?
          </button>
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
          <h1 className="text-2xl font-bold text-white mb-2">GST Invoices for Loan</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-8">
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>

        {/* Invoices Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-white font-semibold">INVOICES ({filteredInvoices.length})</h2>
            <p className="text-gray-400 text-sm">All these invoices will be shared for requesting loan offers from lenders</p>
          </div>
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 text-white border border-gray-600 px-3 py-1 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="text-sm">REFRESH</span>
          </button>
        </div>

        {/* Invoices List */}
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredInvoices.map((invoice) => (
            <div
              key={invoice.id}
              onClick={() => toggleInvoiceSelection(invoice.id)}
              className="flex items-center justify-between p-4 bg-black rounded-lg cursor-pointer hover:bg-gray-900 transition-colors border border-gray-800"
            >
              <div className="flex-1">
                <h3 className="text-white font-medium">{invoice.companyName}</h3>
                <p className="text-gray-400 text-sm">{invoice.date} • {invoice.invoiceNumber}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white font-semibold">₹ {invoice.amount.toLocaleString()}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        {filteredInvoices.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">No invoices found matching your search.</p>
          </div>
        )}
      </div>

      {/* Fixed Continue Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-black">
        <button
          onClick={handleContinue}
          className="w-full py-4 px-6 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
          style={{ 
            backgroundColor: '#2170BC',
            height: '56px' // Progress bar button height
          }}
        >
          Continue
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
