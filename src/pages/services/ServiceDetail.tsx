import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, CheckCircle, ShieldCheck, Sparkles, Clock, Layers, Check } from 'lucide-react';
import { servicesData } from '../../data/services';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PageBanner from '../../components/ui/PageBanner';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.id === slug || s.aliases?.includes(slug || ''));

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <Helmet>
        <title>{service.title} | Veluno Softtech</title>
        <meta name="description" content={service.tagline} />
      </Helmet>
      
      {/* Top Rounded Lime Banner matching the uploaded design */}
      <PageBanner 
        title={service.name} 
        breadcrumb={`Services > ${service.name}`}
        category={service.pillar}
      />

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Detailed Content */}
          <div className="lg:col-span-2">
            
            <div className="mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Pillar Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1F3A] leading-tight">
                {service.title}
              </h2>
              <p className="text-base text-gray-600 mt-4 leading-relaxed font-light">
                {service.tagline}
              </p>
            </div>

            <div className="prose max-w-none prose-lg prose-headings:font-heading prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-extrabold prose-h2:text-[#0B1F3A] prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-bold prose-h3:text-[#0B1F3A] prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  ul: ({node: _node, ...props}) => <ul className="space-y-3 my-6 list-none pl-0" {...props} />,
                  li: ({node: _node, ...props}) => (
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-[#14B8A6] text-[#0B1F3A] flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs font-bold">✓</span>
                      <span {...props} />
                    </li>
                  ),
                  table: ({node: _node, ...props}) => (
                    <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-xs">
                      <table className="min-w-full divide-y divide-gray-200" {...props} />
                    </div>
                  ),
                  th: ({node: _node, ...props}) => <th className="px-6 py-3.5 bg-gray-50 text-left text-xs font-bold text-gray-700 uppercase tracking-wider font-mono" {...props} />,
                  td: ({node: _node, ...props}) => <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-100" {...props} />
                }}
              >
                {service.content}
              </ReactMarkdown>
            </div>

            {/* Key Deliverables Matrix */}
            <div className="mt-14 p-8 rounded-xl bg-[#F8F9FA] border border-gray-200/90">
              <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-6 flex items-center">
                <ShieldCheck className="w-6 h-6 text-[#0B1F3A] mr-2.5" />
                Guaranteed Deliverables for {service.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.deliverables.map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-2xl border border-gray-200/80 shadow-2xs">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
          
          {/* Sidebar CTA Card matching the Dark Charcoal card in the uploaded image */}
          <div>
            <div className="bg-[#0B1F3A] text-white p-8 md:p-9 rounded-xl shadow-xl sticky top-28">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
                VELUNO PARTNERSHIP
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-white mb-3 leading-tight">
                Get A Quote For {service.name}
              </h3>
              <p className="text-xs text-gray-300 mb-6 leading-relaxed font-light">
                We review requirements thoroughly, provide an explicit written scope, and establish agreed delivery milestones before development begins.
              </p>
              
              <div className="space-y-3.5 mb-8 text-xs text-gray-300 border-y border-slate-800 py-6">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-[#14B8A6] mr-2.5 flex-shrink-0" />
                  <span>30-Minute Technical Scoping Call</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-[#14B8A6] mr-2.5 flex-shrink-0" />
                  <span>Written Functional Specification</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-[#14B8A6] mr-2.5 flex-shrink-0" />
                  <span>100% IP & Source Code Ownership</span>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="btn-lime w-full text-center py-3.5 text-sm font-bold uppercase tracking-wider shadow-sm block"
              >
                Choose Plan
              </Link>

              {/* Direct WhatsApp Option */}
              <a 
                href="https://wa.me/919080824626" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 block w-full text-center text-xs font-semibold py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors"
              >
                Instant WhatsApp Chat →
              </a>

              {/* Other Services Navigation */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 block mb-3">
                  Other Veluno Pillars
                </span>
                <div className="space-y-2">
                  {servicesData.filter(s => s.id !== service.id).map(s => (
                    <Link 
                      key={s.id} 
                      to={`/services/${s.id}`}
                      className="block text-xs font-medium text-gray-400 hover:text-[#14B8A6] py-1 transition-colors"
                    >
                      + {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
