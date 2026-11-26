import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Globe2,
  Mail,
  Cpu,
  Layers,
  Cloud,
  ShoppingBag,
  Users,
  Landmark,
  Truck,
  HeartPulse,
  Wheat,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import VelunoLogo from '../ui/VelunoLogo';
import CommandPalette from '../ui/CommandPalette';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'solutions' | 'industries' | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  // Close menus on route navigation
  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Handle outside click & escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      } else if (event.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
    >
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
            <a
              href="mailto:contact@velunosofttech.com"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
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
        <Link to="/" className="flex items-center group" aria-label="Veluno Softtech Home">
          <VelunoLogo variant="dark" size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7" aria-label="Main Navigation">
          <Link
            to="/"
            className={`text-sm font-semibold transition-colors py-1 ${
              isActive('/')
                ? 'text-[#0B1F3A] font-bold border-b-2 border-[#14B8A6]'
                : 'text-slate-600 hover:text-[#0B1F3A]'
            }`}
          >
            Home
          </Link>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('solutions')}
            onMouseLeave={() => setOpenDropdown((cur) => (cur === 'solutions' ? null : cur))}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openDropdown === 'solutions'}
              onClick={() => setOpenDropdown((cur) => (cur === 'solutions' ? null : 'solutions'))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpenDropdown((cur) => (cur === 'solutions' ? null : 'solutions'));
                }
              }}
              className={`inline-flex items-center text-sm font-semibold transition-colors py-1 cursor-pointer ${
                location.pathname.startsWith('/services')
                  ? 'text-[#0B1F3A] font-bold border-b-2 border-[#14B8A6]'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`ml-1 w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  openDropdown === 'solutions' ? 'rotate-180 text-[#0B1F3A]' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {openDropdown === 'solutions' && (
                <div className="absolute left-0 top-full pt-2 w-80 z-50">
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    role="menu"
                    className="bg-white shadow-2xl rounded-xl p-3 border border-slate-200"
                  >
                    <Link
                      to="/services/veluno-products"
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[#0B1F3A] text-xs font-bold">Conversational Voice AI</div>
                        <div className="text-[11px] text-slate-500 font-normal">Sub-second speech agents & telephony</div>
                      </div>
                    </Link>

                    <Link
                      to="/services/veluno-products"
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#14B8A6]/10 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[#0B1F3A] text-xs font-bold">Full-Stack SaaS Engineering</div>
                        <div className="text-[11px] text-slate-500 font-normal">Multi-tenant platforms & billing engines</div>
                      </div>
                    </Link>

                    <Link
                      to="/services/veluno-systems"
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Cloud className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[#0B1F3A] text-xs font-bold">Distributed Cloud & APIs</div>
                        <div className="text-[11px] text-slate-500 font-normal">Microservices, event queues & webhooks</div>
                      </div>
                    </Link>

                    <Link
                      to="/services/veluno-web"
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[#0B1F3A] text-xs font-bold">Headless E-Commerce</div>
                        <div className="text-[11px] text-slate-500 font-normal">Multi-warehouse stock reconciliation</div>
                      </div>
                    </Link>

                    <Link
                      to="/services/dedicated-team"
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[#0B1F3A] text-xs font-bold">Dedicated Engineering Squads</div>
                        <div className="text-[11px] text-slate-500 font-normal">Staff architects & full-stack pods</div>
                      </div>
                    </Link>

                    <div className="border-t border-slate-100 my-1"></div>

                    <Link
                      to="/services"
                      onClick={() => setOpenDropdown(null)}
                      className="block p-2 text-xs font-bold text-[#2563EB] hover:bg-slate-50 rounded-lg text-center"
                    >
                      All 34+ SME & Enterprise Solutions →
                    </Link>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/work"
            className={`text-sm font-semibold transition-colors py-1 ${
              isActive('/work')
                ? 'border-b-2 border-[#14B8A6] text-[#0B1F3A] font-bold'
                : 'text-slate-600 hover:text-[#0B1F3A]'
            }`}
          >
            Case Studies
          </Link>

          <Link
            to="/engineering"
            className={`text-sm font-semibold transition-colors py-1 ${
              isActive('/engineering') || isActive('/architecture')
                ? 'border-b-2 border-[#14B8A6] text-[#0B1F3A] font-bold'
                : 'text-slate-600 hover:text-[#0B1F3A]'
            }`}
          >
            Architecture
          </Link>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('industries')}
            onMouseLeave={() => setOpenDropdown((cur) => (cur === 'industries' ? null : cur))}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openDropdown === 'industries'}
              onClick={() => setOpenDropdown((cur) => (cur === 'industries' ? null : 'industries'))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpenDropdown((cur) => (cur === 'industries' ? null : 'industries'));
                }
              }}
              className={`inline-flex items-center text-sm font-semibold transition-colors py-1 cursor-pointer ${
                location.pathname.startsWith('/industries')
                  ? 'text-[#0B1F3A] font-bold border-b-2 border-[#14B8A6]'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              <span>Industries</span>
              <ChevronDown
                className={`ml-1 w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  openDropdown === 'industries' ? 'rotate-180 text-[#0B1F3A]' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {openDropdown === 'industries' && (
                <div className="absolute left-0 top-full pt-2 w-72 z-50">
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    role="menu"
                    className="bg-white shadow-2xl rounded-xl p-3 border border-slate-200"
                  >
                    <Link
                      to="/industries/fintech"
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors"
                    >
                      <Landmark className="w-4 h-4 text-[#2563EB]" />
                      <span>FinTech & Digital Invoicing</span>
                    </Link>
                    <Link
                      to="/industries/logistics"
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors"
                    >
                      <Truck className="w-4 h-4 text-[#14B8A6]" />
                      <span>Logistics & Fleet Telematics</span>
                    </Link>
                    <Link
                      to="/industries/e-commerce"
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors"
                    >
                      <ShoppingBag className="w-4 h-4 text-amber-500" />
                      <span>Retail & Omnichannel Commerce</span>
                    </Link>
                    <Link
                      to="/industries/healthcare"
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors"
                    >
                      <HeartPulse className="w-4 h-4 text-rose-500" />
                      <span>Healthcare & Compliance Systems</span>
                    </Link>
                    <Link
                      to="/industries/agriculture"
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors"
                    >
                      <Wheat className="w-4 h-4 text-emerald-600" />
                      <span>AgriTech & Supply Chain</span>
                    </Link>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/about"
            className={`text-sm font-semibold transition-colors py-1 ${
              isActive('/about')
                ? 'border-b-2 border-[#14B8A6] text-[#0B1F3A] font-bold'
                : 'text-slate-600 hover:text-[#0B1F3A]'
            }`}
          >
            Company
          </Link>

          <Link
            to="/security"
            className={`text-sm font-semibold transition-colors py-1 ${
              isActive('/security')
                ? 'border-b-2 border-[#14B8A6] text-[#0B1F3A] font-bold'
                : 'text-slate-600 hover:text-[#0B1F3A]'
            }`}
          >
            Security
          </Link>

          <Link
            to="/blog"
            className={`text-sm font-semibold transition-colors py-1 ${
              isActive('/blog') || isActive('/insights')
                ? 'border-b-2 border-[#14B8A6] text-[#0B1F3A] font-bold'
                : 'text-slate-600 hover:text-[#0B1F3A]'
            }`}
          >
            Blog
          </Link>
        </nav>

        {/* Search & Right CTA Button */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            type="button"
            onClick={() => setCommandPaletteOpen(true)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xs bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-mono transition-colors border border-slate-200 cursor-pointer"
            title="Search specifications, services & case studies (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-500">Search...</span>
            <kbd className="text-[10px] bg-white border border-slate-300 rounded-xs px-1.5 py-0.5 text-slate-500 font-bold">
              ⌘K
            </kbd>
          </button>

          <Link
            to="/contact"
            className="btn-primary text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xs shadow-xs"
          >
            Schedule Scoping
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-1">
          <button
            type="button"
            onClick={() => setCommandPaletteOpen(true)}
            className="p-2 text-slate-600 hover:text-[#0B1F3A]"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-800 hover:text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] rounded-xs"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
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
            className="lg:hidden bg-white border-t border-slate-200 shadow-2xl overflow-y-auto max-h-[calc(100vh-5rem)] px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold ${isActive('/') ? 'text-[#2563EB]' : 'text-slate-800'}`}
              >
                Home
              </Link>

              {/* Mobile Solutions Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="flex items-center justify-between w-full text-base font-bold text-slate-800"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileSolutionsOpen && (
                  <div className="mt-2 pl-4 space-y-2 border-l-2 border-[#14B8A6]">
                    <Link to="/services/veluno-products" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600 hover:text-[#0B1F3A]">Conversational Voice AI</Link>
                    <Link to="/services/veluno-products" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600 hover:text-[#0B1F3A]">Full-Stack SaaS</Link>
                    <Link to="/services/veluno-systems" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600 hover:text-[#0B1F3A]">Distributed Cloud & APIs</Link>
                    <Link to="/services/veluno-web" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600 hover:text-[#0B1F3A]">Headless Commerce</Link>
                    <Link to="/services/dedicated-team" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600 hover:text-[#0B1F3A]">Dedicated Pods</Link>
                    <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-[#2563EB]">All Solutions →</Link>
                  </div>
                )}
              </div>

              <Link
                to="/work"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold ${isActive('/work') ? 'text-[#2563EB]' : 'text-slate-800'}`}
              >
                Case Studies
              </Link>

              <Link
                to="/engineering"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold ${isActive('/engineering') ? 'text-[#2563EB]' : 'text-slate-800'}`}
              >
                System Architecture
              </Link>

              {/* Mobile Industries Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="flex items-center justify-between w-full text-base font-bold text-slate-800"
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileIndustriesOpen && (
                  <div className="mt-2 pl-4 space-y-2 border-l-2 border-[#14B8A6]">
                    <Link to="/industries/fintech" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600 hover:text-[#0B1F3A]">FinTech & Digital Invoicing</Link>
                    <Link to="/industries/logistics" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600 hover:text-[#0B1F3A]">Logistics & Fleet Telematics</Link>
                    <Link to="/industries/e-commerce" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600 hover:text-[#0B1F3A]">Retail & Omnichannel Commerce</Link>
                    <Link to="/industries/healthcare" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600 hover:text-[#0B1F3A]">Healthcare & Compliance</Link>
                    <Link to="/industries/agriculture" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-600 hover:text-[#0B1F3A]">AgriTech & Supply Chain</Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold ${isActive('/about') ? 'text-[#2563EB]' : 'text-slate-800'}`}
              >
                Company
              </Link>

              <Link
                to="/security"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold ${isActive('/security') ? 'text-[#2563EB]' : 'text-slate-800'}`}
              >
                Security & Trust
              </Link>

              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold ${isActive('/blog') || isActive('/insights') ? 'text-[#2563EB]' : 'text-slate-800'}`}
              >
                Blog & Insights
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold ${isActive('/contact') ? 'text-[#2563EB]' : 'text-slate-800'}`}
              >
                Contact & Scoping
              </Link>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full text-center block text-sm font-bold uppercase tracking-wider py-3 rounded-lg shadow-sm"
                >
                  Schedule Scoping Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Command Palette */}
      <CommandPalette 
        isOpen={commandPaletteOpen} 
        onClose={() => setCommandPaletteOpen(false)} 
      />
    </header>
  );
};

export default Header;
