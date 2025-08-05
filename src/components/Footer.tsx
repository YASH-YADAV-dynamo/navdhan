interface FooterProps {
  onTermsClick: () => void;
  onDataProcessingClick: () => void;
}

export default function Footer({ onTermsClick, onDataProcessingClick }: FooterProps) {
  return (
    <div className="bg-white px-6 pb-8">
      <div className="text-center">
        <p 
          style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: '12px',
            lineHeight: '150%',
            letterSpacing: '-0.12px',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}
          className="text-gray-600"
        >
          By signing up, you agree to the{' '}
          <button
            onClick={onTermsClick}
            className="text-blue-600 underline hover:text-blue-500 transition-colors"
          >
            Terms of Service
          </button>
          {' '}and{' '}
          <button
            onClick={onDataProcessingClick}
            className="text-blue-600 underline hover:text-blue-500 transition-colors"
          >
            Data Processing Agreement
          </button>
        </p>
      </div>
      
      {/* Home indicator for mobile */}
      <div className="mt-6 flex justify-center">
        <div className="w-32 h-1 bg-blue-600 rounded-full"></div>
      </div>
    </div>
  );
} 