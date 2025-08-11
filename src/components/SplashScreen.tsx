'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../navdhan-animation.json';

interface SplashScreenProps {
  children: React.ReactNode;
  duration?: number;
}

export default function SplashScreen({ children, duration = 4000 }: SplashScreenProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '100vw', height: '100vh' }}
        />
      </div>
    );
  }

  return <>{children}</>;
}
