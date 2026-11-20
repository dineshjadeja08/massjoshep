import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Server, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrustCenter = () => {
  return (
    <>
      <Helmet>
        <title>Trust & Engineering Standards | Veluno Softtech</title>
        <meta name="description" content="Learn about Veluno Softtech's security architecture, data privacy practices, and engineering standards." />
      </Helmet>
      
      <div className="bg-navy-900 text-white py-24 border-b-4 border-accent-500">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Shield className="w-16 h-16 text-accent-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Trust & Engineering Standards</h1>
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            Modern security, privacy-by-design, and reliable cloud deployments are foundational to everything we build at Veluno Softtech.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-sm border border-gray-200">
            <Lock className="w-8 h-8 text-accent-600 mb-4" />
            <h3 className="text-2xl font-bold text-navy-900 mb-3">Data Security & Encryption</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              All data at rest is encrypted using AES-256 standards, and all data in transit is secured via TLS 1.2 or higher. We employ strict role-based access control (RBAC) and least-privilege principles across all application layers.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Multi-factor authentication on cloud administration</li>
              <li>✓ Automated dependency and vulnerability scanning</li>
              <li>✓ Parameterized database queries preventing SQL injection</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-sm border border-gray-200">
            <Server className="w-8 h-8 text-accent-600 mb-4" />
            <h3 className="text-2xl font-bold text-navy-900 mb-3">Infrastructure Reliability</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              We deploy to leading cloud infrastructure providers (AWS, Google Cloud, Azure) configuring automated health checks, isolated database subnets, and continuous backup routines.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ High-availability container orchestration (Docker / Kubernetes)</li>
              <li>✓ Automated daily database backups with point-in-time recovery</li>
              <li>✓ Health monitoring and alerting on application thresholds</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-sm border border-gray-200 text-center">
          <FileCheck className="w-12 h-12 text-navy-900 mx-auto mb-4" />
          <h2 className="text-3xl font-heading font-semibold text-navy-900 mb-4 tracking-tight">Security & Privacy Principles</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
            We structure our software architectures and development workflows around established international security principles and privacy requirements for clients across the UK, UAE, Europe, and Australia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white border border-gray-300 rounded-sm text-navy-900 font-semibold text-sm">GDPR-Aware Architecture</span>
            <span className="px-4 py-2 bg-white border border-gray-300 rounded-sm text-navy-900 font-semibold text-sm">OWASP Secure Coding Standards</span>
            <span className="px-4 py-2 bg-white border border-gray-300 rounded-sm text-navy-900 font-semibold text-sm">VPC Private Subnet Isolation</span>
            <span className="px-4 py-2 bg-white border border-gray-300 rounded-sm text-navy-900 font-semibold text-sm">Strict Role-Based Access Control</span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/security" className="text-accent-600 font-semibold hover:underline">
            Read our detailed Security & Privacy Architecture &rarr;
          </Link>
        </div>
      </div>
    </>
  );
};

export default TrustCenter;
