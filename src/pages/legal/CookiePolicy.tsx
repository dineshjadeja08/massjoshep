import React from 'react';
import { Helmet } from 'react-helmet-async';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Veluno Softtech</title>
      </Helmet>
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-8">Cookie Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4 text-sm text-gray-500 font-semibold">Last updated: October 2026</p>
          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">1. What are cookies?</h2>
          <p className="mb-4">Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
          
          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">2. How do we use cookies?</h2>
          <p className="mb-4">We use cookies to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Understand and save user's preferences for future visits.</li>
            <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future.</li>
            <li>Secure our contact forms and authentication systems.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">3. Your choices regarding cookies</h2>
          <p className="mb-4">If you prefer to avoid the use of cookies on the Website, first you must disable the use of cookies in your browser and then delete the cookies saved in your browser associated with this website. You may use this option for preventing the use of cookies at any time.</p>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;