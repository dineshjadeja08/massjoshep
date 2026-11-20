import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Code, Workflow, Zap } from 'lucide-react';
import FadeIn from '../../components/ui/FadeIn';

import PageBanner from '../../components/ui/PageBanner';

const DedicatedTeam = () => {
  return (
    <>
      <Helmet>
        <title>Dedicated Development Team | Veluno Softtech</title>
        <meta name="description" content="Build your engineering team with Veluno Softtech. Scale your capacity without the overhead of building an in-house team." />
      </Helmet>

      {/* Top Banner */}
      <PageBanner 
        title="Dedicated Teams" 
        breadcrumb="Services > Dedicated Teams"
        category="Continuous Sprint Capacity" 
      />

      {/* The Need */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative aspect-square md:aspect-auto md:h-full bg-gray-100 rounded-sm overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                alt="Engineering Team Collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-navy-900 mb-6 tracking-tight">
                Fast-track your roadmap with dedicated expertise.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Hiring elite technical talent in markets like Europe, Australia, and the Middle East is slow, highly competitive, and expensive. 
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our Dedicated Team model provides you with hand-picked, pre-vetted engineers who integrate directly into your company's workflows, stand-ups, and culture-operating exactly like your own employees, managed from our high-performance delivery centers in India.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Zero recruitment fees or delays",
                  "No HR, payroll, or compliance overhead",
                  "Immediate access to specialized AI & Cloud talent",
                  "Seamless timezone alignment and overlap"
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
