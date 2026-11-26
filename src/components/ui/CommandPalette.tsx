import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  X, 
  ArrowRight, 
  Layers, 
  Briefcase, 
  Building2, 
  ShieldCheck, 
  Cpu, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import { industries } from '../../data/industries';
import { servicesData } from '../../data/services';

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Case Studies' | 'Services & Solutions' | 'Industry Sectors' | 'Company & Governance';
  path: string;
  badge?: string;
}

const STATIC_COMPANY_ITEMS: SearchItem[] = [
  { id: 'eng', title: 'System Architecture & Blueprints', subtitle: 'Event-driven queues, microservices, and high-concurrency patterns', category: 'Company & Governance', path: '/engineering', badge: 'Technical' },
  { id: 'sec', title: 'Security & Compliance Architecture', subtitle: 'ISO 27001, SOC 2 Type II, zero-trust, and data encryption', category: 'Company & Governance', path: '/security', badge: 'Security' },
  { id: 'trust', title: 'Trust Center & Verified Governance', subtitle: 'Verified client protocols, mutual NDA standards, and auditability', category: 'Company & Governance', path: '/trust', badge: 'Trust' },
  { id: 'about', title: 'About Veluno Softtech', subtitle: 'Headquartered in Chennai, India — engineering digital systems worldwide', category: 'Company & Governance', path: '/about', badge: 'Company' },
  { id: 'contact', title: 'Contact & Project Scoping Intake', subtitle: 'Submit project brief, calculate architecture timeline, or WhatsApp chat', category: 'Company & Governance', path: '/contact', badge: 'Scoping' },
  { id: 'ind-hub', title: 'All Industry Sectors Hub', subtitle: 'Compare cross-sector compliance, SLAs, and technical architectures', category: 'Industry Sectors', path: '/industries', badge: 'Overview' }
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<Props> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Combine all searchable items
  const allItems: SearchItem[] = [
    // Case Studies
    ...caseStudies.map(cs => ({
      id: `cs-${cs.slug}`,
      title: cs.clientName,
      subtitle: cs.summary,
      category: 'Case Studies' as const,
      path: `/work/${cs.slug}`,
      badge: cs.status
    })),
    // Services
    ...servicesData.map(s => ({
      id: `svc-${s.id}`,
      title: s.name,
      subtitle: s.tagline,
      category: 'Services & Solutions' as const,
      path: `/services/${s.id}`,
      badge: s.pillar
    })),
    // Industries
    ...industries.map(ind => ({
      id: `ind-${ind.slug}`,
      title: ind.title,
      subtitle: ind.heroSubtitle,
      category: 'Industry Sectors' as const,
      path: `/industries/${ind.slug}`,
      badge: ind.category
    })),
    ...STATIC_COMPANY_ITEMS
  ];

  const filteredItems = query.trim() === ''
    ? allItems.slice(0, 8)
    : allItems.filter(item => {
        const q = query.toLowerCase();
        return item.title.toLowerCase().includes(q) || 
               item.subtitle.toLowerCase().includes(q) ||
               item.category.toLowerCase().includes(q) ||
               (item.badge && item.badge.toLowerCase().includes(q));
      }).slice(0, 10);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          onClose(); // Handled by toggle in parent
        }
        return;
      }

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + (filteredItems.length || 1)) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          navigate(filteredItems[selectedIndex].path);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, navigate, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      
      {/* Click outside to close backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#0B1F3A] border border-slate-700 rounded-xs shadow-2xl overflow-hidden z-10 text-white">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-[#08172b]">
          <Search className="w-5 h-5 text-[#14B8A6] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search services, industries, case studies, blueprints..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
          />
          {query ? (
            <button 
              type="button" 
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-xs bg-slate-800 text-slate-400 border border-slate-700">
              ESC
            </kbd>
          )}
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-850">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs font-mono">
              No matching specifications found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    navigate(item.path);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xs transition-colors flex items-center justify-between cursor-pointer ${
                    isSelected ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <div className="min-w-0 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-heading font-bold text-white truncate">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded-xs font-bold uppercase shrink-0 ${
                          isSelected ? 'bg-[#14B8A6] text-[#0B1F3A]' : 'bg-slate-800 text-slate-300 border border-slate-700'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 font-light truncate">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono text-slate-500 uppercase hidden sm:inline-block">
                      {item.category}
                    </span>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#14B8A6]' : 'text-slate-600'}`} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Helper */}
        <div className="bg-[#050e1a] px-4 py-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-[#14B8A6] font-bold">Veluno Softtech Global</span>
        </div>

      </div>

    </div>
  );
};

export default CommandPalette;
