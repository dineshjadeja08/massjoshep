import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Veluno Softtech</title>
      </Helmet>
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4 text-sm text-gray-500 font-semibold">Last updated: October 2026</p>
          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">Veluno Softtech ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website velunosofttech.com or use our IT services and software products.</p>
          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number that you voluntarily give to us when choosing to participate in various activities related to our services.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          </ul>
          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">3. Use of Your Information</h2>
          <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Deliver information regarding our services and updates.</li>
            <li>Email you regarding your account, order, or project status.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
            <li>Respond to product and customer service requests.</li>
          </ul>
          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">4. Contact Us</h2>
          <p className="mb-4">If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:hello@velunosofttech.com" className="text-accent-500 hover:underline">hello@velunosofttech.com</a></p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;