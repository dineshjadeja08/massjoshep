import { z } from 'zod';

export const caseStudySchema = z.object({
  slug: z.string(),
  category: z.enum(['client', 'product', 'concept']),
  categoryLabel: z.string(),
  status: z.string(),
  clientName: z.string(),
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
  // 1. ZYLIN VOICE AI
  {
    slug: 'zylinn-ai',
    category: 'product',
    categoryLabel: 'Voice AI',
    status: 'Live Beta',
    clientName: 'Zylin Voice AI',
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
    challenge: 'Businesses lose high-intent customer leads and face surging support costs when constrained by standard office hours and manual call agents. Traditional IVR telephone trees frustrate users with rigid numbered menus. Zylin Voice AI delivers natural, human-speed conversational agents fluent in regional accents and business logic.',
    velunoRole: 'Veluno is the architect and core engineering partner for Zylin Voice AI, developing real-time sub-second audio pipelines, multilingual natural language understanding, automated CRM webhooks, and executive telemetry dashboards.',
    xenFirmRole: 'Veluno is the architect and core engineering partner for Zylin Voice AI, developing real-time sub-second audio pipelines, multilingual natural language understanding, automated CRM webhooks, and executive telemetry dashboards.',
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
    relatedCaseStudies: ['linksync', 'xenbill', 'fleet-tracking-platform']
  },

  // 2. LINKSYNK PRO
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
      'Custom domain mapping (e.g., links.yourbrand.com) via automated SSL provisioning',
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
    relatedCaseStudies: ['zylinn-ai', 'xenbill', 'cavve']
  },

  // 3. CAVVE LUXURY ATELIER
  {
    slug: 'cavve',
    category: 'concept',
    categoryLabel: 'High-Fashion Digital Storefront',
    status: 'In Active Engineering',
    clientName: 'CAVVE Luxury Atelier',
    industry: 'Editorial E-Commerce & Headless Retail',
    services: [
      'E-Commerce Storefront Development',
      'Editorial UI/UX Design System',
      'Headless Product Catalog Architecture',
      'Frictionless Mobile Checkout'
    ],
    region: 'International E-Commerce',
    heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200',
    summary: 'A premium fashion and lifestyle e-commerce platform engineered with editorial aesthetics, collection lookbooks, and an immersive catalog browsing experience.',
    challenge: 'High-end apparel brands need digital storefronts that mirror editorial publications rather than crowded generic marketplaces. CAVVE Luxury Atelier is engineered to balance high-resolution visual storytelling with fast, frictionless mobile shopping.',
    velunoRole: 'Veluno is designing the brand identity system, crafting the responsive storefront UI, and architecting the headless product catalog schema.',
    xenFirmRole: 'Veluno is designing the brand identity system, crafting the responsive storefront UI, and architecting the headless product catalog schema.',
    approach: [
      {
        title: 'Editorial Typography & Spacing',
        description: 'Implemented a bespoke typography scale, high-resolution imagery aspect ratios, and minimal distraction layouts.'
      },
      {
        title: 'Visual Collection Filtering',
        description: 'Designed intuitive category, size, and seasonal collection navigation allowing shoppers to browse apparel effortlessly.'
      },
      {
        title: 'Fast Client-Side Experience',
        description: 'Built on React and Vite with optimized image lazy-loading to ensure rapid browsing across lookbook galleries.'
      }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Headless API Design', 'PostgreSQL'],
    featuresDelivered: [
      'Editorial lookbook and collection showcase layout',
      'Responsive product grid with high-resolution imagery support',
      'Filterable catalog by collection, size, and category',
      'Mobile-optimized navigation and touch-friendly product carousels'
    ],
    plannedFeatures: [
      'Production checkout and payment gateway integration (Stripe / Razorpay)',
      'Real-time inventory reservation and warehouse sync backend',
      'User customer accounts and order tracking dashboard'
    ],
    results: [
      { metric: 'Sub-Second', label: 'Page navigation transitions across lookbook collections.' },
      { metric: 'Mobile-First', label: 'Touch-optimized catalog grid reducing mobile bounce rates.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200'
    ],
    timeline: 'Active Development',
    relatedCaseStudies: ['commerce-platform-concept', 'linksync']
  },

  // 4. VELOFLEET TELEMATICS
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
      },
      {
        title: 'Role-Based Permissions',
        description: 'Structured granular access controls for dispatchers, fleet managers, and warehouse supervisors.'
      }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Leaflet', 'Tailwind CSS'],
    featuresDelivered: [
      'Interactive dispatch dashboard prototype with simulated vehicle markers',
      'Vehicle status filtering (In Transit, Loading, Idle, Maintenance)',
      'Route history inspection and timestamped milestone logs',
      'Auditable event trails and automated dispatch alerts'
    ],
    plannedFeatures: [
      'Live WebSocket telematics streaming for production GPS hardware',
      'Automated SMS dispatch notification webhooks for delivery recipients'
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

  // 5. BILLSYNC PRO
  {
    slug: 'xenbill',
    category: 'product',
    categoryLabel: 'Financial & ERP Software',
    status: 'Beta / Active Validation',
    clientName: 'BillSync Pro',
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
    challenge: 'Small businesses often outgrow manual spreadsheets but cannot justify the steep learning curves and high monthly costs of enterprise ERP platforms. BillSync Pro provides structured, predictable invoicing and stock control without administrative complexity.',
    velunoRole: 'In-house product development. Veluno architects the data schema, designs the UI/UX dashboard, and builds the invoice generation, inventory tracking, and calculation engine.',
    xenFirmRole: 'In-house product development. Veluno architects the data schema, designs the UI/UX dashboard, and builds the invoice generation, inventory tracking, and calculation engine.',
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
    relatedCaseStudies: ['xenstaff', 'linksync', 'commerce-platform-concept']
  },

  // 6. STAFFPULSE HRMS
  {
    slug: 'xenstaff',
    category: 'product',
    categoryLabel: 'Agile Resource Management',
    status: 'In Active Engineering',
    clientName: 'StaffPulse HRMS',
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
    challenge: 'Early-stage and growing companies often coordinate leave, attendance, and team directories across informal chat apps and spreadsheets, leading to scheduling conflicts and lost records. Veluno is engineering StaffPulse HRMS to provide a centralized internal console.',
    velunoRole: 'Veluno is designing and building StaffPulse HRMS as a proprietary internal tool and upcoming SaaS platform for agile teams.',
    xenFirmRole: 'Veluno is designing and building StaffPulse HRMS as a proprietary internal tool and upcoming SaaS platform for agile teams.',
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
    plannedFeatures: [
      'Automated monthly attendance report generation',
      'Payroll calculation integration and payslip generation modules',
      'Slack and email notification webhooks'
    ],
    results: [
      { metric: 'Sprint Visibility', label: 'Eliminates cross-team scheduling conflicts with centralized pod availability.' },
      { metric: 'Role Security', label: 'Strict RBAC isolation between management and team members.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200'
    ],
    timeline: 'Product in Active Development',
    relatedCaseStudies: ['xenbill', 'zylinn-ai', 'fleet-tracking-platform']
  },

  // 7. OMNISYNC COMMERCE ENGINE
  {
    slug: 'commerce-platform-concept',
    category: 'concept',
    categoryLabel: 'Retail Architecture Blueprint',
    status: 'Architecture Blueprint',
    clientName: 'OmniSync Commerce Engine',
    industry: 'Multi-Channel Retail & Real-Time Warehouse Synchronization',
    services: [
      'Headless Storefront Architecture',
      'Central Inventory Reconciliation',
      'Backend & API Integrations',
      'Transactional Database Design'
    ],
    region: 'Global Architecture Concept',
    heroImage: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200',
    summary: 'An illustrative architecture blueprint demonstrating how headless storefronts, central inventory databases, and payment workflows synchronize without manual data re-entry or stock overselling.',
    challenge: 'Retail businesses that outgrow standard storefronts often suffer from inventory discrepancies between physical stock and online channels, requiring tedious manual reconciliation and leading to order fulfillment delays.',
    velunoRole: 'System design and data schema blueprint created by Veluno to guide custom retail software builds.',
    xenFirmRole: 'System design and data schema blueprint created by Veluno to guide custom retail software builds.',
    approach: [
      {
        title: 'Domain Modeling',
        description: 'Mapped entity relationships between products, warehouse stock levels, payment intents, and fulfillment states.'
      },
      {
        title: 'Event-Driven Synchronization',
        description: 'Outlined webhook-based syncing between payment gateways and inventory allocation services to eliminate stock over-selling.'
      },
      {
        title: 'Modular Backend APIs',
        description: 'Designed documented REST endpoints decoupling frontend customer experience from underlying database logic.'
      },
      {
        title: 'Audit & Reconciliation',
        description: 'Created transactional logs to trace every price adjustment and inventory mutation.'
      }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'Tailwind CSS'],
    featuresDelivered: [
      'Headless inventory allocation schema blueprint',
      'Multi-warehouse stock reservation logic flowcharts',
      'Payment intent webhook error-handling specifications',
      'Real-time reconciliation pipeline architecture'
    ],
    plannedFeatures: [
      'Multi-currency automated settlement reporting',
      'Barcode scanner mobile integration endpoints'
    ],
    results: [
      { metric: 'Zero Overselling', label: 'Architectural blueprint preventing overselling via atomic stock reservations.' },
      { metric: 'Modular Decoupling', label: 'Decoupled storefront enabling independent UI refreshes and API scaling.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200'
    ],
    timeline: 'Architecture Blueprint',
    relatedCaseStudies: ['cavve', 'xenbill', 'fleet-tracking-platform']
  }
];