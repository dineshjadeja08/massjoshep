import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageBannerProps {
  title: string;
  breadcrumb: string;
  category?: string;
  subtitle?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title, breadcrumb, category, subtitle }) => {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-7xl pt-24 md:pt-28 pb-4">
      <div className="rounded-xl bg-[#0B1F3A] text-white p-8 md:p-14 relative overflow-hidden shadow-sm border border-slate-800">
        
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none" />
        
        {/* Gradient accent flare */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#2563EB]/20 to-[#14B8A6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          
          {category && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[#14B8A6] font-mono text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xs border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]"></span>
              <span>{category}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-3.5 max-w-xl mx-auto font-light leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Breadcrumb Trail */}
          <div className="text-xs font-medium text-slate-400 mt-5 flex items-center justify-center gap-1.5 font-mono">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#14B8A6] font-semibold">{breadcrumb}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PageBanner;