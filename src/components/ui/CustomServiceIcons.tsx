import React from 'react';

interface IconProps {
  className?: string;
}

// 1. Website Development: Modern Browser Viewport + Dynamic Code Matrix & High-Speed Vector
export const WebsiteDevIcon: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="webGrad" x1="4" y1="6" x2="44" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563EB" />
        <stop offset="1" stopColor="#14B8A6" />
      </linearGradient>
    </defs>
    {/* Browser Frame */}
    <rect x="4" y="6" width="40" height="34" rx="4" stroke="currentColor" strokeWidth="2.5" />
    <path d="M4 14H44" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
    {/* Browser Dots */}
    <circle cx="9" cy="10" r="1.5" fill="#EF4444" />
    <circle cx="14" cy="10" r="1.5" fill="#F59E0B" />
    <circle cx="19" cy="10" r="1.5" fill="#10B981" />
    {/* Search/URL bar minimal representation */}
    <rect x="25" y="8.5" width="15" height="3" rx="1.5" fill="currentColor" fillOpacity="0.2" />
    {/* Code Matrix Elements inside viewport */}
    <path d="M14 23L9 27L14 31" stroke="url(#webGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 23L31 27L26 31" stroke="url(#webGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 21L18 33" stroke="url(#webGrad)" strokeWidth="2" strokeLinecap="round" />
    {/* Performance spark / speed flash */}
    <path d="M38 22L34 28H39L35 34" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 2. Web Application Development: Multi-Tiered Cloud SaaS Architecture & Microservice Plane
export const WebAppIcon: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="appGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    {/* Top Service Plane */}
    <path d="M24 6L42 15L24 24L6 15L24 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M24 6L42 15L24 24L6 15L24 6Z" fill="url(#appGrad)" fillOpacity="0.15" />
    {/* Core processing nodes on top plane */}
    <circle cx="24" cy="15" r="3" fill="#14B8A6" />
    <circle cx="15" cy="12" r="1.5" fill="currentColor" />
    <circle cx="33" cy="12" r="1.5" fill="currentColor" />
    {/* Mid Tier Plane */}
    <path d="M6 24L24 33L42 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Data / Storage Bottom Plane */}
    <path d="M6 33L24 42L42 33" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* High-speed vertical sync pipeline */}
    <path d="M24 24V40" stroke="#14B8A6" strokeWidth="2" strokeDasharray="2 2" strokeLinecap="round" />
  </svg>
);

// 3. Mobile App Development: Ergonomic Native Device Chassis + Touch Synapses & Responsive Grid
export const MobileDevIcon: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="mobileGrad" x1="12" y1="4" x2="36" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563EB" />
        <stop offset="1" stopColor="#14B8A6" />
      </linearGradient>
    </defs>
    {/* Phone Body */}
    <rect x="12" y="4" width="24" height="40" rx="5" stroke="currentColor" strokeWidth="2.5" />
    {/* Dynamic Island / Speaker notch */}
    <rect x="20" y="8" width="8" height="2.5" rx="1.25" fill="currentColor" />
    {/* Native App UI Grid */}
    <rect x="16" y="14" width="7" height="7" rx="2" fill="url(#mobileGrad)" fillOpacity="0.3" stroke="url(#mobileGrad)" strokeWidth="1.5" />
    <rect x="25" y="14" width="7" height="7" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="16" y="23" width="7" height="7" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="25" y="23" width="7" height="7" rx="2" fill="#14B8A6" fillOpacity="0.3" stroke="#14B8A6" strokeWidth="1.5" />
    {/* Home indicator bar */}
    <line x1="20" y1="39" x2="28" y2="39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Cross-platform connectivity beacon waves */}
    <path d="M6 18C4 20 4 24 6 26" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
    <path d="M42 18C44 20 44 24 42 26" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 4. E-Commerce Development: High-Frequency Commerce Engine + Payment Security Shield
export const EcommerceIcon: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ecomGrad" x1="4" y1="12" x2="44" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563EB" />
        <stop offset="1" stopColor="#14B8A6" />
      </linearGradient>
    </defs>
    {/* Smart Bag / Cart geometry */}
    <path d="M10 14H38L35 34H13L10 14Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    {/* Bag Handles */}
    <path d="M18 14V10C18 7.79 19.79 6 22 6H26C28.21 6 30 7.79 30 10V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    {/* Security & Checkout Verified Shield */}
    <path d="M24 20L31 23V28C31 32 28 35 24 37C20 35 17 32 17 28V23L24 20Z" fill="url(#ecomGrad)" stroke="#0B1F3A" strokeWidth="1.5" />
    {/* Shield Checkmark */}
    <path d="M21 28.5L23.5 31L27.5 25.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Instant conversion currency tick */}
    <circle cx="8" cy="38" r="3" stroke="#14B8A6" strokeWidth="2" />
    <circle cx="40" cy="38" r="3" stroke="#2563EB" strokeWidth="2" />
  </svg>
);

// 5. UI/UX Design & Systems: Precision Vector Pen Node Handler + Figma Component Tokens
export const UiUxIcon: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="penGrad" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#818CF8" />
        <stop offset="1" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    {/* Component Canvas Boundary */}
    <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
    {/* Smooth Bézier Vector Curve */}
    <path d="M12 36C12 20 22 14 36 12" stroke="url(#penGrad)" strokeWidth="3" strokeLinecap="round" />
    {/* Precision Pen Anchor Points */}
    <rect x="9" y="33" width="6" height="6" rx="1" fill="#14B8A6" stroke="currentColor" strokeWidth="1.5" />
    <rect x="33" y="9" width="6" height="6" rx="1" fill="#14B8A6" stroke="currentColor" strokeWidth="1.5" />
    {/* Central Interactive Node & Control Handle */}
    <circle cx="21" cy="21" r="3.5" fill="#2563EB" stroke="currentColor" strokeWidth="2" />
    <line x1="21" y1="15" x2="21" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="21" cy="15" r="1.5" fill="currentColor" />
    <circle cx="21" cy="27" r="1.5" fill="currentColor" />
  </svg>
);

// 6. Custom Software Development: Enterprise IDE Kernel, Circuit Logic & Modular Architecture
export const CustomSoftwareIcon: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="softGrad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563EB" />
        <stop offset="1" stopColor="#14B8A6" />
      </linearGradient>
    </defs>
    {/* Microchip / Enterprise Software Package */}
    <rect x="10" y="10" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" />
    {/* Processor Pins */}
    <path d="M16 6V10M24 6V10M32 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 38V42M24 38V42M32 38V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 16H10M6 24H10M6 32H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M38 16H42M38 24H42M38 32H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Inner Code Core */}
    <rect x="16" y="16" width="16" height="16" rx="2" fill="url(#softGrad)" fillOpacity="0.2" stroke="url(#softGrad)" strokeWidth="1.5" />
    <path d="M21 21L19 24L21 27" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M27 21L29 24L27 27" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 7. CRM & ERP Solutions: Unified Enterprise Operations Hub, Database & Distributed Sync
export const CrmErpIcon: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="erpGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#10B981" />
      </linearGradient>
    </defs>
    {/* Main Central Enterprise Core Database */}
    <path d="M16 10C16 7.79 19.58 6 24 6C28.42 6 32 7.79 32 10V18C32 20.21 28.42 22 24 22C19.58 22 16 20.21 16 18V10Z" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="24" cy="10" rx="8" ry="4" stroke="currentColor" strokeWidth="2" fill="url(#erpGrad)" fillOpacity="0.2" />
    <path d="M16 14C16 16.21 19.58 18 24 18C28.42 18 32 16.21 32 14" stroke="currentColor" strokeWidth="2" />
    {/* Satellite Node Left (Sales/CRM) */}
    <rect x="6" y="28" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2" fill="#0B1F3A" />
    <circle cx="12" cy="34" r="2" fill="#2563EB" />
    {/* Satellite Node Right (ERP/Supply/Finance) */}
    <rect x="30" y="28" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2" fill="#0B1F3A" />
    <rect x="34" y="32" width="4" height="4" fill="#14B8A6" />
    {/* Interconnect Bus Lines */}
    <path d="M18 20L12 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 20L36 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 34H30" stroke="#14B8A6" strokeWidth="2" strokeDasharray="2 2" strokeLinecap="round" />
  </svg>
);

// 8. AI & Business Automation: Neural Synapse Constellation, Spark Core & Autonomous Loops
export const AiAutomationIcon: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="aiGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA" />
        <stop offset="0.5" stopColor="#3B82F6" />
        <stop offset="1" stopColor="#14B8A6" />
      </linearGradient>
    </defs>
    {/* Central Pulsing Intelligence Diamond / Synapse */}
    <path d="M24 6L30 18L42 24L30 30L24 42L18 30L6 24L18 18L24 6Z" fill="url(#aiGrad)" fillOpacity="0.25" stroke="url(#aiGrad)" strokeWidth="2" strokeLinejoin="round" />
    {/* Central Focus Spark Core */}
    <circle cx="24" cy="24" r="3.5" fill="#FFFFFF" />
    {/* Neural Interconnect Synaptic Satellites */}
    <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" fill="#14B8A6" />
    <circle cx="38" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" fill="#2563EB" />
    <circle cx="10" cy="38" r="2.5" stroke="currentColor" strokeWidth="2" fill="#2563EB" />
    <circle cx="38" cy="38" r="2.5" stroke="currentColor" strokeWidth="2" fill="#14B8A6" />
    {/* Connecting Synapse Rays */}
    <line x1="12" y1="12" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="36" y1="12" x2="29" y2="19" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="12" y1="36" x2="19" y2="29" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="36" y1="36" x2="29" y2="29" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
);
