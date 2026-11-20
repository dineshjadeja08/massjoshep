import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, Users, Target, Shield, ArrowRight, Code, CheckCircle2, FileText, Check } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Veluno Softtech</title>
        <meta 
          name="description" 
          content="Veluno Softtech is a premium software engineering company delivering custom web applications, SaaS platforms, and digital systems." 
        />
      </Helmet>
      
      {/* Top Banner */}
      <PageBanner 
        title="About Us" 
        breadcrumb="About Us" 
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block mb-2">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight mb-6">
                Engineering Depth Over{' '}
                <span className="inline-block bg-[#14B8A6] text-[#0B1F3A] px-3.5 py-0.5 rounded-xl">
                  Outsourcing
                </span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light mb-6">
                Too many businesses get burned by large outsourcing agencies where projects are handed off to anonymous juniors, scopes are misunderstood, and communication breaks down across timezones.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light mb-8">
                At Veluno Softtech, we operate with a deliberate focus: we take on a selective number of client engagements where we can provide direct technical leadership, rigorous written documentation, and direct access to the engineers actually building your product.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-200/90">
                  <div className="font-heading font-bold text-[#0B1F3A] text-base mb-1">Tailored Delivery</div>
                  <div className="text-xs text-gray-500">Dedicated focus per project rather than high-volume outsourcing queues.</div>
                </div>
                <div className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-200/90">
                  <div className="font-heading font-bold text-[#0B1F3A] text-base mb-1">Direct Engineering</div>
                  <div className="text-xs text-gray-500">Direct technical communication without bureaucratic layers of account management.</div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-[#0B1F3A] text-white p-8 md:p-12 rounded-xl shadow-xl">
              <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-3">
                Core Principles
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-6">
                The Three Pillars of Veluno
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#14B8A6] text-[#0B1F3A] flex items-center justify-center font-bold flex-shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Technology Leadership</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      We select modern, type-safe stacks (React, Next.js, TypeScript, PostgreSQL) designed for high concurrency and long-term maintainability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#14B8A6] text-[#0B1F3A] flex items-center justify-center font-bold flex-shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Absolute Trust</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      Written functional specifications before coding, fixed milestones, weekly demo releases, and 100% intellectual property ownership.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#14B8A6] text-[#0B1F3A] flex items-center justify-center font-bold flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Business Growth</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      Every architectural decision is tied directly to reducing operational cost, accelerating customer onboarding, or multiplying commercial revenue.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
