import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Cloud, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  return (
    <>
      <Helmet>
        <title>Partners & Alliances | Veluno Softtech</title>
      </Helmet>
      
      <div className="bg-navy-900 text-white py-24 border-b-4 border-accent-500">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Award className="w-16 h-16 text-accent-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Partners & Alliances</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We collaborate with industry-leading technology providers to build secure, scalable, and resilient digital products for our clients.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Technology Ecosystem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">While we remain technology agnostic to recommend the best tool for the job, we maintain deep expertise and strategic relationships with these core platforms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          <div className="border border-gray-200 rounded-sm p-8 hover:border-accent-500 transition-colors bg-white">
            <div className="flex items-center mb-4">
              <Cloud className="w-8 h-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-navy-900">Cloud & Infrastructure</h3>
            </div>
            <p className="text-gray-600 mb-4">Delivering high-availability cloud architecture and serverless deployments.</p>
            <ul className="space-y-2 text-sm font-semibold text-gray-800">
              <li>• Amazon Web Services (AWS) Cloud Deployments</li>
              <li>• Google Cloud Platform (GCP)</li>
              <li>• Microsoft Azure</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-sm p-8 hover:border-accent-500 transition-colors bg-white">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-indigo-500 mr-4" />
              <h3 className="text-2xl font-bold text-navy-900">Modern Frontend & API</h3>
            </div>
            <p className="text-gray-600 mb-4">Building lightning-fast, edge-rendered user interfaces and integrations.</p>
            <ul className="space-y-2 text-sm font-semibold text-gray-800">
              <li>• Vercel / Next.js Ecosystem</li>
              <li>• React Native (Mobile)</li>
              <li>• Stripe (Payments Integration)</li>
            </ul>
          </div>

        </div>

        <div className="bg-navy-900 text-white p-12 rounded-sm border border-navy-800 text-center">
          <h2 className="text-3xl font-heading font-semibold mb-4 tracking-tight">Become an Alliance Partner</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Are you a technology provider, agency, or consultancy looking to partner with a reliable software engineering team? Let's explore synergies.
          </p>
          <Link to="/contact" className="btn btn-primary px-8 py-4 font-semibold">
            Contact the Alliances Team
          </Link>
        </div>

      </div>
    </>
  );
};

export default Partners;
