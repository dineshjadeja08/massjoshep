import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getIndustryBySlug } from '../../data/industries';
import { caseStudies } from '../../data/caseStudies';
import FadeIn from '../../components/ui/FadeIn';
import { 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Lock, 
  CheckCircle, 
  Cpu, 
  Database, 
  Activity, 
  Server, 
  ChevronDown,
  Layers,
  FileCode,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import NotFound from '../NotFound';

const IndustryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!industry) {
    return <NotFound />;
  }

  const Icon = industry.icon;
  const matchingCaseStudies = caseStudies.filter(cs => 
    industry.relatedCaseStudySlugs.includes(cs.slug)
  );

  // Structured Data Schema for Google SEO (Service + FAQPage)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": industry.title,
        "serviceType": "Software Engineering & Architecture",
        "provider": {
          "@type": "Organization",
          "name": "Veluno Softtech",
          "url": "https://www.velunosofttech.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Vivekananda Nagar, Thoraipakkam",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600097",
            "addressCountry": "IN"
          }
        },
        "description": industry.metaDescription,
        "areaServed": ["India", "United States", "United Kingdom", "Europe", "Australia", "Middle East"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": industry.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{industry.title} Enterprise Software Engineering | Veluno Softtech</title>
        <meta name="description" content={industry.metaDescription} />
        <link rel="canonical" href={`https://www.velunosofttech.com/industries/${industry.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="bg-[#0B1F3A] text-white pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden border-b border-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity grayscale pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/95 to-[#0B1F3A]/80 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-slate-300 mb-6 text-xs font-mono">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link to="/services" className="hover:text-white transition-colors">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#14B8A6] font-bold">{industry.title}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 text-[#14B8A6] text-xs font-mono font-bold uppercase tracking-wider mb-5 border border-white/10">
              <Icon className="w-4 h-4 text-[#14B8A6]" />
              <span>{industry.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight text-white tracking-tight">
              {industry.heroTitle}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-light max-w-3xl">
              {industry.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                to="/contact" 
                className="btn-teal px-8 py-3.5 rounded-xs text-xs font-bold uppercase tracking-wider shadow-sm inline-flex items-center gap-2"
              >
                <span>Schedule Domain Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/work" 
                className="px-6 py-3.5 rounded-xs text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
              >
                View Case Studies ({caseStudies.length})
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPLIANCE & REGULATORY STANDARDS STRIP
          ========================================================================= */}
      <section className="bg-[#08172b] py-6 border-b border-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
              <span>Verified Domain Compliance Standards:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {industry.complianceStandards.map((std, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 rounded-xs bg-white/5 border border-slate-700/80 text-[11px] font-mono text-slate-200"
                >
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: DOMAIN STRATEGIC CONTEXT & OVERVIEW
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Domain Strategic Context
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0B1F3A] mb-6 leading-tight">
              Engineering Disciplines Shaping {industry.title}
            </h2>
            <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed font-light">
              {industry.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DOMAIN BOTTLENECKS VS VELUNO ARCHITECTURAL REMEDIATION
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: Domain Bottlenecks */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 block mb-2">
                  Operational Bottlenecks
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1F3A] mb-3">
                  Critical Sector Failure Modes
                </h2>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light">
                  Standard web agencies fail in {industry.title} because they underestimate regulatory rigor, latency budgets, and domain-specific data integrity.
                </p>
              </div>

              <div className="space-y-4">
                {industry.challenges.map((ch, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xs border border-slate-200 shadow-xs">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-xs bg-rose-50 text-rose-600 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        !
                      </div>
                      <div>
                        <h3 className="text-sm font-heading font-bold text-[#0B1F3A] mb-1">
                          {ch.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-light">
                          {ch.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Veluno's Architectural Solutions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
                  Architectural Remediation
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1F3A] mb-3">
                  How Veluno Softtech Solves Them
                </h2>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light">
                  We deploy immutable event streams, hardened API gateways, and dedicated senior engineering pods to deliver fault-tolerant systems.
                </p>
              </div>

              <div className="space-y-5">
                {industry.solutions.map((sol, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-6 md:p-7 rounded-xs border border-slate-200 shadow-xs hover:border-[#14B8A6] hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-xs bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center font-mono font-bold text-xs shrink-0">
                        0{idx + 1}
                      </div>
                      <h3 className="text-base sm:text-lg font-heading font-bold text-[#0B1F3A]">
                        {sol.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-4 pl-11">
                      {sol.description}
                    </p>

                    <div className="pl-11 space-y-2 mb-4">
                      {sol.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-[#14B8A6] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pl-11 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                      <span className="text-[#2563EB] font-bold">Architecture:</span>
                      <span>{sol.techHighlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: DOMAIN TECH STACK & ARCHITECTURE COMPONENTS
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Engineering Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0B1F3A] mb-3">
              Production Technology Stack for {industry.title}
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light">
              We select battle-tested, high-concurrency protocols and storage engines tailored specifically to the throughput and regulatory constraints of {industry.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.techStack.map((group, idx) => (
              <div key={idx} className="bg-[#F8FAFC] p-6 rounded-xs border border-slate-200">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-3">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono px-2.5 py-1 rounded-xs bg-white text-slate-700 border border-slate-200 shadow-2xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ENTERPRISE SECURITY & RELIABILITY GUARANTEES
          ========================================================================= */}
      <section className="py-16 bg-[#0B1F3A] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
                Guaranteed Defense
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-4">
                Security, Uptime & Governance Guarantees
              </h2>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light mb-6">
                Every software delivery is backed by written contractual warranties, automated static analysis tests, and explicit intellectual property transfer.
              </p>
              <Link 
                to="/security" 
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Review Security Architecture & NDAs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-7 bg-[#102A4E] p-6 md:p-8 rounded-xs border border-slate-700 space-y-3.5">
              {industry.securityGuarantees.map((guarantee, i) => (
                <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{guarantee}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: DEMONSTRATED CASE STUDIES (PROOF & TRUST)
          ========================================================================= */}
      {matchingCaseStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                  Demonstrated Deliveries
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0B1F3A]">
                  Related Case Studies in {industry.title}
                </h2>
              </div>
              <Link 
                to="/work" 
                className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-[#2563EB] hover:underline inline-flex items-center gap-1"
              >
                <span>View All Portfolio Work ({caseStudies.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {matchingCaseStudies.map(cs => (
                <div 
                  key={cs.slug} 
                  className="rounded-xs bg-white border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#14B8A6] hover:shadow-lg transition-all group"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                      <img 
                        src={cs.heroImage} 
                        alt={cs.clientName} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-xs bg-[#14B8A6] text-[#0B1F3A]">
                        {cs.status}
                      </span>
                    </div>

                    <div className="p-6">
                      <span className="text-[11px] font-mono font-bold text-[#2563EB] uppercase block mb-1">
                        {cs.industry}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-[#0B1F3A] mb-2 group-hover:text-[#2563EB]">
                        {cs.clientName}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-light mb-4 line-clamp-3">
                        {cs.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {cs.techStack.slice(0, 5).map(t => (
                          <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-slate-100 text-slate-700 border border-slate-200">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link 
                      to={`/work/${cs.slug}`} 
                      className="btn-primary w-full text-center py-2.5 rounded-xs font-bold text-xs uppercase tracking-wider block"
                    >
                      Read Full Case Study →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 6: FREQUENTLY ASKED QUESTIONS (SEO ACCORDION)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Domain Intelligence & FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0B1F3A] mb-3">
              Common Questions for {industry.title}
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light">
              Clear, transparent answers regarding timelines, technical scoping, compliance audits, and code ownership.
            </p>
          </div>

          <div className="space-y-3.5">
            {industry.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-xs border border-slate-200 overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-heading font-bold text-[#0B1F3A]">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed font-light border-t border-slate-100">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CONVERSION CTA
          ========================================================================= */}
      <section className="py-20 bg-[#0B1F3A] text-white text-center border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Ready to Engineer Your System?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-4 text-white leading-tight">
              Let’s Architect and Deliver Your {industry.title} Platform.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Consult with senior technical architects. We review your requirements under mutual NDA, provide a written architectural scope, and guarantee milestone delivery.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="btn-teal inline-flex items-center text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xs shadow-sm"
              >
                <span>Schedule a Technical Scoping Session</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="px-6 py-3.5 rounded-xs text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default IndustryDetail;
