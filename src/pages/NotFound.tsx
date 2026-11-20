import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/ui/PageBanner';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Veluno Softtech</title>
      </Helmet>
      
      <PageBanner 
        title="404 - Page Not Found" 
        breadcrumb="404" 
      />

      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-heading font-extrabold text-[#1E1E1E] mb-4">Looking for something?</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm">
          The page you requested could not be located. Explore our core services or return to the homepage.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/" className="btn-dark px-8 py-3.5 rounded-xl font-bold uppercase text-xs">
            Return Home
          </Link>
          <Link to="/services" className="btn-lime px-8 py-3.5 rounded-xl font-bold uppercase text-xs">
            View Services
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
