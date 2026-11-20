import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Clock, Lock, Server, ArrowRight, CheckCircle2 } from 'lucide-react';
import FadeIn from '../../components/ui/FadeIn';

const Europe = () => {
  return (
    <>
      <Helmet>
        <title>Software Engineering Partner for Europe & UK | Veluno Softtech</title>
        <meta name="description" content="Veluno Softtech provides GDPR-aware, secure, and scalable digital engineering for businesses across the UK and Europe." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy-900 text-white pt-32 pb-20 relative overflow-hidden border-b-4 border-accent-500">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-4 block flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent-400 mr-2"></span>
              UK & European Client Delivery
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-medium mb-6 leading-tight">
              Scale your engineering. <br/> Without compromising compliance.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl">
              We design, build, and maintain secure digital products for ambitious European businesses—combining rigorous data privacy with rapid execution.
            </p>
            <Link to="/contact" className="btn btn-primary text-base px-8 py-4 inline-flex items-center">
              Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* European Core Value Prop */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-6">Designed for European Standards</h2>
            <p className="text-lg text-gray-600">
              We understand that for UK and EU clients, software isn't just about features. It's about data sovereignty, strict documentation, and absolute reliability.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="bg-gray-50 p-8 rounded-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
              <Shield className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">GDPR-Aware Architecture</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We build systems assuming strict regulatory environments. From user consent matrices to "right to be forgotten" cascades, our databases are prepared for compliance.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-gray-50 p-8 rounded-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
              <Clock className="w-10 h-10 text-accent-600 mb-6" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Timezone Alignment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                With a 3.5 to 4.5-hour time difference to the UK and Central Europe, our delivery teams overlap perfectly with your morning and mid-day for daily standups and agile collaboration.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-gray-50 p-8 rounded-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
              <Lock className="w-10 h-10 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                TLS 1.3 encryption, VPC network isolation, and strict Role-Based Access Control (RBAC). Your code and customer data are secured to international standards.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Engagement Models Targeted for Europe */}
      <section className="py-24 bg-navy-900 text-white border-t border-navy-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">How European teams work with us</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Whether you need a specialized team to augment your internal capacity in London, or an end-to-end product development partner for your Berlin startup, we provide structured, predictable engagement models.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-lg block mb-1">Dedicated Teams (Staff Augmentation)</strong>
                    <span className="text-gray-400">Scale your engineering capacity instantly without the intense recruitment overhead of the European tech market.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-lg block mb-1">Fixed-Scope Product Engineering</strong>
                    <span className="text-gray-400">Perfect for defined MVP builds. We guarantee the budget, scope, and timeline upfront.</span>
                  </div>
                </li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-navy-800 p-8 rounded-sm border border-navy-700 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 border-b border-navy-700 pb-4">Our Technology Stack</h3>
                <div className="grid grid-cols-2 gap-y-6">
                  <div>
                    <Server className="w-6 h-6 text-blue-400 mb-2" />
                    <div className="font-bold">Backend & API</div>
                    <div className="text-sm text-gray-400">Node.js, Java, Python</div>
                  </div>
                  <div>
                    <Lock className="w-6 h-6 text-accent-400 mb-2" />
                    <div className="font-bold">Cloud & DevOps</div>
                    <div className="text-sm text-gray-400">AWS, Docker, K8s</div>
                  </div>
                  <div>
                    <Shield className="w-6 h-6 text-green-400 mb-2" />
                    <div className="font-bold">Frontend & Mobile</div>
                    <div className="text-sm text-gray-400">React, Next.js, Flutter</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Europe;
