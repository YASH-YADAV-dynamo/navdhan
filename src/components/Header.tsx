import Image from 'next/image';

interface HeaderProps {
  onSignUpClick: () => void;
}

export default function Header({ onSignUpClick }: HeaderProps) {
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
      
      {/* Logo and branding */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Kubar Protocol Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-sm font-semibold">Kubar Protocol</span>
        </div>
        
        <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-lg">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
          <Image
            src="/india-flag.png"
            alt="India Flag"
            width={20}
            height={15}
            className="rounded-sm"
          />
          <span className="text-sm">IN</span>
        </div>
      </div>

      {/* Title and sign up link */}
      <div className="relative z-10">
        <h1 
          className="font-bold mb-4 whitespace-nowrap"
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
          Sign in to your Account
        </h1>
        <p className="text-gray-300">
          Don't have an account?{' '}
          <button 
            onClick={onSignUpClick}
            className="text-blue-400 underline hover:text-blue-300 transition-colors"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
} 