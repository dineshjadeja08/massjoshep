import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = __dirname;
const srcDir = path.join(rootDir, 'src');

const filesToCreate = {
  // Layout
  'components/layout/Layout.tsx': `import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;`,

  'components/layout/Header.tsx': `import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}\`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-bold text-navy-900">
          XenFirm<span className="text-accent-600">.</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-accent-600 transition-colors">About Us</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-accent-600 transition-colors">
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden py-2"
                >
                  <Link to="/services" className="block px-4 py-2 text-sm font-semibold text-navy-900 border-b border-gray-100 mb-2">All Services Overview</Link>
                  <Link to="/services/custom-websites" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-600">Custom Websites</Link>
                  <Link to="/services/web-apps-saas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-600">Web Apps & SaaS</Link>
                  <Link to="/services/ai-automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-600">AI & Automation</Link>
                  <Link to="/services/integrations-apis" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-600">Integrations & APIs</Link>
                  <Link to="/services/ongoing-support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-600">Ongoing Support</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/industries" className="text-sm font-medium text-gray-700 hover:text-accent-600 transition-colors">Industries</Link>
          <Link to="/work" className="text-sm font-medium text-gray-700 hover:text-accent-600 transition-colors">Work</Link>
          <Link to="/insights" className="text-sm font-medium text-gray-700 hover:text-accent-600 transition-colors">Insights</Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/contact" className="bg-navy-900 hover:bg-navy-800 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors">
            Start a Project
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-navy-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">About Us</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Services</Link>
              <Link to="/industries" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Industries</Link>
              <Link to="/work" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Work</Link>
              <Link to="/insights" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Insights</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-navy-900 text-white px-5 py-3 rounded-md text-center font-semibold mt-4">
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;`,

  'components/layout/Footer.tsx': `import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 border-t-4 border-accent-600">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-3xl font-heading font-bold text-white mb-6 block">
              XenFirm<span className="text-accent-500">.</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              An IT services & digital product company delivering production-grade solutions for growing businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/insights" className="text-gray-400 hover:text-white transition-colors">Insights & News</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/custom-websites" className="text-gray-400 hover:text-white transition-colors">Custom Websites</Link></li>
              <li><Link to="/services/web-apps-saas" className="text-gray-400 hover:text-white transition-colors">Web Apps & SaaS</Link></li>
              <li><Link to="/services/ai-automation" className="text-gray-400 hover:text-white transition-colors">AI & Automation</Link></li>
              <li><Link to="/services/integrations-apis" className="text-gray-400 hover:text-white transition-colors">Integrations & APIs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Global Presence</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Serving India, UK, UAE, and Australia</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                <a href="mailto:hello@xenfirm.com" className="text-gray-400 hover:text-white transition-colors">hello@xenfirm.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">+91 98765 43210</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} XenFirm Technologies. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`,

  'components/layout/CookieBanner.tsx': `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-navy-900 text-white p-4 border-t border-navy-800 shadow-2xl"
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 text-sm text-gray-300 md:pr-8">
              We use cookies to improve your experience, analyze site traffic, and serve targeted advertisements. 
              By continuing to use this site, you consent to our use of cookies as described in our <a href="/cookie-policy" className="text-accent-500 underline">Cookie Policy</a>.
            </div>
            <div className="flex shrink-0 space-x-4">
              <button onClick={acceptCookies} className="bg-white text-navy-900 px-6 py-2 rounded-md font-semibold text-sm hover:bg-gray-100 transition-colors">
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;`,

  'components/ui/StatCounter.tsx': `import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ end, label, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-gray-600 font-medium uppercase tracking-wider text-sm">{label}</div>
    </div>
  );
};

export default StatCounter;`,

  'pages/Home.tsx': `import React from 'react';
import { Helmet } from 'react-router-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCounter from '../components/ui/StatCounter';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>XenFirm Technologies | IT Services & Digital Products</title>
        <meta name="description" content="Production-grade IT solutions for growing businesses in India, UK, UAE, and Australia." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-6"
            >
              Enterprise-grade digital solutions for <span className="text-accent-500">growing businesses.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            >
              We design, build, and scale custom software, web applications, and AI integrations for forward-thinking companies across the globe.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link to="/work" className="bg-accent-600 hover:bg-accent-500 text-navy-900 px-8 py-4 rounded-md font-bold text-center transition-colors">
                View Our Work
              </Link>
              <Link to="/contact" className="border border-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-md font-bold text-center transition-colors">
                Let's Talk
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logo Strip */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* Replace with real logos */}
            <div className="text-xl font-bold font-heading">TechCorp</div>
            <div className="text-xl font-bold font-heading">HealthPlus</div>
            <div className="text-xl font-bold font-heading">GlobalRetail</div>
            <div className="text-xl font-bold font-heading">FinServe</div>
            <div className="text-xl font-bold font-heading">EduTech Inc.</div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">Our Core Expertise</h2>
            <p className="text-gray-600 text-lg">We deliver end-to-end technical solutions to solve complex business challenges.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: 'Custom Websites', desc: 'High-performance, SEO-optimized marketing sites.' },
              { icon: Code, title: 'Web Apps & SaaS', desc: 'Complex, scalable web applications built on modern stacks.' },
              { icon: Database, title: 'Integrations & APIs', desc: 'Connecting your fragmented systems seamlessly.' },
              { icon: Smartphone, title: 'AI & Automation', desc: 'Leveraging LLMs and automation to reduce overhead.' }
            ].map((service, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-gray-50 hover:shadow-xl transition-shadow border border-gray-100">
                <service.icon className="w-12 h-12 text-accent-600 mb-6" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-navy-900 font-semibold hover:text-accent-600 transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter end={50} suffix="+" label="Projects Delivered" />
            <StatCounter end={4} label="Countries Served" />
            <StatCounter end={99} suffix="%" label="Client Retention" />
            <StatCounter end={10} suffix="M+" label="Lines of Code" />
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to accelerate your digital transformation?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Let's discuss how our engineering team can build the perfect solution for your business.</p>
          <Link to="/contact" className="inline-block bg-accent-600 hover:bg-accent-500 text-navy-900 px-8 py-4 rounded-md font-bold transition-colors">
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;`,

  'pages/About.tsx': `import React from 'react';
import { Helmet } from 'react-router-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | XenFirm Technologies</title>
      </Helmet>
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-heading font-bold text-navy-900 mb-8">About XenFirm</h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-12">
          We are a global IT services and digital product company on a mission to build robust, scalable solutions for the world's most ambitious businesses.
        </p>
        
        {/* Leadership placeholder */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-bold mb-8 text-navy-900">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="h-64 bg-gray-300 w-full object-cover"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-accent-600 font-medium mb-3">Co-Founder & CEO</p>
                  <p className="text-gray-600 text-sm">Visionary leader with 15+ years in enterprise IT architecture.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;`,

  'pages/services/Services.tsx': `import React from 'react';
import { Helmet } from 'react-router-helmet-async';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | XenFirm Technologies</title>
      </Helmet>
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-heading font-bold text-navy-900 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { id: 'custom-websites', title: 'Custom Websites' },
            { id: 'web-apps-saas', title: 'Web Apps & SaaS' },
            { id: 'ai-automation', title: 'AI & Automation' },
            { id: 'integrations-apis', title: 'Integrations & APIs' },
            { id: 'ongoing-support', title: 'Ongoing Support' }
          ].map(s => (
            <Link key={s.id} to={\`/services/\${s.id}\`} className="block p-8 border border-gray-200 rounded-xl hover:border-accent-500 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold mb-3">{s.title}</h2>
              <p className="text-gray-600">Enterprise-grade solutions tailored to your business needs.</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;`,

  'pages/services/ServiceDetail.tsx': `import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-router-helmet-async';

const ServiceDetail = () => {
  const { slug } = useParams();
  const title = slug ? slug.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase()) : 'Service';

  return (
    <>
      <Helmet>
        <title>{title} | XenFirm Services</title>
      </Helmet>
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-heading font-bold text-navy-900 mb-8">{title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl">Comprehensive {title.toLowerCase()} tailored to your enterprise requirements.</p>
      </div>
    </>
  );
};

export default ServiceDetail;`,

  'pages/industries/Industries.tsx': `import React from 'react';
import { Helmet } from 'react-router-helmet-async';

const Industries = () => {
  return (
    <>
      <Helmet>
        <title>Industries | XenFirm Technologies</title>
      </Helmet>
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-heading font-bold text-navy-900 mb-8">Industries We Serve</h1>
        <p className="text-xl text-gray-600 max-w-3xl">We deliver specialized IT solutions across various sectors.</p>
      </div>
    </>
  );
};

export default Industries;`,

  'pages/industries/IndustryDetail.tsx': `import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-router-helmet-async';

const IndustryDetail = () => {
  const { slug } = useParams();
  return (
    <>
      <Helmet>
        <title>Industry Detail | XenFirm</title>
      </Helmet>
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-heading font-bold text-navy-900 mb-8">Industry: {slug}</h1>
      </div>
    </>
  );
};

export default IndustryDetail;`,

  'pages/work/Work.tsx': `import React, { useState } from 'react';
import { Helmet } from 'react-router-helmet-async';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';

const Work = () => {
  const [filter, setFilter] = useState('All');
  const industries = ['All', ...new Set(caseStudies.map(cs => cs.industry))];

  const filtered = filter === 'All' ? caseStudies : caseStudies.filter(cs => cs.industry === filter);

  return (
    <>
      <Helmet>
        <title>Our Work | XenFirm Technologies</title>
      </Helmet>
      <div className="bg-navy-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-6">Our Work</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Explore our portfolio of successful digital transformations.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex space-x-4 mb-12 overflow-x-auto pb-4">
          {industries.map(ind => (
            <button 
              key={ind}
              onClick={() => setFilter(ind)}
              className={\`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-colors \${filter === ind ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}\`}
            >
              {ind}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map(cs => (
            <Link key={cs.slug} to={\`/work/\${cs.slug}\`} className="group block">
              <div className="rounded-xl overflow-hidden mb-4 relative aspect-[4/3]">
                <img src={cs.heroImage} alt={cs.clientName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors">{cs.clientName}</h3>
              <p className="text-gray-600 mb-3">{cs.summary}</p>
              <div className="flex space-x-2">
                <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{cs.industry}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;`,

  'pages/work/CaseStudyDetail.tsx': `import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-router-helmet-async';
import { caseStudies } from '../../data/caseStudies';
import { ArrowLeft } from 'lucide-react';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = caseStudies.find(cs => cs.slug === slug);

  if (!study) return <Navigate to="/404" />;

  return (
    <>
      <Helmet>
        <title>{study.clientName} Case Study | XenFirm</title>
      </Helmet>
      
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px]">
        <img src={study.heroImage} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-900 bg-opacity-70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link to="/work" className="inline-flex items-center text-white mb-8 hover:text-accent-500 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to all work
            </Link>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">{study.clientName}</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">{study.summary}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{study.challenge}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">Our Approach</h2>
              <div className="space-y-8">
                {study.approach.map((step, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center font-bold">{idx + 1}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div>
            <div className="bg-gray-50 p-8 rounded-xl sticky top-24">
              <h3 className="font-bold text-navy-900 mb-4">Project Overview</h3>
              <div className="space-y-4 mb-8">
                <div>
                  <div className="text-sm text-gray-500 font-semibold uppercase">Industry</div>
                  <div className="font-medium">{study.industry}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-semibold uppercase">Region</div>
                  <div className="font-medium">{study.region}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-semibold uppercase">Timeline</div>
                  <div className="font-medium">{study.timeline}</div>
                </div>
              </div>
              
              <h3 className="font-bold text-navy-900 mb-4">Impact</h3>
              <div className="space-y-4 mb-8">
                {study.results.map((res, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-heading font-bold text-accent-600">{res.metric}</div>
                    <div className="text-sm text-gray-600 font-medium">{res.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetail;`,

  'pages/insights/Insights.tsx': `import React from 'react';
import { Helmet } from 'react-router-helmet-async';

const Insights = () => {
  return (
    <>
      <Helmet>
        <title>Insights | XenFirm Technologies</title>
      </Helmet>
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-heading font-bold text-navy-900 mb-8">Insights & News</h1>
      </div>
    </>
  );
};

export default Insights;`,

  'pages/insights/InsightDetail.tsx': `import React from 'react';
export default () => <div>Insight Detail</div>;`,

  'pages/careers/Careers.tsx': `import React from 'react';
import { Helmet } from 'react-router-helmet-async';

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | XenFirm Technologies</title>
      </Helmet>
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-heading font-bold text-navy-900 mb-8">Careers at XenFirm</h1>
        <p className="text-xl text-gray-600 max-w-3xl">Join our global team of engineers and designers.</p>
      </div>
    </>
  );
};

export default Careers;`,

  'pages/careers/CareerDetail.tsx': `import React from 'react';
export default () => <div>Career Detail</div>;`,

  'pages/Pricing.tsx': `import React from 'react';
import { Helmet } from 'react-router-helmet-async';

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | XenFirm Technologies</title>
      </Helmet>
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-heading font-bold text-navy-900 mb-8">Transparent Pricing</h1>
      </div>
    </>
  );
};

export default Pricing;`,

  'pages/Contact.tsx': `import React, { useState } from 'react';
import { Helmet } from 'react-router-helmet-async';
import { useForm } from 'react-form-hook'; // stub
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | XenFirm Technologies</title>
      </Helmet>
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-heading font-bold text-navy-900 mb-6">Let's build something great.</h1>
            <p className="text-xl text-gray-600 mb-12">Fill out the form and our team will get back to you within 24 hours to discuss your project.</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-accent-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-navy-900 text-lg">Email</h3>
                  <a href="mailto:hello@xenfirm.com" className="text-gray-600 hover:text-accent-600">hello@xenfirm.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="w-full bg-navy-900 text-white font-bold py-4 rounded-md hover:bg-navy-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;`,

  'pages/NotFound.tsx': `import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-router-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | XenFirm</title>
      </Helmet>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-9xl font-heading font-black text-gray-200 mb-6">404</h1>
        <h2 className="text-3xl font-bold text-navy-900 mb-4">Page not found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="inline-block bg-navy-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-navy-800 transition-colors">
          Return Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;`,

  'pages/legal/PrivacyPolicy.tsx': `import React from 'react';
export default () => <div className="container mx-auto py-24 px-4"><h1 className="text-4xl font-bold mb-8">Privacy Policy</h1></div>;`,
  'pages/legal/TermsOfService.tsx': `import React from 'react';
export default () => <div className="container mx-auto py-24 px-4"><h1 className="text-4xl font-bold mb-8">Terms of Service</h1></div>;`,
  'pages/legal/CookiePolicy.tsx': `import React from 'react';
export default () => <div className="container mx-auto py-24 px-4"><h1 className="text-4xl font-bold mb-8">Cookie Policy</h1></div>;`
};

Object.entries(filesToCreate).forEach(([filePath, content]) => {
  const fullPath = path.join(srcDir, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content);
  console.log('Created:', fullPath);
});
