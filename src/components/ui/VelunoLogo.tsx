import React, { useState } from 'react';

export interface VelunoLogoProps {
  variant?: 'light' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTagline?: boolean;
}

const SIZE_CLASSES = {
  sm: 'h-7',
  md: 'h-9',
  lg: 'h-11',
};

export const VelunoLogo: React.FC<VelunoLogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  showTagline = false,
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  const isDarkBg = variant === 'light' || variant === 'white';
  const logoSrc = isDarkBg ? '/veluno-logo-white.png' : '/veluno-logo.png';

  return (
    <div className={`inline-flex flex-col select-none opacity-100 visible ${className}`}>
      <div className="inline-flex items-center gap-2.5">
        {!imgFailed ? (
          <img
            src={logoSrc}
            alt="Veluno Softtech"
            onError={() => setImgFailed(true)}
            className={`${SIZE_CLASSES[size]} w-auto object-contain block opacity-100`}
            loading="eager"
            decoding="sync"
          />
        ) : (
          <div
            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg font-heading font-black text-xs tracking-wider shadow-xs ${
              isDarkBg ? 'bg-[#14B8A6] text-[#0B1F3A]' : 'bg-[#0B1F3A] text-white'
            }`}
            aria-hidden="true"
          >
            VS
          </div>
        )}
        <div className="flex flex-col leading-none">
          <span
            className={`font-heading font-extrabold tracking-tight text-base sm:text-lg ${
              isDarkBg ? 'text-white' : 'text-[#0B1F3A]'
            }`}
          >
            VELUNO <span className="text-[#2563EB]">SOFTTECH</span>
          </span>
        </div>
      </div>
      {showTagline && (
        <span
          className={`text-[10px] mt-1 font-normal tracking-wide ${
            isDarkBg ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Software that moves business forward.
        </span>
      )}
    </div>
  );
};

export default VelunoLogo;
