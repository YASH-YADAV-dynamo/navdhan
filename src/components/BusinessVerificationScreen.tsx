'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BusinessVerificationHeader from './BusinessVerificationHeader';
import BusinessVerificationForm from './BusinessVerificationForm';

interface BusinessVerificationData {
  legalBusinessName: string;
  placeOfBusiness: string;
  gstin: string;
  contactPerson: string;
  phoneNumber: string;
  emailAddress: string;
  website: string;
}

export default function BusinessVerificationScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleBackClick = () => {
    console.log('Navigate back to business details screen');
    router.push('/business-details');
  };

  const handleSubmit = async (formData: BusinessVerificationData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Business verification submission:', formData);
      // Handle successful submission here
      alert('Account created successfully!');
      // Optionally navigate to a success page or dashboard
      // router.push('/dashboard');
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddAnotherGstin = () => {
    console.log('Add another GSTIN functionality');
    // Handle adding another GSTIN
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1A1C1E' }}>
      <BusinessVerificationHeader onBackClick={handleBackClick} />
      <BusinessVerificationForm 
        onSubmit={handleSubmit}
        onAddAnotherGstin={handleAddAnotherGstin}
      />
    </div>
  );
} 