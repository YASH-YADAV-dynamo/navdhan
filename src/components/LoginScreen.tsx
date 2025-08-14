'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from './Header';
import LoginForm from './LoginForm';
import Footer from './Footer';

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (phoneNumber: string, otp: string, rememberMe: boolean) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login attempt:', { phoneNumber, otp, rememberMe });
      // Navigate to business details page
      router.push('/business-details');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = () => {
    console.log('Resending OTP...');
    // Handle resend OTP logic here
  };

  const handleSignUp = () => {
    console.log('Navigate to sign up page');
    // Handle navigation to sign up page
  };

  const handleTermsClick = () => {
    console.log('Open terms of service');
    // Handle terms of service link
  };

  const handleDataProcessingClick = () => {
    console.log('Open data processing agreement');
    // Handle data processing agreement link
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onSignUpClick={handleSignUp} />
      <LoginForm 
        onSubmit={handleLogin}
        onResendOtp={handleResendOtp}
      />
      <Footer 
        onTermsClick={handleTermsClick}
        onDataProcessingClick={handleDataProcessingClick}
      />
    </div>
  );
} 