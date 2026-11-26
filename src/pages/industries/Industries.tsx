import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { industries } from '../../data/industries';
import PageBanner from '../../components/ui/PageBanner';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Lock, 
  Activity, 
  Zap, 
  Building2 
} from 'lucide-react';

export const Industries: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Industry Sectors & Domain Engineering | Veluno Softtech</title>
        <meta 
          name="description" 
          content="Explore Veluno Softtech's domain engineering practices across FinTech, Healthcare, AgriTech, E-Commerce, and Logistics & Fleet Telematics." 
        />
        <link rel="canonical" href="https://www.velunosofttech.com/industries" />
      </Helmet>

      {/* Top Banner */}
      <PageBanner 
        title="Industry Practices" 
        breadcrumb="Industries" 
        category="Domain Architecture"
        subtitle="Mission-critical software platforms engineered for high throughput, data sovereignty, and strict regulatory compliance."
      />

      {/* Main Grid */}
      <div className="container mx-auto px-4 md:px-8 py-14 md:py-20 max-w-7xl">
        
        {/* Intro Section */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
            Specialized Domain Competence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight mb-4">
            Software Architected for Regulated, High-Velocity Sectors
          </h2>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light">
            Generic software engineering often crumbles when faced with industry-specific latency constraints, immutable audit requirements, and complex legacy protocols. We assign dedicated senior squads with verified domain fluency.
          </p>
        </div>

        {/* 5-Industry Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map(ind => {
            const Icon = ind.icon;
            return (
              <div 
                key={ind.slug}
                className="bg-white border border-slate-200 rounded-xs overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#14B8A6] hover:shadow-lg transition-all group"
              >
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xs bg-[#0B1F3A] text-white flex items-center justify-center group-hover:bg-[#2563EB] transition-colors shadow-xs">
                      <Icon className="w-6 h-6 text-[#14B8A6] group-hover:text-white" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-xs bg-slate-100 text-slate-600 border border-slate-200">
                      {ind.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-light mb-5 line-clamp-3">
                    {ind.heroSubtitle}
                  </p>

                  {/* Key Compliance Tags */}
                  <div className="mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-2">
                      Verified Standards:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {ind.complianceStandards.slice(0, 2).map((std, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-slate-100 text-slate-700 border border-slate-200">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Top Architectural Solutions */}
                  <div className="space-y-1.5 pt-4 border-t border-slate-100 text-xs text-slate-700">
                    {ind.solutions.slice(0, 2).map((sol, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0 mt-0.5" />
                        <span className="font-medium text-[#0B1F3A]">{sol.title}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="p-7 pt-0">
                  <Link 
                    to={`/industries/${ind.slug}`}
                    className="btn-primary w-full text-center py-2.5 rounded-xs font-bold text-xs uppercase tracking-wider block group-hover:bg-[#2563EB]"
                  >
                    Explore {ind.title} Architecture →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            CROSS-INDUSTRY COMPARISON MATRIX
            ========================================================================= */}
        <div className="bg-[#08172b] text-white p-8 md:p-12 rounded-xs border border-slate-800 shadow-xl mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Domain Capabilities Matrix
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Cross-Sector Technical Comparison
            </h3>
            <p className="text-xs text-slate-300 font-light mt-1">
              Architectural SLAs, primary data protocols, and compliance benchmarks across our 5 active industry practices.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase text-[11px]">
                  <th className="py-3 px-4">Sector Practice</th>
                  <th className="py-3 px-4">Primary Compliance</th>
                  <th className="py-3 px-4">Throughput / Latency SLA</th>
                  <th className="py-3 px-4">Key Data Protocols</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {industries.map(ind => (
                  <tr key={ind.slug} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                      <ind.icon className="w-4 h-4 text-[#14B8A6]" />
                      <span>{ind.title}</span>
                    </td>
                    <td className="py-4 px-4 text-slate-300">
                      {ind.complianceStandards[0]}
                    </td>
                    <td className="py-4 px-4 text-[#14B8A6] font-bold">
                      {ind.slug === 'fintech' ? '<140ms Transaction SLA' : 
                       ind.slug === 'healthcare' ? 'Sub-200ms WebRTC Stream' :
                       ind.slug === 'agriculture' ? '100% Offline Resilience' :
                       ind.slug === 'e-commerce' ? '<1.5s Mobile LCP' : 'Sub-500ms Live Telematics'}
                    </td>
                    <td className="py-4 px-4 text-slate-300">
                      {ind.techStack[0]?.items.slice(0, 3).join(', ')}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link 
                        to={`/industries/${ind.slug}`} 
                        className="text-[#14B8A6] hover:underline font-bold uppercase text-[11px]"
                      >
                        Deep Dive →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-xs bg-[#F8FAFC] border border-slate-200 p-8 md:p-12 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
            Have a Specific Industry Requirement?
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1F3A] mb-3">
            Speak Directly With a Domain Architect
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6 font-light">
            We evaluate your regulatory constraints, throughput expectations, and system architecture under mutual NDA before development starts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary py-3 px-6 rounded-xs text-xs font-bold uppercase tracking-wider">
              Schedule Domain Consultation
            </Link>
            <Link to="/services" className="px-6 py-3 rounded-xs text-xs font-bold uppercase tracking-wider bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors">
              Explore All Services
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Industries;
