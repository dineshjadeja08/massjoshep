import { z } from 'zod';

export const caseStudySchema = z.object({
  slug: z.string(),
  category: z.enum(['client', 'product', 'concept']),
  categoryLabel: z.string(),
  status: z.string(),
  clientName: z.string(),
  liveUrl: z.string().optional(),
  industry: z.string(),
  services: z.array(z.string()),
  region: z.string(),
  heroImage: z.string(),
  summary: z.string(),
  challenge: z.string(),
  velunoRole: z.string().optional(),
  xenFirmRole: z.string().optional(),
  approach: z.array(z.object({ title: z.string(), description: z.string() })),
  techStack: z.array(z.string()),
  featuresDelivered: z.array(z.string()),
  plannedFeatures: z.array(z.string()).optional(),
  results: z.array(z.object({ metric: z.string(), label: z.string() })).optional(),
  testimonial: z.object({ quote: z.string(), author: z.string(), role: z.string() }).optional(),
  gallery: z.array(z.string()),
  timeline: z.string(),
  relatedCaseStudies: z.array(z.string()),
});

export type CaseStudy = z.infer<typeof caseStudySchema>;

export const caseStudies: CaseStudy[] = [
  // 1. BILL NOW (LIVE CLIENT PROJECT)
  {
    slug: 'bill-now',
    category: 'client',
    categoryLabel: 'FinTech / Billing & Invoicing SaaS',
    status: 'Live Production',
    clientName: 'Bill Now',
    liveUrl: 'https://bill-now.netlify.app',
    industry: 'FinTech, Billing Automation & Small Business Invoicing',
    services: [
      'Full-Stack SaaS Architecture',
      'Financial Dashboard & KPI Engineering',
      'Quick Invoice Line-Item Builder',
      'Ledger Tracking & Status Badges',
      'Interactive Revenue Trend Charting'
    ],
    region: 'India & Global MSMEs',
    heroImage: '/projects/bill-now.jpg',
    summary: 'A clean, high-clarity invoicing and financial tracking platform built for freelancers, retail shops, and small-to-medium businesses to create bills, monitor payment statuses, and track cash flow without spreadsheet friction.',
    challenge: 'Freelancers and small-to-medium business owners frequently struggle with bloated enterprise ERP accounting software or error-prone manual spreadsheets. They need an instant, low-cognitive-load tool to issue line-item invoices, track receivables, and monitor monthly cash-flow health in seconds.',
    velunoRole: 'Veluno engineered the end-to-end web workspace, implementing high-contrast financial KPI summary cards, a rapid line-item invoice builder, live payment status filters, and interactive revenue progression visualization.',
    xenFirmRole: 'Veluno engineered the end-to-end web workspace, implementing high-contrast financial KPI summary cards, a rapid line-item invoice builder, live payment status filters, and interactive revenue progression visualization.',
    approach: [
      {
        title: 'Financial Summary KPI Cards',
        description: 'Engineered at-a-glance KPI widgets breaking down total invoiced volume, collected/paid balances, pending dues, and active client metrics.'
      },
      {
        title: 'Quick Invoice Builder Engine',
        description: 'Built a streamlined line-item entry workflow allowing users to choose clients, input items, auto-calculate quantities and pricing, and generate invoices with zero delay.'
      },
      {
        title: 'Invoice Ledger & Status Tracking',
        description: 'Architected a filterable, scannable ledger with clear status badges (Paid, Pending, Overdue) so owners spot payment bottlenecks immediately.'
      },
      {
        title: 'Revenue Trend Progression Charts',
        description: 'Integrated interactive charting tracking monthly revenue trajectories to support confident cash-flow reviews.'
      }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Recharts', 'Netlify Edge'],
    featuresDelivered: [
      'At-a-glance financial summary cards with real-time balance metrics',
      'Quick invoice builder with auto-calculated line items and taxes',
      'Filterable invoice ledger with high-contrast status tags',
      'Interactive revenue progression chart over monthly intervals',
      'Dedicated left navigation rail (Dashboard, Invoices, Clients, Settings)',
      'Mobile and tablet responsive layout for on-the-go billing oversight'
    ],
    results: [
      { metric: '100% Clarity', label: 'Eliminates spreadsheet friction with automated invoice ledgers.' },
      { metric: '< 30 Seconds', label: 'Average time to create and dispatch a new client bill.' },
      { metric: 'Live at Netlify', label: 'Active and deployed at bill-now.netlify.app.' }
    ],
    gallery: [
      '/projects/bill-now.jpg'
    ],
    timeline: 'Delivered & Live in Production',
    relatedCaseStudies: ['cavve', 'brandmatchbot', 'xenbill']
  },

  // 2. CAVVE (LIVE CLIENT PROJECT)
  {
    slug: 'cavve',
    category: 'client',
    categoryLabel: 'Community & Professional Networking',
    status: 'Live Platform',
    clientName: 'Cavve',
    liveUrl: 'https://cavve.netlify.app',
    industry: 'Curated Professional Networking, Community Events & Private Mixers',
    services: [
      'Private Member Hub Architecture',
      'Curated Event Discovery & RSVP System',
      'Smart Connection Matching Algorithm',
      'Direct In-Platform Messaging Threads',
      'Editorial Dark-Navy UI/UX System'
    ],
    region: 'Global Founder Community',
    heroImage: '/projects/cavve.jpg',
    summary: 'A curated member hub designed for invitation-style professional gatherings, niche industry mixers, and high-signal peer connections.',
    challenge: 'Traditional social and networking platforms are saturated with noise, unsolicited pitching, and low-relevance feeds. Cavve required an exclusive, editorial member portal prioritizing high-signal introductions, founder mixers, and structured event RSVPs.',
    velunoRole: 'Veluno designed and developed the personalized member hub, curated event scheduling cards, connection recommendation feeds, and private direct messaging flows.',
    xenFirmRole: 'Veluno designed and developed the personalized member hub, curated event scheduling cards, connection recommendation feeds, and private direct messaging flows.',
    approach: [
      {
        title: 'Personalized Member Hub Overview',
        description: 'Welcomes verified members with a tailored overview of relevant community milestones, gathering host triggers, and clear top navigation across Dashboard, Events, Network, and Messages.'
      },
      {
        title: 'Structured Event Cards & RSVPs',
        description: 'Designed cards for upcoming exclusive gatherings (founder mixers, leadership dinners, investor brunches) detailing venue formats, dates, times, and attendee context.'
      },
      {
        title: 'Smart Connection Recommendations',
        description: 'Surfaced targeted peer discovery cards emphasizing roles, organizations, and mutual relevance so members initiate targeted outreach.'
      },
      {
        title: 'Direct Messaging & Follow-Up Threads',
        description: 'Engineered clean messaging workflows to support communication before, during, and after private mixers.'
      }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons', 'Netlify Edge'],
    featuresDelivered: [
      'Personalized member dashboard with curated event previews',
      'Exclusive gathering discovery (dinners, mixers, investor brunches)',
      'Peer connection recommendation engine with role and company tags',
      'Direct 1-on-1 member messaging and follow-up threads',
      'Refined dark-navy and warm-gold luxury editorial design system',
      'Multi-device responsive experience across desktop, tablet, and mobile'
    ],
    results: [
      { metric: 'Zero Noise', label: 'Curated high-signal professional networking ecosystem.' },
      { metric: 'Invitation Hub', label: 'Engineered specifically for niche mixers and dinners.' },
      { metric: 'Live at Netlify', label: 'Active and deployed at cavve.netlify.app.' }
    ],
    gallery: [
      '/projects/cavve.jpg'
    ],
    timeline: 'Delivered & Live in Production',
    relatedCaseStudies: ['bill-now', 'brandmatchbot', 'linksync']
  },

  // 3. BRANDMATCHBOT (LIVE CLIENT PROJECT)
  {
    slug: 'brandmatchbot',
    category: 'client',
    categoryLabel: 'MarTech / AI Brand Alignment & Creator Matching',
    status: 'Live Analytics SaaS',
    clientName: 'BrandMatchBot',
    liveUrl: 'https://brandmatchbot-8yadwwy59-dks-projects-e2d8a64c.vercel.app',
    industry: 'MarTech, AI Brand Alignment & Influencer Marketing Analytics',
    services: [
      'AI Alignment Score Gauge Architecture',
      'Active Campaign Performance Tracker',
      'Influencer Match Discovery Feed',
      'Campaign & Outreach Workspace',
      'Deep Teal & Slate Data Visualization'
    ],
    region: 'Global Creator Economy',
    heroImage: '/projects/brandmatchbot.jpg',
    summary: 'An analytics-driven collaboration workspace that helps brands evaluate campaign performance and discover creators or influencers with strong audience and positioning alignment.',
    challenge: 'Marketing teams waste hundreds of hours manually vetting creator profiles without objective data on brand alignment or audience demographics. BrandMatchBot solves this with a real-time alignment gauge and centralized campaign tracker.',
    velunoRole: 'Veluno developed the full front-end collaboration workspace, circular brand alignment score gauge, influencer match feed with engagement metrics, and campaign management workflows.',
    xenFirmRole: 'Veluno developed the full front-end collaboration workspace, circular brand alignment score gauge, influencer match feed with engagement metrics, and campaign management workflows.',
    approach: [
      {
        title: 'Brand Alignment Score Gauge',
        description: 'Engineered a central circular match-score indicator (e.g. 88% Match) paired with supporting campaign health indicators to validate partnership fit instantly.'
      },
      {
        title: 'Active Brand Campaign Tracker',
        description: 'Constructed real-time cards tracking ongoing product launches and brand initiatives with reach, engagement, and status indicators.'
      },
      {
        title: 'Influencer Match Discovery Feed',
        description: 'Surfaced vetted creator profiles alongside granular KPIs (reach, engagement rate, brand affinity) to streamline shortlisting.'
      },
      {
        title: 'Campaign & Outreach Workspace',
        description: 'Structured seamless navigation across Dashboard, Campaigns, Creators, and Messages to move from discovery to signed collaboration.'
      }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'Lucide Icons', 'Next.js'],
    featuresDelivered: [
      'Circular brand alignment score gauge with real-time match percentage',
      'Active campaign tracker with status badges and engagement telemetry',
      'Influencer match discovery stream with reach, engagement, and affinity stats',
      'Centralized outreach workspace across Dashboard, Campaigns, Creators, Messages',
      'Deep teal, slate, and high-contrast white card design system',
      'Instant creator comparison tools for agency marketing leads'
    ],
    results: [
      { metric: '88% Match Avg', label: 'Precision creator alignment score reducing partnership vetting time.' },
      { metric: 'Centralized', label: 'Replaces scattered spreadsheets with an integrated campaign suite.' },
      { metric: 'Live on Vercel', label: 'Active and deployed on Vercel Edge.' }
    ],
    gallery: [
      '/projects/brandmatchbot.jpg'
    ],
    timeline: 'Delivered & Live in Production',
    relatedCaseStudies: ['bill-now', 'cavve', 'zylinn-ai']
  },

  // 4. ZYLO VOICE
  {
    slug: 'zylinn-ai',
    category: 'product',
    categoryLabel: 'Voice AI',
    status: 'Live Beta',
    clientName: 'Zylo Voice',
    industry: 'Multilingual Voice Intelligence & Telephony Automation',
    services: [
      'Conversational AI Voice Architecture',
      'Real-Time WebRTC Audio Pipelines',
      'Telephony & SIP Integration',
      'CRM & WhatsApp Webhook Automation'
    ],
    region: 'Global / Multilingual',
    heroImage: '/zylin-voice-ai.svg',
    summary: 'AI-powered multilingual voice agents engineered by Veluno for automated customer support, lead qualification, appointment booking, and enterprise workflow automation.',
    challenge: 'Businesses lose high-intent customer leads and face surging support costs when constrained by standard office hours and manual call agents. Traditional IVR telephone trees frustrate users with rigid numbered menus. Zylo Voice delivers natural, human-speed conversational agents fluent in regional accents and business logic.',
    velunoRole: 'Veluno is the architect and core engineering partner for Zylo Voice, developing real-time sub-second audio pipelines, multilingual natural language understanding, automated CRM webhooks, and executive telemetry dashboards.',
    xenFirmRole: 'Veluno is the architect and core engineering partner for Zylo Voice, developing real-time sub-second audio pipelines, multilingual natural language understanding, automated CRM webhooks, and executive telemetry dashboards.',
    approach: [
      {
        title: 'Sub-Second Voice Processing Engine',
        description: 'Engineered real-time speech-to-speech pipelines using WebRTC streaming for human-grade conversational turn-taking with less than 600ms latency.'
      },
      {
        title: 'Trilingual Regional Intelligence',
        description: 'Trained and fine-tuned conversational models to understand and speak naturally in English, Tamil, and Hindi, catering to regional Indian and global enterprise requirements.'
      },
      {
        title: 'Automated CRM & WhatsApp Handoffs',
        description: 'Structured bidirectional integrations that immediately extract lead details during phone calls, schedule calendar bookings, and dispatch instant WhatsApp confirmation messages.'
      },
      {
        title: 'Executive Analytics & Call Telemetry',
        description: 'Constructed an interactive web portal featuring real-time call logs, sentiment analysis, audio recordings, and automated conversion summaries.'
      }
    ],
    techStack: ['Python', 'FastAPI', 'WebRTC', 'OpenAI Realtime API', 'Twilio / SIP', 'PostgreSQL', 'React', 'Tailwind CSS'],
    featuresDelivered: [
      'Inbound and outbound automated voice call management',
      'Fluent multilingual voice support across English, Tamil, and Hindi',
      'Real-time call transcription, intelligent summaries, and sentiment analytics',
      'Direct CRM integration and automated Google Calendar scheduling',
      'Automated WhatsApp follow-up and confirmation notifications',
      'Centralized web dashboard for live monitoring, audio replays, and agent telemetry'
    ],
    plannedFeatures: [
      'Additional regional language models (Telugu, Kannada, Malayalam)',
      'Enterprise custom voice cloning and brand tone matching',
      'Automated outbound campaign dialer with smart cadence logic'
    ],
    results: [
      { metric: '< 600ms', label: 'Average conversational response turn-taking latency.' },
      { metric: '94% Accuracy', label: 'Lead qualification and automated appointment booking precision.' },
      { metric: '24/7 Availability', label: 'Zero missed inbound calls with 100% CRM record synchronization.' }
    ],
    gallery: [
      '/zylin-voice-ai.svg'
    ],
    timeline: 'Live Product Beta / Continuous Iteration',
    relatedCaseStudies: ['bill-now', 'cavve', 'brandmatchbot']
  },

  // 5. LINKSYNK PRO
  {
    slug: 'linksync',
    category: 'product',
    categoryLabel: 'Creator SaaS Platform',
    status: 'Live MVP Platform',
    clientName: 'LinkSynk Pro',
    industry: 'Creator Monetization & Bio-Link Infrastructure',
    services: [
      'Full-Stack SaaS Product Engineering',
      'Design System & Theme Engine',
      'Lead Capture & Conversion Funnels',
      'Serverless Edge Infrastructure'
    ],
    region: 'Global Product',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    summary: 'A fast, modern bio-link SaaS engineered by Veluno to allow creators, founders, and modern brands to consolidate links, customize themes, and collect visitor leads on a single fast page.',
    challenge: 'Legacy bio-link tools have become congested with bloated third-party tracking scripts, sluggish load speeds, and aggressive paywalls for basic design customization. LinkSynk Pro was engineered as an in-house product to provide an ultra-lightweight, high-converting alternative.',
    velunoRole: 'Veluno is the creator and owner of LinkSynk Pro. We handled end-to-end product architecture, UI/UX design, frontend development, and serverless hosting on Vercel.',
    xenFirmRole: 'Veluno is the creator and owner of LinkSynk Pro. We handled end-to-end product architecture, UI/UX design, frontend development, and serverless hosting on Vercel.',
    approach: [
      {
        title: 'Sub-Second Edge Rendering',
        description: 'Engineered server-rendered profile pages to ensure instantaneous initial paint when opened within mobile social media in-app browsers (Instagram, TikTok, LinkedIn).'
      },
      {
        title: 'Componentized Theme Engine',
        description: 'Developed an extensible theming architecture enabling users to toggle custom color palettes, glassmorphism cards, gradients, and custom brand typography.'
      },
      {
        title: 'Lead Capture & WhatsApp Integration',
        description: 'Integrated inline email lead capture forms and direct WhatsApp chat triggers directly on profile pages without requiring page reloads.'
      },
      {
        title: 'Analytics & Click Telemetry',
        description: 'Constructed privacy-compliant event telemetry tracking outbound click rates, geographic distribution, and referrer sources in real time.'
      }
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'Supabase', 'PostgreSQL'],
    featuresDelivered: [
      'Instant responsive bio-link profile builder with live preview',
      'Curated theme presets with customizable background styles and card elevations',
      'Social media channel integration (Instagram, YouTube, GitHub, LinkedIn, WhatsApp)',
      'Lead capture form with instant email alerts and CSV export',
      'Direct WhatsApp chat redirect link generator',
      'Built-in analytics dashboard tracking clicks and unique profile visitors'
    ],
    plannedFeatures: [
      'Custom domain mapping via automated SSL provisioning',
      'Digital product downloads and Stripe payment checkout embed',
      'QR code generator with customizable embedded logo'
    ],
    results: [
      { metric: '< 100ms', label: 'Global edge-cached profile load speed.' },
      { metric: '99.98%', label: 'Platform availability during peak social media campaign spikes.' },
      { metric: 'Zero Bloat', label: 'No third-party ad pixels or tracking bloat injected into profile pages.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200'
    ],
    timeline: 'Live MVP / Active Iteration',
    relatedCaseStudies: ['bill-now', 'cavve', 'brandmatchbot']
  },

  // 6. PAYLANE (BILLING & FINANCIAL SAAS)
  {
    slug: 'xenbill',
    category: 'product',
    categoryLabel: 'Financial & ERP Software',
    status: 'Beta / Active Validation',
    clientName: 'Paylane',
    industry: 'GST Invoicing, Inventory & Commercial Accounting',
    services: [
      'Financial Software Architecture',
      'GST Invoicing Engine',
      'Inventory & Stock Tracking',
      'Multi-Device Responsive Portal'
    ],
    region: 'India & Global MSMEs',
    heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    summary: 'A simple and powerful billing and inventory management solution engineered by Veluno for small and medium businesses to manage GST invoicing, stock levels, and sales analytics.',
    challenge: 'Small businesses often outgrow manual spreadsheets but cannot justify the steep learning curves and high monthly costs of enterprise ERP platforms. Paylane provides structured, predictable invoicing and stock control without administrative complexity.',
    velunoRole: 'In-house product development. Veluno architects the data schema, designs the UI/UX dashboard, and builds the invoice generation, inventory tracking, and calculation engine for Paylane.',
    xenFirmRole: 'In-house product development. Veluno architects the data schema, designs the UI/UX dashboard, and builds the invoice generation, inventory tracking, and calculation engine for Paylane.',
    approach: [
      {
        title: 'GST-Compliant Invoicing Engine',
        description: 'Implemented calculation routines for HSN codes, multi-slab GST rates, line-item discounts, and auto-computed totals.'
      },
      {
        title: 'Integrated Inventory & Stock Control',
        description: 'Connected billing directly to warehouse inventory levels to update stock balances automatically upon invoice issuance.'
      },
      {
        title: 'Customer & Supplier Management',
        description: 'Structured relational records tracking client credit limits, pending payment balances, and supplier purchase orders.'
      },
      {
        title: 'Multi-Device Responsiveness',
        description: 'Engineered responsive interfaces optimized for desktop billing counters, tablets, and mobile owner oversight.'
      }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
    featuresDelivered: [
      'GST invoicing engine with instant PDF preview and download',
      'Real-time inventory and stock tracking with low-stock alerts',
      'Customer and supplier ledger management with overdue reminders',
      'Comprehensive sales reports, revenue trends, and tax analytics',
      'Multi-device responsive access across desktop, tablet, and mobile'
    ],
    plannedFeatures: [
      'Stripe & Razorpay payment links embedded directly in issued invoices',
      'Automated email and WhatsApp reminders for unpaid balances',
      'Financial overview dashboard with monthly revenue metrics'
    ],
    results: [
      { metric: 'Unified Flow', label: 'Invoicing, inventory, and ledger accounting unified in one simple console.' },
      { metric: 'Zero Bloat', label: 'Replaces complex legacy ERPs with instant 2-click invoice creation.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200'
    ],
    timeline: 'Product Beta in Development',
    relatedCaseStudies: ['bill-now', 'xenstaff', 'commerce-platform-concept']
  },

  // 7. STAFFLY (HRMS)
  {
    slug: 'xenstaff',
    category: 'product',
    categoryLabel: 'Agile Resource Management',
    status: 'In Active Engineering',
    clientName: 'Staffly',
    industry: 'Agile Technical Pod Capacity & Team Management OS',
    services: [
      'Team Management Software',
      'Workflow Automation',
      'Role-Based Access Control',
      'Leave & Sprint Tracking'
    ],
    region: 'Internal / Multi-Market',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    summary: 'A modular HRMS and agile team management platform engineered to streamline employee directories, leave requests, attendance tracking, and internal technical pod capacity.',
    challenge: 'Early-stage and growing companies often coordinate leave, attendance, and team directories across informal chat apps and spreadsheets, leading to scheduling conflicts and lost records. Veluno is engineering Staffly to provide a centralized internal console.',
    velunoRole: 'Veluno is designing and building Staffly as a proprietary internal tool and upcoming SaaS platform for agile teams.',
    xenFirmRole: 'Veluno is designing and building Staffly as a proprietary internal tool and upcoming SaaS platform for agile teams.',
    approach: [
      {
        title: 'Role-Based Permission Matrix',
        description: 'Engineered granular access levels ensuring employees, managers, and administrators see only appropriate operational data.'
      },
      {
        title: 'Leave Approval Workflow',
        description: 'Designed a multi-stage request and approval system with automated status notifications.'
      },
      {
        title: 'Department Hierarchy Mapping',
        description: 'Structured visual organization charts mapping reporting structures across technical pods.'
      }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    featuresDelivered: [
      'Centralized employee directory with role definitions and contact records',
      'Leave request submission and manager approval status tracking',
      'Department mapping and reporting hierarchy views',
      'Role-based dashboard views (Admin, Manager, Employee)'
    ],
    results: [
      { metric: 'Sprint Visibility', label: 'Eliminates cross-team scheduling conflicts with centralized pod availability.' },
      { metric: 'Role Security', label: 'Strict RBAC isolation between management and team members.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200'
    ],
    timeline: 'Active Development',
    relatedCaseStudies: ['xenbill', 'bill-now', 'commerce-platform-concept']
  },

  // 8. VELOFLEET TELEMATICS
  {
    slug: 'fleet-tracking-platform',
    category: 'concept',
    categoryLabel: 'Fleet Logistics Architecture',
    status: 'Architecture Blueprint',
    clientName: 'VeloFleet Telematics',
    industry: 'Real-Time GPS Dispatch & Supply Chain Telematics',
    services: [
      'Mission-Critical System Architecture',
      'Custom Operational Software',
      'API & Telematics Integration',
      'Interactive Dispatch UI/UX'
    ],
    region: 'Global Architecture Concept',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    summary: 'An illustrative architecture blueprint demonstrating how a centralized web console connects GPS feeds, driver dispatch workflows, and inventory records into an auditable operational dashboard.',
    challenge: 'Mid-sized logistics operations frequently struggle with dispatchers managing vehicle status across disjointed spreadsheets, phone calls, and isolated GPS tools. This concept outlines our methodology for centralizing real-time operational status into an auditable web application.',
    velunoRole: 'Architectural blueprint and prototype UI design illustrating Veluno’s approach to operations software.',
    xenFirmRole: 'Architectural blueprint and prototype UI design illustrating Veluno’s approach to operations software.',
    approach: [
      {
        title: 'Workflow Mapping',
        description: 'Mapped dispatcher decision trees to understand where communication delays and misallocations occur during peak delivery hours.'
      },
      {
        title: 'Unified Operational Console',
        description: 'Designed a consolidated dashboard with interactive map views, vehicle statuses, and route history.'
      },
      {
        title: 'API Integration Design',
        description: 'Architected secure RESTful endpoints connecting GPS telemetry feeds directly to inventory and order records in PostgreSQL.'
      }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Leaflet', 'Tailwind CSS'],
    featuresDelivered: [
      'Interactive dispatch dashboard prototype with simulated vehicle markers',
      'Vehicle status filtering (In Transit, Loading, Idle, Maintenance)',
      'Route history inspection and timestamped milestone logs',
      'Auditable event trails and automated dispatch alerts'
    ],
    results: [
      { metric: 'Concrete Blueprint', label: 'Concrete architectural reference for mid-market fleet operators.' },
      { metric: 'High-Throughput', label: 'Modular microservice blueprint ready for high-throughput telematics ingestion.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
    ],
    timeline: 'Architecture Blueprint',
    relatedCaseStudies: ['commerce-platform-concept', 'xenstaff', 'xenbill']
  },

  // 9. CONNECTED COMMERCE
  {
    slug: 'commerce-platform-concept',
    category: 'concept',
    categoryLabel: 'Connected Commerce & Inventory Workflow',
    status: 'Architecture Blueprint',
    clientName: 'Connected Commerce & Inventory Workflow',
    industry: 'Multi-Storefront Commerce, Warehousing & Order Logistics',
    services: [
      'Headless Commerce Architecture',
      'Inventory Sync Logic',
      'Automated Order Dispatch Routing',
      'Unified Operational UI/UX'
    ],
    region: 'Omnichannel Architecture Concept',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=1200',
    summary: 'A comprehensive engineering blueprint demonstrating how modern retail brands synchronize online storefronts, physical retail POS terminals, and regional warehouse dispatch queues in sub-second intervals.',
    challenge: 'Growing omnichannel brands often face inventory synchronization lag between their web store, physical counters, and third-party marketplaces. This architecture blueprint models sub-second distributed inventory locking.',
    velunoRole: 'Architectural blueprint and UI/UX prototype engineering detailing Veluno’s approach to scalable commerce workflows.',
    xenFirmRole: 'Architectural blueprint and UI/UX prototype engineering detailing Veluno’s approach to scalable commerce workflows.',
    approach: [
      {
        title: 'Real-Time Inventory Reconciliation',
        description: 'Modeled event-driven distributed inventory locking preventing duplicate sales across online and retail channels.'
      },
      {
        title: 'Unified Dispatch Console',
        description: 'Designed warehouse picking, packing, and courier dispatch milestone tracking.'
      }
    ],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Tailwind CSS'],
    featuresDelivered: [
      'Omnichannel inventory synchronization blueprint',
      'Warehouse dispatch queue and courier handover management',
      'High-performance product catalog with multi-variant handling',
      'Customer order milestone telemetry'
    ],
    results: [
      { metric: 'Zero Overselling', label: 'Distributed inventory locking blueprint prevents double-allocation.' },
      { metric: 'Sub-Second', label: 'Event-driven reconciliation across multi-channel retail terminals.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=1200'
    ],
    timeline: 'Architecture Blueprint',
    relatedCaseStudies: ['bill-now', 'cavve', 'brandmatchbot']
  }
];
