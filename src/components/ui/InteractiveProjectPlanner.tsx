import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Smartphone, 
  PhoneCall, 
  ShoppingBag, 
  Database, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Zap,
  Sliders
} from 'lucide-react';

interface SystemType {
  id: string;
  name: string;
  icon: any;
  defaultTimeline: string;
  recommendedStack: string[];
  compliance: string[];
}

const SYSTEM_TYPES: SystemType[] = [
  {
    id: 'saas',
    name: 'SaaS & Web App',
    icon: Layers,
    defaultTimeline: '4 – 7 Weeks',
    recommendedStack: ['React / Next.js', 'TypeScript', 'Node.js / Python', 'PostgreSQL (ACID)', 'Redis'],
    compliance: ['SOC 2 Type II Ready', 'Multi-Tenant RBAC', 'AES-256 Encryption']
  },
  {
    id: 'mobile',
    name: 'Mobile App (iOS/Android)',
    icon: Smartphone,
    defaultTimeline: '5 – 8 Weeks',
    recommendedStack: ['React Native / Flutter', 'Swift / Kotlin', 'SQLite Offline Sync', 'Node.js', 'APNs / FCM'],
    compliance: ['App Store Review Policy', 'Google Play Compliant', 'Biometric Local Auth']
  },
  {
    id: 'voice-ai',
    name: 'Conversational Voice AI',
    icon: PhoneCall,
    defaultTimeline: '3 – 5 Weeks',
    recommendedStack: ['WebRTC Media Server', 'OpenAI Realtime API', 'Python FastAPI', 'Twilio SIP Trunking', 'PostgreSQL'],
    compliance: ['Sub-600ms Turn Latency', 'Zero Model Training on Data', 'Encrypted Audio SIP']
  },
  {
    id: 'ecommerce',
    name: 'Headless E-Commerce',
    icon: ShoppingBag,
    defaultTimeline: '4 – 6 Weeks',
    recommendedStack: ['Next.js Commerce', 'Shopify Plus / Medusa.js', 'Stripe API', 'Algolia Search', 'Edge CDN'],
    compliance: ['PCI-DSS Level 1 Gateway', 'WCAG 2.1 AA Accessibility', 'Core Web Vitals <1.5s']
  },
  {
    id: 'erp-crm',
    name: 'Custom ERP / CRM System',
    icon: Database,
    defaultTimeline: '6 – 10 Weeks',
    recommendedStack: ['React', 'Node.js', 'PostgreSQL with Partitioning', 'Redis Queues', 'REST / Webhooks'],
    compliance: ['GST / Invoicing Ready', 'Audit Log Immutability', 'Granular Role Permissions']
  },
  {
    id: 'website',
    name: 'High-Converting Website',
    icon: Globe,
    defaultTimeline: '3 – 4 Weeks',
    recommendedStack: ['Next.js 15', 'Tailwind CSS', 'Headless CMS (Sanity)', 'JSON-LD Schema', 'Vercel / Netlify'],
    compliance: ['Google PageSpeed 95+', 'LCP < 2.0s', 'GDPR Cookie Consent']
  }
];

const SCALE_LEVELS = [
  { id: 'mvp', label: 'Startup MVP', desc: '1,000 – 5,000 Monthly Active Users', factor: 'Fast-track to product-market validation' },
  { id: 'growth', label: 'Growth Scale', desc: '5,000 – 50,000 Monthly Active Users', factor: 'High-concurrency caching & read replicas' },
  { id: 'enterprise', label: 'Enterprise Concurrency', desc: '50,000+ Users with Strict SLA', factor: 'Multi-region clustering & automated failover' }
];

const CAPABILITIES = [
  { id: 'rbac', label: 'Multi-Tenant Role Permissions (RBAC)' },
  { id: 'stripe', label: 'Payment Gateway & Recurring Subscriptions' },
  { id: 'websockets', label: 'Real-Time WebSockets / Live Collaboration' },
  { id: 'offline', label: 'Offline-First SQLite Caching & Background Sync' },
  { id: 'voice', label: 'Sub-Second Conversational Voice AI Telephony' },
  { id: 'invoicing', label: 'Automated Tax / GST Invoicing & PDF Receipts' },
  { id: 'search', label: 'Instant Multi-Facet Search Engine (Algolia / Meili)' },
  { id: 'audit', label: 'Immutable Audit Trail & Regulatory Event Logging' }
];

interface Props {
  onSelectService?: (serviceName: string) => void;
}

export const InteractiveProjectPlanner: React.FC<Props> = ({ onSelectService }) => {
  const [selectedSystem, setSelectedSystem] = useState<string>('saas');
  const [selectedScale, setSelectedScale] = useState<string>('growth');
  const [selectedCaps, setSelectedCaps] = useState<string[]>(['rbac', 'stripe', 'audit']);

  const activeSystem = SYSTEM_TYPES.find(s => s.id === selectedSystem) || SYSTEM_TYPES[0];
  const activeScale = SCALE_LEVELS.find(s => s.id === selectedScale) || SCALE_LEVELS[1];

  const toggleCap = (id: string) => {
    setSelectedCaps(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const handleApplyToForm = () => {
    if (onSelectService) {
      onSelectService(activeSystem.name);
    }
    const formElement = document.getElementById('contact-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xs overflow-hidden shadow-sm">
      
      {/* Top Banner */}
      <div className="bg-[#0B1F3A] text-white p-6 md:p-8 border-b border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] mb-1">
              <Sliders className="w-4 h-4 text-[#14B8A6]" />
              <span>Interactive Scoping Tool</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Project Architecture & Timeline Planner
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light mt-1 max-w-2xl">
              Configure your system requirements below to calculate recommended toolchains, delivery timelines, and compliance standards in real time.
            </p>
          </div>

          <div className="px-3.5 py-1.5 rounded-xs bg-white/10 border border-white/10 text-xs font-mono text-slate-200 shrink-0">
            <span>Engineering Model: Fixed-Scope Sprints</span>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Selectors (7 Cols) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Step 1: System Selection */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Step 1 · Choose Target Platform Type
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {SYSTEM_TYPES.map(sys => {
                  const Icon = sys.icon;
                  const isSelected = selectedSystem === sys.id;
                  return (
                    <button
                      key={sys.id}
                      type="button"
                      onClick={() => setSelectedSystem(sys.id)}
                      className={`p-3.5 rounded-xs border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-xs' 
                          : 'bg-[#F8FAFC] text-slate-800 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-[#14B8A6]' : 'text-[#2563EB]'}`} />
                      <span className="text-xs font-heading font-bold block leading-tight">
                        {sys.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Target Scale */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Step 2 · Target Scale & Traffic Concurrency
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {SCALE_LEVELS.map(sc => {
                  const isSelected = selectedScale === sc.id;
                  return (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => setSelectedScale(sc.id)}
                      className={`p-3.5 rounded-xs border text-left transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xs' 
                          : 'bg-[#F8FAFC] text-slate-800 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-xs font-heading font-bold block mb-1">
                        {sc.label}
                      </span>
                      <span className={`text-[10px] block font-light leading-snug ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                        {sc.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Architecture Capabilities */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Step 3 · Required Architectural Capabilities ({selectedCaps.length} Selected)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CAPABILITIES.map(cap => {
                  const isChecked = selectedCaps.includes(cap.id);
                  return (
                    <button
                      key={cap.id}
                      type="button"
                      onClick={() => toggleCap(cap.id)}
                      className={`p-2.5 rounded-xs border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                        isChecked 
                          ? 'bg-emerald-50 text-emerald-950 border-emerald-300 font-medium' 
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <span className="pr-2">{cap.label}</span>
                      <span className={`w-4 h-4 rounded-xs flex items-center justify-center shrink-0 text-[10px] font-bold ${
                        isChecked ? 'bg-[#14B8A6] text-[#0B1F3A]' : 'border border-slate-300'
                      }`}>
                        {isChecked ? '✓' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Real-Time Dynamic Architectural Recommendation (5 Cols) */}
          <div className="lg:col-span-5 bg-[#08172b] text-white p-6 md:p-7 rounded-xs border border-slate-800 shadow-xl space-y-6">
            
            <div className="border-b border-slate-800 pb-4">
              <span className="text-[10px] font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-1">
                Generated Architecture Blueprint
              </span>
              <h4 className="text-xl font-heading font-extrabold text-white">
                {activeSystem.name} Specification
              </h4>
              <span className="text-xs text-slate-400 font-mono block mt-0.5">
                Scale Profile: {activeScale.label}
              </span>
            </div>

            {/* Timeline & Cadence */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xs bg-[#0B1F3A]/80 border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">Estimated Duration</span>
                <div className="text-lg font-mono font-bold text-[#14B8A6]">
                  {activeSystem.defaultTimeline}
                </div>
                <span className="text-[9px] text-slate-400 block mt-0.5">Bi-Weekly Sprints</span>
              </div>

              <div className="p-3 rounded-xs bg-[#0B1F3A]/80 border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">IP Governance</span>
                <div className="text-lg font-mono font-bold text-white">
                  100% Transfer
                </div>
                <span className="text-[9px] text-slate-400 block mt-0.5">Git Sovereignty</span>
              </div>
            </div>

            {/* Recommended Stack */}
            <div>
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block mb-2">
                Recommended Production Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeSystem.recommendedStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-mono px-2.5 py-1 rounded-xs bg-white/10 text-slate-200 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Compliance & Standards */}
            <div>
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block mb-2">
                Target Compliance & Security
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeSystem.compliance.map((comp, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={handleApplyToForm}
                className="btn-teal w-full py-3 rounded-xs font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Transfer Scope to Scoping Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[10px] text-slate-400 text-center block mt-2 font-mono">
                Pre-populates your requirements with 0 commitment
              </span>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default InteractiveProjectPlanner;
