import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Target,
  Compass,
  Users,
  ShieldCheck,
  MapPin,
  Clock,
  FileText,
  CheckCircle2,
  Layers,
  MessageSquare
} from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';

const CORE_STACK = [
  { category: 'Frontend Platforms', technologies: ['React 19', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'] },
  { category: 'Distributed Backends', technologies: ['Node.js', 'Python / FastAPI', 'PostgreSQL', 'Redis', 'REST & GraphQL'] },
  { category: 'Conversational Voice AI', technologies: ['WebRTC Audio Streams', 'OpenAI Realtime API', 'Twilio / SIP Telephony', 'CRM Webhooks'] },
  { category: 'Cloud & Infrastructure', technologies: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Zero-Trust IAM'] },
];

const DELIVERY_STEPS = [
  {
    step: '01',
    title: 'Architectural Blueprinting',
    description: 'We formalize domain schemas, latency requirements, failure modes, and API contracts in writing before writing production code.'
  },
  {
    step: '02',
    title: 'Senior-Led Engineering Pods',
    description: 'Dedicated full-stack engineers work directly on your codebase with zero intermediate agency account layers.'
  },
  {
    step: '03',
    title: 'Continuous Demo Cadence',
    description: 'Weekly demo releases and staging previews ensure total visibility, early feedback, and zero milestone surprises.'
  },
  {
    step: '04',
    title: '100% Client IP Transfer',
    description: 'All repositories, infrastructure-as-code definitions, and documentation are the exclusive intellectual property of the client.'
  }
];

export const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Enterprise Software Engineering | Veluno Softtech</title>
        <meta
          name="description"
          content="Veluno Softtech is an enterprise software engineering company based in Chennai, India. We engineer scalable web platforms, conversational AI voice systems, and distributed cloud backends."
        />
        <link rel="canonical" href="https://www.velunosofttech.com/about" />
      </Helmet>

      {/* Top Banner */}
      <PageBanner
        title="About Veluno Softtech"
        breadcrumb="Company Overview"
        subtitle="Engineering depth, architectural rigor, and transparent delivery for mission-critical software platforms and autonomous AI."
      />

      {/* 1. Company Overview Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block mb-2">
                Executive Overview
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight mb-6">
                Engineering Depth Over{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#14B8A6]">
                  Agency Outsourcing
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light mb-6">
                Veluno Softtech was founded to eliminate the traditional frictions of technology outsourcing: opaque communications, anonymous junior hand-offs, and bloated legacy code. We operate as an elite technical extension of your team, architecting and building mission-critical software systems designed to scale predictably.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light mb-8">
                From our engineering hub in Chennai, Tamil Nadu, we deliver high-velocity full-stack engineering, real-time conversational voice intelligence, and cloud-native backends to clients across APAC, EMEA, and the Americas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F8FAFC] p-5 rounded-xl border border-slate-200">
                  <div className="font-heading font-bold text-[#0B1F3A] text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                    <span>Direct Architect Access</span>
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    Collaborate directly with hands-on senior architects who understand business logic and system scalability.
                  </div>
                </div>
                <div className="bg-[#F8FAFC] p-5 rounded-xl border border-slate-200">
                  <div className="font-heading font-bold text-[#0B1F3A] text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                    <span>Total IP Ownership</span>
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    100% client code and infrastructure ownership from day one with zero proprietary vendor lock-in.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Key Corporate Stats Card */}
            <div className="lg:col-span-5 bg-[#0B1F3A] text-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-800">
              <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-3">
                Corporate Foundations
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-white mb-6">
                Built on Rigor & Trust
              </h3>

              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#14B8A6] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-xs uppercase font-mono">Headquarters</span>
                    <span className="text-slate-300 text-xs">Chennai, India</span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#14B8A6] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-xs uppercase font-mono">Engineering Standards</span>
                    <span className="text-slate-300 text-xs">ISO/IEC 27001 & SOC 2 Aligned Engineering Practices</span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#14B8A6] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-xs uppercase font-mono">Global Timezone Overlap</span>
                    <span className="text-slate-300 text-xs">Guaranteed 4+ hours daily overlap with UK, EU, UAE, & Australia</span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#14B8A6] flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-xs uppercase font-mono">Active Portfolios</span>
                    <span className="text-slate-300 text-xs">7 Curated Production Systems & Architecture Blueprints</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-2">
              Purpose & Direction
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1F3A]">
              Our Mission and Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#0B1F3A] mb-3">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                To engineer mission-critical software, custom SaaS platforms, and low-latency voice intelligence systems that move business forward — replacing brittle technical debt with clean, type-safe, maintainable architectures that unlock enduring commercial scale.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/10 text-[#0D9488] flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#0B1F3A] mb-3">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                To become the most dependable software engineering partner for fast-growing global enterprises, recognized worldwide for transparent delivery governance, deep technical excellence, and rapid time-to-market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technology Expertise */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-2">
              Engineering Stacks
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1F3A]">
              Proven Technical Stacks
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              We engineer with modern, battle-tested technologies designed for high concurrency, low latency, and zero vendor lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_STACK.map((group, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-xs font-mono font-bold text-[#0B1F3A] uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-50 text-slate-700 border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Delivery Model */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block mb-2">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1F3A]">
              Predictable Delivery Model
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Our 4-stage delivery framework eliminates scope creep and guarantees auditable milestone progress.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-heading font-extrabold text-[#14B8A6] font-mono mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-base font-heading font-bold text-[#0B1F3A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Chennai Headquarters & Global Timezone Coverage */}
      <section className="py-16 md:py-24 bg-[#0B1F3A] text-white border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-2">
                Engineering Capital
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white leading-tight mb-5">
                Chennai Delivery Headquarters
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                Headquartered in Chennai, Tamil Nadu — South India's premier enterprise SaaS and technology engineering hub — Veluno taps into a deep pool of world-class system architects, distributed systems developers, and AI researchers.
              </p>
              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 text-[#14B8A6] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span><strong>Timezone:</strong> Indian Standard Time (IST, UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 text-[#14B8A6] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span><strong>Delivery Center:</strong> Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 text-[#14B8A6] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span><strong>Global Syncs:</strong> Scheduled daily standups overlapping UK/Europe morning and APAC afternoon</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#102A4E] p-8 md:p-10 rounded-2xl border border-slate-700/80 shadow-2xl">
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Global Timezone Coverage Matrix
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                Our distributed delivery models provide guaranteed operational overlap across all primary commercial timezones:
              </p>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center p-3 rounded-lg bg-[#0B1F3A]/70 border border-slate-700">
                  <span className="text-slate-300">United Kingdom & Europe (GMT/CET)</span>
                  <span className="text-[#14B8A6] font-bold">4.5 – 5.5 Hours Overlap</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-[#0B1F3A]/70 border border-slate-700">
                  <span className="text-slate-300">Middle East (GST / UTC+4)</span>
                  <span className="text-[#14B8A6] font-bold">6+ Hours Overlap</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-[#0B1F3A]/70 border border-slate-700">
                  <span className="text-slate-300">Singapore & APAC (SGT / UTC+8)</span>
                  <span className="text-[#14B8A6] font-bold">Full Day Working Sync</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-[#0B1F3A]/70 border border-slate-700">
                  <span className="text-slate-300">North America East (EST / UTC-5)</span>
                  <span className="text-[#14B8A6] font-bold">Dedicated Handoff Windows</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Corporate Legal Entity Information */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block mb-2">
              Corporate Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1F3A]">
              Company Information
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Official corporate and statutory registration records for enterprise vendor onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F8FAFC] p-8 md:p-10 rounded-2xl border border-slate-200">
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className="font-mono font-bold text-slate-500 uppercase text-xs block">Operating Trade Name</span>
                <span className="text-[#0B1F3A] font-bold text-base">Veluno Softtech</span>
              </div>
              <div>
                <span className="font-mono font-bold text-slate-500 uppercase text-xs block">Core Specialization</span>
                <span className="text-slate-700 font-medium">Enterprise Web, Mobile Applications & Conversational AI Systems</span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className="font-mono font-bold text-slate-500 uppercase text-xs block">Registered Office</span>
                <span className="text-slate-700 font-medium">Chennai, India</span>
              </div>
              <div>
                <span className="font-mono font-bold text-slate-500 uppercase text-xs block">Official Inquiry Email</span>
                <a href="mailto:contact@velunosofttech.com" className="text-[#2563EB] font-bold hover:underline">
                  contact@velunosofttech.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Client Success, Trust & Verified Standards */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-2">
              Trust & Verification
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1F3A]">
              Client Trust & Compliance Discipline
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              We separate internal engineering practices from formal third-party audit claims to uphold absolute integrity in commercial disclosure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs">
              <ShieldCheck className="w-8 h-8 text-[#14B8A6] mb-4" />
              <h3 className="text-base font-heading font-bold text-[#0B1F3A] mb-2">Security-by-Design</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Our codebases follow ISO/IEC 27001 and OWASP Top 10 guidelines, employing encrypted data stores, strict RBAC, and static vulnerability scanning.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs">
              <FileText className="w-8 h-8 text-[#2563EB] mb-4" />
              <h3 className="text-base font-heading font-bold text-[#0B1F3A] mb-2">Strict Mutual NDAs</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                We never publicly disclose confidential enterprise client names, proprietary schemas, or customer databases without explicit written consent.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-base font-heading font-bold text-[#0B1F3A] mb-2">Verified Delivery History</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Explore our 7 published case study architectures and live SaaS beta deployments demonstrating real sub-second voice AI and ERP platforms.
              </p>
            </div>
          </div>

          {/* CTA Row */}
          <div className="bg-[#0B1F3A] text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
                Ready to review your system requirements with a lead architect?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl">
                Get an initial architectural feasibility perspective and scoped delivery roadmap within 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="btn-teal px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow-sm"
              >
                Schedule Technical Scoping
              </Link>
              <Link
                to="/work"
                className="px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
              >
                Explore Case Studies
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
