import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Zap, 
  Server, 
  CheckCircle2, 
  Cpu, 
  Globe2, 
  Terminal,
  RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface RegionPing {
  region: string;
  location: string;
  latency: number;
  status: 'Optimal' | 'Degraded';
}

export const SystemHealthBenchmark: React.FC = () => {
  const [pings, setPings] = useState<RegionPing[]>([
    { region: 'ap-south-1', location: 'Mumbai (HQ Hub)', latency: 18, status: 'Optimal' },
    { region: 'eu-central-1', location: 'Frankfurt (EMEA)', latency: 112, status: 'Optimal' },
    { region: 'us-east-1', location: 'Virginia (Americas)', latency: 138, status: 'Optimal' },
    { region: 'ap-southeast-1', location: 'Singapore (APAC)', latency: 46, status: 'Optimal' },
    { region: 'ap-southeast-2', location: 'Sydney (ANZ)', latency: 124, status: 'Optimal' }
  ]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastChecked, setLastChecked] = useState('Just now');

  const simulateHealthCheck = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setPings(prev => prev.map(p => ({
        ...p,
        latency: Math.max(15, Math.floor(p.latency + (Math.random() * 8 - 4)))
      })));
      setIsRefreshing(false);
      setLastChecked('Just now');
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPings(prev => prev.map(p => ({
        ...p,
        latency: Math.max(15, Math.floor(p.latency + (Math.random() * 6 - 3)))
      })));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#08172b] border border-slate-800 rounded-xs overflow-hidden shadow-2xl text-white">
      
      {/* Top Terminal Bar */}
      <div className="bg-[#050e1a] px-5 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span className="text-slate-200 font-bold">veluno-cluster-telemetry</span>
            <span className="text-slate-600">--live-sla</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] uppercase font-bold tracking-wider">All Systems Operational</span>
          </div>
          <button 
            type="button" 
            onClick={simulateHealthCheck}
            disabled={isRefreshing}
            className="text-slate-400 hover:text-white transition-colors p-1"
            title="Refresh latency metrics"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-[#14B8A6]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Grid: 4 Core Metric Panels */}
      <div className="p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          
          <div className="p-4 rounded-xs bg-[#0B1F3A]/60 border border-slate-800">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono uppercase text-slate-400">Global Response</span>
              <Zap className="w-3.5 h-3.5 text-[#14B8A6]" />
            </div>
            <div className="text-2xl font-mono font-bold text-[#14B8A6]">
              &lt;140ms
            </div>
            <span className="text-[10px] text-slate-400 font-light block mt-0.5">
              p95 Edge Response SLA
            </span>
          </div>

          <div className="p-4 rounded-xs bg-[#0B1F3A]/60 border border-slate-800">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono uppercase text-slate-400">Uptime Reliability</span>
              <Activity className="w-3.5 h-3.5 text-[#2563EB]" />
            </div>
            <div className="text-2xl font-mono font-bold text-white">
              99.99%
            </div>
            <span className="text-[10px] text-slate-400 font-light block mt-0.5">
              Multi-Region High Availability
            </span>
          </div>

          <div className="p-4 rounded-xs bg-[#0B1F3A]/60 border border-slate-800">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono uppercase text-slate-400">Static Security</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-2xl font-mono font-bold text-emerald-400">
              0 CVEs
            </div>
            <span className="text-[10px] text-slate-400 font-light block mt-0.5">
              OWASP Top 10 Automated Audit
            </span>
          </div>

          <div className="p-4 rounded-xs bg-[#0B1F3A]/60 border border-slate-800">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono uppercase text-slate-400">Performance</span>
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-2xl font-mono font-bold text-amber-400">
              98/100
            </div>
            <span className="text-[10px] text-slate-400 font-light block mt-0.5">
              Google Lighthouse Benchmarks
            </span>
          </div>

        </div>

        {/* Global Edge Latency Streaming Rows */}
        <div>
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
            <span className="uppercase tracking-wider">Multi-Region Gateway Latency Pings</span>
            <span>Updated: {lastChecked}</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            {pings.map((p, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between p-3 rounded-xs bg-[#050e1a]/80 border border-slate-850 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 w-24 shrink-0 text-[11px]">{p.region}</span>
                  <span className="text-slate-200 font-medium">{p.location}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden hidden sm:block">
                    <div 
                      className="bg-[#14B8A6] h-full"
                      style={{ width: `${Math.min(100, (p.latency / 160) * 100)}%` }}
                    />
                  </div>
                  <span className="text-[#14B8A6] font-bold w-14 text-right">
                    {p.latency} ms
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold shrink-0">
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Footer Note */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
            <span>Architecture: Cloudflare Edge + AWS Multi-Zone VPC + PostgreSQL</span>
          </div>
          <Link 
            to="/engineering" 
            className="text-[#14B8A6] hover:underline font-bold inline-flex items-center gap-1 uppercase tracking-wider text-[11px]"
          >
            <span>Review System Architecture</span>
            <span>→</span>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default SystemHealthBenchmark;
