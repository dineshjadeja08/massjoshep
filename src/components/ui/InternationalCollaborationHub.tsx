import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Globe2, 
  GitBranch, 
  MessageSquare, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Users,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface TimezoneCity {
  city: string;
  region: string;
  timezone: string;
  utcOffset: string;
  overlap: string;
  isHQ?: boolean;
}

const CITIES: TimezoneCity[] = [
  { city: 'Chennai', region: 'India (HQ)', timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', overlap: 'Primary Delivery Hub', isHQ: true },
  { city: 'London', region: 'UK & Europe', timezone: 'Europe/London', utcOffset: 'UTC+0 / GMT', overlap: '4.5 – 5.5 Hours Daily Overlap' },
  { city: 'New York', region: 'North America', timezone: 'America/New_York', utcOffset: 'UTC-5 / EST', overlap: 'Dedicated AM/PM Handoff Windows' },
  { city: 'Dubai', region: 'Middle East', timezone: 'Asia/Dubai', utcOffset: 'UTC+4 / GST', overlap: '6+ Hours Active Working Overlap' },
  { city: 'Sydney', region: 'Australia & APAC', timezone: 'Australia/Sydney', utcOffset: 'UTC+10 / AEST', overlap: 'Full Working Day Alignment' }
];

export const InternationalCollaborationHub: React.FC = () => {
  const [times, setTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const updated: { [key: string]: string } = {};
      CITIES.forEach(c => {
        try {
          updated[c.city] = new Intl.DateTimeFormat('en-US', {
            timeZone: c.timezone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }).format(now);
        } catch {
          updated[c.city] = '--:--';
        }
      });
      setTimes(updated);
    };

    updateClocks();
    const timer = setInterval(updateClocks, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white border border-slate-200 rounded-xs overflow-hidden shadow-sm">
      
      {/* Header Banner */}
      <div className="bg-[#0B1F3A] text-white p-6 md:p-8 border-b border-slate-800">
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
            Cross-Border Engineering Excellence
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-3">
            Global Timezone Overlap & Transparent Client Workflows
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            Headquartered in Chennai, India, Veluno Softtech synchronizes seamlessly with product teams, founders, and CTOs across the US, UK, Europe, Australia, and the Middle East.
          </p>
        </div>
      </div>

      {/* Live World Clocks Strip */}
      <div className="p-6 md:p-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
            <Clock className="w-4 h-4 text-[#2563EB]" />
            <span>Live Timezone Synchronization</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            Real-Time Active Clocks
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {CITIES.map((c, i) => (
            <div 
              key={i} 
              className={`p-4 rounded-xs border transition-all ${
                c.isHQ 
                  ? 'bg-[#0B1F3A] text-white border-slate-800 shadow-xs' 
                  : 'bg-white text-[#0B1F3A] border-slate-200 shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-heading font-bold">{c.city}</span>
                <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-xs ${
                  c.isHQ ? 'bg-[#14B8A6] text-[#0B1F3A]' : 'bg-slate-100 text-slate-600'
                }`}>
                  {c.utcOffset}
                </span>
              </div>
              
              <div className={`text-xl font-mono font-extrabold mb-1 ${c.isHQ ? 'text-[#14B8A6]' : 'text-[#2563EB]'}`}>
                {times[c.city] || 'Loading...'}
              </div>

              <div className={`text-[10px] leading-tight ${c.isHQ ? 'text-slate-300' : 'text-slate-500'} font-light`}>
                {c.overlap}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Part Transparent Toolchain */}
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-1">
            Zero Guesswork · Complete Transparency
          </span>
          <h4 className="text-lg sm:text-xl font-heading font-extrabold text-[#0B1F3A]">
            How We Collaborate With International Teams Daily
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-5 rounded-xs bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xs bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-heading font-bold text-[#0B1F3A] mb-1.5">
                Linear / Jira Sprints
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed font-light mb-3">
                Bi-weekly sprint planning, clear milestone burn-downs, and structured user stories visible to your stakeholders 24/7.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#2563EB] uppercase">
              Transparent Backlogs
            </span>
          </div>

          <div className="p-5 rounded-xs bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xs bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center mb-3">
                <MessageSquare className="w-5 h-5 text-teal-600" />
              </div>
              <h5 className="text-sm font-heading font-bold text-[#0B1F3A] mb-1.5">
                Direct Slack / Teams
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed font-light mb-3">
                Private dedicated Slack or Microsoft Teams channel with your assigned senior engineering squad. Zero account manager gatekeeping.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold text-teal-600 uppercase">
              Sub-4Hr Response SLA
            </span>
          </div>

          <div className="p-5 rounded-xs bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xs bg-[#0B1F3A]/10 text-[#0B1F3A] flex items-center justify-center mb-3">
                <GitBranch className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-heading font-bold text-[#0B1F3A] mb-1.5">
                100% Git Sovereignty
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed font-light mb-3">
                Code pushed directly to your organization’s GitHub or GitLab repository with transparent commit histories, PR reviews, and automated CI tests.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#0B1F3A] uppercase">
              100% IP Ownership
            </span>
          </div>

          <div className="p-5 rounded-xs bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xs bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-heading font-bold text-[#0B1F3A] mb-1.5">
                Automated Staging URLs
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed font-light mb-3">
                Every feature branch automatically generates a live, shareable preview URL so your executive team can test progress before production merge.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase">
              Live Preview on Every PR
            </span>
          </div>

        </div>

        {/* Footer Guarantee Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
              Strict Mutual NDA Enforced
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-700 font-medium">
              <Check className="w-4 h-4 text-[#2563EB]" />
              Zero Code Outsourcing
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-700 font-medium">
              <Globe2 className="w-4 h-4 text-[#14B8A6]" />
              US / UK / EU / AU / Middle East Sprints
            </span>
          </div>

          <Link 
            to="/contact" 
            className="btn-primary py-2 px-4 rounded-xs text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-1.5 shrink-0"
          >
            <span>Book Overlap Discussion</span>
            <span>→</span>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default InternationalCollaborationHub;
