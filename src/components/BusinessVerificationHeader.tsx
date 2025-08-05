import Image from 'next/image';

interface BusinessVerificationHeaderProps {
  onBackClick: () => void;
}

export default function BusinessVerificationHeader({ onBackClick }: BusinessVerificationHeaderProps) {
  return (
    <div className="bg-black text-white p-6 pt-12 relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      {/* Back arrow and logo */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <button 
          onClick={onBackClick}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="Kubar Protocol Logo"
            width={48}
            height={48}
            className="rounded-lg mb-2"
          />
        </div>
        
        <div className="w-6 h-6"></div> {/* Spacer for centering */}
      </div>

      {/* Welcome text */}
      <div className="relative z-10 text-center">
        <h1 
          className="font-bold mb-2 whitespace-nowrap"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '29px',
            lineHeight: '130%',
            letterSpacing: '-0.58px',
            verticalAlign: 'middle'
          }}
        >
          Welcome to Kubar
        </h1>
        <p className="text-gray-300 text-lg">
          Please verify your Business Details
        </p>
      </div>
    </div>
  );
} 