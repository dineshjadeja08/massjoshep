import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, FileText, ArrowRight, GitMerge } from 'lucide-react';
import FadeIn from '../../components/ui/FadeIn';

const Australia = () => {
  return (
    <>
      <Helmet>
        <title>Software Engineering Partner for Australia | Veluno Softtech</title>
        <meta name="description" content="Veluno Softtech provides predictable, high-quality software engineering and dedicated teams for businesses across Australia and APAC." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy-900 text-white pt-32 pb-20 relative overflow-hidden border-b-4 border-accent-500">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-4 block flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent-400 mr-2"></span>
              Australia & APAC Client Delivery
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-medium mb-6 leading-tight">
              Predictable Delivery. <br/> Clear Communication.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl">
              We provide Australian businesses with senior engineering talent, rigorous documentation, and a delivery methodology you can actually trust.
            </p>
            <Link to="/contact" className="btn btn-primary text-base px-8 py-4 inline-flex items-center">
              Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-6">Solving the local talent bottleneck</h2>
            <p className="text-lg text-gray-600">
              Hiring senior software and cloud engineers in Sydney or Melbourne is slow and extremely expensive. We provide a structured alternative that prioritizes code quality, transparent pricing, and zero ambiguity.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="bg-gray-50 p-8 rounded-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
              <FileText className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Written Scopes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No hidden costs. We agree on exactly what is being built, what success looks like, and what is out of scope before a single line of code is written.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-gray-50 p-8 rounded-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
              <GitMerge className="w-10 h-10 text-accent-600 mb-6" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">The "Follow-the-Sun" Model</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your team finishes their day, our engineers in India pick up the sprint. You wake up to completed tickets and merged PRs, doubling your development velocity.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-gray-50 p-8 rounded-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Dedicated Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every delivery includes comprehensive handover notes and agreed-upon support coverage windows so your local team knows exactly how to maintain the solution.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Build your engineering capacity</h2>
            <p className="text-xl text-gray-300 mb-12">
              Overcome local recruitment shortages by embedding our highly vetted software, QA, and DevOps engineers directly into your existing Jira workflows.
            </p>
            
            <div className="bg-navy-800 rounded-sm p-8 border border-navy-700 shadow-xl flex flex-col md:flex-row items-center justify-between text-left">
              <div className="mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold text-white mb-2">The Dedicated Team Model</h3>
                <p className="text-gray-400">Fixed monthly capacity. Elite engineering. Managed by us, directed by you.</p>
              </div>
              <Link to="/services/dedicated-team" className="btn btn-primary whitespace-nowrap">
                Explore Dedicated Teams
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Australia;
