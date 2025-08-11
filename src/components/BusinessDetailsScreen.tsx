'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BusinessDetailsHeader from './BusinessDetailsHeader';
import BusinessDetailsForm from './BusinessDetailsForm';

interface BusinessFormData {
  gstUsername: string;
  gstin: string;
  mobileNumber: string;
  otp: string;
}

export default function BusinessDetailsScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleBackClick = () => {
    console.log('Navigate back to login screen');
    router.push('/');
  };

  const handleSubmit = async (formData: BusinessFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Business details submission:', formData);
      console.log('Navigating to business verification...');
      // Navigate to business verification screen
      router.push('/business-verification');
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <BusinessDetailsHeader onBackClick={handleBackClick} />
      <BusinessDetailsForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
} 