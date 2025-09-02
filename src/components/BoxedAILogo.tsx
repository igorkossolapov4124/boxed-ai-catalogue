import React from 'react';

interface BoxedAILogoProps {
  className?: string;
}

const BoxedAILogo: React.FC<BoxedAILogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Box container */}
      <rect
        x="4"
        y="12"
        width="24"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Box lid lines */}
      <path
        d="M4 14 L16 10 L28 14"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Tree trunk */}
      <rect
        x="14"
        y="4"
        width="4"
        height="12"
        fill="currentColor"
        rx="1"
      />
      
      {/* Tree branches */}
      <circle cx="12" cy="6" r="2" fill="currentColor" />
      <circle cx="16" cy="4" r="2" fill="currentColor" />
      <circle cx="20" cy="6" r="2" fill="currentColor" />
      <circle cx="11" cy="9" r="1.5" fill="currentColor" />
      <circle cx="21" cy="9" r="1.5" fill="currentColor" />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
};

export default BoxedAILogo;