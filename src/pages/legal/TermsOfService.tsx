import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Veluno Softtech</title>
      </Helmet>
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4 text-sm text-gray-500 font-semibold">Last updated: October 2026</p>
          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Veluno Softtech (“we,” “us” or “our”), concerning your access to and use of the velunosofttech.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
          
          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p className="mb-4">Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.</p>
          
          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">3. User Representations</h2>
          <p className="mb-4">By using the Site, you represent and warrant that:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
            <li>You are not a minor in the jurisdiction in which you reside.</li>
            <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">4. Governing Law</h2>
          <p className="mb-4">These Terms shall be governed by and defined following the laws of the jurisdictions in which Veluno Softtech operates. Veluno Softtech and yourself irrevocably consent that the courts of competent jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;