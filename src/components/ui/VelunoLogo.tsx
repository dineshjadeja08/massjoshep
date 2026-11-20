import React from 'react';

interface VelunoLogoProps {
  variant?: 'dark' | 'white' | 'icon-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const VelunoLogo: React.FC<VelunoLogoProps> = ({ 
  variant = 'dark', 
  className = '',
  size = 'md',
  showTagline = false
}) => {
  const isDarkBg = variant === 'white';

  const heightClasses = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-11'
  };

  const logoSrc = isDarkBg ? '/veluno-logo-white.png' : '/veluno-logo.png';

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <img 
        src={logoSrc} 
        alt="VELUNO SOFTTECH" 
        className={`${heightClasses[size]} w-auto object-contain transition-transform group-hover:scale-105`}
      />
      {showTagline && (
        <span className={`text-[10px] mt-1.5 font-normal tracking-wide ${isDarkBg ? 'text-slate-400' : 'text-slate-500'}`}>
          Software that moves business forward.
        </span>
      )}
    </div>
  );
};

export default VelunoLogo;