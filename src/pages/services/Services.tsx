import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Layers, 
  Workflow, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Check, 
  ArrowRight,
  ExternalLink,
  Cpu,
  FileText,
  Clock,
  Sparkles,
  Zap,
  Server,
  Smartphone,
  Palette,
  Share2
} from 'lucide-react';
import PageBanner from '../../components/ui/PageBanner';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Engineering Services & Capabilities | Veluno Softtech</title>
        <meta 
          name="description" 
          content="Veluno Softtech provides end-to-end software engineering: conversational AI, web platforms, SaaS applications, systems architecture, and dedicated developer pods." 
        />
      </Helmet>

      {/* Top Banner with sleek squarish border */}
      <PageBanner 
        title="Services & Solutions" 
        breadcrumb="Services" 
        subtitle="Software engineering capabilities designed for technical founders and enterprise operations."
      />

      {/* =========================================================================
          SECTION 1: 6-CARD SERVICES GRID (SLEEK REFINED EDGES)
          ========================================================================= */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight tracking-tight">
              Our Mission Is To Make Your{' '}
              <span className="inline-block bg-[#14B8A6] text-[#0B1F3A] px-3 py-0.5 rounded-lg mx-1 shadow-xs">
                Business
              </span>{' '}
              Better Through Technology
            </h2>
          </div>

          {/* 8-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Veluno Web */}
            <div className="rounded-xl bg-[#0B1F3A] text-white p-7 md:p-8 shadow-sm flex flex-col justify-between transition-transform hover:-translate-y-1 border border-slate-800">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#14B8A6] text-[#0B1F3A] flex items-center justify-center mb-5 shadow-xs">
                  <Globe className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-white mb-2.5">
                  Veluno Web
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light mb-5">
                  Marketing engines, high-speed corporate storefronts, headless CMS architectures, and Next.js / Tailwind CSS web platforms.
                </p>
              </div>
              <Link 
                to="/services/veluno-web" 
                className="text-xs font-bold text-[#14B8A6] hover:underline inline-flex items-center gap-1 font-mono uppercase pt-4 border-t border-slate-800"
              >
                <span>Explore Deliverables</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: Veluno Mobile (NEW) */}
            <div className="rounded-xl bg-white border border-gray-200/90 p-7 md:p-8 shadow-xs flex flex-col justify-between transition-transform hover:-translate-y-1 hover:border-[#14B8A6]">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-5 shadow-xs">
                  <Smartphone className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5">
                  Veluno Mobile
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-light mb-5">
                  Native iOS & Android, React Native, and Flutter mobile apps engineered for fluid 60fps performance and offline-first sync.
                </p>
              </div>
              <Link 
                to="/services/veluno-mobile" 
                className="text-xs font-bold text-[#2563EB] hover:underline inline-flex items-center gap-1 font-mono uppercase pt-4 border-t border-gray-100"
              >
                <span>Explore Deliverables</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3: Veluno Products */}
            <div className="rounded-xl bg-[#14B8A6] text-[#0B1F3A] p-7 md:p-8 shadow-sm flex flex-col justify-between transition-transform hover:-translate-y-1 border border-[#A6F242]">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-5 shadow-xs">
                  <Layers className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5">
                  Veluno Products
                </h3>
                <p className="text-xs text-[#0B1F3A]/80 leading-relaxed font-medium mb-5">
                  Full-stack SaaS applications, conversational AI voice systems, customer onboarding portals, and subscription billing engines.
                </p>
              </div>
              <Link 
                to="/services/veluno-products" 
                className="text-xs font-bold text-[#0B1F3A] hover:underline inline-flex items-center gap-1 font-mono uppercase pt-4 border-t border-black/10"
              >
                <span>Explore Deliverables</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 4: Veluno Systems */}
            <div className="rounded-xl bg-[#0B1F3A] text-white p-7 md:p-8 shadow-sm flex flex-col justify-between transition-transform hover:-translate-y-1 border border-slate-800">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#14B8A6] text-[#0B1F3A] flex items-center justify-center mb-5 shadow-xs">
                  <Workflow className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-white mb-2.5">
                  Veluno Systems
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light mb-5">
                  API integrations, CRM/ERP connections, automated data ingestion pipelines, and end-to-end workflow automation.
                </p>
              </div>
              <Link 
                to="/services/veluno-systems" 
                className="text-xs font-bold text-[#14B8A6] hover:underline inline-flex items-center gap-1 font-mono uppercase pt-4 border-t border-slate-800"
              >
                <span>Explore Deliverables</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 5: Veluno Growth (Digital Marketing & Social Media) */}
            <div className="rounded-xl bg-white border border-gray-200/90 p-7 md:p-8 shadow-xs flex flex-col justify-between transition-transform hover:-translate-y-1 hover:border-[#14B8A6]">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-5 shadow-xs">
                  <Share2 className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5">
                  Veluno Growth
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light mb-5">
                  Full-funnel digital marketing, dedicated social media handling (LinkedIn, X, Meta), technical SEO, and conversion optimization.
                </p>
              </div>
              <Link 
                to="/services/veluno-growth" 
                className="text-xs font-bold text-[#2563EB] hover:underline inline-flex items-center gap-1 font-mono uppercase pt-4 border-t border-gray-100"
              >
                <span>Explore Deliverables</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 6: Veluno Branding (Pro Branding & Design Systems) */}
            <div className="rounded-xl bg-white border border-gray-200/90 p-7 md:p-8 shadow-xs flex flex-col justify-between transition-transform hover:-translate-y-1 hover:border-[#14B8A6]">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-5 shadow-xs">
                  <Palette className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5">
                  Veluno Branding
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light mb-5">
                  Pro corporate brand identity, trademark vector logos, Figma design systems, pitch decks, and brand governance.
                </p>
              </div>
              <Link 
                to="/services/veluno-branding" 
                className="text-xs font-bold text-[#2563EB] hover:underline inline-flex items-center gap-1 font-mono uppercase pt-4 border-t border-gray-100"
              >
                <span>Explore Deliverables</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 7: Veluno Care */}
            <div className="rounded-xl bg-white border border-gray-200/90 p-7 md:p-8 shadow-xs flex flex-col justify-between transition-transform hover:-translate-y-1 hover:border-[#14B8A6]">
              <div>
                <div className="w-12 h-12 rounded-lg bg-slate-100 border border-gray-200 text-[#0B1F3A] flex items-center justify-center mb-5 shadow-xs">
                  <ShieldCheck className="w-6 h-6 stroke-[2.2] text-[#0B1F3A]" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5">
                  Veluno Care
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light mb-5">
                  Proactive security patching, 24/7 SLA uptime monitoring, managed cloud hosting support, and iterative development sprints.
                </p>
              </div>
              <Link 
                to="/services/veluno-care" 
                className="text-xs font-bold text-[#0B1F3A] hover:text-black hover:underline inline-flex items-center gap-1 font-mono uppercase pt-4 border-t border-gray-100"
              >
                <span>Explore Deliverables</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 8: Dedicated Squads */}
            <div className="rounded-xl bg-white border border-gray-200/90 p-7 md:p-8 shadow-xs flex flex-col justify-between transition-transform hover:-translate-y-1 hover:border-[#14B8A6]">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-5 shadow-xs">
                  <Users className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5">
                  Dedicated Squads
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light mb-5">
                  Embedded senior developers, tech leads, and UI/UX designers providing continuous monthly capacity with full timezone overlap.
                </p>
              </div>
              <Link 
                to="/services/dedicated-team" 
                className="text-xs font-bold text-[#0B1F3A] hover:text-black hover:underline inline-flex items-center gap-1 font-mono uppercase pt-4 border-t border-gray-100"
              >
                <span>Explore Deliverables</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ENGAGEMENT FRAMEWORK (ENTERPRISE DELIVERY MODELS)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F8F9FA] border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
              Engagement Framework
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-4">
              Predictable Sprints. Guaranteed Velocity.
            </h2>
            <p className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
              Clear milestone contracts, embedded developer sprints, and 100% intellectual property transfer from day one.
            </p>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Card 1: Dark Charcoal (#0B1F3A) Plan */}
            <div className="rounded-xl bg-[#0B1F3A] text-white p-7 md:p-8 shadow-md flex flex-col justify-between border border-slate-800">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#14B8A6] text-[#0B1F3A] inline-block mb-3">
                  Fixed Milestone
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-white mb-2">
                  Rapid MVP & Web Build
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light mb-6">
                  Engineered for businesses launching a high-converting web platform or modernizing a legacy brochure site in 2–3 weeks.
                </p>

                <ul className="space-y-3 text-xs text-gray-300 mb-8 border-t border-slate-800 pt-5">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#14B8A6] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Responsive Next.js & Tailwind CSS site</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#14B8A6] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Headless CMS integration & admin portal</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#14B8A6] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Core Web Vitals & JSON-LD schema SEO</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#14B8A6] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>WhatsApp & CRM lead ingestion pipelines</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/contact" 
                className="btn-lime w-full text-center py-3 rounded-lg font-bold text-xs uppercase tracking-wider block shadow-xs"
              >
                Scope Web Project
              </Link>
            </div>

            {/* Card 2: Light Plan */}
            <div className="rounded-xl bg-white border border-gray-200/90 text-[#0B1F3A] p-7 md:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 inline-block mb-3">
                  Full-Lifecycle Product
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-[#0B1F3A] mb-2">
                  SaaS & Custom Software
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light mb-6">
                  Custom software applications, customer portals, operational tools, and subscription billing SaaS engines.
                </p>

                <ul className="space-y-3 text-xs text-gray-600 mb-8 border-t border-gray-100 pt-5">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Multi-tenant database schema & RBAC auth</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Stripe & payment gateway integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Interactive real-time reporting dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>30-day post-launch warranty & handover</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/contact" 
                className="btn-dark w-full text-center py-3 rounded-lg font-bold text-xs uppercase tracking-wider block shadow-xs"
              >
                Scope Software Build
              </Link>
            </div>

            {/* Card 3: Dedicated Sprint Pod */}
            <div className="rounded-xl bg-white border border-gray-200/90 text-[#0B1F3A] p-7 md:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 inline-block mb-3">
                  Dedicated Pod
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-[#0B1F3A] mb-2">
                  Embedded Squad
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light mb-6">
                  Continuous monthly capacity with embedded senior developers, cloud DevOps, and guaranteed response SLAs.
                </p>

                <ul className="space-y-3 text-xs text-gray-600 mb-8 border-t border-gray-100 pt-5">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Full-time senior full-stack developers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Dedicated Slack / Discord synchronization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>24/7 SLA uptime monitoring & incident response</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span>Bi-weekly production sprint deployments</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/services/dedicated-team" 
                className="btn-dark w-full text-center py-3 rounded-lg font-bold text-xs uppercase tracking-wider block shadow-xs"
              >
                Explore Dedicated Squad
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CLOSING CALLOUT
          ========================================================================= */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="rounded-xl bg-[#0B1F3A] text-white p-8 md:p-14 text-center relative overflow-hidden shadow-xl border border-slate-800">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-3 tracking-tight">
              Ready to Scope Your Next Engineering Milestone?
            </h2>
            <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto mb-8 font-light">
              Talk directly with our solutions architects. We provide an initial technical audit, architectural recommendation, and estimate within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                to="/contact" 
                className="btn-lime px-7 py-3 rounded-lg font-bold text-xs uppercase tracking-wider"
              >
                Request Architecture Consultation
              </Link>
              <Link 
                to="/engineering" 
                className="px-7 py-3 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-slate-800 hover:bg-zinc-700 transition-colors"
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

export default Services;