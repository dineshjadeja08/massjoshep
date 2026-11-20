import React from 'react';

export const EnterpriseLogos: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-2">
      
      {/* 1. AWS */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white border border-slate-200/90 shadow-xs hover:border-[#14B8A6] transition-all group">
        <svg viewBox="0 0 48 29" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Letters 'aws' in Tech Navy */}
          <path d="M11.9 14.5c0-.9.2-1.6.5-2.2.4-.6.9-1.1 1.5-1.4.6-.4 1.4-.5 2.2-.5.8 0 1.5.2 2.1.5.6.3 1.1.8 1.4 1.4.4.6.5 1.3.5 2.2v4.8h-2.1v-1.1c-.3.4-.7.8-1.2 1-.5.3-1.1.4-1.8.4-.7 0-1.4-.2-2-.5-.5-.4-.9-.8-1.2-1.4-.3-.6-.4-1.3-.4-2.1 0-.8.2-1.6.5-2.2.3-.6.8-1.1 1.4-1.4.6-.3 1.3-.5 2.1-.5.7 0 1.3.1 1.8.4.5.3.9.6 1.2 1.1v-1.1c0-.6-.1-1.1-.4-1.5-.3-.4-.7-.7-1.1-.9-.5-.2-1-.3-1.6-.3-.6 0-1.1.1-1.6.3-.5.2-.9.5-1.2.9-.3.4-.5.9-.6 1.5l-1.9-.3zm4.5 4.1c.5 0 1-.1 1.4-.4.4-.3.7-.7.9-1.1v-1.6c-.2-.5-.5-.8-.9-1.1-.4-.3-.9-.4-1.4-.4-.5 0-1 .1-1.4.4-.4.3-.7.7-.9 1.1-.2.5-.3 1-.3 1.6 0 .6.1 1.1.3 1.6.2.4.5.8.9 1.1.4.3.9.4 1.4.4z" fill="#0B1F3A"/>
          <path d="M21.2 10.7h2.2l2.4 8.7 2.4-8.7h2.2l2.4 8.7 2.4-8.7h2.2l-3.3 11.2h-2.2l-2.4-8.6-2.4 8.6h-2.2l-3.5-11.2z" fill="#0B1F3A"/>
          <path d="M40.2 18.5l1.9-.4c.2.6.5 1 1 1.4.5.3 1.1.5 1.8.5.7 0 1.2-.2 1.6-.5.4-.3.6-.8.6-1.3 0-.4-.1-.8-.4-1-.3-.3-.7-.5-1.3-.7l-1.9-.5c-1-.3-1.7-.7-2.2-1.2-.5-.5-.7-1.2-.7-2 0-.7.2-1.4.6-2 .4-.6 1-1 1.7-1.4.7-.3 1.5-.5 2.4-.5.9 0 1.7.2 2.4.5.7.4 1.2.9 1.6 1.5.4.6.6 1.3.6 2.1l-2 .3c-.1-.6-.4-1-.8-1.3-.4-.3-.9-.4-1.5-.4-.6 0-1.1.1-1.5.4-.4.3-.6.6-.6 1.1 0 .4.1.7.4.9.3.2.7.4 1.3.6l1.9.5c1.1.3 1.9.7 2.4 1.3.5.5.8 1.2.8 2.1 0 .8-.2 1.5-.6 2.1-.4.6-1 1.1-1.7 1.5-.8.4-1.6.5-2.6.5-1.1 0-2.1-.2-2.9-.7-.8-.5-1.4-1.2-1.7-2.1z" fill="#0B1F3A"/>
          {/* Smile Arrow in Orange/Amber #F59E0B */}
          <path d="M12.5 24.3c5.5 3.3 15.1 4.3 22.8-.2.8-.5 1.8.3 1.2 1-8.5 7.9-20.9 4.3-25.2.2-.4-.4.3-1.3 1.2-1z" fill="#F59E0B"/>
          <path d="M37.5 23.3c-.6-.7-2.7-.3-3.8-.1-.4 0-.4-.3-.1-.6 1.7-1.2 4.4-1 4.9-.4.5.6-.2 3.3-1.9 4.6-.3.2-.5.1-.4-.2.4-.9 1.8-2.6 1.3-3.3z" fill="#F59E0B"/>
        </svg>
        <span className="text-xs font-mono font-bold text-slate-700">AWS</span>
      </div>

      {/* 2. Google Cloud */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white border border-slate-200/90 shadow-xs hover:border-[#14B8A6] transition-all group">
        <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
          <path d="M19 14h-1.5V11c0-1.93-1.57-3.5-3.5-3.5S10.5 9.07 10.5 11v3H9c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z" fill="#FFFFFF" opacity="0.9"/>
        </svg>
        <span className="text-xs font-mono font-bold text-slate-700">Google Cloud</span>
      </div>

      {/* 3. Microsoft Azure */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white border border-slate-200/90 shadow-xs hover:border-[#14B8A6] transition-all group">
        <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.4 2.5L5.7 17.1l6.1 4.4h6.5l-4.9-19z" fill="#0078D4"/>
          <path d="M5.7 17.1l3.5-6.6 4.2 3.9-3.7 7.1-4-4.4z" fill="#50E6FF" opacity="0.8"/>
          <path d="M2.5 18.5l3.2-1.4 4 4.4-4.4.01L2.5 18.5z" fill="#1490DF"/>
        </svg>
        <span className="text-xs font-mono font-bold text-slate-700">Azure</span>
      </div>

      {/* 4. PostgreSQL */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white border border-slate-200/90 shadow-xs hover:border-[#14B8A6] transition-all group">
        <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#336791"/>
        </svg>
        <span className="text-xs font-mono font-bold text-slate-700">PostgreSQL</span>
      </div>

      {/* 5. Kubernetes */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white border border-slate-200/90 shadow-xs hover:border-[#14B8A6] transition-all group">
        <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.8l6 3.5v7l-6 3.5-6-3.5v-7l6-3.5z" fill="#326CE5"/>
          <circle cx="12" cy="12" r="2.5" fill="#326CE5"/>
          <path d="M12 7.5v2M12 14.5v2M7.5 9.5l1.7 1M14.8 13.5l1.7 1M7.5 14.5l1.7-1M14.8 10.5l1.7-1" stroke="#326CE5" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span className="text-xs font-mono font-bold text-slate-700">Kubernetes</span>
      </div>

      {/* 6. Docker */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white border border-slate-200/90 shadow-xs hover:border-[#14B8A6] transition-all group">
        <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.5 10.5c-.3-.2-1.5-.3-2.3.2-.2-.8-.8-1.5-1.6-1.9-.3-.1-.6-.2-.9-.2l-.4.2c-.2-1-1-1.8-2-1.8H4c-.6 0-1 .4-1 1v5.5c0 3.3 2.7 6 6 6 5.5 0 9.8-3.6 10.8-8.8.7.2 1.8.1 2.3-.5.4-.5.5-.7.4-.7zm-11-2h2v2h-2v-2zm0-3h2v2h-2v-2zm-3 3h2v2h-2v-2zm0-3h2v2h-2v-2zm-3 3h2v2H5.5v-2zm9 0h2v2h-2v-2z" fill="#2496ED"/>
        </svg>
        <span className="text-xs font-mono font-bold text-slate-700">Docker</span>
      </div>

      {/* 7. OpenAI */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white border border-slate-200/90 shadow-xs hover:border-[#14B8A6] transition-all group">
        <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.28 10.4a5.8 5.8 0 0 0-.5-4.4 5.9 5.9 0 0 0-5.3-3 6 6 0 0 0-1.8.3 5.8 5.8 0 0 0-4.3-1.9 5.9 5.9 0 0 0-5.6 4.1 5.8 5.8 0 0 0-3.8 2.8 5.9 5.9 0 0 0 .5 6.1 5.8 5.8 0 0 0 .5 4.4 5.9 5.9 0 0 0 5.3 3 6 6 0 0 0 1.8-.3 5.8 5.8 0 0 0 4.3 1.9 5.9 5.9 0 0 0 5.6-4.1 5.8 5.8 0 0 0 3.8-2.8 5.9 5.9 0 0 0-.5-6.1zM13 20.7a4.4 4.4 0 0 1-2.7-.9l3.5-2a.8.8 0 0 0 .4-.7v-4.9l1.8 1v4.2a4.4 4.4 0 0 1-3 3.3zm-7.6-3.2a4.4 4.4 0 0 1-.6-2.8l3.5 2a.8.8 0 0 0 .8 0l4.3-2.5v2.1l-3.6 2.1a4.4 4.4 0 0 1-4.4-.9zm-1.8-7.5a4.4 4.4 0 0 1 2.1-1.9v4.1a.8.8 0 0 0 .4.7l4.3 2.5-1.8 1-3.6-2.1a4.4 4.4 0 0 1-1.4-4.3zm12.3-1.6l-3.5 2a.8.8 0 0 0-.4.7v4.9l-1.8-1V11a4.4 4.4 0 0 1 3-3.3 4.4 4.4 0 0 1 2.7.9zm2.7 6.1a4.4 4.4 0 0 1-.6 2.8l-3.5-2a.8.8 0 0 0-.8 0l-4.3 2.5v-2.1l3.6-2.1a4.4 4.4 0 0 1 4.4.9zm-4.7-2.6l-2.1 1.2-2.1-1.2 2.1-1.2 2.1 1.2z" fill="#10A37F"/>
        </svg>
        <span className="text-xs font-mono font-bold text-slate-700">OpenAI</span>
      </div>

      {/* 8. Redis */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white border border-slate-200/90 shadow-xs hover:border-[#14B8A6] transition-all group">
        <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5 8L12 3 2.5 8 12 13l9.5-5zm-9.5 7L3.5 10.5v3.5L12 19l8.5-5v-3.5L12 15zm0 4.5l-8.5-4.5v3L12 22.5l8.5-4.5v-3L12 19.5z" fill="#DC382D"/>
        </svg>
        <span className="text-xs font-mono font-bold text-slate-700">Redis</span>
      </div>

      {/* 9. Cloudflare */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white border border-slate-200/90 shadow-xs hover:border-[#14B8A6] transition-all group">
        <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.4 12.2c-.3 0-.6.1-.8.2-.5-1.9-2.2-3.4-4.3-3.4-1.7 0-3.2 1-3.9 2.5-.4-.2-.8-.3-1.3-.3-1.7 0-3.1 1.4-3.1 3.1 0 .2 0 .4.1.6C2.2 15.3 0 17.4 0 20c0 2.8 2.2 5 5 5h13.5c3 0 5.5-2.5 5.5-5.5 0-2.9-2.3-5.3-5.6-5.3z" fill="#F38020"/>
          <path d="M18.5 15c.3 0 .7.1 1 .2 0-.2.1-.4.1-.7 0-2.5-2-4.5-4.5-4.5-1.8 0-3.3 1-4 2.5-.4-.3-.9-.5-1.5-.5-1.4 0-2.5 1.1-2.5 2.5 0 .2 0 .4.1.6-1.5.5-2.7 1.9-2.7 3.6 0 .5.1 1 .3 1.5.2-.1.5-.2.7-.2H18.5c2.2 0 4-1.8 4-4s-1.8-4-4-4z" fill="#FAAE40" opacity="0.9"/>
        </svg>
        <span className="text-xs font-mono font-bold text-slate-700">Cloudflare</span>
      </div>

      {/* 10. Stripe */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white border border-slate-200/90 shadow-xs hover:border-[#14B8A6] transition-all group">
        <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.9 9.3c0-.8-.7-1.1-1.7-1.1-1.5 0-3.4.6-4.9 1.5V5.5c1.7-.8 3.5-1.1 5.2-1.1 4.1 0 6.8 2.1 6.8 5.7 0 5.5-7.6 4.7-7.6 7 0 .9.8 1.2 2 1.2 1.8 0 4.1-.8 5.6-1.8v4.3c-1.8.8-3.8 1.2-5.7 1.2-4.3 0-7.3-2.1-7.3-5.8-.1-5.9 7.6-4.9 7.6-7.2z" fill="#635BFF"/>
        </svg>
        <span className="text-xs font-mono font-bold text-slate-700">Stripe</span>
      </div>

    </div>
  );
};

export default EnterpriseLogos;