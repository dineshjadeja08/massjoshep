import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ShieldCheck, Globe2, FileCheck, CheckCircle2 } from 'lucide-react';
import VelunoLogo from '../ui/VelunoLogo';

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Column 1: Brand & Socials */}
          <div>
            <div className="mb-4">
              <VelunoLogo variant="white" size="md" showTagline={true} />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-xs font-light">
              Veluno Softtech is an enterprise software engineering company. We engineer production conversational AI systems, distributed cloud backends, and digital commerce architectures.
            </p>
            <div className="flex items-center space-x-2.5">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#14B8A6] hover:text-[#0B1F3A] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#14B8A6] hover:text-[#0B1F3A] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="X / Twitter"
              >
                𝕏
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#14B8A6] hover:text-[#0B1F3A] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="GitHub"
              >
                git
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 font-heading uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <span className="text-[#14B8A6] font-bold">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <span className="text-[#14B8A6] font-bold">›</span> Solutions & Practice
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <span className="text-[#14B8A6] font-bold">›</span> 7 Case Studies
                </Link>
              </li>
              <li>
                <Link to="/engineering" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <span className="text-[#14B8A6] font-bold">›</span> System Architecture
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <span className="text-[#14B8A6] font-bold">›</span> Company Overview
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <span className="text-[#14B8A6] font-bold">›</span> Contact & Technical Scoping
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 font-heading uppercase tracking-wider text-xs">Capabilities</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/services/veluno-products" className="hover:text-[#14B8A6] transition-colors">
                  Conversational Voice AI
                </Link>
              </li>
              <li>
                <Link to="/services/veluno-products" className="hover:text-[#14B8A6] transition-colors">
                  SaaS Platform Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/veluno-systems" className="hover:text-[#14B8A6] transition-colors">
                  Distributed Cloud Microservices
                </Link>
              </li>
              <li>
                <Link to="/services/veluno-web" className="hover:text-[#14B8A6] transition-colors">
                  Headless E-Commerce
                </Link>
              </li>
              <li>
                <Link to="/services/dedicated-team" className="hover:text-[#14B8A6] transition-colors">
                  Dedicated Engineering Squads
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-[#14B8A6] transition-colors">
                  Zero-Trust Cloud Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Engagement */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 font-heading uppercase tracking-wider text-xs">Global Contact</h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                <span>Veluno Softtech, Global Delivery Hubs (India HQ · Multi-Timezone Coverage)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <a href="mailto:contact@velunosofttech.com" className="hover:text-[#14B8A6] transition-colors">
                  contact@velunosofttech.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <span>Multi-Regional Client Pods</span>
              </div>
              <div className="pt-2">
                <Link 
                  to="/contact" 
                  className="btn-teal w-full text-center py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider block"
                >
                  Schedule Technical Call
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Global MNC Governance & Compliance Strip */}
        <div className="py-6 border-t border-slate-800/80 my-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#14B8A6] shrink-0" />
              <span>ISO/IEC 27001 ALIGNED</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#14B8A6] shrink-0" />
              <span>SOC 2 TYPE II READY</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
              <span>GDPR DATA GOVERNANCE</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
              <span>99.99% PRODUCTION SLA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Veluno Softtech. All rights reserved. 100% Client Intellectual Property & Codebase Ownership.
          </div>
          <div className="flex items-center space-x-6 text-xs font-mono">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/security" className="hover:text-white transition-colors">Security & Trust</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;