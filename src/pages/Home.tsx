import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { EnterpriseLogos } from '../components/ui/EnterpriseLogos';
import { 
  Globe, 
  Layers, 
  Workflow, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Check, 
  ArrowRight,
  Cpu,
  Server,
  Code2,
  Lock,
  GitBranch,
  Activity,
  Zap,
  PhoneCall,
  ChevronRight,
  Building2,
  Truck,
  CreditCard,
  ShoppingBag,
  FileCheck,
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Veluno Softtech | Enterprise Software Engineering & Autonomous AI</title>
        <meta 
          name="description" 
          content="Veluno Softtech is an enterprise software engineering company. We engineer production conversational AI systems, distributed cloud backends, and digital commerce architectures." 
        />
        <link rel="canonical" href="https://www.velunosofttech.com/" />
      </Helmet>

      {/* =========================================================================
          HERO BANNER: EXECUTIVE TECH NAVY & TEAL (OFFICIAL BRAND IDENTITY)
          ========================================================================= */}
      <section className="pt-28 md:pt-36 pb-10 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="rounded-xl bg-[#0B1F3A] text-white p-8 md:p-14 lg:p-16 text-center relative overflow-hidden shadow-md border border-slate-800">
            
            {/* Subtle engineering grid background */}
            <div className="absolute inset-0 tech-grid-dark opacity-35 pointer-events-none" />

            {/* Ambient accent glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#14B8A6]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
              
              {/* Brand Identity Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/10 text-white font-mono text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-xs border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse"></span>
                <span>VELUNO SOFTTECH</span>
                <span className="text-slate-400">·</span>
                <span className="text-[#14B8A6]">GLOBAL ENGINEERING & DELIVERY</span>
              </div>

              {/* Headline matching the exact brand typography */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.08] tracking-tight mb-5">
                Software that moves{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#14B8A6]">
                  business
                </span>{' '}
                forward.
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
                We engineer scalable web platforms, conversational AI voice agents, and high-concurrency cloud backends that help high-growth companies work smarter and scale faster.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
                <Link 
                  to="/contact" 
                  className="btn-teal px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm w-full sm:w-auto"
                >
                  Schedule Technical Discovery
                </Link>
                <Link 
                  to="/work" 
                  className="px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors w-full sm:w-auto"
                >
                  Explore 7 Case Studies
                </Link>
              </div>

              {/* Engineering Guarantees Strip */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-mono font-medium text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]"></span>
                  Sub-600ms Conversational AI
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                  Multi-AZ Cloud Microservices
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]"></span>
                  Sub-100ms Latency Budget
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
                  100% Client IP Ownership
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          ENTERPRISE CLOUD ECOSYSTEM & INTEGRATION PARTNERS (MNC TECH STRIP)
          ========================================================================= */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 font-semibold">
              COMPATIBLE WITH GLOBAL ENTERPRISE INFRASTRUCTURE & TOOLCHAINS
            </span>
          </div>

          <EnterpriseLogos />
        </div>
      </section>

      {/* =========================================================================
          GLOBAL DELIVERY BENCHMARKS (MNC STATS BAR)
          ========================================================================= */}
      <section className="py-12 bg-[#F5F7FA] border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-heading font-black text-[#0B1F3A] mb-1">
                40+
              </div>
              <div className="text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider mb-1">
                Production Releases
              </div>
              <div className="text-xs text-slate-500 font-light">
                Enterprise & High-Growth Cloud Platforms
              </div>
            </div>

            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-heading font-black text-[#0B1F3A] mb-1">
                99.99%
              </div>
              <div className="text-xs font-mono text-[#14B8A6] font-bold uppercase tracking-wider mb-1">
                Target Availability
              </div>
              <div className="text-xs text-slate-500 font-light">
                Multi-AZ Failover & Continuous Monitoring
              </div>
            </div>

            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-heading font-black text-[#0B1F3A] mb-1">
                &lt; 100ms
              </div>
              <div className="text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider mb-1">
                API Latency SLA
              </div>
              <div className="text-xs text-slate-500 font-light">
                P99 Response Target on Edge & Backends
              </div>
            </div>

            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-heading font-black text-[#0B1F3A] mb-1">
                100%
              </div>
              <div className="text-xs font-mono text-[#14B8A6] font-bold uppercase tracking-wider mb-1">
                Client IP Ownership
              </div>
              <div className="text-xs text-slate-500 font-light">
                Full Repository & Cloud Environment Transfer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CORE ENGINEERING CAPABILITIES (EXECUTIVE TECH CARDS)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Solutions & Engineering Practice
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight tracking-tight">
              Production Software Engineered for Growth & Concurrency
            </h2>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Conversational Voice AI */}
            <div className="rounded-xl bg-[#F5F7FA] border border-slate-200/90 p-7 md:p-8 shadow-xs flex flex-col justify-between transition-all hover:border-[#14B8A6] hover:shadow-md">
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-5 shadow-xs">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5">
                  Conversational Voice AI
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-5">
                  Sub-second speech-to-speech AI pipelines, multilingual natural language understanding, and automated telephony booking agents.
                </p>
              </div>
              <Link to="/services/veluno-products" className="text-xs font-bold text-[#2563EB] hover:text-[#0B1F3A] inline-flex items-center gap-1 font-mono uppercase">
                <span>Explore Voice AI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: Full-Stack SaaS Engineering */}
            <div className="rounded-xl bg-[#0B1F3A] text-white p-7 md:p-8 shadow-md flex flex-col justify-between transition-all hover:shadow-lg border border-slate-800">
              <div>
                <div className="w-11 h-11 rounded-lg bg-white/10 text-[#14B8A6] flex items-center justify-center mb-5 border border-white/10">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-white mb-2.5">
                  Full-Stack SaaS Engineering
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-5">
                  End-to-end multi-tenant web platforms, secure role-based access control, PostgreSQL relational data schemas, and billing engines.
                </p>
              </div>
              <Link to="/services/veluno-products" className="text-xs font-bold text-[#14B8A6] hover:underline inline-flex items-center gap-1 font-mono uppercase">
                <span>Explore SaaS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3: System Architecture & APIs */}
            <div className="rounded-xl bg-[#F5F7FA] border border-slate-200/90 p-7 md:p-8 shadow-xs flex flex-col justify-between transition-all hover:border-[#14B8A6] hover:shadow-md">
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-5 shadow-xs">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5">
                  System Architecture & APIs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-5">
                  High-throughput distributed microservices, webhook synchronizations, event streaming, and mission-critical cloud backends.
                </p>
              </div>
              <Link to="/engineering" className="text-xs font-bold text-[#2563EB] hover:text-[#0B1F3A] inline-flex items-center gap-1 font-mono uppercase">
                <span>Explore Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 4: Cloud Infrastructure & DevOps */}
            <div className="rounded-xl bg-[#F5F7FA] border border-slate-200/90 p-7 md:p-8 shadow-xs flex flex-col justify-between transition-all hover:border-[#14B8A6] hover:shadow-md">
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-5 shadow-xs">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5">
                  Cloud DevOps & Reliability
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-5">
                  Zero-downtime CI/CD pipelines, Kubernetes container orchestration, AWS/Vercel serverless clusters, and 24/7 SLA monitoring.
                </p>
              </div>
              <Link to="/services/veluno-care" className="text-xs font-bold text-[#2563EB] hover:text-[#0B1F3A] inline-flex items-center gap-1 font-mono uppercase">
                <span>Explore DevOps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 5: Headless E-Commerce */}
            <div className="rounded-xl bg-[#F5F7FA] border border-slate-200/90 p-7 md:p-8 shadow-xs flex flex-col justify-between transition-all hover:border-[#14B8A6] hover:shadow-md">
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-5 shadow-xs">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5">
                  Headless E-Commerce
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-5">
                  Editorial storefronts, atomic multi-warehouse inventory reconciliation, frictionless mobile checkout, and payment gateways.
                </p>
              </div>
              <Link to="/services/veluno-web" className="text-xs font-bold text-[#2563EB] hover:text-[#0B1F3A] inline-flex items-center gap-1 font-mono uppercase">
                <span>Explore Commerce</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 6: Technical SEO & Speed */}
            <div className="rounded-xl bg-[#F5F7FA] border border-slate-200/90 p-7 md:p-8 shadow-xs flex flex-col justify-between transition-all hover:border-[#14B8A6] hover:shadow-md">
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-5 shadow-xs">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5">
                  Technical SEO & Velocity
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-5">
                  Sub-100ms Core Web Vitals optimization, server-rendered dynamic metadata, structured data schema, and conversion funnel auditing.
                </p>
              </div>
              <Link to="/services/veluno-growth" className="text-xs font-bold text-[#2563EB] hover:text-[#0B1F3A] inline-flex items-center gap-1 font-mono uppercase">
                <span>Explore Optimization</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CURATED CASE STUDIES (EXECUTIVE DARK SECTION)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#0B1F3A] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
                Delivered Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
                Featured Case Studies
              </h2>
            </div>
            <Link 
              to="/work" 
              className="mt-4 md:mt-0 text-xs font-bold text-[#14B8A6] uppercase tracking-wider hover:underline inline-flex items-center gap-1.5 font-mono"
            >
              <span>View All 7 Portfolio Works</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Case 1: Zylin Voice AI */}
            <div className="rounded-xl bg-[#111827] border border-slate-800 overflow-hidden flex flex-col justify-between group hover:border-[#14B8A6] hover:shadow-lg transition-all duration-300">
              <div>
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1200" 
                    alt="Zylin Voice AI" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#14B8A6] text-[#0B1F3A] shadow-xs">
                    Conversational Voice AI
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-mono font-bold text-[#14B8A6] block mb-1">Zylin Voice AI</span>
                  <h3 className="text-xl font-heading font-extrabold text-white mb-2.5">Sub-Second Conversational Voice AI</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                    AI-powered multilingual voice agents engineered by Veluno for automated customer support, lead qualification, and appointment booking.
                  </p>
                  <div className="text-xs font-mono text-[#14B8A6] font-bold p-3 rounded-lg bg-black/50 border border-slate-800">
                    &lt; 600ms latency · 94% booking accuracy
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link to="/work/zylinn-ai" className="btn-teal w-full text-center py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-1.5 shadow-xs">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Case 2: LinkSynk Pro */}
            <div className="rounded-xl bg-[#111827] border border-slate-800 overflow-hidden flex flex-col justify-between group hover:border-[#14B8A6] hover:shadow-lg transition-all duration-300">
              <div>
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" 
                    alt="LinkSynk Pro" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#14B8A6] text-[#0B1F3A] shadow-xs">
                    Creator SaaS Platform
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-mono font-bold text-[#14B8A6] block mb-1">LinkSynk Pro</span>
                  <h3 className="text-xl font-heading font-extrabold text-white mb-2.5">High-Speed Bio-Link Platform</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                    Ultra-fast bio-link infrastructure for creators and modern brands, featuring sub-100ms load speeds, multi-currency tipping, and custom routing.
                  </p>
                  <div className="text-xs font-mono text-[#14B8A6] font-bold p-3 rounded-lg bg-black/50 border border-slate-800">
                    &lt; 100ms edge load · 99.98% availability
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link to="/work/linksync" className="btn-teal w-full text-center py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-1.5 shadow-xs">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Case 3: CAVVE Luxury Atelier */}
            <div className="rounded-xl bg-[#111827] border border-slate-800 overflow-hidden flex flex-col justify-between group hover:border-[#14B8A6] hover:shadow-lg transition-all duration-300">
              <div>
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200" 
                    alt="CAVVE Luxury Atelier" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#14B8A6] text-[#0B1F3A] shadow-xs">
                    High-Fashion Storefront
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-mono font-bold text-[#14B8A6] block mb-1">CAVVE Luxury Atelier</span>
                  <h3 className="text-xl font-heading font-extrabold text-white mb-2.5">Editorial E-Commerce Experience</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                    A premium fashion e-commerce platform engineered with editorial aesthetics, collection lookbooks, and high-performance catalog browsing.
                  </p>
                  <div className="text-xs font-mono text-[#14B8A6] font-bold p-3 rounded-lg bg-black/50 border border-slate-800">
                    Sub-second transitions · Mobile-first UX
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link to="/work/cavve" className="btn-teal w-full text-center py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-1.5 shadow-xs">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          ENTERPRISE INDUSTRY VERTICALS (MNC DOMAIN EXPERTISE)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Industry Verticals
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-4">
              Specialized Domain Engineering for Critical Industries
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              We engineer mission-critical systems complying with regional regulatory standards and high-volume transaction patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Industry 1: FinTech */}
            <div className="p-6 rounded-xl bg-[#F5F7FA] border border-slate-200/90 flex flex-col justify-between hover:border-[#2563EB] transition-colors">
              <div>
                <CreditCard className="w-7 h-7 text-[#2563EB] mb-4" />
                <h4 className="font-heading font-extrabold text-base text-[#0B1F3A] mb-2">
                  FinTech & Banking
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed mb-4">
                  GST-compliant invoicing engines, relational ledger accounting, automated multi-currency settlements, and payment gateway webhooks.
                </p>
              </div>
              <Link to="/work/xenbill" className="text-xs font-mono font-bold text-[#2563EB] hover:underline inline-flex items-center gap-1">
                <span>View BillSync Pro</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Industry 2: Logistics */}
            <div className="p-6 rounded-xl bg-[#F5F7FA] border border-slate-200/90 flex flex-col justify-between hover:border-[#14B8A6] transition-colors">
              <div>
                <Truck className="w-7 h-7 text-[#14B8A6] mb-4" />
                <h4 className="font-heading font-extrabold text-base text-[#0B1F3A] mb-2">
                  Logistics & Telematics
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed mb-4">
                  Real-time GPS vehicle tracking, automated dispatch decision trees, auditable milestone history, and multi-node fleet routing.
                </p>
              </div>
              <Link to="/work/fleet-tracking-platform" className="text-xs font-mono font-bold text-[#14B8A6] hover:underline inline-flex items-center gap-1">
                <span>View VeloFleet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Industry 3: Retail & E-Commerce */}
            <div className="p-6 rounded-xl bg-[#F5F7FA] border border-slate-200/90 flex flex-col justify-between hover:border-[#2563EB] transition-colors">
              <div>
                <ShoppingBag className="w-7 h-7 text-[#2563EB] mb-4" />
                <h4 className="font-heading font-extrabold text-base text-[#0B1F3A] mb-2">
                  Retail & Connected Commerce
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed mb-4">
                  Headless storefront architectures, real-time warehouse stock synchronization, atomic reservation locks, and sub-second checkout.
                </p>
              </div>
              <Link to="/work/commerce-platform-concept" className="text-xs font-mono font-bold text-[#2563EB] hover:underline inline-flex items-center gap-1">
                <span>View OmniSync</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Industry 4: AI & Conversational Automation */}
            <div className="p-6 rounded-xl bg-[#F5F7FA] border border-slate-200/90 flex flex-col justify-between hover:border-[#14B8A6] transition-colors">
              <div>
                <PhoneCall className="w-7 h-7 text-[#14B8A6] mb-4" />
                <h4 className="font-heading font-extrabold text-base text-[#0B1F3A] mb-2">
                  Voice AI & Media
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed mb-4">
                  Sub-600ms WebRTC voice processing, regional trilingual LLMs, automated CRM calendar appointments, and WhatsApp dispatch.
                </p>
              </div>
              <Link to="/work/zylinn-ai" className="text-xs font-mono font-bold text-[#14B8A6] hover:underline inline-flex items-center gap-1">
                <span>View Zylin Voice AI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ENGAGEMENT FRAMEWORKS (ENTERPRISE DELIVERY MODELS)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F5F7FA] border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Engagement Frameworks
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-4">
              Engineering Partnerships Built for Velocity, Security, and Scale
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              We operate as your dedicated technical arm — offering predictable milestone delivery, embedded senior developer pods, and enterprise systems modernization.
            </p>
          </div>

          {/* 3 High-Impact Engagement Models */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Model 1: Dedicated Engineering Pods */}
            <div className="rounded-xl bg-[#0B1F3A] text-white p-7 md:p-8 shadow-md flex flex-col justify-between border border-slate-800 transition-transform hover:-translate-y-1">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#14B8A6] text-[#0B1F3A] inline-block mb-4">
                  Most Popular For Scale
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-white mb-2">
                  Dedicated Pods
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                  Autonomous engineering pods (Staff Architect, Senior Full-Stack Engineers, QA & DevOps) integrated directly into your sprint backlog.
                </p>

                <ul className="space-y-3 text-xs text-slate-300 mb-8 border-t border-slate-800 pt-5">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#14B8A6] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>2-week agile sprint delivery cadence</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#14B8A6] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Direct Slack/Discord & GitHub PR access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#14B8A6] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Daily asynchronous standups & Linear sync</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#14B8A6] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Scale capacity up or down with 30-day flexibility</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/contact" 
                className="btn-teal w-full text-center py-3 rounded-lg font-bold text-xs uppercase tracking-wider block shadow-xs"
              >
                Inquire For Dedicated Pod
              </Link>
            </div>

            {/* Model 2: Milestone-Based Architecture */}
            <div className="rounded-xl bg-white border border-slate-200 text-[#0B1F3A] p-7 md:p-8 shadow-xs flex flex-col justify-between transition-transform hover:-translate-y-1">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 inline-block mb-4">
                  Predictable Scope & Timeline
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-[#0B1F3A] mb-2">
                  Fixed Milestones
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-6">
                  Complete end-to-end execution of a scoped application, AI voice agent, or headless storefront with contractual deliverables and milestone billing.
                </p>

                <ul className="space-y-3 text-xs text-slate-600 mb-8 border-t border-slate-100 pt-5">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Locked architectural specs & schema validation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Payment tied to staging acceptance milestones</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>100% intellectual property & code ownership</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>30-day post-launch warranty & handover support</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/contact" 
                className="btn-primary w-full text-center py-3 rounded-lg font-bold text-xs uppercase tracking-wider block shadow-xs"
              >
                Request Fixed-Scope Scoping
              </Link>
            </div>

            {/* Model 3: Architecture Audit & Modernization */}
            <div className="rounded-xl bg-white border border-slate-200 text-[#0B1F3A] p-7 md:p-8 shadow-xs flex flex-col justify-between transition-transform hover:-translate-y-1">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 inline-block mb-4">
                  Performance & Reliability
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-[#0B1F3A] mb-2">
                  Systems Audit
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-6">
                  High-intensity 2-week technical assessment to unblock database concurrency bottlenecks, reduce runaway cloud costs, and harden security.
                </p>

                <ul className="space-y-3 text-xs text-slate-600 mb-8 border-t border-slate-100 pt-5">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Deep-dive database, query & latency analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Cloud architecture & security vulnerability scan</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Actionable refactoring & cost reduction roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Hands-on execution of critical path bottlenecks</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/engineering" 
                className="btn-primary w-full text-center py-3 rounded-lg font-bold text-xs uppercase tracking-wider block shadow-xs"
              >
                Explore Architecture Audit
              </Link>
            </div>

          </div>

          {/* Client Acquisition Guarantees Bar */}
          <div className="mt-12 rounded-xl bg-white border border-slate-200 p-6 md:p-8 shadow-xs">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
              <div>
                <div className="font-mono text-xs font-bold text-[#14B8A6] uppercase mb-1">01 / Ownership</div>
                <div className="font-heading font-bold text-sm text-[#0B1F3A]">100% IP Transfer</div>
                <p className="text-xs text-slate-500 font-light mt-0.5">Your repo, your cloud, zero vendor lock-in.</p>
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-[#14B8A6] uppercase mb-1">02 / Direct Access</div>
                <div className="font-heading font-bold text-sm text-[#0B1F3A]">Staff Architects</div>
                <p className="text-xs text-slate-500 font-light mt-0.5">Speak directly with technical leads, not salespeople.</p>
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-[#14B8A6] uppercase mb-1">03 / Speed & Scale</div>
                <div className="font-heading font-bold text-sm text-[#0B1F3A]">Sub-100ms Latency</div>
                <p className="text-xs text-slate-500 font-light mt-0.5">High-concurrency systems built for real scale.</p>
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-[#14B8A6] uppercase mb-1">04 / Security</div>
                <div className="font-heading font-bold text-sm text-[#0B1F3A]">Zero-Trust Standard</div>
                <p className="text-xs text-slate-500 font-light mt-0.5">SOC2 & ISO-aligned controls, RBAC, and audit logs.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CLOSING BANNER
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="rounded-xl bg-[#0B1F3A] text-white p-8 md:p-14 text-center relative overflow-hidden shadow-sm border border-slate-800">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-3 tracking-tight">
              Ready to move your business forward?
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto mb-8 font-light">
              Schedule a technical discovery call with our solutions architects to scope your upcoming project, review your stack, or build an MVP.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <Link 
                to="/contact" 
                className="btn-teal px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                Schedule Technical Discovery
              </Link>
              <Link 
                to="/engineering" 
                className="px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                View System Architecture
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;