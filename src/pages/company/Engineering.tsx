import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  Workflow, 
  Lock, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Activity, 
  GitBranch, 
  Terminal, 
  FileCode, 
  ShieldCheck, 
  Sparkles, 
  ArrowDown, 
  RefreshCw,
  PhoneCall,
  HardDrive
} from 'lucide-react';
import PageBanner from '../../components/ui/PageBanner';

type BlueprintTab = 'voice-ai' | 'cloud-microservices' | 'commerce-sync' | 'security';

const Engineering = () => {
  const [activeTab, setActiveTab] = useState<BlueprintTab>('voice-ai');

  return (
    <>
      <Helmet>
        <title>System Architecture & Engineering Methodology | Veluno Softtech</title>
        <meta 
          name="description" 
          content="Explore Veluno Softtech's production reference architectures for conversational AI agents, distributed microservices, headless commerce, and zero-trust cloud infrastructure." 
        />
        <link rel="canonical" href="https://www.velunosofttech.com/engineering" />
      </Helmet>

      {/* Top Rounded Banner */}
      <PageBanner 
        title="System Architecture" 
        breadcrumb="Architecture" 
        category="Engineering Methodology"
        subtitle="How Veluno architects, validates, and deploys high-availability production software, sub-second AI agents, and enterprise data backends."
      />

      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 max-w-7xl">
        
        {/* Intro Section / Value Prop for Enterprise Buyers */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
            Engineered For High-Growth & Enterprise Scale
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1F3A] leading-tight mb-4">
            Production-Grade Systems. Zero Bloat. Complete Client Ownership.
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
            We don't build throwaway prototypes or rigid no-code templates. Every application delivered by Veluno is engineered on modular, decoupled, cloud-native architectures designed to handle millions of requests, survive traffic surges, and transfer 100% of source code and IP into your corporate repository.
          </p>
        </div>

        {/* =========================================================================
            SECTION 1: INTERACTIVE REFERENCE ARCHITECTURE BLUEPRINTS
            ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-gray-100 pb-5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-1">
                Interactive Blueprints
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B1F3A]">
                Production Reference Architectures
              </h3>
            </div>
            
            {/* Blueprint Selector Tabs */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {[
                { id: 'voice-ai', label: 'Conversational Voice AI' },
                { id: 'cloud-microservices', label: 'Distributed Cloud & API' },
                { id: 'commerce-sync', label: 'Event-Driven Commerce' },
                { id: 'security', label: 'Zero-Trust Security' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as BlueprintTab)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#0B1F3A] text-[#14B8A6] shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* TAB 1: CONVERSATIONAL VOICE AI ARCHITECTURE */}
          {activeTab === 'voice-ai' && (
            <div className="rounded-xl bg-[#0B1F3A] text-white p-7 md:p-10 border border-slate-800 shadow-xl">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 border-b border-slate-800 pb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#14B8A6] text-[#0B1F3A] inline-block mb-2">
                    Sub-600ms Conversational Latency
                  </span>
                  <h4 className="text-xl md:text-2xl font-heading font-extrabold text-white">
                    Real-Time Speech-to-Speech & Telephony Pipeline
                  </h4>
                </div>
                <div className="text-xs font-mono text-[#14B8A6] bg-black/60 px-3.5 py-2 rounded-lg border border-slate-800">
                  Target Latency: &lt; 500ms · Trilingual Audio Streaming
                </div>
              </div>

              {/* Architecture Flow Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                
                {/* Stage 1 */}
                <div className="p-5 rounded-lg bg-black/40 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold text-[#14B8A6]">
                      <PhoneCall className="w-4 h-4" />
                      <span>01. Ingestion Layer</span>
                    </div>
                    <div className="font-heading font-bold text-sm text-white mb-1.5">Telephony & WebRTC</div>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      Twilio SIP Trunking, browser WebRTC media streams, bidirectional audio chunking (16kHz PCM).
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-gray-400">
                    SIP / WebRTC / Opus
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="p-5 rounded-lg bg-black/40 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold text-[#14B8A6]">
                      <Zap className="w-4 h-4" />
                      <span>02. Streaming STT</span>
                    </div>
                    <div className="font-heading font-bold text-sm text-white mb-1.5">Voice Transcription</div>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      Deepgram / OpenAI Realtime low-latency acoustic models with vad (Voice Activity Detection) turn-taking.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-gray-400">
                    &lt; 150ms Streaming Text
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="p-5 rounded-lg bg-black/40 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold text-[#14B8A6]">
                      <Cpu className="w-4 h-4" />
                      <span>03. Reasoning Engine</span>
                    </div>
                    <div className="font-heading font-bold text-sm text-white mb-1.5">LLM & Tool Calling</div>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      System prompts, regional accent fine-tuning, real-time database lookups, calendar availability booking.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-gray-400">
                    FastAPI / Function Calling
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="p-5 rounded-lg bg-black/40 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold text-[#14B8A6]">
                      <Workflow className="w-4 h-4" />
                      <span>04. Synthesis & Handoff</span>
                    </div>
                    <div className="font-heading font-bold text-sm text-white mb-1.5">TTS & Webhook Action</div>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      Low-latency neural audio synthesis streamed directly back to caller, triggering automated WhatsApp & CRM handoffs.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-gray-400">
                    WhatsApp Webhooks / CRM Sync
                  </div>
                </div>

              </div>

              {/* Technical Specifications Checklist */}
              <div className="p-5 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-mono font-bold uppercase text-[#14B8A6] block mb-3">
                  Production Guarantees & Safeguards
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                    <span>Real-time interruption & speech barge-in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                    <span>Trilingual fluency (English, Tamil, Hindi)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                    <span>Encrypted call recordings & sentiment logs</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DISTRIBUTED CLOUD & MICROSERVICES */}
          {activeTab === 'cloud-microservices' && (
            <div className="rounded-xl bg-[#0B1F3A] text-white p-7 md:p-10 border border-slate-800 shadow-xl">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 border-b border-slate-800 pb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#14B8A6] text-[#0B1F3A] inline-block mb-2">
                    99.99% Availability Architecture
                  </span>
                  <h4 className="text-xl md:text-2xl font-heading font-extrabold text-white">
                    High-Concurrency Distributed Cloud & Microservices
                  </h4>
                </div>
                <div className="text-xs font-mono text-[#14B8A6] bg-black/60 px-3.5 py-2 rounded-lg border border-slate-800">
                  Multi-AZ Redundancy · Auto-Scaling Pods
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                
                {/* Edge Tier */}
                <div className="p-6 rounded-lg bg-black/40 border border-slate-800">
                  <Globe className="w-6 h-6 text-[#14B8A6] mb-3" />
                  <h5 className="font-heading font-bold text-sm text-white mb-2">Edge Routing & WAF</h5>
                  <ul className="space-y-2 text-xs text-gray-400 font-light">
                    <li>• Cloudflare Edge network with DDoS mitigation</li>
                    <li>• Global SSL/TLS termination & HTTP/3 support</li>
                    <li>• Static asset edge caching with sub-30ms TTFB</li>
                    <li>• Web Application Firewall (WAF) rule sets</li>
                  </ul>
                </div>

                {/* Compute Tier */}
                <div className="p-6 rounded-lg bg-black/40 border border-slate-800">
                  <Server className="w-6 h-6 text-[#14B8A6] mb-3" />
                  <h5 className="font-heading font-bold text-sm text-white mb-2">Container Cluster (EKS/ECS)</h5>
                  <ul className="space-y-2 text-xs text-gray-400 font-light">
                    <li>• Horizontal pod auto-scaling based on CPU/traffic</li>
                    <li>• Decoupled microservices (Auth, Core API, Ingestion)</li>
                    <li>• Zero-downtime rolling canary deployments</li>
                    <li>• Isolated VPC subnets with strict security groups</li>
                  </ul>
                </div>

                {/* Data Tier */}
                <div className="p-6 rounded-lg bg-black/40 border border-slate-800">
                  <Database className="w-6 h-6 text-[#14B8A6] mb-3" />
                  <h5 className="font-heading font-bold text-sm text-white mb-2">Persistent Data & Caching</h5>
                  <ul className="space-y-2 text-xs text-gray-400 font-light">
                    <li>• Multi-AZ PostgreSQL with automatic failover</li>
                    <li>• Read replicas for reporting and analytics traffic</li>
                    <li>• Redis cluster for sub-millisecond session caching</li>
                    <li>• Kafka / SQS queues for asynchronous processing</li>
                  </ul>
                </div>

              </div>

              <div className="p-5 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-mono font-bold uppercase text-[#14B8A6] block mb-3">
                  DevOps & Observability Standards
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                    <span>Prometheus & Grafana live metrics telemetry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                    <span>Automated nightly encrypted DB backups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                    <span>Infrastructure as Code via Terraform</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: EVENT-DRIVEN COMMERCE */}
          {activeTab === 'commerce-sync' && (
            <div className="rounded-xl bg-[#0B1F3A] text-white p-7 md:p-10 border border-slate-800 shadow-xl">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 border-b border-slate-800 pb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#14B8A6] text-[#0B1F3A] inline-block mb-2">
                    Zero-Overselling Guarantee
                  </span>
                  <h4 className="text-xl md:text-2xl font-heading font-extrabold text-white">
                    Event-Driven Commerce & Warehouse Reconciliation
                  </h4>
                </div>
                <div className="text-xs font-mono text-[#14B8A6] bg-black/60 px-3.5 py-2 rounded-lg border border-slate-800">
                  Atomic Stock Reservations · Idempotent Webhooks
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                
                <div className="p-6 rounded-lg bg-black/40 border border-slate-800">
                  <div className="text-xs font-mono font-bold text-[#14B8A6] mb-2">Stage 01</div>
                  <h5 className="font-heading font-bold text-sm text-white mb-2">Atomic Stock Locks</h5>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    When customer checkout initiates, inventory is atomically reserved in PostgreSQL using pessimistic row-level locking for 15 minutes, preventing competing checkouts from overselling inventory.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-black/40 border border-slate-800">
                  <div className="text-xs font-mono font-bold text-[#14B8A6] mb-2">Stage 02</div>
                  <h5 className="font-heading font-bold text-sm text-white mb-2">Idempotent Webhooks</h5>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Stripe and Razorpay payment intents trigger signed webhook events processed with unique idempotency keys, guaranteeing payment records cannot be double-counted or lost.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-black/40 border border-slate-800">
                  <div className="text-xs font-mono font-bold text-[#14B8A6] mb-2">Stage 03</div>
                  <h5 className="font-heading font-bold text-sm text-white mb-2">Warehouse Reconciliation</h5>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    An asynchronous event bus dispatches automated packing slips to warehouse consoles and immediately synchronizes updated SKU levels across physical locations and online storefronts.
                  </p>
                </div>

              </div>

              <div className="p-5 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-mono font-bold uppercase text-[#14B8A6] block mb-3">
                  Commerce Reliability Checklist
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                    <span>Sub-second mobile lookbook browsing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                    <span>Multi-currency pricing & automated tax calculate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                    <span>Auditable transaction log for every inventory shift</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ZERO-TRUST SECURITY */}
          {activeTab === 'security' && (
            <div className="rounded-xl bg-[#0B1F3A] text-white p-7 md:p-10 border border-slate-800 shadow-xl">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 border-b border-slate-800 pb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#14B8A6] text-[#0B1F3A] inline-block mb-2">
                    Enterprise Compliance
                  </span>
                  <h4 className="text-xl md:text-2xl font-heading font-extrabold text-white">
                    Zero-Trust Security & Data Protection Pipeline
                  </h4>
                </div>
                <div className="text-xs font-mono text-[#14B8A6] bg-black/60 px-3.5 py-2 rounded-lg border border-slate-800">
                  AES-256 · TLS 1.3 · Granular RBAC
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                
                <div className="p-5 rounded-lg bg-black/40 border border-slate-800">
                  <Lock className="w-5 h-5 text-[#14B8A6] mb-2.5" />
                  <h5 className="font-heading font-bold text-sm text-white mb-1.5">Encryption in Depth</h5>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    AES-256 volume encryption for all databases, TLS 1.3 enforced for all network transit, and zero cleartext secrets in repos.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-black/40 border border-slate-800">
                  <ShieldCheck className="w-5 h-5 text-[#14B8A6] mb-2.5" />
                  <h5 className="font-heading font-bold text-sm text-white mb-1.5">Granular RBAC</h5>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Role-Based Access Control enforced at database row level with JWT validation and short-lived authorization tokens.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-black/40 border border-slate-800">
                  <Activity className="w-5 h-5 text-[#14B8A6] mb-2.5" />
                  <h5 className="font-heading font-bold text-sm text-white mb-1.5">Audit Trails</h5>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Immutable logs for every administrative action, payment settlement, and user permission modification stored in secure S3 buckets.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-black/40 border border-slate-800">
                  <Shield className="w-5 h-5 text-[#14B8A6] mb-2.5" />
                  <h5 className="font-heading font-bold text-sm text-white mb-1.5">Automated Scans</h5>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    GitHub Actions automated dependency vulnerability scans (Dependabot/Snyk) and static analysis in every PR.
                  </p>
                </div>

              </div>

              <div className="p-5 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-mono font-bold uppercase text-[#14B8A6] block mb-3">
                  Enterprise Client Guarantees
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                    <span>No shared multitenancy databases across clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                    <span>100% intellectual property & patent assignment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                    <span>SOC2 & ISO 27001 aligned technical controls</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* =========================================================================
            SECTION 2: VELUNO DELIVERY BENCHMARKS (WHY CLIENTS PICK US)
            ========================================================================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Engineering Rigor
            </span>
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B1F3A]">
              The Veluno Engineering Standards
            </h3>
            <p className="text-xs md:text-sm text-gray-500 font-light mt-2">
              The non-negotiable architectural benchmarks applied across every client delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-7 rounded-xl bg-white border border-gray-200/90 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center font-mono font-bold text-sm mb-4">
                01
              </div>
              <h4 className="font-heading font-extrabold text-base text-[#0B1F3A] mb-2">
                Sub-100ms Latency Budget
              </h4>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                We test endpoints under synthetic concurrent load. Database indices, edge caching, and bundle optimizations are enforced before release.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-white border border-gray-200/90 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center font-mono font-bold text-sm mb-4">
                02
              </div>
              <h4 className="font-heading font-extrabold text-base text-[#0B1F3A] mb-2">
                100% Client IP Ownership
              </h4>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                We push directly to your organization’s GitHub/GitLab, configure your AWS/Vercel environments, and provide full documentation for your in-house team.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-white border border-gray-200/90 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center font-mono font-bold text-sm mb-4">
                03
              </div>
              <h4 className="font-heading font-extrabold text-base text-[#0B1F3A] mb-2">
                Direct Staff Architect Access
              </h4>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                No non-technical account managers filtering communications. You collaborate directly with senior engineers in Slack and GitHub pull requests.
              </p>
            </div>

          </div>
        </div>

        {/* =========================================================================
            SECTION 3: CLIENT ONBOARDING JOURNEY (HOW WE GET FROM SCOPE TO PRODUCTION)
            ========================================================================= */}
        <div className="mb-20 rounded-xl bg-[#F8F9FA] p-8 md:p-12 border border-gray-200/90">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              The Client Journey
            </span>
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B1F3A]">
              From Architectural Discovery to Production in 3 Sprints
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-lg bg-white border border-gray-200/80 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#14B8A6] block mb-1">Phase 01 · Days 1–4</span>
              <h4 className="font-heading font-bold text-base text-[#0B1F3A] mb-2">Architectural Blueprint & Schema Lock</h4>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                We map entity models, API contracts, third-party integration constraints, and security threat vectors. You receive a concrete technical specification document.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white border border-gray-200/80 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#14B8A6] block mb-1">Phase 02 · Days 5–14</span>
              <h4 className="font-heading font-bold text-base text-[#0B1F3A] mb-2">Core Engine & CI/CD Deployment</h4>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Staging environments provisioned. Core relational schemas, authentication, API routes, and frontend layouts deployed with live preview links for review.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white border border-gray-200/80 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#14B8A6] block mb-1">Phase 03 · Days 15–24</span>
              <h4 className="font-heading font-bold text-base text-[#0B1F3A] mb-2">Load Testing, Audit & Production Go-Live</h4>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Synthetic load testing, security review, DNS cutover, and 30-day post-launch warranty with automated uptime monitoring.
              </p>
            </div>

          </div>
        </div>

        {/* =========================================================================
            SECTION 4: HIGH-CONVERTING ARCHITECTURE CONSULTATION CTA
            ========================================================================= */}
        <div className="rounded-xl bg-[#0B1F3A] text-white p-8 md:p-14 relative overflow-hidden shadow-xl border border-slate-800">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] block mb-2">
              Ready to Build or Modernize?
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white leading-tight mb-4">
              Request a Complimentary Architecture Audit & Technical Feasibility Report
            </h3>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light mb-8 max-w-xl">
              Discuss your product vision, data model, or concurrency challenges with our senior solutions architect. We provide a preliminary technical feasibility roadmap within 4 business hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                to="/contact" 
                className="btn-teal px-7 py-3 rounded-lg font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Schedule Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/work" 
                className="px-7 py-3 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-slate-800 hover:bg-zinc-700 transition-colors inline-flex items-center justify-center"
              >
                View 7 Case Studies
              </Link>
            </div>
          </div>

          {/* Circuit Watermark Pattern */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 50h100v100h100v100h100" stroke="#14B8A6" strokeWidth="3" strokeDasharray="6 6"/>
              <circle cx="50" cy="50" r="8" fill="#14B8A6"/>
              <circle cx="150" cy="150" r="8" fill="#14B8A6"/>
              <circle cx="250" cy="250" r="8" fill="#14B8A6"/>
              <circle cx="350" cy="350" r="8" fill="#14B8A6"/>
              <path d="M350 50h-80v80h-80v80" stroke="#14B8A6" strokeWidth="3"/>
              <circle cx="350" cy="50" r="8" fill="#14B8A6"/>
              <circle cx="270" cy="130" r="8" fill="#14B8A6"/>
              <circle cx="190" cy="210" r="8" fill="#14B8A6"/>
            </svg>
          </div>
        </div>

      </div>
    </>
  );
};

export default Engineering;