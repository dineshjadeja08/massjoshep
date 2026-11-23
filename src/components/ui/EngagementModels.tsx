import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck, Zap, Users, Code, Lock } from 'lucide-react';

export const EngagementModels: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
            Flexible Client Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight mb-4">
            Transparent Engagement Models
          </h2>
          <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Choose the collaboration model that fits your operational stage. From fixed-deliverable MVP sprints to dedicated engineering squads and technical advisory.
          </p>
        </div>

        {/* 3-Card Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Model 1: Fixed-Scope Sprint */}
          <div className="rounded-xs bg-[#F8FAFC] border border-slate-200 p-8 flex flex-col justify-between hover:border-[#2563EB] hover:shadow-lg transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-xs bg-[#2563EB]/10 text-[#2563EB]">
                  Predictable Scope
                </span>
                <span className="text-xs text-slate-500 font-mono">Milestone-Based</span>
              </div>

              <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2">
                Fixed-Scope Sprint
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light mb-6">
                Best for businesses with a concrete specification, new MVP launch, or discrete module build with zero risk of budget overrun.
              </p>

              <div className="border-t border-slate-200 pt-6 mb-6">
                <span className="text-xs font-mono font-bold text-[#0B1F3A] uppercase tracking-wider block mb-3">
                  Key Inclusions:
                </span>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>Guaranteed fixed price and firm delivery date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>Comprehensive architecture scoping document</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>100% private GitHub repository transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>Rigorous QA testing across mobile & desktop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>30-Day post-deployment warranty</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              to="/contact?service=Custom%20Software%20Development"
              className="w-full bg-[#0B1F3A] group-hover:bg-[#2563EB] text-white py-3 px-4 rounded-xs text-xs font-bold uppercase tracking-wider text-center transition-colors block"
            >
              Start Fixed Sprint →
            </Link>
          </div>

          {/* Model 2: Dedicated Engineering Squad (POPULAR / HIGHLIGHTED) */}
          <div className="rounded-xs bg-[#0B1F3A] text-white border-2 border-[#2563EB] p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            {/* Top highlight ribbon */}
            <div className="absolute top-0 right-0 bg-[#2563EB] text-white text-[10px] font-mono font-bold uppercase px-3 py-1 tracking-wider">
              Most Popular
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-xs bg-white/10 text-[#14B8A6]">
                  Dedicated Velocity
                </span>
                <span className="text-xs text-slate-400 font-mono">Monthly Retainer</span>
              </div>

              <h3 className="text-xl font-heading font-extrabold text-white mb-2">
                Dedicated Developer Pod
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                Engineered for scaling startups and enterprises requiring dedicated full-stack squads, continuous feature delivery, and agile capacity.
              </p>

              <div className="border-t border-white/10 pt-6 mb-6">
                <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-3">
                  Key Inclusions:
                </span>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>Senior full-stack developers committed exclusively to you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>Direct integration into your Slack, Jira & GitHub</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>Guaranteed 4-hour daily timezone overlap (UK/US/EU)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>Bi-weekly sprint reviews and capacity planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>Scale up or down with 30-day notice</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              to="/services/dedicated-team"
              className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3.5 px-4 rounded-xs text-xs font-bold uppercase tracking-wider text-center transition-colors block shadow-md"
            >
              Hire Dedicated Pod →
            </Link>
          </div>

          {/* Model 3: Technical Advisory & Architecture */}
          <div className="rounded-xs bg-[#F8FAFC] border border-slate-200 p-8 flex flex-col justify-between hover:border-[#2563EB] hover:shadow-lg transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-xs bg-[#14B8A6]/10 text-[#0D9488]">
                  Strategic Advisory
                </span>
                <span className="text-xs text-slate-500 font-mono">Advisory / Audit</span>
              </div>

              <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2">
                Architecture & Advisory
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light mb-6">
                Specialized technical leadership for code audits, system scalability assessments, legacy cloud migrations, and AI feasibility.
              </p>

              <div className="border-t border-slate-200 pt-6 mb-6">
                <span className="text-xs font-mono font-bold text-[#0B1F3A] uppercase tracking-wider block mb-3">
                  Key Inclusions:
                </span>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>Comprehensive codebase & security vulnerability audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>Database indexing & cloud egress cost optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>AI integration roadmap & model latency benchmarking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>Architectural diagrams and migration roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>Fractional CTO / Principal Architect consulting calls</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              to="/contact?service=Other%20%2F%20Technical%20Consultation"
              className="w-full bg-[#0B1F3A] group-hover:bg-[#2563EB] text-white py-3 px-4 rounded-xs text-xs font-bold uppercase tracking-wider text-center transition-colors block"
            >
              Book Architecture Audit →
            </Link>
          </div>

        </div>

        {/* Global IP Guarantee Banner */}
        <div className="mt-12 p-6 md:p-8 rounded-xs bg-[#F8FAFC] border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xs bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-[#0B1F3A] text-base">
                100% Intellectual Property & Source Code Ownership
              </h4>
              <p className="text-xs text-slate-600 font-light mt-0.5">
                All code is authored directly in your private repositories. Mutual NDA signed before technical discovery. Zero vendor lock-in or recurring runtime royalties.
              </p>
            </div>
          </div>
          <Link
            to="/trust"
            className="text-xs font-mono font-bold text-[#2563EB] hover:text-[#0B1F3A] uppercase tracking-wider whitespace-nowrap inline-flex items-center gap-1.5"
          >
            <span>Review Trust Governance</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default EngagementModels;
