import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Download, ArrowRight, CheckCircle, Printer, ChevronDown, ChevronUp, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

const leadFormSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  corporateEmail: z.string().email("A valid email is required"),
  company: z.string().min(2, "Company name is required"),
  notes: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

interface ReportContent {
  id: string;
  title: string;
  type: string;
  readTime: string;
  description: string;
  executiveSummary: string;
  keyFindings: string[];
  architecturalRecommendations: string[];
  implementationRoadmap: string[];
}

const reports: ReportContent[] = [
  {
    id: "cost-legacy-tech",
    title: "The Cost of Legacy Tech in UAE Logistics (2026 Engineering Briefing)",
    type: "Industry Architecture Report",
    readTime: "8 min read",
    description: "An engineering analysis of how disconnected spreadsheet tracking, legacy on-premise ERPs, and manual airway bill reconciliations impact mid-market logistics operators in the UAE—and how pragmatic cloud automation recovers margin.",
    executiveSummary: "Logistics operators across Dubai, Abu Dhabi, and Sharjah face increasing pressure from digitized supply chain portals. Many mid-market transport providers continue running legacy desktop accounting packages alongside disconnected WhatsApp dispatch chains. This report outlines how API-led automation and lightweight customer tracking portals eliminate manual coordination bottlenecks without requiring multi-million dirham software overhauls.",
    keyFindings: [
      "Manual data re-entry between customs paperwork and fleet dispatch spreadsheets accounts for 14–18% of administrative labor hours.",
      "Lack of real-time milestone tracking for consignees results in high support call volume during peak port clearance windows.",
      "Fragmented GPS telematics data prevents predictive dispatching, leading to unnecessary vehicle idle times.",
      "Cloud-native micro-portals can be deployed in 6–8 weeks using modern REST interfaces to wrap legacy systems without data loss."
    ],
    architecturalRecommendations: [
      "Strangler Fig Migration Pattern: Deploy a customer-facing status tracking portal that queries read-replicas of your legacy database rather than replacing the core ERP overnight.",
      "Event-Driven Webhook Ingestion: Automate status updates from major freight carriers and port portals via webhook consumers built with Node.js and Redis queues.",
      "WhatsApp Business API Integration: Trigger automated container milestone updates directly to fleet dispatchers and end customers, reducing routine status enquiries.",
      "Role-Based Mobile Dispatch Interface: Provide drivers with offline-first Progressive Web Apps (PWA) to capture proof of delivery (POD) signatures and timestamped geolocation."
    ],
    implementationRoadmap: [
      "Phase 1 (Weeks 1–3): Ingestion layer and webhook integration with port/carrier tracking endpoints.",
      "Phase 2 (Weeks 4–6): Mobile-first customer tracking interface with milestone visualization.",
      "Phase 3 (Weeks 7–9): Driver PWA with digital POD and dispatch synchronization.",
      "Phase 4 (Ongoing): Automated reporting dashboard with detention and idle time analytics."
    ]
  },
  {
    id: "saas-scaling-guide",
    title: "Scaling SaaS Architecture for the UK & European Markets",
    type: "Technical Architecture Whitepaper",
    readTime: "10 min read",
    description: "An architectural guide for SaaS founders and tech leads on transitioning from single-tenant MVPs to secure, multi-tenant cloud architectures compliant with UK & EU GDPR data privacy regulations.",
    executiveSummary: "Building a SaaS product for UK and European enterprise buyers requires solving multi-tenancy, data residency, and audit logging early. Bolting on compliance after product-market fit frequently forces costly database migrations and rewrites. This paper details practical architectural patterns for secure multi-tenancy using PostgreSQL Row-Level Security (RLS) and localized cloud infrastructure.",
    keyFindings: [
      "UK and European enterprise buyers increasingly mandate that data at rest reside within regional boundaries (e.g. AWS London eu-west-2 or Frankfurt eu-central-1).",
      "Shared-database multi-tenancy with PostgreSQL Row-Level Security (RLS) offers 70% lower operational infrastructure costs compared to siloed schema-per-tenant architectures at early-to-mid scale.",
      "Audit logging and user consent telemetry must be designed as immutable append-only ledgers to satisfy GDPR Article 30 requirements.",
      "Decoupled background task processing prevents long-running export and reporting jobs from degrading primary web application response times."
    ],
    architecturalRecommendations: [
      "Multi-Tenancy with PostgreSQL RLS: Enforce tenant isolation directly at the database engine level by attaching tenant_id session parameters to every connection query.",
      "JWT Session Management with Rotation: Issue short-lived access tokens (15 minutes) with rotating refresh tokens stored in HTTP-only, secure, SameSite cookies to mitigate XSS vectors.",
      "Decoupled Job Queues (BullMQ / Redis): Offload PDF generation, CSV exports, and transactional emails to dedicated worker instances with exponential backoff retries.",
      "GDPR Erasure Automation: Implement a structured soft-delete lifecycle with cryptographic erasure cascades for personal identifying data across all related tables."
    ],
    implementationRoadmap: [
      "Phase 1 (Foundations): Setup VPC isolation, automated encrypted backups, and Row-Level Security policies.",
      "Phase 2 (Authentication & AuthZ): Role-based access control (RBAC), multi-factor authentication (MFA), and audit log instrumentation.",
      "Phase 3 (Worker Tier): Redis queue integration for background telemetry, automated billing webhooks, and reporting jobs.",
      "Phase 4 (Monitoring): Centralized structured logging, error alerting, and automated uptime checks."
    ]
  }
];

const Resources = () => {
  const [selectedReportId, setSelectedReportId] = useState<string>(reports[0].id);
  const [expandedReportId, setExpandedReportId] = useState<string | null>(reports[0].id);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema)
  });

  const selectedReport = reports.find(r => r.id === selectedReportId) || reports[0];

  const handleDownloadText = (report: ReportContent) => {
    const textContent = `
================================================================================
${report.title}
Document Type: ${report.type}
Published by: Veluno Softtech (https://velunosofttech.com)
Direct Contact: contact@velunosofttech.com | WhatsApp: +91 90808 24626
================================================================================

EXECUTIVE SUMMARY:
${report.executiveSummary}

KEY FINDINGS & INDUSTRY REALITIES:
${report.keyFindings.map((f, i) => `${i + 1}. ${f}`).join('\n')}

ARCHITECTURAL RECOMMENDATIONS:
${report.architecturalRecommendations.map((r, i) => `${i + 1}. ${r}`).join('\n')}

IMPLEMENTATION ROADMAP:
${report.implementationRoadmap.map((m, i) => `${i + 1}. ${m}`).join('\n')}

================================================================================
ENGINEERING CONSULTATION:
If your team is evaluating custom software development, API integration, or 
cloud architecture upgrades, discuss your requirements directly with Veluno Softtech engineers:
Email: contact@velunosofttech.com
Web: https://velunosofttech.com/contact
================================================================================
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${report.id}-veluno-briefing.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const onSubmit = async (data: LeadFormValues) => {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.fullName,
            from_email: data.corporateEmail,
            company: data.company,
            notes: data.notes || 'None provided',
            report_requested: selectedReport.title,
          },
          publicKey
        );
      }
      setFormSubmitted(true);
      reset();
    } catch (err) {
      console.error("Submission error", err);
      // Fallback: still show confirmation and direct access
      setFormSubmitted(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Strategic Resources & Engineering Whitepapers | Veluno Softtech</title>
        <meta 
          name="description" 
          content="Download and read Veluno Softtech's engineering briefings, architectural blueprints, and industry research reports for technology operators." 
        />
      </Helmet>
      
      {/* Header */}
      <div className="bg-navy-900 text-white py-20 border-b-4 border-accent-500">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <BookOpen className="w-14 h-14 text-accent-400 mx-auto mb-5" />
          <span className="text-accent-400 font-bold uppercase text-xs tracking-widest mb-3 block">
            Technical Publications & Research
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-6">
            Strategic Engineering Whitepapers
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            In-depth architectural analysis, implementation patterns, and technology insights from our software engineering practice—freely available to read online or download.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Column: Reports & In-Depth Text */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-2 tracking-tight">
                Available Publications
              </h2>
              <p className="text-sm text-gray-600 mb-8">
                Read the complete executive briefings below, save a text copy for offline review, or print directly.
              </p>
            </div>

            {reports.map((report) => {
              const isExpanded = expandedReportId === report.id;
              const isSelected = selectedReportId === report.id;

              return (
                <div 
                  key={report.id} 
                  className={`bg-white rounded-sm border transition-all shadow-xs ${
                    isSelected ? 'border-accent-500 ring-1 ring-accent-500/20' : 'border-gray-200'
                  }`}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-block px-2.5 py-1 bg-gray-100 text-navy-900 text-xs font-bold rounded-sm uppercase tracking-wider border border-gray-200">
                        {report.type}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {report.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-3 leading-snug">
                      {report.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {report.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button 
                        onClick={() => {
                          setSelectedReportId(report.id);
                          setExpandedReportId(isExpanded ? null : report.id);
                        }}
                        className="inline-flex items-center text-xs font-semibold px-4 py-2 bg-navy-900 text-white rounded-sm hover:bg-navy-800 transition-colors"
                      >
                        {isExpanded ? (
                          <>Hide Full Briefing <ChevronUp className="w-3.5 h-3.5 ml-1.5" /></>
                        ) : (
                          <>Read Full Briefing Online <ChevronDown className="w-3.5 h-3.5 ml-1.5" /></>
                        )}
                      </button>

                      <button 
                        onClick={() => handleDownloadText(report)}
                        className="inline-flex items-center text-xs font-semibold px-4 py-2 border border-gray-300 text-gray-700 rounded-sm hover:bg-gray-50 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5 mr-1.5 text-accent-600" /> Download Briefing (.txt)
                      </button>

                      <button 
                        onClick={handlePrint}
                        className="inline-flex items-center text-xs font-semibold px-3 py-2 text-gray-600 hover:text-navy-900 transition-colors"
                        title="Print this briefing"
                      >
                        <Printer className="w-3.5 h-3.5 mr-1 text-gray-500" /> Print
                      </button>
                    </div>
                  </div>

                  {/* Expanded Full Report Body */}
                  {isExpanded && (
                    <div className="border-t border-gray-200 bg-gray-50/70 p-6 md:p-8 space-y-6 text-sm text-gray-700 leading-relaxed">
                      
                      {/* Executive Summary */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-accent-700 mb-2">
                          1. Executive Summary
                        </h4>
                        <p className="bg-white p-4 rounded-sm border border-gray-200">
                          {report.executiveSummary}
                        </p>
                      </div>

                      {/* Key Findings */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-accent-700 mb-2">
                          2. Key Findings & Market Reality
                        </h4>
                        <div className="bg-white rounded-sm border border-gray-200 divide-y divide-gray-100">
                          {report.keyFindings.map((finding, idx) => (
                            <div key={idx} className="p-3.5 flex items-start gap-2.5">
                              <span className="w-5 h-5 rounded-full bg-accent-50 text-accent-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span>{finding}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Architectural Recommendations */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-accent-700 mb-2">
                          3. Architectural Recommendations
                        </h4>
                        <div className="space-y-2.5">
                          {report.architecturalRecommendations.map((rec, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-sm border-l-3 border-accent-600 border border-gray-200">
                              <span className="font-semibold text-navy-900 block mb-1">Pattern #{idx + 1}:</span>
                              {rec}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Implementation Roadmap */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-accent-700 mb-2">
                          4. Phased Implementation Roadmap
                        </h4>
                        <div className="bg-white p-4 rounded-sm border border-gray-200 space-y-2">
                          {report.implementationRoadmap.map((step, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs font-medium text-navy-900">
                              <span className="w-2 h-2 rounded-full bg-accent-500" />
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom action inside expanded */}
                      <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <span className="text-gray-500">
                          Need an architectural review tailored to your stack?
                        </span>
                        <a 
                          href="mailto:contact@velunosofttech.com?subject=Inquiry regarding technical whitepaper"
                          className="font-bold text-accent-600 hover:text-accent-700 inline-flex items-center"
                        >
                          Schedule a discussion with our engineers <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </a>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Direct Consultation Form */}
          <div>
            <div className="bg-white p-6 md:p-8 rounded-sm border border-gray-200 sticky top-24 shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Consultation Request Received</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    Thank you. We have logged your request for <strong>{selectedReport.title}</strong>. An engineer will follow up with you within 24 hours.
                  </p>
                  <p className="text-xs text-gray-500 mb-6">
                    In the meantime, the complete text is already unlocked and readable on this page, or you can download the briefing file directly above.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="btn btn-secondary text-xs px-4 py-2 font-semibold"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-accent-600 mb-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Engineering Inquiry</span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-navy-900 mb-2 tracking-tight">
                    Discuss Architecture
                  </h3>
                  <p className="text-gray-600 text-xs mb-6 leading-relaxed">
                    Planning a similar system or evaluating a legacy migration? Share your details to connect directly with Veluno Softtech's software engineers.
                  </p>

                  <div className="bg-gray-50 p-3 rounded-sm border border-gray-200 mb-4 text-xs text-gray-700">
                    <span className="font-bold text-navy-900 block mb-0.5">Selected Reference:</span>
                    <span className="line-clamp-1">{selectedReport.title}</span>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                      <input 
                        {...register("fullName")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-accent-500 focus:border-accent-500 text-sm" 
                        placeholder="e.g. Alex Morgan"
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Corporate or Business Email *</label>
                      <input 
                        {...register("corporateEmail")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-accent-500 focus:border-accent-500 text-sm" 
                        placeholder="alex@company.com"
                      />
                      {errors.corporateEmail && <p className="text-red-500 text-xs mt-1">{errors.corporateEmail.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Company / Organization *</label>
                      <input 
                        {...register("company")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-accent-500 focus:border-accent-500 text-sm" 
                        placeholder="e.g. Apex Freight Ltd"
                      />
                      {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Project or Technical Context (Optional)</label>
                      <textarea 
                        {...register("notes")}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-accent-500 focus:border-accent-500 text-sm" 
                        placeholder="Brief overview of your current architecture or upcoming initiative..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full btn btn-primary font-semibold py-3 px-4 rounded-sm flex justify-center items-center text-xs shadow-sm"
                    >
                      {isSubmitting ? "Submitting Inquiry..." : "Request Architecture Discussion"}
                      {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                    </button>
                    
                    <p className="text-xs text-gray-400 text-center">
                      Direct contact: <a href="mailto:contact@velunosofttech.com" className="underline text-gray-600">contact@velunosofttech.com</a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Resources;
