import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Layers, 
  ShoppingBag, 
  TrendingUp, 
  Video, 
  Package, 
  Search, 
  Check, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Zap,
  ExternalLink
} from 'lucide-react';
import { 
  SME_SERVICES, 
  ENTERPRISE_SOLUTIONS, 
  ECOMMERCE_SUITE, 
  DIGITAL_MARKETING_SERVICES, 
  CREATIVE_SERVICES, 
  VELUNO_PACKAGES 
} from '../../data/offeringsData';

type TabKey = 'sme' | 'enterprise' | 'ecommerce' | 'marketing' | 'creative' | 'packages';

export const ComprehensiveOfferings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('sme');
  const [searchQuery, setSearchQuery] = useState('');

  const TABS = [
    { key: 'sme' as TabKey, label: 'Customer / SME Services', count: SME_SERVICES.length, icon: Layers },
    { key: 'enterprise' as TabKey, label: 'Enterprise Solutions', count: ENTERPRISE_SOLUTIONS.length, icon: Building2 },
    { key: 'ecommerce' as TabKey, label: 'E-Commerce Suite', count: ECOMMERCE_SUITE.length, icon: ShoppingBag },
    { key: 'marketing' as TabKey, label: 'Digital Marketing & SEO', count: DIGITAL_MARKETING_SERVICES.length, icon: TrendingUp },
    { key: 'creative' as TabKey, label: 'Creative & Video Editing', count: CREATIVE_SERVICES.length, icon: Video },
    { key: 'packages' as TabKey, label: 'Turnkey Packages', count: VELUNO_PACKAGES.length, icon: Package },
  ];

  // Filter SME Services by search
  const filteredSme = SME_SERVICES.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.deliverables.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter Enterprise Solutions by search
  const filteredEnterprise = ENTERPRISE_SOLUTIONS.filter(e => 
    e.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    e.modules.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter E-Commerce by search
  const filteredEcommerce = ECOMMERCE_SUITE.filter(ec => 
    ec.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    ec.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter Digital Marketing by search
  const filteredMarketing = DIGITAL_MARKETING_SERVICES.filter(m => 
    m.service.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.deliverables.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter Creative by search
  const filteredCreative = CREATIVE_SERVICES.filter(c => 
    c.service.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.offer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200" id="complete-offerings">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
            Complete Capabilities Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight mb-4">
            Full-Spectrum Services & Enterprise Solutions
          </h2>
          <p className="text-xs md:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From essential customer websites and automated SME software to full-scale enterprise ERP systems, complete e-commerce ecosystems, and digital growth engines.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {TABS.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.key);
                    setSearchQuery('');
                  }}
                  className={`px-3.5 py-2 rounded-xs text-xs font-bold font-mono transition-all inline-flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#0B1F3A] text-white shadow-xs'
                      : 'bg-[#F8FAFC] text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#14B8A6]' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-xs ${
                    isActive ? 'bg-[#2563EB] text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services or modules..."
              className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xs pl-9 pr-3 py-2 text-xs text-[#0B1F3A] placeholder-slate-400 focus:outline-none focus:border-[#2563EB]"
            />
          </div>

        </div>

        {/* =========================================================================
            TAB 1: CUSTOMER & SME SERVICES (18 Services)
            ========================================================================= */}
        {activeTab === 'sme' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredSme.map((srv, idx) => (
                <div
                  key={idx}
                  className="rounded-xs bg-[#F8FAFC] border border-slate-200 p-6 flex flex-col justify-between hover:border-[#2563EB] hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-heading font-bold text-base text-[#0B1F3A] group-hover:text-[#2563EB] transition-colors">
                        {srv.title}
                      </h3>
                      {srv.badge && (
                        <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-xs bg-[#14B8A6]/20 text-[#0B1F3A]">
                          {srv.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                      {srv.deliverables}
                    </p>
                  </div>

                  <Link
                    to={`/contact?service=${encodeURIComponent(srv.title)}`}
                    className="text-xs font-mono font-bold text-[#2563EB] group-hover:text-[#0B1F3A] inline-flex items-center gap-1.5 pt-3 border-t border-slate-200 uppercase"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>

            {filteredSme.length === 0 && (
              <div className="text-center py-12 text-slate-500 text-sm">
                No services found matching "{searchQuery}". Try a different keyword.
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 2: ENTERPRISE SOLUTIONS & MODULES (16 Solutions)
            ========================================================================= */}
        {activeTab === 'enterprise' && (
          <div>
            <div className="mb-6 p-4 rounded-xs bg-[#0B1F3A] text-white flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="font-heading font-extrabold text-sm text-[#14B8A6]">
                  High-Value Enterprise Architecture
                </h4>
                <p className="text-xs text-slate-300 font-light mt-0.5">
                  Built for mid-market and large enterprises, factories, retail chains, hospitals, distributors, and logistics fleets.
                </p>
              </div>
              <Link
                to="/contact?service=Enterprise%20ERP%20%26%20Custom%20Architecture"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xs"
              >
                Schedule Architecture Scoping
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredEnterprise.map((sol, idx) => (
                <div
                  key={idx}
                  className={`rounded-xs p-6 flex flex-col justify-between border transition-all group ${
                    sol.highlight
                      ? 'bg-white border-[#2563EB] shadow-sm'
                      : 'bg-[#F8FAFC] border-slate-200 hover:border-[#2563EB]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-[#2563EB] uppercase tracking-wider">
                        Enterprise Module
                      </span>
                      {sol.highlight && (
                        <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-xs bg-[#0B1F3A] text-[#14B8A6]">
                          Core Suite
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#0B1F3A] mb-2.5">
                      {sol.title}
                    </h3>
                    <div className="bg-white p-3 rounded-xs border border-slate-200/80 mb-4">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                        Modules You Can Offer:
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {sol.modules}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/contact?service=${encodeURIComponent(sol.title)}`}
                    className="text-xs font-mono font-bold text-[#0B1F3A] group-hover:text-[#2563EB] inline-flex items-center gap-1.5 pt-3 border-t border-slate-200 uppercase"
                  >
                    <span>Request Custom Modules Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>

            {filteredEnterprise.length === 0 && (
              <div className="text-center py-12 text-slate-500 text-sm">
                No enterprise solution found matching "{searchQuery}".
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 3: E-COMMERCE SUITE (Complete Lifecycle)
            ========================================================================= */}
        {activeTab === 'ecommerce' && (
          <div>
            <div className="mb-6 p-4 rounded-xs bg-[#F8FAFC] border border-slate-200 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="font-heading font-extrabold text-sm text-[#0B1F3A]">
                  Complete End-to-End E-Commerce Operations
                </h4>
                <p className="text-xs text-slate-600 font-light mt-0.5">
                  Delivered as a complete retail engine—not just a generic web template.
                </p>
              </div>
              <Link
                to="/contact?service=E-commerce%20Development"
                className="bg-[#0B1F3A] hover:bg-[#1E3A5F] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xs"
              >
                Inquire For E-Commerce
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredEcommerce.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xs bg-[#F8FAFC] border border-slate-200 p-6 flex flex-col justify-between hover:border-[#14B8A6] hover:shadow-sm transition-all"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-[#14B8A6] block mb-1">
                      E-Commerce Capability
                    </span>
                    <h3 className="font-heading font-bold text-base text-[#0B1F3A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    to={`/contact?service=${encodeURIComponent(item.title)}`}
                    className="text-xs font-mono font-bold text-[#2563EB] hover:text-[#0B1F3A] inline-flex items-center gap-1.5 pt-3 border-t border-slate-200 uppercase"
                  >
                    <span>Configure Feature</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            {filteredEcommerce.length === 0 && (
              <div className="text-center py-12 text-slate-500 text-sm">
                No e-commerce capability found matching "{searchQuery}".
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 4: DIGITAL MARKETING SERVICES
            ========================================================================= */}
        {activeTab === 'marketing' && (
          <div>
            <div className="mb-6 p-4 rounded-xs bg-[#F8FAFC] border border-slate-200 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="font-heading font-extrabold text-sm text-[#0B1F3A]">
                  Full-Funnel Digital Growth & Paid Acquisition
                </h4>
                <p className="text-xs text-slate-600 font-light mt-0.5">
                  Bundling technical SEO, Google/Meta Ads, WhatsApp broadcasts, and CRM automated follow-ups.
                </p>
              </div>
              <Link
                to="/contact?service=Digital%20Marketing%20%26%20Social%20Media"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xs"
              >
                Inquire For Growth Campaigns
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredMarketing.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-xs bg-[#F8FAFC] border border-slate-200 p-6 flex flex-col justify-between hover:border-[#2563EB] transition-all"
                >
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#0B1F3A] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-xs bg-[#2563EB]"></span>
                      <span>{m.service}</span>
                    </h3>
                    <div className="bg-white p-3.5 rounded-xs border border-slate-200 mb-4">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                        Deliverables Included:
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {m.deliverables}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/contact?service=${encodeURIComponent(m.service)}`}
                    className="text-xs font-mono font-bold text-[#2563EB] hover:text-[#0B1F3A] inline-flex items-center gap-1.5 pt-2 uppercase"
                  >
                    <span>Request Campaign Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            {filteredMarketing.length === 0 && (
              <div className="text-center py-12 text-slate-500 text-sm">
                No marketing service found matching "{searchQuery}".
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 5: CREATIVE & VIDEO SERVICES
            ========================================================================= */}
        {activeTab === 'creative' && (
          <div>
            <div className="mb-6 p-4 rounded-xs bg-[#F8FAFC] border border-slate-200 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="font-heading font-extrabold text-sm text-[#0B1F3A]">
                  Creative Strategy, Video Editing & Brand Design
                </h4>
                <p className="text-xs text-slate-600 font-light mt-0.5">
                  High-converting reels, motion graphics, brand identity, and corporate video production.
                </p>
              </div>
              <Link
                to="/contact?service=UI%2FUX%20Design%20%26%20Prototyping"
                className="bg-[#0B1F3A] hover:bg-[#1E3A5F] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xs"
              >
                Inquire For Creative Retainer
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredCreative.map((c, idx) => (
                <div
                  key={idx}
                  className="rounded-xs bg-[#F8FAFC] border border-slate-200 p-6 flex flex-col justify-between hover:border-[#14B8A6] transition-all"
                >
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#0B1F3A] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-xs bg-[#14B8A6]"></span>
                      <span>{c.service}</span>
                    </h3>
                    <div className="bg-white p-3.5 rounded-xs border border-slate-200 mb-4">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                        What You Offer:
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {c.offer}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/contact?service=${encodeURIComponent(c.service)}`}
                    className="text-xs font-mono font-bold text-[#0B1F3A] hover:text-[#2563EB] inline-flex items-center gap-1.5 pt-2 uppercase"
                  >
                    <span>Discuss Creative Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            {filteredCreative.length === 0 && (
              <div className="text-center py-12 text-slate-500 text-sm">
                No creative service found matching "{searchQuery}".
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 6: TURNKEY PACKAGES (Starter, Growth, Software, Enterprise)
            ========================================================================= */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {VELUNO_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-xs p-6 flex flex-col justify-between border transition-all ${
                  pkg.popular
                    ? 'bg-[#0B1F3A] text-white border-2 border-[#2563EB] shadow-xl relative'
                    : 'bg-[#F8FAFC] text-[#0B1F3A] border-slate-200 hover:border-slate-300'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute top-0 right-0 bg-[#2563EB] text-white text-[9px] font-mono font-bold uppercase px-2.5 py-0.5 tracking-wider">
                    Recommended
                  </span>
                )}

                <div>
                  <h3 className={`font-heading font-extrabold text-lg mb-1 ${pkg.popular ? 'text-white' : 'text-[#0B1F3A]'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs mb-5 font-light leading-relaxed ${pkg.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                    {pkg.subtitle}
                  </p>

                  <div className={`p-3 rounded-xs mb-5 text-[11px] ${
                    pkg.popular ? 'bg-white/10 text-[#14B8A6]' : 'bg-white border border-slate-200 text-slate-700'
                  }`}>
                    <span className="font-bold uppercase font-mono block text-[9px] mb-0.5">Best For:</span>
                    <span>{pkg.bestFor}</span>
                  </div>

                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-3 ${
                    pkg.popular ? 'text-[#14B8A6]' : 'text-[#2563EB]'
                  }`}>
                    Package Inclusions:
                  </span>
                  <ul className="space-y-2.5 text-xs mb-6">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#14B8A6] shrink-0 mt-0.5" />
                        <span className={pkg.popular ? 'text-slate-200' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/contact?service=${encodeURIComponent(pkg.name)}`}
                  className={`w-full text-center py-3 px-4 rounded-xs text-xs font-bold uppercase tracking-wider block transition-colors ${
                    pkg.popular
                      ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                      : 'bg-[#0B1F3A] hover:bg-[#1E3A5F] text-white'
                  }`}
                >
                  Select {pkg.name.split(' ')[0]} →
                </Link>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ComprehensiveOfferings;
