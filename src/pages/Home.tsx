import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { EnterpriseLogos } from '../components/ui/EnterpriseLogos';
import ProjectCostEstimator from '../components/ui/ProjectCostEstimator';
import EngagementModels from '../components/ui/EngagementModels';
import { 
  WebsiteDevIcon, 
  WebAppIcon, 
  MobileDevIcon, 
  EcommerceIcon, 
  UiUxIcon, 
  CustomSoftwareIcon, 
  CrmErpIcon, 
  AiAutomationIcon 
} from '../components/ui/CustomServiceIcons';
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
  Smartphone,
  Palette,
  Sparkles,
  Search,
  CheckCircle,
  MessageSquare
} from 'lucide-react';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Veluno Softtech | Custom Software & Web Development Company</title>
        <meta 
          name="description" 
          content="Veluno Softtech builds digital solutions that grow your business. We engineer high-performing websites, custom web apps, mobile applications, and AI business automation." 
        />
        <link rel="canonical" href="https://www.velunosofttech.com/" />
      </Helmet>

      {/* =========================================================================
          HERO SECTION: CONVERSION-FOCUSED (MASTER PROMPT SPEC)
          ========================================================================= */}
      <section className="pt-28 md:pt-36 pb-12 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="rounded-2xl bg-[#0B1F3A] text-white p-8 md:p-14 lg:p-16 text-center relative overflow-hidden shadow-lg border border-slate-800">
            
            {/* Subtle engineering grid background */}
            <div className="absolute inset-0 tech-grid-dark opacity-35 pointer-events-none" />

            {/* Ambient accent glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#14B8A6]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
              
              {/* Supporting Live Availability Badge */}
              <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-xs bg-white/10 text-white font-mono text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-xs border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse"></span>
                <span>Active Engineering Hub · Chennai (IST)</span>
                <span className="text-white/40">·</span>
                <span className="text-[#14B8A6]">UK, US & EU Sync Available</span>
              </div>

              {/* Exact Master Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.08] tracking-tight mb-6">
                We Build Digital Solutions That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#14B8A6]">
                  Grow
                </span>{' '}
                Your Business.
              </h1>

              {/* Exact Master Supporting Text */}
              <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
                From high-performing websites to custom software and mobile applications, Veluno Softtech helps businesses turn ideas into powerful digital experiences.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
                <Link 
                  to="/contact" 
                  className="btn-teal px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm w-full sm:w-auto hover:scale-102 transition-transform"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/services" 
                  className="px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors w-full sm:w-auto"
                >
                  Explore Our Services
                </Link>
              </div>

              {/* Software Engineering Guarantees Strip */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-mono font-medium text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]"></span>
                  Custom Code Architecture
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                  Mobile & Cloud Native
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]"></span>
                  Sub-100ms API SLA
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
          ENTERPRISE INFRASTRUCTURE & TOOLCHAINS (OFFICIAL VECTOR LOGOS)
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
          SECTION 2: 8 SERVICES PREVIEW (EXACT PROMPT SPECIFICATION)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Comprehensive Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-4">
              Services Built to Power Modern Businesses
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              From web platforms and native mobile apps to custom enterprise ERPs and conversational AI, we deliver end-to-end technical execution.
            </p>
          </div>

          {/* 8-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Website Development */}
            <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/90 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-1 group">
              <div>
                <div className="w-13 h-13 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors shadow-xs border border-slate-700/40">
                  <WebsiteDevIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#0B1F3A] mb-2">
                  Website Development
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                  High-speed corporate websites, headless CMS architectures, and Next.js platforms built for SEO authority and lead conversion.
                </p>
              </div>
              <Link 
                to="/services/website-development" 
                className="text-xs font-bold text-[#2563EB] group-hover:text-[#0B1F3A] inline-flex items-center gap-1 font-mono uppercase pt-3 border-t border-slate-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2: Web Application Development */}
            <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/90 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-1 group">
              <div>
                <div className="w-13 h-13 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors shadow-xs border border-slate-700/40">
                  <WebAppIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#0B1F3A] mb-2">
                  Web Application Development
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                  Multi-tenant SaaS products, customer onboarding portals, subscription billing engines, and high-concurrency cloud backends.
                </p>
              </div>
              <Link 
                to="/services/web-application-development" 
                className="text-xs font-bold text-[#2563EB] group-hover:text-[#0B1F3A] inline-flex items-center gap-1 font-mono uppercase pt-3 border-t border-slate-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3: Mobile App Development */}
            <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/90 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-1 group">
              <div>
                <div className="w-13 h-13 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors shadow-xs border border-slate-700/40">
                  <MobileDevIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#0B1F3A] mb-2">
                  Mobile App Development
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                  Native iOS (Swift), Android (Kotlin), and cross-platform React Native / Flutter apps with offline-first synchronization.
                </p>
              </div>
              <Link 
                to="/services/mobile-app-development" 
                className="text-xs font-bold text-[#2563EB] group-hover:text-[#0B1F3A] inline-flex items-center gap-1 font-mono uppercase pt-3 border-t border-slate-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 4: E-Commerce Development */}
            <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/90 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-1 group">
              <div>
                <div className="w-13 h-13 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors shadow-xs border border-slate-700/40">
                  <EcommerceIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#0B1F3A] mb-2">
                  E-Commerce Development
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                  Custom Shopify Plus storefronts, headless commerce, inventory synchronizations, and secure global payment gateways.
                </p>
              </div>
              <Link 
                to="/services/ecommerce-development" 
                className="text-xs font-bold text-[#2563EB] group-hover:text-[#0B1F3A] inline-flex items-center gap-1 font-mono uppercase pt-3 border-t border-slate-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 5: UI/UX Design & Branding */}
            <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/90 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-1 group">
              <div>
                <div className="w-13 h-13 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors shadow-xs border border-slate-700/40">
                  <UiUxIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#0B1F3A] mb-2">
                  UI/UX Design
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                  Figma design systems, interactive product prototypes, user journey mapping, and authoritative corporate brand identities.
                </p>
              </div>
              <Link 
                to="/services/ui-ux-design" 
                className="text-xs font-bold text-[#2563EB] group-hover:text-[#0B1F3A] inline-flex items-center gap-1 font-mono uppercase pt-3 border-t border-slate-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 6: Custom Software Development */}
            <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/90 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-1 group">
              <div>
                <div className="w-13 h-13 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors shadow-xs border border-slate-700/40">
                  <CustomSoftwareIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#0B1F3A] mb-2">
                  Custom Software Development
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                  Tailored business process software, internal operations portals, automated data pipelines, and legacy modernization.
                </p>
              </div>
              <Link 
                to="/services/custom-software-development" 
                className="text-xs font-bold text-[#2563EB] group-hover:text-[#0B1F3A] inline-flex items-center gap-1 font-mono uppercase pt-3 border-t border-slate-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 7: CRM & ERP Solutions */}
            <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/90 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-1 group">
              <div>
                <div className="w-13 h-13 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors shadow-xs border border-slate-700/40">
                  <CrmErpIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#0B1F3A] mb-2">
                  CRM & ERP Solutions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                  Unified enterprise operational systems connecting sales pipelines, warehouse inventory, order dispatches, and invoicing.
                </p>
              </div>
              <Link 
                to="/services/crm-erp-development" 
                className="text-xs font-bold text-[#2563EB] group-hover:text-[#0B1F3A] inline-flex items-center gap-1 font-mono uppercase pt-3 border-t border-slate-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 8: AI & Business Automation */}
            <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/90 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-1 group">
              <div>
                <div className="w-13 h-13 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors shadow-xs border border-slate-700/40">
                  <AiAutomationIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#0B1F3A] mb-2">
                  AI & Business Automation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                  Sub-second conversational voice AI agents, automated telephony assistants, intelligent document processing, and workflows.
                </p>
              </div>
              <Link 
                to="/services/ai-automation" 
                className="text-xs font-bold text-[#2563EB] group-hover:text-[#0B1F3A] inline-flex items-center gap-1 font-mono uppercase pt-3 border-t border-slate-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="btn-primary px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-xs"
            >
              <span>Explore All 34+ SME & Enterprise Offerings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Access to High-Demand SME & Enterprise Modules */}
          <div className="mt-8 pt-8 border-t border-slate-200/80 max-w-4xl mx-auto text-center">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-3 font-semibold">
              Popular SME & Enterprise Solutions:
            </span>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              {[
                { name: 'Business Websites & CMS', link: '/services#complete-offerings' },
                { name: 'E-Commerce & Online Stores', link: '/services#complete-offerings' },
                { name: 'Custom CRM & Sales Pipelines', link: '/services#complete-offerings' },
                { name: 'Billing, Invoicing & GST', link: '/services#complete-offerings' },
                { name: 'Inventory & POS Software', link: '/services#complete-offerings' },
                { name: 'WhatsApp & Process Automation', link: '/services#complete-offerings' },
                { name: 'School & Hospital Management', link: '/services#complete-offerings' },
                { name: 'Full ERP & Supply Chain (SCM/WMS)', link: '/services#complete-offerings' },
                { name: 'Reels, Video Editing & Brand Identity', link: '/services#complete-offerings' },
              ].map((pill, idx) => (
                <Link
                  key={idx}
                  to={pill.link}
                  className="px-3 py-1.5 rounded-xs bg-slate-100 hover:bg-[#0B1F3A] hover:text-white text-slate-700 transition-colors font-medium text-[11px]"
                >
                  {pill.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHY CHOOSE VELUNO SOFTTECH? (AUTHENTIC VALUE PROPOSITIONS)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-t border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-4">
              Why Choose Veluno Softtech?
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              We stand apart through client-focused execution, modern architecture, transparent delivery, and permanent code ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Client-Focused Development */}
            <div className="p-7 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#0B1F3A] mb-2">Client-Focused Development</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                We work as your dedicated technical partner, scoping solutions around your real business goals rather than over-engineering unnecessary complexity.
              </p>
            </div>

            {/* 2. Modern Technologies */}
            <div className="p-7 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] text-[#2563EB] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#0B1F3A] mb-2">Modern Technologies</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                We build with modern frameworks (React 19, TypeScript, Next.js, Node.js, Python, PostgreSQL) ensuring high velocity, clean maintainability, and longevity.
              </p>
            </div>

            {/* 3. Scalable Solutions */}
            <div className="p-7 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#0B1F3A] mb-2">Scalable Solutions</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Every application is architected to scale seamlessly from your first 100 users to high-concurrency enterprise workloads with sub-100ms response times.
              </p>
            </div>

            {/* 4. Transparent Communication */}
            <div className="p-7 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] text-[#2563EB] flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#0B1F3A] mb-2">Transparent Communication</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Direct Slack/Teams access, weekly sprint demo walkthroughs, and clear milestone tracking so you always know exactly what is built and what comes next.
              </p>
            </div>

            {/* 5. Quality-Driven Delivery */}
            <div className="p-7 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#0B1F3A] mb-2">Quality-Driven Delivery</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Rigorous automated testing, static code analysis, and staging validation before every release to guarantee stable, bug-free production rollouts.
              </p>
            </div>

            {/* 6. Ongoing Support & Code Ownership */}
            <div className="p-7 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] text-[#2563EB] flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#0B1F3A] mb-2">Ongoing Support & Ownership</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                100% source code ownership upon milestone completion, backed by proactive post-launch maintenance, monitoring, and continuous iteration.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FEATURED PROJECTS & LIVE CLIENT PLATFORMS
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Demonstrated Engineering & Live Deployments
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link 
              to="/work" 
              className="mt-4 md:mt-0 btn-primary px-6 py-2.5 rounded-xs text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
            >
              <span>Explore All Projects (9)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Project 1: Bill Now (Live Client Platform) */}
            <div className="rounded-xs bg-white border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#2563EB] hover:shadow-lg transition-all group">
              <div>
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img 
                    src="/projects/bill-now.jpg" 
                    alt="Bill Now Invoicing Platform" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-xs bg-[#14B8A6] text-[#0B1F3A]">
                    Live SaaS
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-mono font-bold text-[#2563EB] uppercase block mb-1">
                    FinTech / Invoicing
                  </span>
                  <h3 className="text-base font-heading font-bold text-[#0B1F3A] mb-2 group-hover:text-[#2563EB]">
                    Bill Now
                  </h3>
                  <p className="text-xs text-slate-600 font-light line-clamp-3 mb-4">
                    Streamlined invoicing, receivable status tracking, quick line-item builder, and interactive revenue trend charts built for freelancers and SMBs.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {['React', 'TypeScript', 'Tailwind', 'Chart.js'].map(t => (
                      <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs bg-slate-100 text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link 
                  to="/work/bill-now" 
                  className="btn-primary w-full text-center py-2 rounded-xs font-bold text-xs uppercase tracking-wider block"
                >
                  View Case Study →
                </Link>
              </div>
            </div>

            {/* Project 2: Cavve (Live Client Platform) */}
            <div className="rounded-xs bg-white border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#2563EB] hover:shadow-lg transition-all group">
              <div>
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img 
                    src="/projects/cavve.jpg" 
                    alt="Cavve Professional Networking Platform" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-xs bg-[#14B8A6] text-[#0B1F3A]">
                    Live Platform
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-mono font-bold text-[#2563EB] uppercase block mb-1">
                    Community & Events
                  </span>
                  <h3 className="text-base font-heading font-bold text-[#0B1F3A] mb-2 group-hover:text-[#2563EB]">
                    Cavve
                  </h3>
                  <p className="text-xs text-slate-600 font-light line-clamp-3 mb-4">
                    Curated member hub for invitation-style professional gatherings, founder mixers, smart peer discovery cards, and RSVP coordination.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {['React', 'Vite', 'Tailwind', 'Node.js'].map(t => (
                      <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs bg-slate-100 text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link 
                  to="/work/cavve" 
                  className="btn-primary w-full text-center py-2 rounded-xs font-bold text-xs uppercase tracking-wider block"
                >
                  View Case Study →
                </Link>
              </div>
            </div>

            {/* Project 3: BrandMatchBot (Live Client Platform) */}
            <div className="rounded-xs bg-white border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#2563EB] hover:shadow-lg transition-all group">
              <div>
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img 
                    src="/projects/brandmatchbot.jpg" 
                    alt="BrandMatchBot AI MarTech" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-xs bg-[#14B8A6] text-[#0B1F3A]">
                    Live SaaS
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-mono font-bold text-[#2563EB] uppercase block mb-1">
                    AI MarTech
                  </span>
                  <h3 className="text-base font-heading font-bold text-[#0B1F3A] mb-2 group-hover:text-[#2563EB]">
                    BrandMatchBot
                  </h3>
                  <p className="text-xs text-slate-600 font-light line-clamp-3 mb-4">
                    Analytics-driven collaboration hub with a circular brand alignment score gauge and smart influencer match feed for data-backed creator campaigns.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {['Next.js', 'TypeScript', 'Tailwind', 'AI Scoring'].map(t => (
                      <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs bg-slate-100 text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link 
                  to="/work/brandmatchbot" 
                  className="btn-primary w-full text-center py-2 rounded-xs font-bold text-xs uppercase tracking-wider block"
                >
                  View Case Study →
                </Link>
              </div>
            </div>

            {/* Project 4: Zylo Voice */}
            <div className="rounded-xs bg-white border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#2563EB] hover:shadow-lg transition-all group">
              <div>
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800" 
                    alt="Zylo Voice" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-xs bg-[#2563EB] text-white">
                    Voice AI
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-mono font-bold text-[#2563EB] uppercase block mb-1">
                    Telephony Automation
                  </span>
                  <h3 className="text-base font-heading font-bold text-[#0B1F3A] mb-2 group-hover:text-[#2563EB]">
                    Zylo Voice
                  </h3>
                  <p className="text-xs text-slate-600 font-light line-clamp-3 mb-4">
                    Sub-second speech-to-speech voice pipeline engineered for automated appointments, lead qualification, and multilingual CRM handoffs.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {['Python', 'WebRTC', 'OpenAI', 'FastAPI'].map(t => (
                      <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs bg-slate-100 text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link 
                  to="/work/zylinn-ai" 
                  className="btn-primary w-full text-center py-2 rounded-xs font-bold text-xs uppercase tracking-wider block"
                >
                  View Project →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4.5: ENGAGEMENT MODELS & IP GOVERNANCE
          ========================================================================= */}
      <EngagementModels />

      {/* =========================================================================
          SECTION 5: 5-STEP DEVELOPMENT PROCESS (EXACT PROMPT SPECIFICATION)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-t border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-4">
              Our 5-Step Development Process
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              A structured, transparent engineering lifecycle designed to eliminate guesswork and deliver verified results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {/* Step 1: Discovery & Consultation */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#14B8A6] block mb-3">STEP 01</span>
                <h3 className="text-base font-heading font-bold text-[#0B1F3A] mb-2">Discovery & Consultation</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  We analyze your core business objectives, user requirements, technical constraints, and competitive landscape.
                </p>
              </div>
            </div>

            {/* Step 2: Planning & UI/UX Design */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#2563EB] block mb-3">STEP 02</span>
                <h3 className="text-base font-heading font-bold text-[#0B1F3A] mb-2">Planning & UI/UX Design</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  We architect data schemas, craft interactive Figma prototypes, and establish responsive component design systems.
                </p>
              </div>
            </div>

            {/* Step 3: Development */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#14B8A6] block mb-3">STEP 03</span>
                <h3 className="text-base font-heading font-bold text-[#0B1F3A] mb-2">Development</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Our engineers build modular, type-safe frontends and robust backends in bi-weekly agile development sprints.
                </p>
              </div>
            </div>

            {/* Step 4: Testing & QA */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#2563EB] block mb-3">STEP 04</span>
                <h3 className="text-base font-heading font-bold text-[#0B1F3A] mb-2">Testing & Quality Assurance</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Comprehensive functional testing, security scans, cross-browser audits, and load simulations on staging.
                </p>
              </div>
            </div>

            {/* Step 5: Launch & Support */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#14B8A6] block mb-3">STEP 05</span>
                <h3 className="text-base font-heading font-bold text-[#0B1F3A] mb-2">Launch & Ongoing Support</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Smooth production cutover, DNS routing, full IP transfer, and dedicated ongoing maintenance and SLA monitoring.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: BUILT AROUND YOUR BUSINESS GOALS (AUTHENTIC CLIENT COMMITMENT)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Client Trust & Standards
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-4">
              Built Around Your Business Goals
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              We replace guesswork and fabricated testimonials with contractual guarantees: transparent sprints, zero vendor lock-in, and full intellectual property ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-xl bg-[#0B1F3A] text-white border border-slate-800">
              <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-2">Commitment 01</span>
              <h3 className="text-xl font-heading font-bold text-white mb-3">100% Code Ownership</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                You receive full repository transfer, deployment credentials, and complete intellectual property rights from the moment code is written. No proprietary lock-in.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0B1F3A] text-white border border-slate-800">
              <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-2">Commitment 02</span>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Direct Technical Communication</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Work directly with senior developers and solutions architects who write your code—not account managers or commissioned salespeople.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0B1F3A] text-white border border-slate-800">
              <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-2">Commitment 03</span>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Milestone-Driven Delivery</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Every project stage has verifiable acceptance criteria. You review and test functioning software on staging before approving any milestone release.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6.5: INTERACTIVE PROJECT SCOPE & COST ESTIMATOR
          ========================================================================= */}
      <ProjectCostEstimator />

      {/* =========================================================================
          SECTION 7: FINAL CTA (EXACT PROMPT SPECIFICATION)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#0B1F3A] text-white border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-3">
            Ready to Begin?
          </span>

          {/* Exact Master Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight">
            Have an Idea? Let's Build Something Great.
          </h2>

          {/* Exact Master Supporting Text */}
          <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Tell us about your project. Our team will help you find the right digital solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            {/* Exact Master Button Label */}
            <Link 
              to="/contact" 
              className="btn-teal px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm w-full sm:w-auto hover:scale-102 transition-transform"
            >
              Get a Free Consultation
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-colors w-full sm:w-auto"
            >
              Explore Solutions
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
