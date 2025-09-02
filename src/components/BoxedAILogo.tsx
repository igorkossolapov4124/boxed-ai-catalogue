import React from 'react';

interface BoxedAILogoProps {
  className?: string;
}

const BoxedAILogo: React.FC<BoxedAILogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Box base */}
      <path
        d="M20 45 L20 75 L80 75 L80 45"
        stroke="black"
        strokeWidth="3"
        fill="none"
      />
      
      {/* Box left side */}
      <path
        d="M20 45 L20 75"
        stroke="black"
        strokeWidth="3"
      />
      
      {/* Box right side */}
      <path
        d="M80 45 L80 75"
        stroke="black"
        strokeWidth="3"
      />
      
      {/* Box bottom */}
      <path
        d="M20 75 L80 75"
        stroke="black"
        strokeWidth="3"
      />
      
      {/* Left box flap */}
      <path
        d="M20 45 L10 35 L35 35 L50 45"
        stroke="black"
        strokeWidth="3"
        fill="none"
      />
      
      {/* Right box flap */}
      <path
        d="M50 45 L65 35 L90 35 L80 45"
        stroke="black"
        strokeWidth="3"
        fill="none"
      />
      
      {/* Tree trunk */}
      <rect
        x="47"
        y="25"
        width="6"
        height="25"
        fill="#005BFF"
        rx="1"
      />
      
      {/* Tree branches - main nodes */}
      <circle cx="42" cy="30" r="3" fill="#005BFF" />
      <circle cx="50" cy="25" r="3" fill="#005BFF" />
      <circle cx="58" cy="30" r="3" fill="#005BFF" />
      <circle cx="38" cy="35" r="2.5" fill="#005BFF" />
      <circle cx="62" cy="35" r="2.5" fill="#005BFF" />
      <circle cx="45" cy="38" r="2.5" fill="#005BFF" />
      <circle cx="55" cy="38" r="2.5" fill="#005BFF" />
      
      {/* Tree connecting lines */}
      <path
        d="M50 28 L42 30"
        stroke="#005BFF"
        strokeWidth="2"
      />
      <path
        d="M50 28 L58 30"
        stroke="#005BFF"
        strokeWidth="2"
      />
      <path
        d="M50 32 L38 35"
        stroke="#005BFF"
        strokeWidth="2"
      />
      <path
        d="M50 32 L62 35"
        stroke="#005BFF"
        strokeWidth="2"
      />
      <path
        d="M50 38 L45 38"
        stroke="#005BFF"
        strokeWidth="2"
      />
      <path
        d="M50 38 L55 38"
        stroke="#005BFF"
        strokeWidth="2"
      />
    </svg>
  );
};

export default BoxedAILogo;