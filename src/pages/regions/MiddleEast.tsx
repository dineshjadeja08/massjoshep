import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, Building2, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import FadeIn from '../../components/ui/FadeIn';

const MiddleEast = () => {
  return (
    <>
      <Helmet>
        <title>Digital Engineering Partner for UAE & Middle East | Veluno Softtech</title>
        <meta name="description" content="Veluno Softtech provides custom software development, modern web applications, and digital engineering for businesses across the UAE and Middle East." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy-900 text-white pt-32 pb-20 relative overflow-hidden border-b-4 border-accent-500">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-4 block flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent-400 mr-2"></span>
              UAE & Middle East Client Delivery
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-medium mb-6 leading-tight">
              Custom Software & <br/> Modern Web Platforms
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl">
              We design, build, and deploy reliable digital platforms and workflow automation for growing enterprises across the UAE and the wider GCC region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn btn-primary text-base px-8 py-4 inline-flex items-center justify-center">
                Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a href="https://wa.me/919080824626" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-sm transition-colors flex items-center justify-center text-base">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-6">Designed for GCC Enterprises</h2>
            <p className="text-lg text-gray-600">
              For organizations in the UAE, Saudi Arabia, and across the GCC, we provide the technical depth required to execute national-scale digital initiatives and modern e-commerce platforms.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="bg-gray-50 p-8 rounded-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
              <Building2 className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Enterprise Systems</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From custom CRM development to massive scalable e-commerce infrastructure, we build platforms that support high-volume transactions securely.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-gray-50 p-8 rounded-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
              <Cpu className="w-10 h-10 text-accent-600 mb-6" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">AI & Automation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We integrate cutting-edge AI orchestration into your existing data systems, enabling automated customer support, predictive analytics, and document processing.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-gray-50 p-8 rounded-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
              <Globe className="w-10 h-10 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">RTL & Localization Ready</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our frontend architectures are built with native i18n support, allowing seamless transitions between English and Arabic (RTL) interfaces without code duplication.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-heading font-bold text-navy-900 mb-4">Dedicated Delivery, Direct Communication</h2>
              <p className="text-gray-600 mb-6">
                We provide a VIP delivery experience. You'll be assigned a dedicated Project Manager who handles all technical translation and provides transparent weekly progress reports. With a highly favorable timezone overlap, communication is always instant.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-navy-900 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 mr-3" /> Full timezone overlap with Dubai & Riyadh
                </li>
                <li className="flex items-center text-navy-900 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 mr-3" /> Direct WhatsApp communication channel
                </li>
                <li className="flex items-center text-navy-900 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 mr-3" /> Executive-level architectural consulting
                </li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <Link to="/services/dedicated-team" className="block text-center bg-navy-900 text-white rounded-sm p-8 hover:bg-navy-800 transition-colors">
                <div className="text-4xl font-bold text-accent-400 mb-2">Team</div>
                <div className="font-bold mb-4">Build Your Dedicated Team</div>
                <div className="text-sm text-gray-400">Scale your internal capacity reliably.</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleEast;
