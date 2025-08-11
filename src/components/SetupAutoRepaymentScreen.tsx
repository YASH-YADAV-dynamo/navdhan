'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Download } from 'lucide-react';

export default function SetupAutoRepaymentScreen() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleHelpClick = () => {
    console.log('Help clicked');
  };

  const handleDownload = () => {
    console.log('Download clicked');
    // Simulate document download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'auto-repayment-agreement.pdf';
    link.click();
  };

  const handleIAgree = () => {
    console.log('I Agree clicked');
    // Navigate to loan agreement screen
    router.push('/loan-agreement');
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
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-4">Setup Auto Repayment</h1>
          
          <div className="text-center text-gray-400 text-sm">
            <p>Deposit A/c : Axis Bank</p>
            <p>Acc No : 5271XXXXXX7564</p>
          </div>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-6 pb-40">
        <div className="space-y-6">
          {/* Legal Terms */}
          <div className="mt-6">
            <p className="text-white text-base leading-relaxed mb-6 font-medium">
              Both parties represent covenants and warrant to each other that:
            </p>
            
            <div className="space-y-6 text-white text-sm leading-loose">
              <p className="text-justify">
                (a) He/She has read all the term and conditions, privacy policy, and other material available at the website of Fairassets Technologies India Private Limited herein after referred to as Faircent.
              </p>
              
              <p className="text-justify">
                (b) They unconditionally agree to abide by the terms and conditions, privacy policy
              </p>
              
              <p className="text-justify">
                (c) The information and financial details submitted by him/her on the website of Faircent
              </p>
              
              <p className="text-justify">
                (d) They understand that Faircent only facilitates meeting of lenders and borrowers and isnot engaged or is responsible for either lending or ensuring that the borrower shall repay the borrowed amount on the time.
              </p>
              
              <p className="text-justify">
                (e) They understand that Faircent only facilitates meeting of lenders and borrowers and isnot engaged or is responsible for either lending or ensuring that the borrower shall repay the borrowed amount on the time.
              </p>
            </div>
            
            {/* Extra padding for better scrolling */}
            <div className="h-8"></div>
          </div>
        </div>
      </div>

      {/* Fixed Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-black p-6 space-y-3">
        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="bg-black border border-white text-white font-medium py-2 px-4 rounded-full transition-colors flex items-center justify-center hover:bg-gray-900 mx-auto"
          style={{ minWidth: 'auto', width: 'auto' }}
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </button>
        
        {/* I Agree Button */}
        <button
          onClick={handleIAgree}
          className="w-full text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center"
          style={{ backgroundColor: '#2170BC' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1a5a9a'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2170BC'}
        >
          I Agree
        </button>
      </div>
    </div>
  );
}
