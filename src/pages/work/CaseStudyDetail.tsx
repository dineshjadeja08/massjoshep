import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { caseStudies } from '../../data/caseStudies';
import { 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Activity,
  Layers,
  CheckCircle,
  FileCode,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import PageBanner from '../../components/ui/PageBanner';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = caseStudies.find(cs => cs.slug === slug);

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  // Filter related studies from the 7 curated projects only
  const relatedStudies = caseStudies.filter(cs => 
    study.relatedCaseStudies.includes(cs.slug) && cs.slug !== study.slug
  );

  return (
    <>
      <Helmet>
        <title>{study.clientName} | {study.categoryLabel} | Veluno Softtech</title>
        <meta name="description" content={study.summary} />
        <link rel="canonical" href={`https://www.velunosofttech.com/work/${study.slug}`} />
      </Helmet>
      
      {/* Top Banner */}
      <PageBanner 
        title={study.clientName} 
        breadcrumb={`Case Studies > ${study.clientName}`}
        category={study.categoryLabel}
        subtitle={study.industry}
      />

      <div className="container mx-auto px-4 md:px-8 py-10 md:py-14 max-w-7xl">
        
        {/* Back Link (Internal) */}
        <div className="mb-6">
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-[#0B1F3A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>
        </div>

        {/* Highlight Impact Metrics Banner (if results exist) */}
        {study.results && study.results.length > 0 && (
          <div className="mb-10 rounded-xl bg-[#0B1F3A] text-white p-6 md:p-8 border border-slate-800 shadow-md">
            <div className="flex items-center gap-2 mb-5 text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6]">
              <Activity className="w-4 h-4 text-[#14B8A6]" />
              <span>Key Architectural & Delivery Metrics</span>
            </div>
            
            <div className={`grid grid-cols-1 ${study.results.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-5`}>
              {study.results.map((res, i) => (
                <div key={i} className="p-4 rounded-lg bg-black/30 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#14B8A6] mb-1">
                    {res.metric}
                  </div>
                  <div className="text-xs text-slate-300 font-light leading-snug">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          {/* Main Content (Left 2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Overview & Context */}
            <section className="bg-white rounded-xl border border-slate-200/90 p-7 md:p-9 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-1.5">
                Executive Summary
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B1F3A] mb-4">
                System Overview
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed font-light mb-6">
                {study.summary}
              </p>
              
              {/* Hero Image Showcase */}
              <div className="rounded-xs overflow-hidden border border-slate-200 aspect-[16/9] bg-slate-900 relative">
                <img 
                  src={study.heroImage} 
                  alt={study.clientName} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-xs bg-[#14B8A6] text-[#0B1F3A] shadow-sm">
                    {study.status}
                  </span>
                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-xs bg-[#0B1F3A]/90 text-white border border-slate-700 shadow-sm inline-flex items-center gap-1.5 hover:bg-[#2563EB] transition-colors backdrop-blur-xs"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </section>

            {/* 2. The Problem & Architectural Bottleneck */}
            <section className="bg-[#F5F7FA] rounded-xl border border-slate-200/90 p-7 md:p-9">
              <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block mb-1.5">
                Context & Operational Bottleneck
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B1F3A] mb-3">
                The Engineering Challenge
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed font-light">
                {study.challenge}
              </p>
            </section>

            {/* 3. Engineering Approach & Solution Steps */}
            {study.approach && study.approach.length > 0 && (
              <section className="bg-white rounded-xl border border-slate-200/90 p-7 md:p-9 shadow-xs">
                <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-1.5">
                  Implementation Blueprint
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B1F3A] mb-5">
                  Veluno's Architectural Approach
                </h2>
                
                <div className="space-y-3.5">
                  {study.approach.map((step, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-[#F5F7FA] border border-slate-200/80 flex items-start gap-4">
                      <div className="w-9 h-9 rounded-md bg-[#0B1F3A] text-[#14B8A6] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-heading font-bold text-[#0B1F3A] mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs md:text-sm text-slate-600 font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 4. Veluno Role & Ownership */}
            <section className="bg-[#0B1F3A] text-white rounded-xl p-7 md:p-9 shadow-md border border-slate-800">
              <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-1.5">
                Engineering Ownership
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-3">
                Veluno's Role & Delivery Scope
              </h2>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light mb-6">
                {study.velunoRole || study.xenFirmRole}
              </p>

              <div className="p-4 rounded-lg bg-black/40 border border-slate-800 text-xs text-slate-300 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#14B8A6] shrink-0" />
                <span>
                  100% intellectual property transfer, direct GitHub repo access, zero vendor lock-in, and production SLAs.
                </span>
              </div>
            </section>

            {/* 5. Features & Capabilities Delivered */}
            <section className="bg-white rounded-xl border border-slate-200/90 p-7 md:p-9 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-1.5">
                Delivered Capabilities
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B1F3A] mb-5">
                {study.category === 'concept' ? 'Core Architecture Components' : 'Production Features Delivered'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {study.featuresDelivered.map((feat, idx) => (
                  <div key={idx} className="flex items-start p-3.5 bg-[#F5F7FA] rounded-lg border border-slate-200/80">
                    <span className="w-4 h-4 rounded-md bg-[#14B8A6] text-white flex items-center justify-center mr-2.5 mt-0.5 text-[11px] font-bold shrink-0">
                      ✓
                    </span>
                    <span className="text-xs font-medium text-slate-800 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Planned Iterations / Roadmap (if exists) */}
            {study.plannedFeatures && study.plannedFeatures.length > 0 && (
              <section className="bg-white rounded-xl border border-slate-200/90 p-7 md:p-9 shadow-xs">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Future Roadmap
                </span>
                <h2 className="text-xl md:text-2xl font-heading font-extrabold text-[#0B1F3A] mb-4">
                  Upcoming Roadmap Milestones
                </h2>
                <div className="space-y-2">
                  {study.plannedFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center p-3 bg-slate-50 rounded-lg text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sidebar Metadata Card (Sticky Right Column) */}
          <div className="lg:sticky lg:top-28 space-y-6">
            
            <div className="bg-[#0B1F3A] text-white p-6 md:p-7 rounded-xl shadow-md border border-slate-800 space-y-5">
              
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-1">
                  Project Specifications
                </span>
                <h3 className="text-xl font-heading font-extrabold text-white">
                  {study.clientName}
                </h3>
              </div>

              {/* Meta details list */}
              <div className="space-y-3.5 text-xs font-light">
                <div>
                  <span className="text-slate-400 font-mono uppercase text-[10px] block mb-0.5">Industry</span>
                  <span className="font-semibold text-white">{study.industry}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono uppercase text-[10px] block mb-0.5">Target Market / Region</span>
                  <span className="font-semibold text-white">{study.region}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono uppercase text-[10px] block mb-0.5">Delivery Timeline</span>
                  <span className="font-semibold text-white">{study.timeline}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono uppercase text-[10px] block mb-0.5">Status</span>
                  <span className="inline-block font-mono text-[11px] font-bold px-2 py-0.5 rounded-md bg-white/10 text-[#14B8A6]">
                    {study.status}
                  </span>
                </div>
              </div>

              {/* Services Provided */}
              {study.services && study.services.length > 0 && (
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-[10px] font-mono font-bold text-[#14B8A6] block mb-2 uppercase">
                    Services Rendered
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {study.services.map((svc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-sm bg-[#14B8A6]" />
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technology Stack */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-[10px] font-mono font-bold text-[#14B8A6] block mb-2.5 uppercase">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {study.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-slate-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live URL Link if available */}
              {study.liveUrl && (
                <div className="pt-4 border-t border-slate-800">
                  <a 
                    href={study.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-teal w-full text-center py-2.5 rounded-xs font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xs group"
                  >
                    <span>Open Live Platform</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              )}

              {/* CTA Button */}
              <div className="pt-4 border-t border-slate-800">
                <Link 
                  to="/contact" 
                  className="w-full text-center py-2.5 rounded-xs font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xs bg-[#2563EB] hover:bg-[#1d4ed8] text-white transition-colors"
                >
                  <span>Build Similar System</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Quick Contact Box */}
            <div className="rounded-xs bg-[#F5F7FA] p-5 border border-slate-200/90 text-center">
              <span className="text-xs font-mono font-bold uppercase text-[#2563EB] block mb-1">
                Have Architecture Questions?
              </span>
              <p className="text-xs text-slate-600 mb-3 font-light">
                Consult with our senior technical leads for custom scoping and sprint planning.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary w-full py-2.5 rounded-xs font-bold text-xs uppercase tracking-wider block"
              >
                Schedule Scoping Call
              </Link>
            </div>

          </div>

        </div>

        {/* Related Projects Section */}
        {relatedStudies.length > 0 && (
          <div className="mt-16 pt-10 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-1">
                  Explore More Deliveries
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B1F3A]">
                  Related Case Studies
                </h3>
              </div>
              <Link 
                to="/work" 
                className="mt-3 md:mt-0 text-xs font-bold text-[#0B1F3A] hover:text-[#2563EB] inline-flex items-center gap-1.5 uppercase font-mono"
              >
                <span>View Full Portfolio ({caseStudies.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStudies.slice(0, 3).map((rel) => (
                <div 
                  key={rel.slug} 
                  className="rounded-xl bg-white border border-slate-200/90 overflow-hidden flex flex-col justify-between group hover:border-[#14B8A6] hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                      <img 
                        src={rel.heroImage} 
                        alt={rel.clientName} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md bg-[#14B8A6] text-[#0B1F3A]">
                        {rel.categoryLabel}
                      </span>
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">
                        {rel.industry}
                      </span>
                      <h4 className="text-base font-heading font-bold text-[#0B1F3A] mb-1.5 group-hover:text-[#2563EB]">
                        {rel.clientName}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2 font-light">
                        {rel.summary}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <Link 
                      to={`/work/${rel.slug}`} 
                      className="btn-primary w-full text-center py-2 rounded-lg font-bold text-xs uppercase tracking-wider block"
                    >
                      View Case Study →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default CaseStudyDetail;