import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Globe2,
  FileCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';
import VelunoLogo from '../ui/VelunoLogo';

// Exported SVG Icons for social channels so they are ready for use whenever real URLs are configured
export const XIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M7.86 18.5V10.13H5.07v8.37h2.79z" />
  </svg>
);

export const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Verified social profile links configuration.
// In accordance with enterprise governance, social links are only rendered if a verified handle exists.
const VERIFIED_SOCIAL_LINKS: { name: string; href: string; icon: React.FC<{ className?: string }> }[] = [
  // Uncomment and populate once official corporate profiles are registered:
  // { name: 'LinkedIn', href: 'https://www.linkedin.com/company/veluno-softtech', icon: LinkedinIcon },
  // { name: 'X', href: 'https://x.com/velunosofttech', icon: XIcon },
  // { name: 'GitHub', href: 'https://github.com/velunosofttech', icon: GithubIcon },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white pt-16 pb-20 sm:pb-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Column 1: Brand & Identity */}
          <div>
            <div className="mb-4">
              <VelunoLogo variant="white" size="md" showTagline={true} />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-xs font-light">
              We build digital solutions that move businesses forward. From custom software and mobile applications to high-performing web platforms and AI automation.
            </p>

            {/* Social Links (Rendered only when genuine verified URLs are configured) */}
            {VERIFIED_SOCIAL_LINKS.length > 0 ? (
              <div className="flex items-center space-x-2.5">
                {VERIFIED_SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#14B8A6] hover:text-[#0B1F3A] text-white flex items-center justify-center transition-colors"
                      aria-label={item.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="text-[11px] text-slate-500 font-mono">
                Official handles: In process of verification
              </div>
            )}
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white mb-5 font-heading uppercase tracking-wider">
              Navigation
            </h4>
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
                <Link to="/blog" className="hover:text-[#14B8A6] transition-colors flex items-center gap-1.5">
                  <span className="text-[#14B8A6] font-bold">›</span> Engineering Blog
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
            <h4 className="text-xs font-bold text-white mb-5 font-heading uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/services/website-development" className="hover:text-[#14B8A6] transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services/web-application-development" className="hover:text-[#14B8A6] transition-colors">
                  Web Application Development
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="hover:text-[#14B8A6] transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/ecommerce-development" className="hover:text-[#14B8A6] transition-colors">
                  E-Commerce Development
                </Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design" className="hover:text-[#14B8A6] transition-colors">
                  UI/UX Design & Branding
                </Link>
              </li>
              <li>
                <Link to="/services/custom-software-development" className="hover:text-[#14B8A6] transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/crm-erp-development" className="hover:text-[#14B8A6] transition-colors">
                  CRM & ERP Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/ai-automation" className="hover:text-[#14B8A6] transition-colors">
                  AI & Business Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Engagement */}
          <div>
            <h4 className="text-xs font-bold text-white mb-5 font-heading uppercase tracking-wider">
              Contact & Intake
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Vivekananda Nagar, Thoraipakkam, Chennai, Tamil Nadu 600097</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <span>Response SLA: Under 4 Hours</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <a href="tel:+918428392629" className="hover:text-[#14B8A6] transition-colors font-medium">
                  +91 84283 92629
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <a href="mailto:contact@velunosofttech.com" className="hover:text-[#14B8A6] transition-colors">
                  contact@velunosofttech.com
                </a>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="btn-teal w-full text-center py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider block shadow-sm"
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
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/security" className="hover:text-white transition-colors">Security & Trust</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
