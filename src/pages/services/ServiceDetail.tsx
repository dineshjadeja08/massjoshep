import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Layers, 
  Check,
  MessageSquare,
  Cpu,
  Lock,
  Activity
} from 'lucide-react';
import { servicesData } from '../../data/services';
import { caseStudies } from '../../data/caseStudies';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PageBanner from '../../components/ui/PageBanner';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.id === slug || s.aliases?.includes(slug || ''));

  if (!service) return <Navigate to="/services" replace />;

  const matchingCaseStudies = caseStudies.filter(cs => 
    service.relatedCaseStudies?.includes(cs.slug)
  );

  const whatsappMessage = encodeURIComponent(
    `Hello Veluno Softtech, I would like to scope a project for ${service.name}.`
  );
  const whatsappUrl = `https://wa.me/919489249051?text=${whatsappMessage}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "serviceType": service.pillar,
    "provider": {
      "@type": "Organization",
      "name": "Veluno Softtech",
      "url": "https://www.velunosofttech.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vivekananda Nagar, Thoraipakkam",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600097",
        "addressCountry": "IN"
      }
    },
    "description": service.tagline,
    "areaServed": ["India", "United States", "United Kingdom", "Europe", "Australia", "Middle East"]
  };

  return (
    <>
      <Helmet>
        <title>{service.title} | Veluno Softtech</title>
        <meta name="description" content={service.tagline} />
        <link rel="canonical" href={`https://www.velunosofttech.com/services/${service.id}`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      {/* Top Banner */}
      <PageBanner 
        title={service.name} 
        breadcrumb={`Services > ${service.name}`}
        category={service.pillar}
      />

      {/* Engineering & Trust Standards Strip */}
      {service.complianceBadges && (
        <section className="bg-[#08172b] py-4 border-b border-slate-800 text-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
              <span>Verified Engineering & Trust Standards:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {service.complianceBadges.map((badge, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 rounded-xs bg-white/5 border border-slate-700/80 text-[11px] font-mono text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-8 py-14 md:py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Detailed Content (Left 8 Cols) */}
          <div className="lg:col-span-8">
            
            {/* Heading & Tagline */}
            <div className="mb-10 pb-8 border-b border-slate-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Pillar Architecture · {service.pillar}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1F3A] leading-tight">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-light">
                {service.tagline}
              </p>
            </div>

            {/* Markdown Body Content */}
            <div className="prose max-w-none prose-base md:prose-lg prose-headings:font-heading prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-extrabold prose-h2:text-[#0B1F3A] prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg sm:prose-h3:text-xl prose-h3:font-bold prose-h3:text-[#0B1F3A] prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-light prose-li:text-slate-600">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  ul: ({node: _node, ...props}) => <ul className="space-y-3 my-6 list-none pl-0" {...props} />,
                  li: ({node: _node, ...props}) => (
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-xs bg-[#14B8A6] text-[#0B1F3A] flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs font-bold">✓</span>
                      <span {...props} />
                    </li>
                  ),
                  table: ({node: _node, ...props}) => (
                    <div className="overflow-x-auto my-8 border border-slate-200 rounded-xs shadow-2xs">
                      <table className="min-w-full divide-y divide-slate-200" {...props} />
                    </div>
                  ),
                  th: ({node: _node, ...props}) => <th className="px-5 py-3 bg-slate-50 text-left text-xs font-bold text-slate-700 uppercase tracking-wider font-mono" {...props} />,
                  td: ({node: _node, ...props}) => <td className="px-5 py-3.5 text-xs sm:text-sm text-slate-600 border-b border-slate-100" {...props} />
                }}
              >
                {service.content}
              </ReactMarkdown>
            </div>

            {/* Key Deliverables Matrix */}
            <div className="mt-14 p-7 md:p-8 rounded-xs bg-[#F8FAFC] border border-slate-200 shadow-2xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-1">
                Contractual Commitments
              </span>
              <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-5 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#14B8A6]" />
                <span>Guaranteed Deliverables for {service.name}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {service.deliverables.map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-xs border border-slate-200 shadow-2xs">
                    <Check className="w-4 h-4 text-[#2563EB] mr-2.5 mt-0.5 shrink-0" />
                    <span className="text-xs font-semibold text-slate-700 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Phase Delivery Framework */}
            <div className="mt-10 p-7 md:p-8 rounded-xs bg-white border border-slate-200 shadow-2xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-1">
                Execution Discipline
              </span>
              <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2">
                Veluno 4-Stage Delivery Framework
              </h3>
              <p className="text-xs text-slate-600 mb-6 font-light">
                Our structured milestone cadence guarantees transparent progress, zero scope creep, and complete code ownership.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { step: '01', title: 'Technical Scoping', time: 'Days 1–5', desc: 'Requirements review under NDA, database schema models, architecture blueprints, and fixed sprint definitions.' },
                  { step: '02', title: 'UI/UX & Prototypes', time: 'Days 6–15', desc: 'Clickable interactive Figma prototype, user journey validation, and component token design system.' },
                  { step: '03', title: 'Agile Engineering', time: 'Weeks 3–6', desc: 'Bi-weekly demo sprints, automated CI/CD staging environments, and test-driven code execution.' },
                  { step: '04', title: 'Security & Launch', time: 'Week 7+', desc: 'Penetration testing, core vitals optimization, 100% IP code transfer, and zero-downtime deployment.' }
                ].map((ph, idx) => (
                  <div key={idx} className="p-4 rounded-xs bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-base font-mono font-bold text-[#14B8A6]">{ph.step}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-xs bg-slate-200 text-slate-700 font-bold">{ph.time}</span>
                      </div>
                      <h4 className="text-xs font-heading font-bold text-[#0B1F3A] mb-1">{ph.title}</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-light">{ph.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            {service.techStack && (
              <div className="mt-10 p-6 rounded-xs bg-[#F8FAFC] border border-slate-200">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                  Engineered With Modern Toolchains
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono px-3 py-1 rounded-xs bg-white text-slate-700 border border-slate-200 shadow-2xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Demonstrated Case Studies Showcase */}
            {matchingCaseStudies.length > 0 && (
              <div className="mt-14 pt-10 border-t border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-1">
                      Demonstrated Proof
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B1F3A]">
                      Related Portfolio Case Studies
                    </h3>
                  </div>
                  <Link 
                    to="/work" 
                    className="text-xs font-bold uppercase tracking-wider text-[#2563EB] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View All ({caseStudies.length})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {matchingCaseStudies.map(cs => (
                    <div 
                      key={cs.slug}
                      className="rounded-xs bg-white border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#14B8A6] hover:shadow-md transition-all group"
                    >
                      <div>
                        <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                          <img 
                            src={cs.heroImage} 
                            alt={cs.clientName} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-xs bg-[#14B8A6] text-[#0B1F3A]">
                            {cs.status}
                          </span>
                        </div>
                        <div className="p-5">
                          <span className="text-[10px] font-mono font-bold text-[#2563EB] uppercase block mb-1">
                            {cs.industry}
                          </span>
                          <h4 className="text-base font-heading font-bold text-[#0B1F3A] mb-1.5 group-hover:text-[#2563EB]">
                            {cs.clientName}
                          </h4>
                          <p className="text-xs text-slate-600 font-light line-clamp-2 leading-relaxed">
                            {cs.summary}
                          </p>
                        </div>
                      </div>
                      <div className="p-5 pt-0">
                        <Link 
                          to={`/work/${cs.slug}`} 
                          className="btn-primary w-full text-center py-2 rounded-xs font-bold text-xs uppercase tracking-wider block"
                        >
                          Read Case Study →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
          
          {/* Sidebar CTA Card (Right 4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            
            <div className="bg-[#0B1F3A] text-white p-7 md:p-8 rounded-xs shadow-xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
                VELUNO PARTNERSHIP
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-white mb-3 leading-tight">
                Request A Quote For {service.name}
              </h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed font-light">
                We review requirements under mutual NDA, provide an explicit written architectural scope, and establish agreed delivery milestones before development begins.
              </p>
              
              <div className="space-y-3 mb-6 text-xs text-slate-300 border-y border-slate-800 py-5">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-[#14B8A6] mr-2.5 shrink-0" />
                  <span>30-Minute Technical Scoping Session</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-[#14B8A6] mr-2.5 shrink-0" />
                  <span>Written Functional Architecture Blueprint</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-[#14B8A6] mr-2.5 shrink-0" />
                  <span>100% IP & Git Source Code Transfer</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-[#14B8A6] mr-2.5 shrink-0" />
                  <span>Response SLA: Under 4 Business Hours</span>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="btn-teal w-full text-center py-3.5 rounded-xs font-bold text-xs uppercase tracking-wider block shadow-sm"
              >
                Start Project Discussion
              </Link>

              {/* WhatsApp Quick Action */}
              <div className="mt-4 pt-4 border-t border-slate-800">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>

              {/* Other Services Navigation */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Other Solution Pillars
                </span>
                <div className="space-y-1.5">
                  {servicesData.filter(s => s.id !== service.id).map(s => (
                    <Link 
                      key={s.id} 
                      to={`/services/${s.id}`}
                      className="block text-xs font-medium text-slate-400 hover:text-[#14B8A6] py-1 transition-colors"
                    >
                      › {s.name}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Engineering Hub Pin Card */}
            <div className="p-5 rounded-xs bg-white border border-slate-200 text-xs text-slate-600 shadow-2xs">
              <span className="font-mono font-bold uppercase text-[10px] text-[#2563EB] block mb-1">
                Global Delivery Hub
              </span>
              <p className="font-medium text-[#0B1F3A]">
                Vivekananda Nagar, Thoraipakkam, Chennai, Tamil Nadu 600097
              </p>
              <p className="text-[11px] text-slate-500 mt-1 font-light">
                Delivering high-velocity software engineering to clients across APAC, EMEA, and North America.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
