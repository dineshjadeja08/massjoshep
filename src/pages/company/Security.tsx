import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Lock, Server, FileText, CheckCircle2, Database, ShieldCheck, FileCheck, Globe2 } from 'lucide-react';
import PageBanner from '../../components/ui/PageBanner';

const Security = () => {
  return (
    <>
      <Helmet>
        <title>Enterprise Security & Data Governance | Veluno Softtech</title>
        <meta name="description" content="Explore Veluno Softtech's enterprise security architecture, data privacy governance, GDPR readiness, and cloud infrastructure hardening." />
        <link rel="canonical" href="https://www.velunosofttech.com/security" />
      </Helmet>

      {/* Top Banner */}
      <PageBanner 
        title="Security & Data Governance" 
        breadcrumb="Company > Security"
        category="Enterprise Trust"
        subtitle="Zero-trust development, strict international data privacy governance, and cloud infrastructure hardening."
      />

      <div className="container mx-auto px-4 md:px-8 py-14 md:py-20 max-w-7xl">
        
        {/* Core Principles */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
            Enterprise Security Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1F3A] leading-tight mb-4">
            Security and Privacy by Architectural Design
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
            For mid-market and enterprise organizations operating across North America, Europe, and the Middle East, data security is non-negotiable. Every system delivered by Veluno is built with zero-trust network topology, cryptographic data segregation, and automated compliance auditing.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-7 rounded-xl bg-[#F5F7FA] border border-slate-200/90 shadow-xs">
            <div className="w-11 h-11 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5">
              GDPR & CCPA Data Controls
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Automated consent tracking, cascade deletion mechanisms for "Right to be Forgotten", data minimization routines, and user privacy dashboards.
            </p>
          </div>

          <div className="p-7 rounded-xl bg-[#F5F7FA] border border-slate-200/90 shadow-xs">
            <div className="w-11 h-11 rounded-lg bg-[#0B1F3A] text-[#2563EB] flex items-center justify-center mb-5">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5">
              Cryptographic Data Segregation
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              No shared multi-tenant database records between clients. PII is encrypted at rest using AES-256 and transit encrypted via TLS 1.3.
            </p>
          </div>

          <div className="p-7 rounded-xl bg-[#F5F7FA] border border-slate-200/90 shadow-xs">
            <div className="w-11 h-11 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mb-5">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-extrabold text-[#0B1F3A] mb-2.5">
              Zero-Trust RBAC & Secrets
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Granular Role-Based Access Control, automated credential rotation via AWS Secrets Manager, and zero cleartext API keys in repositories.
            </p>
          </div>
        </div>

        {/* Infrastructure Hardening Section */}
        <div className="rounded-xl bg-[#0B1F3A] text-white p-8 md:p-12 mb-16 border border-slate-800 shadow-md">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Infrastructure Hardening
            </span>
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white">
              VPC Isolation & Network Perimeter Defense
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="flex gap-4">
              <Server className="w-6 h-6 text-[#14B8A6] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white mb-1.5">Private Subnet Isolation</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Database clusters, Redis caches, and message queues reside exclusively in non-routable private subnets accessible only via authenticated application reverse proxies.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Shield className="w-6 h-6 text-[#2563EB] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white mb-1.5">Continuous Vulnerability Scanning</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Automated CI/CD dependency vulnerability scans (Snyk & Dependabot) prevent vulnerable third-party modules from entering production pipelines.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FileCheck className="w-6 h-6 text-[#14B8A6] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white mb-1.5">SOC 2 Type II Aligned Auditing</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Immutable audit trails tracking all administrative mutations, user permission updates, and privileged access timestamps stored in tamper-proof S3 vaults.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Globe2 className="w-6 h-6 text-[#2563EB] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white mb-1.5">Global Edge DDoS Mitigation</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Enterprise Cloudflare WAF deployment with rate limiting, geo-fencing, and automated volumetric Layer 7 DDoS mitigation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Consultation CTA */}
        <div className="rounded-xl bg-[#F5F7FA] border border-slate-200 p-8 md:p-12 text-center">
          <h3 className="text-2xl font-heading font-extrabold text-[#0B1F3A] mb-3">
            Have Specific Enterprise Security or Compliance Requirements?
          </h3>
          <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto mb-6 font-light">
            Our Staff Solutions Architects can provide a security questionnaire review, SOC 2 compliance mapping, or sign custom corporate NDAs within 2 business hours.
          </p>
          <div className="flex justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Request Security Consultation
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Security;