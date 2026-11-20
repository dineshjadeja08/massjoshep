import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import PageBanner from '../../components/ui/PageBanner';

type FilterCategory = 'all' | 'product' | 'concept';

const Work: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filtered = filter === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === filter);

  return (
    <>
      <Helmet>
        <title>Portfolio & Case Studies | Veluno Softtech</title>
        <meta
          name="description"
          content="Explore Veluno Softtech's production software, conversational AI voice agents, SaaS products, and enterprise architecture blueprints."
        />
        <link rel="canonical" href="https://www.velunosofttech.com/work" />
      </Helmet>

      {/* Top Banner */}
      <PageBanner
        title="Portfolio Works"
        breadcrumb="Case Studies"
        subtitle="Software that moves business forward — from sub-second conversational voice intelligence to scalable commerce and logistics architectures."
      />

      {/* Main Portfolio Grid */}
      <div className="container mx-auto px-4 md:px-8 py-14 md:py-16 max-w-7xl">

        {/* Intro & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 border-b border-slate-200 pb-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-1">
              Curated Deliveries & Systems
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B1F3A]">
              Featured Products & Blueprints
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Works', count: caseStudies.length },
              { id: 'product', label: 'SaaS & AI Products', count: caseStudies.filter(c => c.category === 'product').length },
              { id: 'concept', label: 'Architecture Blueprints', count: caseStudies.filter(c => c.category === 'concept').length },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as FilterCategory)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all inline-flex items-center gap-2 cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#0B1F3A] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                  filter === tab.id ? 'bg-[#14B8A6] text-[#0B1F3A] font-bold' : 'bg-slate-200 text-slate-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Engineering Integrity Note */}
        <div className="mb-10 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3 text-xs text-slate-600">
          <ShieldCheck className="w-4 h-4 text-[#14B8A6] shrink-0" />
          <span>
            <strong>Client Governance:</strong> Veluno strictly honors mutual NDAs. Proprietary external client source repositories are never published publicly. Portfolio items below represent internal SaaS products and architectural engineering blueprints.
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(cs => (
            <div
              key={cs.slug}
              className="rounded-xl bg-white border border-slate-200/90 overflow-hidden flex flex-col justify-between group hover:border-[#14B8A6] hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Image & Badges Container */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img
                    src={cs.heroImage}
                    alt={cs.clientName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  {/* Shared Badge Wrapper to prevent collisions */}
                  <div className="absolute top-3 inset-x-3 flex flex-wrap items-start justify-between gap-2 pointer-events-none z-10">
                    <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-bold tracking-wide uppercase bg-[#14B8A6] text-[#0B1F3A] shadow-xs">
                      {cs.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-bold tracking-wide uppercase bg-[#0B1F3A]/90 text-slate-100 border border-slate-700/80 shadow-xs backdrop-blur-xs">
                      {cs.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <span className="text-[11px] font-mono font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
                    {cs.industry}
                  </span>

                  <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5 group-hover:text-[#2563EB] transition-colors">
                    {cs.clientName}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-light mb-5 line-clamp-3">
                    {cs.summary}
                  </p>

                  {/* Veluno Scope Callout */}
                  <div className="mb-4 bg-[#F5F7FA] p-3 rounded-lg border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                    <span className="font-bold text-[#0B1F3A] block mb-0.5 text-[11px] uppercase tracking-wider">
                      Veluno's Engineering Scope:
                    </span>
                    <span className="line-clamp-2 text-slate-600 font-light">
                      {cs.velunoRole || cs.xenFirmRole}
                    </span>
                  </div>

                  {/* Results / Highlight Metrics */}
                  {cs.results && cs.results.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-4 bg-[#0B1F3A] text-white p-3 rounded-lg border border-slate-800">
                      {cs.results.slice(0, 2).map((res, i) => (
                        <div key={i} className="min-w-0">
                          <div className="text-[11px] font-bold text-[#14B8A6] font-mono uppercase truncate">
                            {res.metric}
                          </div>
                          <div className="text-[10px] text-slate-300 leading-tight mt-0.5 line-clamp-1 font-light">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {cs.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {tech}
                      </span>
                    ))}
                    {cs.techStack.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500">
                        +{cs.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <Link
                  to={`/work/${cs.slug}`}
                  className="btn-primary w-full text-center py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-1.5 shadow-xs group-hover:bg-[#2563EB] transition-all"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 rounded-xl bg-[#0B1F3A] text-white p-8 md:p-12 relative overflow-hidden shadow-lg border border-slate-800">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Have an Ambitious Platform in Mind?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white leading-tight mb-4">
              Let’s Architect and Deliver Your Next Software Milestone.
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light mb-8 max-w-xl">
              Whether you need sub-second conversational AI voice agents, high-concurrency SaaS infrastructure, or an auditable internal operational dashboard, our senior engineering pods are ready to build.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-teal px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2">
                <span>Start Project Discussion</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/engineering" className="px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 transition-colors">
                Explore System Architecture
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Work;
