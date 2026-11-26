import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Smartphone, 
  Globe, 
  ShoppingBag, 
  Sparkles, 
  Building2, 
  Check, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  Zap,
  Layers
} from 'lucide-react';

interface PlatformOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  baseInrMin: number;
  baseInrMax: number;
  baseUsdMin: number;
  baseUsdMax: number;
  weeksMin: number;
  weeksMax: number;
  desc: string;
}

const PLATFORMS: PlatformOption[] = [
  {
    id: 'web-saas',
    name: 'Web Application / SaaS',
    icon: <Layers className="w-5 h-5 text-[#2563EB]" />,
    baseInrMin: 120000,
    baseInrMax: 280000,
    baseUsdMin: 2000,
    baseUsdMax: 4500,
    weeksMin: 4,
    weeksMax: 8,
    desc: 'Multi-tenant cloud dashboards, customer portals, and database-backed SaaS products.'
  },
  {
    id: 'mobile-app',
    name: 'Mobile App (iOS & Android)',
    icon: <Smartphone className="w-5 h-5 text-[#14B8A6]" />,
    baseInrMin: 150000,
    baseInrMax: 350000,
    baseUsdMin: 2500,
    baseUsdMax: 5500,
    weeksMin: 6,
    weeksMax: 10,
    desc: 'Native or React Native/Flutter apps with offline-first synchronization and push notifications.'
  },
  {
    id: 'ai-automation',
    name: 'Conversational Voice AI & Telephony',
    icon: <Sparkles className="w-5 h-5 text-[#2563EB]" />,
    baseInrMin: 140000,
    baseInrMax: 320000,
    baseUsdMin: 2200,
    baseUsdMax: 5000,
    weeksMin: 4,
    weeksMax: 8,
    desc: 'Sub-second real-time voice agents, WebRTC pipelines, and multilingual telephony handoffs.'
  },
  {
    id: 'corp-web',
    name: 'High-Performance Web Platform',
    icon: <Globe className="w-5 h-5 text-[#14B8A6]" />,
    baseInrMin: 60000,
    baseInrMax: 150000,
    baseUsdMin: 1000,
    baseUsdMax: 2500,
    weeksMin: 2,
    weeksMax: 5,
    desc: 'High-speed Next.js corporate portals, headless CMS architectures, and SEO engines.'
  },
  {
    id: 'ecommerce',
    name: 'Headless E-Commerce & Retail',
    icon: <ShoppingBag className="w-5 h-5 text-[#2563EB]" />,
    baseInrMin: 90000,
    baseInrMax: 220000,
    baseUsdMin: 1500,
    baseUsdMax: 3500,
    weeksMin: 3,
    weeksMax: 7,
    desc: 'Custom storefronts, automated checkout funnels, inventory sync, and global payment gateways.'
  },
  {
    id: 'erp-custom',
    name: 'Enterprise ERP & Operations OS',
    icon: <Building2 className="w-5 h-5 text-[#14B8A6]" />,
    baseInrMin: 180000,
    baseInrMax: 450000,
    baseUsdMin: 3000,
    baseUsdMax: 7000,
    weeksMin: 6,
    weeksMax: 12,
    desc: 'Centralized operational software connecting billing, dispatch, inventory, and staff permissions.'
  }
];

interface FeatureOption {
  id: string;
  name: string;
  inrAdd: number;
  usdAdd: number;
  weeksAdd: number;
}

const FEATURES: FeatureOption[] = [
  { id: 'auth-rbac', name: 'User Auth & Role Permissions (RBAC)', inrAdd: 25000, usdAdd: 350, weeksAdd: 1 },
  { id: 'payments', name: 'Stripe / Razorpay Payment Integration', inrAdd: 30000, usdAdd: 400, weeksAdd: 1 },
  { id: 'realtime', name: 'Live WebSockets / Real-time Sync', inrAdd: 35000, usdAdd: 500, weeksAdd: 1 },
  { id: 'analytics', name: 'Executive Analytics & Reporting', inrAdd: 25000, usdAdd: 350, weeksAdd: 1 },
  { id: 'apis', name: 'Third-Party ERP/CRM Webhooks & APIs', inrAdd: 30000, usdAdd: 400, weeksAdd: 1 },
  { id: 'multilingual', name: 'Multilingual Regional Localization', inrAdd: 20000, usdAdd: 300, weeksAdd: 0.5 }
];

export const ProjectCostEstimator: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('web-saas');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth-rbac', 'payments']);
  const [speedMultiplier, setSpeedMultiplier] = useState<'standard' | 'accelerated'>('standard');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const activePlatform = PLATFORMS.find(p => p.id === selectedPlatform) || PLATFORMS[0];

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Calculations
  const featuresInr = selectedFeatures.reduce((acc, fId) => {
    const f = FEATURES.find(x => x.id === fId);
    return acc + (f ? f.inrAdd : 0);
  }, 0);

  const featuresUsd = selectedFeatures.reduce((acc, fId) => {
    const f = FEATURES.find(x => x.id === fId);
    return acc + (f ? f.usdAdd : 0);
  }, 0);

  const featuresWeeks = selectedFeatures.reduce((acc, fId) => {
    const f = FEATURES.find(x => x.id === fId);
    return acc + (f ? f.weeksAdd : 0);
  }, 0);

  const speedFactor = speedMultiplier === 'accelerated' ? 1.2 : 1.0;
  const timeFactor = speedMultiplier === 'accelerated' ? 0.75 : 1.0;

  const totalInrMin = Math.round(((activePlatform.baseInrMin + featuresInr) * speedFactor) / 5000) * 5000;
  const totalInrMax = Math.round(((activePlatform.baseInrMax + featuresInr) * speedFactor) / 5000) * 5000;

  const totalUsdMin = Math.round(((activePlatform.baseUsdMin + featuresUsd) * speedFactor) / 100) * 100;
  const totalUsdMax = Math.round(((activePlatform.baseUsdMax + featuresUsd) * speedFactor) / 100) * 100;

  const totalWeeksMin = Math.max(2, Math.round((activePlatform.weeksMin + featuresWeeks) * timeFactor));
  const totalWeeksMax = Math.max(3, Math.round((activePlatform.weeksMax + featuresWeeks) * timeFactor));

  // WhatsApp Pre-fill URL
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '918428392629';
  const whatsappMsg = encodeURIComponent(
    `Hello Veluno Softtech! I generated an estimate for a ${activePlatform.name} project with ${selectedFeatures.length} features (${currency === 'INR' ? `₹${totalInrMin.toLocaleString('en-IN')} - ₹${totalInrMax.toLocaleString('en-IN')}` : `$${totalUsdMin.toLocaleString()} - $${totalUsdMax.toLocaleString()}`}, ~${totalWeeksMin}-${totalWeeksMax} weeks). I'd like to discuss architectural scoping.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  // Contact page URL with query params
  const contactUrl = `/contact?service=${encodeURIComponent(activePlatform.name)}&budget=${encodeURIComponent(
    currency === 'INR' 
      ? `₹${totalInrMin.toLocaleString('en-IN')} – ₹${totalInrMax.toLocaleString('en-IN')}` 
      : `$${totalUsdMin.toLocaleString()} – $${totalUsdMax.toLocaleString()}`
  )}&currency=${currency}`;

  return (
    <section className="py-16 md:py-24 bg-[#0B1F3A] text-white relative overflow-hidden">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 tech-grid-dark opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 text-[#14B8A6] font-mono text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Scope Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-4">
            Project Scope & Cost Estimator
          </h2>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Configure your technical requirements to generate a transparent ballpark investment and delivery sprint timeline before scheduling a discovery call.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-white/10 rounded-xs border border-white/10">
            <button
              type="button"
              onClick={() => setCurrency('INR')}
              className={`px-4 py-1.5 text-xs font-mono font-bold uppercase transition-all rounded-xs cursor-pointer ${
                currency === 'INR'
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              ₹ INR (Domestic India)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 text-xs font-mono font-bold uppercase transition-all rounded-xs cursor-pointer ${
                currency === 'USD'
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              $ USD (International)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Platform Selection */}
            <div>
              <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-3">
                01. Select Platform Architecture
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PLATFORMS.map(platform => {
                  const isSelected = selectedPlatform === platform.id;
                  return (
                    <button
                      key={platform.id}
                      type="button"
                      onClick={() => setSelectedPlatform(platform.id)}
                      className={`text-left p-4 rounded-xs border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-white/10 border-[#2563EB] shadow-md'
                          : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-xs bg-white/10 shrink-0">
                          {platform.icon}
                        </div>
                        <span className="font-heading font-bold text-sm text-white">
                          {platform.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                        {platform.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Key Capabilities (Multi-select) */}
            <div>
              <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-3">
                02. Choose Technical Capabilities (Select All That Apply)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FEATURES.map(feat => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`text-left px-3.5 py-3 rounded-xs border transition-all cursor-pointer flex items-center justify-between text-xs ${
                        isChecked
                          ? 'bg-[#2563EB]/20 border-[#2563EB] text-white font-medium'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <span>{feat.name}</span>
                      <div className={`w-4 h-4 rounded-xs flex items-center justify-center shrink-0 ml-2 border ${
                        isChecked ? 'bg-[#2563EB] border-[#2563EB] text-white' : 'border-white/30'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Pace */}
            <div>
              <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-3">
                03. Target Delivery Sprint
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSpeedMultiplier('standard')}
                  className={`p-3.5 rounded-xs border text-left transition-all cursor-pointer ${
                    speedMultiplier === 'standard'
                      ? 'bg-[#2563EB]/20 border-[#2563EB] text-white'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <span className="block font-bold text-xs uppercase tracking-wider mb-1">Standard Agile Sprint</span>
                  <span className="text-[11px] text-slate-300">Regular sprint cadence with thorough QA testing.</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSpeedMultiplier('accelerated')}
                  className={`p-3.5 rounded-xs border text-left transition-all cursor-pointer ${
                    speedMultiplier === 'accelerated'
                      ? 'bg-[#2563EB]/20 border-[#2563EB] text-white'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <span className="block font-bold text-xs uppercase tracking-wider mb-1">Fast-Track Priority (+20%)</span>
                  <span className="text-[11px] text-slate-300">Dedicated overtime pod for rapid MVP launch.</span>
                </button>
              </div>
            </div>

          </div>

          {/* Real-Time Live Estimation Card (5 cols) */}
          <div className="lg:col-span-5 bg-white text-[#0B1F3A] rounded-xs p-8 shadow-2xl border border-slate-200">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Ballpark Specification
            </span>
            <h3 className="text-2xl font-heading font-extrabold text-[#0B1F3A] mb-1">
              Estimated Investment
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Calculated based on {activePlatform.name} with {selectedFeatures.length} core architecture modules.
            </p>

            {/* Big Price Badge */}
            <div className="bg-[#F8FAFC] border border-slate-200 p-5 rounded-xs mb-6">
              <span className="text-xs font-mono text-slate-500 uppercase block mb-1">
                Estimated Project Cost Range
              </span>
              <div className="text-3xl sm:text-4xl font-heading font-black text-[#0B1F3A] tracking-tight">
                {currency === 'INR' ? (
                  <>₹{totalInrMin.toLocaleString('en-IN')} – ₹{totalInrMax.toLocaleString('en-IN')}</>
                ) : (
                  <>${totalUsdMin.toLocaleString()} – ${totalUsdMax.toLocaleString()}</>
                )}
              </div>
              <div className="flex items-center gap-2 mt-3 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-[#2563EB]" />
                <span className="font-semibold text-[#0B1F3A]">
                  Estimated Delivery: {totalWeeksMin} to {totalWeeksMax} Weeks
                </span>
              </div>
            </div>

            {/* Inclusions checklist */}
            <div className="space-y-2.5 mb-8 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                <span>100% Full IP & Source Code Transfer (Private Repo)</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                <span>Modern Clean Code Architecture (TypeScript / React / Python)</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                <span>Automated CI/CD Deployment & 30-Day Post-Launch Warranty</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                <span>Strict Non-Disclosure Agreement (NDA) Prior to Scoping</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <Link
                to={contactUrl}
                className="w-full bg-[#0B1F3A] hover:bg-[#1E3A5F] text-white py-3.5 px-5 rounded-xs font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <span>Discuss This Scope With Engineers</span>
                <ArrowRight className="w-4 h-4 text-[#2563EB]" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white py-3.5 px-5 rounded-xs font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Send Estimate via WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-600 text-center mt-4">
              *Ballpark figures for budgeting. Final formal quote provided after architectural discovery.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectCostEstimator;
