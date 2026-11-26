import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Code, Workflow, Zap } from 'lucide-react';
import FadeIn from '../../components/ui/FadeIn';

import PageBanner from '../../components/ui/PageBanner';

const DedicatedTeam = () => {
  const canonicalUrl = "https://vusofttech.netlify.app/engagement-models";
  const seoTitle = "Hire a Dedicated Software Development Team | Fixed Scope & Advisory";
  const seoDesc = "Hire a dedicated software development team, book a fixed-scope MVP sprint, or get a software architecture audit. 4-hour daily timezone overlap with UK, US, EU.";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vusofttech.netlify.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Engagement Models",
        "item": canonicalUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta name="keywords" content="hire dedicated software development team, fixed scope software development sprint, offshore development team UK US timezone, software architecture audit services, offshore software development India" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vusofttech.netlify.app/og-image.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDesc} />
        <meta name="twitter:image" content="https://vusofttech.netlify.app/og-image.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Top Banner (Single H1) */}
      <PageBanner 
        title="Hire a Dedicated Software Development Team or Book a Fixed-Scope Sprint" 
        breadcrumb="Engagement Models"
        category="Flexible Technical Partnerships" 
      />

      {/* The Need */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative aspect-square md:aspect-auto md:h-full bg-gray-100 rounded-sm overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                alt="Hire a dedicated software development team in India" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-navy-900 mb-6 tracking-tight">
                Hire a Dedicated Software Development Team to Accelerate Delivery
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you need to <strong>hire a dedicated software development team</strong>, execute a <strong>fixed scope software development sprint</strong>, or conduct comprehensive <strong>software architecture audit services</strong>, Veluno Softtech provides pre-vetted senior engineers who integrate directly into your Jira, GitHub, and daily standups.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Operating from our world-class delivery center in Chennai, India, our engineering pods work with complete transparency, delivering weekly production releases with zero intermediary agency overhead.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Guaranteed 4-hour daily timezone overlap with UK, US, and EU business hours",
                  "100% intellectual property and git repository ownership transfer",
                  "Fixed-scope sprints with contractually defined acceptance criteria",
                  "Independent software architecture audit services and security reviews"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-navy-900 font-medium">
                    <Check className="w-5 h-5 text-accent-600 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <FadeIn delay={0.2}>
              <div className="bg-gray-50 rounded-sm p-8 border border-gray-200 shadow-sm relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-100 rounded-bl-full -z-10 opacity-50" />
                <h3 className="text-xl font-bold text-navy-900 mb-6 border-b border-gray-200 pb-4">Roles we provide:</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                  <div>
                    <div className="font-bold text-navy-900">Frontend Engineers</div>
                    <div className="text-sm text-gray-500">React, TypeScript, Next.js</div>
                  </div>
                  <div>
                    <div className="font-bold text-navy-900">Backend Engineers</div>
                    <div className="text-sm text-gray-500">Node.js, Java, Python</div>
                  </div>
                  <div>
                    <div className="font-bold text-navy-900">AI Engineers</div>
                    <div className="text-sm text-gray-500">LLMs, RAG, Data Science</div>
                  </div>
                  <div>
                    <div className="font-bold text-navy-900">DevOps & Cloud</div>
                    <div className="text-sm text-gray-500">AWS, Kubernetes, CI/CD</div>
                  </div>
                  <div>
                    <div className="font-bold text-navy-900">Mobile Developers</div>
                    <div className="text-sm text-gray-500">React Native, Flutter</div>
                  </div>
                  <div>
                    <div className="font-bold text-navy-900">QA Engineers</div>
                    <div className="text-sm text-gray-500">Automated & Manual</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Delivery Model Diagram */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-6">Dedicated Delivery Model</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
              One team. Clear communication. Predictable delivery.
            </p>
            
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <div className="bg-navy-900 text-white px-8 py-4 rounded-sm shadow-md font-bold text-lg w-64">
                Your Company (Client)
              </div>
              <div className="w-1 h-8 bg-gray-300"></div>
              <div className="bg-accent-600 text-white px-8 py-4 rounded-sm shadow-md font-bold text-lg w-64">
                Project Manager
              </div>
              <div className="w-1 h-8 bg-gray-300"></div>
              
              <div className="bg-white border-2 border-gray-200 rounded-sm p-8 w-full shadow-lg">
                <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-6">Veluno Softtech Dedicated Pod</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg flex flex-col items-center">
                    <Workflow className="w-8 h-8 text-blue-500 mb-2" />
                    <div className="font-bold text-navy-900">UI/UX Design</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg flex flex-col items-center">
                    <Code className="w-8 h-8 text-green-500 mb-2" />
                    <div className="font-bold text-navy-900">Engineering</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg flex flex-col items-center">
                    <Zap className="w-8 h-8 text-purple-500 mb-2" />
                    <div className="font-bold text-navy-900">QA & DevOps</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Addition: Offshore Development Team with UK, US & EU Timezone Overlap */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Timezone Synchronized Delivery
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
              Offshore Development Team with UK, US & EU Timezone Overlap
            </h2>
            <p className="text-slate-300 mt-4 text-base leading-relaxed">
              When leveraging <strong>offshore software development India</strong>, real-time collaboration is the bedrock of engineering success. Veluno Softtech provides an <strong>offshore development team UK US timezone</strong> model that guarantees at least 4 hours of daily live overlap with your in-house product managers and engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <span className="text-xs font-mono font-bold text-[#14B8A6] block mb-2">UNITED KINGDOM (GMT/BST)</span>
              <h3 className="text-lg font-bold text-white mb-2">4 to 5 Hours Live Overlap</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Sync on morning standups, sprint reviews, and live code pair programming from 9:00 AM to 2:00 PM London time.
              </p>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <span className="text-xs font-mono font-bold text-[#2563EB] block mb-2">UNITED STATES (EST)</span>
              <h3 className="text-lg font-bold text-white mb-2">3 to 4 Hours Live Overlap</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Co-ordinate requirements, handovers, and emergency bug reviews during early US Eastern morning hours.
              </p>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <span className="text-xs font-mono font-bold text-[#14B8A6] block mb-2">EUROPE (CET)</span>
              <h3 className="text-lg font-bold text-white mb-2">4 to 5 Hours Live Overlap</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Full afternoon synchronization across Berlin, Paris, and Amsterdam for unblocked agile delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-6">Global Engineering. Indian Advantage.</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              We provide access to experienced software engineers, flexible delivery models, and competitive economics. We deliver dependable engineering value at a velocity that local hiring cannot match.
            </p>
            <Link to="/contact" className="btn btn-primary">Start Building Your Team</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default DedicatedTeam;
