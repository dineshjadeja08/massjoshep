import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getIndustryBySlug } from '../../data/industries';
import FadeIn from '../../components/ui/FadeIn';
import { ArrowRight, ChevronRight, Settings } from 'lucide-react';
import NotFound from '../NotFound';

const IndustryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!industry) {
    return <NotFound />;
  }

  const Icon = industry.icon;

  return (
    <>
      <Helmet>
        <title>{industry.title} Enterprise Software Engineering | Veluno Softtech</title>
        <meta name="description" content={industry.heroSubtitle} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden border-b-4 border-[#2563EB]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity grayscale pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/95 to-[#0B1F3A]/70 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-slate-300 mb-6 text-xs font-mono">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-400">Industries</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#60A5FA] font-bold">{industry.title}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="w-16 h-16 bg-[#2563EB]/20 rounded-xl flex items-center justify-center mb-6 border border-[#2563EB]/40 shadow-inner">
              <Icon className="w-8 h-8 text-[#60A5FA]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight text-white tracking-tight">
              {industry.heroTitle}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 leading-relaxed font-light max-w-2xl">
              {industry.heroSubtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-teal px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm inline-flex items-center">
                Discuss Your {industry.title} System <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/work" className="px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left Column (Challenges) */}
            <div className="lg:col-span-5">
              <FadeIn>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 block mb-2">
                  Domain Bottlenecks
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0B1F3A] mb-4 border-b border-slate-200 pb-4">
                  Industry Challenges
                </h2>
                <p className="text-slate-600 mb-6 text-sm sm:text-base leading-relaxed">
                  Building production systems for the {industry.title} sector requires overcoming complex domain-specific hurdles, latency budgets, and compliance constraints.
                </p>

                <ul className="space-y-4">
                  {industry.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                      <div className="w-7 h-7 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center mr-3.5 shrink-0 font-bold text-xs">
                        !
                      </div>
                      <span className="text-slate-800 text-sm font-medium leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Right Column (Solutions) */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
                  Architectural Remediation
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0B1F3A] mb-4 border-b border-slate-200 pb-4">
                  How Veluno Softtech Solves Them
                </h2>
                <p className="text-slate-600 mb-6 text-sm sm:text-base leading-relaxed">
                  We deploy proven architectural patterns, event-driven queues, and dedicated senior engineering pods to build resilient platforms.
                </p>

                <div className="space-y-5">
                  {industry.solutions.map((solution, idx) => (
                    <div key={idx} className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs hover:border-[#14B8A6] hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mr-3 shrink-0">
                          <Settings className="w-4 h-4" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A]">{solution.title}</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed pl-11">
                        {solution.description}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B1F3A] text-white text-center border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Domain Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
              Need an engineering partner who understands {industry.title}?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our technical architects are ready to evaluate your domain requirements, latency expectations, and compliance architecture.
            </p>
            <Link to="/contact" className="btn-teal inline-flex items-center text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-sm">
              Schedule a Technical Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default IndustryDetail;
