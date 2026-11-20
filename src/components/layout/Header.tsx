import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Globe2,
  Mail,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import VelunoLogo from '../ui/VelunoLogo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      
      {/* Top Utility Ribbon (MNC Global Footprint) */}
      <div className="hidden lg:block bg-[#0B1F3A] text-slate-300 py-1.5 px-4 md:px-8 text-[11px] font-mono border-b border-slate-800">
        <div className="container mx-auto max-w-7xl flex justify-between items-center">
          <div className="flex items-center space-x-5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Globe2 className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>GLOBAL DELIVERY: APAC · AMERICAS · EMEA</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>ISO 27001 & SOC 2 READY PRACTICES</span>
            </span>
          </div>

          <div className="flex items-center space-x-5 text-slate-300">
            <a href="mailto:contact@velunosofttech.com" className="hover:text-white transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3 text-[#14B8A6]" />
              <span>contact@velunosofttech.com</span>
            </a>
            <span className="text-slate-600">|</span>
            <Link to="/contact" className="text-[#14B8A6] font-bold hover:underline">
              Direct Architect Dispatch →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl h-20 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group">
          <VelunoLogo variant="dark" size="md" />
        </Link>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          <Link 
            to="/" 
            className={`text-sm font-semibold transition-colors ${
              isActive('/') ? 'text-[#0B1F3A] font-bold border-b-2 border-[#14B8A6] pb-1' : 'text-slate-600 hover:text-[#0B1F3A]'
            }`}
          >
            Home
          </Link>

          {/* Solutions / Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link 
              to="/services" 
              className={`flex items-center text-sm font-semibold transition-colors ${
                location.pathname.startsWith('/services') ? 'text-[#0B1F3A] font-bold' : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              <span className={location.pathname.startsWith('/services') ? 'border-b-2 border-[#14B8A6] pb-1' : ''}>
                Solutions
              </span>
              <ChevronDown className="ml-1 w-3.5 h-3.5 text-slate-400" />
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 mt-2 w-72 bg-white shadow-xl rounded-xl p-3 border border-slate-200"
                >
                  <Link to="/services/veluno-products" className="block p-2.5 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 hover:text-[#0B1F3A]">
                    <div className="text-[#0B1F3A] font-bold">Conversational Voice AI</div>
                    <div className="text-[11px] text-slate-500 font-normal">Sub-second speech agents & telephony</div>
                  </Link>
                  <Link to="/services/veluno-products" className="block p-2.5 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 hover:text-[#0B1F3A]">
                    <div className="text-[#0B1F3A] font-bold">Full-Stack SaaS Engineering</div>
                    <div className="text-[11px] text-slate-500 font-normal">Multi-tenant platforms & billing engines</div>
                  </Link>
                  <Link to="/services/veluno-systems" className="block p-2.5 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 hover:text-[#0B1F3A]">
                    <div className="text-[#0B1F3A] font-bold">Distributed Cloud & APIs</div>
                    <div className="text-[11px] text-slate-500 font-normal">Microservices, event queues & webhooks</div>
                  </Link>
                  <Link to="/services/veluno-web" className="block p-2.5 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 hover:text-[#0B1F3A]">
                    <div className="text-[#0B1F3A] font-bold">Headless E-Commerce</div>
                    <div className="text-[11px] text-slate-500 font-normal">Multi-warehouse stock reconciliation</div>
                  </Link>
                  <Link to="/services/dedicated-team" className="block p-2.5 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 hover:text-[#0B1F3A]">
                    <div className="text-[#0B1F3A] font-bold">Dedicated Engineering Squads</div>
                    <div className="text-[11px] text-slate-500 font-normal">Staff architects & full-stack pods</div>
                  </Link>
                  <div className="border-t border-slate-100 my-1"></div>
                  <Link to="/services" className="block p-2 text-xs font-bold text-[#2563EB] hover:bg-slate-50 rounded-lg">
                    All Enterprise Capabilities →
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/work" 
            className={`text-sm font-semibold transition-colors ${
              isActive('/work') ? 'border-b-2 border-[#14B8A6] pb-1 text-[#0B1F3A] font-bold' : 'text-slate-600 hover:text-[#0B1F3A]'
            }`}
          >
            Case Studies
          </Link>

          <Link 
            to="/engineering" 
            className={`text-sm font-semibold transition-colors ${
              isActive('/engineering') || isActive('/architecture') ? 'border-b-2 border-[#14B8A6] pb-1 text-[#0B1F3A] font-bold' : 'text-slate-600 hover:text-[#0B1F3A]'
            }`}
          >
            Architecture
          </Link>

          {/* Industries Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <div 
              className={`flex items-center text-sm font-semibold cursor-pointer transition-colors ${
                location.pathname.startsWith('/industries') ? 'text-[#0B1F3A] font-bold' : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              <span>Industries</span>
              <ChevronDown className="ml-1 w-3.5 h-3.5 text-slate-400" />
            </div>

            <AnimatePresence>
              {industriesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-xl p-3 border border-slate-200"
                >
                  <Link to="/industries/fintech" className="block p-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800">
                    FinTech & Digital Invoicing
                  </Link>
                  <Link to="/industries/logistics" className="block p-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800">
                    Logistics & Fleet Telematics
                  </Link>
                  <Link to="/industries/ecommerce" className="block p-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800">
                    Retail & Omnichannel Commerce
                  </Link>
                  <Link to="/industries/healthcare" className="block p-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800">
                    Healthcare & Compliance Systems
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/about" 
            className={`text-sm font-semibold transition-colors ${
              isActive('/about') ? 'border-b-2 border-[#14B8A6] pb-1 text-[#0B1F3A] font-bold' : 'text-slate-600 hover:text-[#0B1F3A]'
            }`}
          >
            Company
          </Link>

          <Link 
            to="/security" 
            className={`text-sm font-semibold transition-colors ${
              isActive('/security') ? 'border-b-2 border-[#14B8A6] pb-1 text-[#0B1F3A] font-bold' : 'text-slate-600 hover:text-[#0B1F3A]'
            }`}
          >
            Security
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link 
            to="/contact" 
            className="btn-primary text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg shadow-xs"
          >
            Schedule Scoping
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-800 hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800">
                Home
              </Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800">
                Solutions
              </Link>
              <div className="pl-4 space-y-2 border-l-2 border-[#14B8A6]">
                <Link to="/services/veluno-products" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600">Conversational Voice AI</Link>
                <Link to="/services/veluno-products" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600">Full-Stack SaaS</Link>
                <Link to="/services/veluno-systems" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600">Distributed Cloud & APIs</Link>
                <Link to="/services/veluno-web" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600">Headless Commerce</Link>
                <Link to="/services/dedicated-team" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600">Dedicated Pods</Link>
              </div>
              <Link to="/work" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800">
                Case Studies
              </Link>
              <Link to="/engineering" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800">
                System Architecture
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800">
                Company
              </Link>
              <Link to="/security" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800">
                Security & Trust
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800">
                Contact & Scoping
              </Link>
              
              <div className="pt-4 border-t border-slate-100">
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="btn-primary w-full text-center block text-sm font-bold uppercase tracking-wider py-3 rounded-lg"
                >
                  Schedule Scoping Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;