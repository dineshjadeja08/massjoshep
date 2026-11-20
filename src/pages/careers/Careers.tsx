import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

const Careers = () => {
  const openRoles = [
    { slug: 'senior-full-stack-engineer', title: 'Senior Full Stack Engineer (React/Node)', location: 'Remote / Global', type: 'Full-time' },
    { slug: 'product-designer', title: 'Product Designer (UI/UX)', location: 'Remote / Global', type: 'Full-time' },
    { slug: 'technical-project-manager', title: 'Technical Project Manager', location: 'India (Remote)', type: 'Full-time' }
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Veluno Softtech</title>
      </Helmet>
      
      <div className="bg-navy-900 text-white py-24 border-b-4 border-accent-500">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl font-heading font-bold mb-6">Build software that works.</h1>
          <p className="text-xl text-gray-300">Join our global team of engineers, designers, and strategists delivering dependable outcomes for growing businesses.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-8">Open Roles</h2>
          
          <div className="space-y-4">
            {openRoles.map(role => (
              <Link key={role.slug} to={`/careers/${role.slug}`} className="block bg-white border border-gray-200 rounded-sm p-6 hover:border-accent-500 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-accent-600 transition-colors">{role.title}</h3>
                    <div className="flex items-center space-x-6 mt-3 text-sm text-gray-500">
                      <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {role.location}</span>
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {role.type}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-navy-900 font-semibold group-hover:text-accent-600 flex items-center">
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-sm p-8 border border-gray-200 text-center">
          <h3 className="text-2xl font-heading font-semibold text-navy-900 mb-3 tracking-tight">Don't see a fit?</h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">We are always looking for talented engineers and delivery leads. Send a general profile and our engineering management team will review it.</p>
          <Link to="/contact" className="btn btn-primary px-6 py-3 font-semibold text-sm">
            Submit Engineering Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default Careers;