import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getIndustryBySlug } from '../../data/industries';
import FadeIn from '../../components/ui/FadeIn';
import { ArrowRight, ChevronRight, Settings } from 'lucide-react';
import NotFound from '../NotFound';

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!industry) {
    return <NotFound />;
  }

  const Icon = industry.icon;

  return (
    <>
      <Helmet>
        <title>{industry.title} Software Development | Veluno Softtech</title>
        <meta name="description" content={industry.heroSubtitle} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-navy-900 text-white pt-32 pb-24 relative overflow-hidden border-b-4 border-accent-500">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity grayscale" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center space-x-2 text-gray-400 mb-8 text-sm">
            <Link to="/" className="hover:text-accent-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-500">Industries</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-accent-400">{industry.title}</span>
          </div>
          
          <div className="max-w-4xl">
            <div className="w-16 h-16 bg-accent-500/20 rounded-sm flex items-center justify-center mb-6 border border-accent-500/30">
              <Icon className="w-8 h-8 text-accent-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 leading-tight">
              {industry.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl">
              {industry.heroSubtitle}
            </p>
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4 inline-flex items-center">
              Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column (Challenges) */}
            <div className="lg:col-span-5">
              <FadeIn>
                <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6 border-b border-gray-200 pb-4">
                  Industry Challenges
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Building software for the {industry.title} sector requires overcoming complex domain-specific hurdles.
                </p>
                
                <ul className="space-y-6">
                  {industry.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
                      <div className="w-8 h-8 bg-red-50 rounded-sm flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-red-500 font-bold">!</span>
                      </div>
                      <span className="text-navy-900 font-medium">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Right Column (Solutions) */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6 border-b border-gray-200 pb-4">
                  How Veluno Softtech Solves Them
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  We deploy proven architectural patterns and dedicated engineering teams to build resilient platforms.
                </p>
                
                <div className="space-y-6">
                  {industry.solutions.map((solution, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-50 rounded-bl-full -z-10 opacity-50" />
                      <div className="flex items-center mb-4">
                        <Settings className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0" />
                        <h3 className="text-xl font-bold text-navy-900">{solution.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed pl-9">
                        {solution.description}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-900 text-white text-center border-t border-navy-800">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Need an engineering partner who understands {industry.title}?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Our technical architects are ready to discuss your specific domain requirements and compliance needs.
            </p>
            <Link to="/contact" className="btn btn-primary inline-flex items-center text-lg px-8 py-4">
              Schedule a Technical Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default IndustryDetail;
