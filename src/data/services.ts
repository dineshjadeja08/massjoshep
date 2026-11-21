export interface ServiceItem {
  id: string;
  name: string;
  pillar: string;
  title: string;
  tagline: string;
  capabilities: string[];
  deliverables: string[];
  techStack?: string[];
  aliases?: string[];
  content: string;
}

export const servicesData: ServiceItem[] = [
  // 1. Website Development
  {
    id: "website-development",
    name: "Website Development",
    pillar: "Web Platforms",
    aliases: ["veluno-web", "web-development"],
    title: "Website Development — High-Performance Corporate & Marketing Websites",
    tagline: "Custom business websites, high-converting landing pages, and headless CMS architectures engineered for commercial authority, 95+ PageSpeed scores, and predictable lead generation.",
    capabilities: [
      "Modern Corporate & Enterprise Websites",
      "High-Converting CRO Landing Pages",
      "Headless CMS Architecture (Sanity, Strapi, Contentful)",
      "Technical Core Web Vitals Optimization (LCP < 2.0s)",
      "Technical SEO & Structured Schema Markup"
    ],
    deliverables: [
      "Production-ready Next.js / React application with Tailwind CSS",
      "Component-driven responsive design system (Mobile, Tablet, Desktop)",
      "Custom headless CMS integration with intuitive authoring flows",
      "Guaranteed 95+ Google Lighthouse speed & accessibility benchmarks",
      "Complete DNS setup, SSL certification, and automated CI/CD pipeline"
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Sanity / Strapi", "Vercel / Netlify"],
    content: `## Modern Web Experiences Built for Commercial Results

At Veluno Softtech, we view your website as your most critical digital asset and primary commercial engine. Many growing businesses struggle with:
- **Clunky legacy websites:** Outdated designs that fail to reflect the caliber, trust, and maturity of your organization.
- **Slow loading speeds:** Bloated themes and plugins that cause 40%+ bounce rates before visitors even see your offer.
- **Rigid content management:** Complete reliance on external developers for simple copy, blog, or pricing page updates.
- **Weak conversion funnels:** Visitors arriving from ads or search but leaving without requesting a quote or booking a consultation.

Veluno Softtech delivers custom, clean, and blazingly fast websites engineered on modern frameworks that position your company as a commanding market leader.

## What Is Included

### 1. Discovery & Conversion Architecture
We analyze your target market, competitors, and buyer personas to craft a visual hierarchy that naturally steers high-intent prospects toward conversion.

### 2. Custom Responsive Frontend Engineering
Every page is hand-crafted with React, Next.js, and modern CSS—completely free of bloated page builders, unnecessary scripts, or fragile dependencies.

### 3. Headless CMS Integration
We empower your marketing team with a modern headless CMS dashboard so you can publish blog articles, modify text, and launch new landing pages in minutes without touching code.

### 4. Technical SEO Foundation
Every site launches with pre-configured JSON-LD structured schema, dynamic Open Graph social cards, XML sitemaps, and optimized asset delivery for search engines.

## Frequently Asked Questions

#### How long does a custom website development project take?
Most corporate websites are completed in 3 to 6 weeks, encompassing discovery, UI design, full-stack development, and thorough QA.

#### Will our team be able to update content without developer help?
Yes. We connect an intuitive headless CMS where any team member can edit copy, publish case studies, and upload media without risk of breaking layouts.

#### Do we get 100% intellectual property ownership?
Yes. Upon project completion and final milestone approval, full source code and all digital assets are transferred completely to your company.`
  },

  // 2. Web Application Development
  {
    id: "web-application-development",
    name: "Web Application Development",
    pillar: "Custom SaaS",
    aliases: ["veluno-products", "web-apps", "saas-development"],
    title: "Web Application Development — Scalable SaaS & Client Portals",
    tagline: "Multi-tenant SaaS products, customer portals, subscription billing systems, and cloud web apps engineered for high concurrency, rock-solid security, and effortless scaling.",
    capabilities: [
      "Multi-Tenant SaaS Platform Engineering",
      "Customer & Partner Self-Service Portals",
      "Role-Based Access Control (RBAC) & OAuth",
      "Stripe & Recurring Subscription Billing Engines",
      "Relational Database Schema Design (PostgreSQL / MySQL)"
    ],
    deliverables: [
      "Modular full-stack web application with React & Node.js / Python",
      "Documented RESTful & GraphQL backend APIs",
      "Stripe / payment gateway integration with webhooks & invoicing",
      "SOC 2 / ISO-aligned encryption at rest and in transit",
      "Automated automated staging and production deployment pipelines"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Python / FastAPI", "PostgreSQL", "Redis", "Docker"],
    content: `## Scalable Web Applications Built for High Concurrency

Turning a product concept into a scalable web application requires disciplined software architecture, secure data modeling, and seamless user experiences. Common challenges include:
- **Architectural bottlenecks:** Applications built on fragile shortcuts that crash under moderate user concurrency.
- **Security vulnerabilities:** Unvetted authorization checks allowing horizontal privilege escalation across accounts.
- **Complex billing logic:** Prorated subscriptions, failed payment recovery, and invoice generation causing churn.
- **Sluggish database queries:** Poorly indexed relational tables causing dashboard timeouts as row counts grow.

Veluno Softtech engineers enterprise-grade web applications with modular microservices, resilient data stores, and intuitive user interfaces.

## What Is Included

### 1. Data Schema & Architecture Blueprinting
We model domain entities, define database foreign keys, and establish caching strategies to ensure sub-100ms API response budgets.

### 2. Full-Stack Product Engineering
Complete frontend and backend development with modern component architectures, type-safe API contracts, and real-time state synchronization.

### 3. Enterprise Authentication & Security
Multi-factor authentication (MFA), role-based permission matrices, tenant data isolation, and cryptographic secret management.

### 4. Subscription & Financial Workflows
End-to-end integration with Stripe Billing, automated tax calculations, tier upgrades, and automated invoice PDF generation.

## Frequently Asked Questions

#### Can you take over or modernize an existing web application?
Yes. We perform architectural audits and execute phased Strangler-Fig migrations, refactoring legacy code without interrupting active users.

#### How do you ensure our customer data is isolated in a multi-tenant app?
We enforce strict tenant-scoped database queries, foreign key isolation, and automated authorization middleware on every API endpoint.`
  },

  // 3. Mobile App Development
  {
    id: "mobile-app-development",
    name: "Mobile App Development",
    pillar: "Mobile Engineering",
    aliases: ["veluno-mobile", "mobile-apps", "ios-android"],
    title: "Mobile App Development — Native iOS, Android & Cross-Platform Applications",
    tagline: "Consumer and enterprise mobile apps engineered for fluid 60fps performance, offline-first reliability, biometric security, and rapid App Store & Google Play distribution.",
    capabilities: [
      "Cross-Platform React Native & Flutter Engineering",
      "Native iOS (Swift / SwiftUI) & Android (Kotlin) Development",
      "Offline-First Data Sync & Local SQLite Caching",
      "Biometric Authentication (FaceID / Fingerprint)",
      "Push Notification & Event Telemetry Infrastructure"
    ],
    deliverables: [
      "Production-ready iOS (.ipa) and Android (.aab) app binaries",
      "App Store & Google Play Store submission & review compliance",
      "Offline database sync engine with automatic background reconciliation",
      "Push notification pipelines (Apple APNs & Google FCM)",
      "Clean architecture repository with 100% source code ownership"
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "SQLite", "Firebase / APNs", "Node.js"],
    content: `## Mission-Critical Mobile Applications Built for Scale

In today's mobile-first market, substandard mobile applications cause immediate user uninstalls and damage brand trust. Common mobile development bottlenecks include:
- **Janky frame rates and sluggish UI:** Slow render cycles that frustrate users and hurt store ratings.
- **Offline failures:** Applications that crash or become unusable when network connectivity drops or fluctuates.
- **Store rejection delays:** Lengthy review cycles caused by non-compliant permissions, privacy policies, or unoptimized assets.
- **Duplicated maintenance costs:** Maintaining two completely disjointed codebases for iOS and Android.

Veluno Softtech builds fluid, reliable native and cross-platform mobile applications designed for sustained retention and seamless store distribution.

## What Is Included

### 1. Cross-Platform & Native Architecture
We select the optimal stack—whether unified React Native / Flutter codebases for maximum time-to-market velocity, or native Swift / Kotlin for hardware-intensive workloads.

### 2. Offline-First Synchronization
Local SQLite and WatermelonDB caching engines that ensure users can view and edit records offline, synchronizing automatically when connection returns.

### 3. Device Hardware & Sensor Integration
Seamless integration with GPS tracking, biometric authentication, camera pipelines, barcode scanners, and Bluetooth peripherals.

### 4. App Store Certification & Deployment
Complete guidance through Apple App Store and Google Play compliance, certificate signing, privacy declarations, and release management.

## Frequently Asked Questions

#### Should we build native or cross-platform?
For 90% of business applications, React Native or Flutter offers identical native performance while saving 40-50% in development and maintenance costs. For apps requiring custom low-level GPU or Bluetooth hardware communication, we build native.

#### Who handles the App Store submission process?
Veluno Softtech handles the entire submission process, including metadata configuration, build signing, privacy questionnaire verification, and review resolution.`
  },

  // 4. E-Commerce Development
  {
    id: "ecommerce-development",
    name: "E-Commerce Development",
    pillar: "Commerce Solutions",
    aliases: ["ecommerce", "shopify", "headless-commerce"],
    title: "E-Commerce Development — Headless & High-Converting Commerce Platforms",
    tagline: "Fast, frictionless e-commerce platforms, custom shopping carts, inventory integrations, and multi-currency checkout experiences engineered to maximize average order value.",
    capabilities: [
      "Custom Shopify Plus & Headless Commerce Stores",
      "Multi-Currency & International Tax Calculations",
      "Real-Time Inventory & ERP Synchronization",
      "Sub-Second Product Filtering & Algolia Search",
      "High-Converting One-Page Checkout Architectures"
    ],
    deliverables: [
      "Custom responsive storefront engineered for sub-2s mobile loading",
      "Stripe, PayPal, Razorpay & Apple Pay checkout integrations",
      "Inventory synchronization with your warehouse or accounting software",
      "Automated transactional emails for order confirmations and tracking",
      "Customer account portals with saved addresses and re-ordering"
    ],
    techStack: ["Shopify Plus", "Next.js Commerce", "React", "Node.js", "Stripe API", "PostgreSQL", "Tailwind CSS"],
    content: `## Modern E-Commerce Engineered for Maximum Conversion

Standard off-the-shelf themes often become slow, rigid, and cluttered with third-party plugins that drag down conversions. E-commerce merchants routinely battle:
- **Abandoned carts:** Slow checkout steps and clunky forms causing shoppers to drop off at the payment step.
- **Inventory discrepancies:** Selling items that are out of stock due to disconnected inventory systems.
- **Slow mobile catalog browsing:** Heavy JavaScript bundles causing shoppers on mobile networks to bounce.
- **Rigid promotional capabilities:** Inability to run custom bundle discounts, tiered B2B pricing, or personalized promotions.

Veluno Softtech engineers custom, fast e-commerce platforms that deliver smooth shopping experiences and drive higher customer lifetime value.

## What Is Included

### 1. High-Speed Storefront Architecture
Next.js and modern frontend architectures that load product pages instantly, ensuring shoppers browse without waiting.

### 2. Frictionless Checkout & Payment Gateways
Streamlined checkout flows supporting Apple Pay, Google Pay, credit cards, and local payment methods with automated fraud detection.

### 3. Inventory & ERP Webhooks
Real-time bidirectional synchronization between your storefront, warehouse fulfillment centers, and ERP systems.

### 4. Custom B2B & Wholesale Capabilities
Tiered wholesale pricing, bulk order forms, credit account billing, and custom minimum order quantities.

## Frequently Asked Questions

#### Can you migrate our existing store from WooCommerce or Magento?
Yes. We safely migrate customer records, product catalogs, historical orders, and SEO redirects without downtime or lost search rankings.

#### How do you ensure checkout security?
All payment data is tokenized and processed via PCI-DSS Level 1 compliant gateways (Stripe, Shopify Checkout), ensuring zero cardholder data touches your server.`
  },

  // 5. UI/UX Design & Pro Branding
  {
    id: "ui-ux-design",
    name: "UI/UX Design & Branding",
    pillar: "Digital Design",
    aliases: ["veluno-branding", "branding", "design-systems"],
    title: "UI/UX Design & Pro Brand Identity — Authority-Building Systems",
    tagline: "Strategic UI/UX design, interactive Figma prototypes, design systems, and cohesive corporate visual identities that turn digital products into intuitive, trustworthy experiences.",
    capabilities: [
      "Intuitive Product UI/UX Architecture & Wireframing",
      "Interactive Figma Prototypes & User Testing",
      "Comprehensive Design Systems with Reusable Tokens",
      "Corporate Visual Identity, Vector Logos & Brand Books",
      "Accessibility Standards (WCAG 2.1 AA Compliance)"
    ],
    deliverables: [
      "Complete Figma design file with organized components and typography",
      "Clickable interactive prototype for stakeholder and user validation",
      "Design token specifications (colors, spacing, typography, shadows)",
      "Master vector logo suite (SVG, EPS, PNG, Favicons, App Icons)",
      "Comprehensive Brand Guidelines Document (PDF)"
    ],
    techStack: ["Figma", "Design Tokens", "Tailwind CSS", "WCAG 2.1", "SVG Vector"],
    content: `## Design That Communicates Authority and Converts

Great software is defined by how effortlessly users can achieve their goals. When design is neglected, software products face:
- **User confusion & high support tickets:** Users getting stuck on simple tasks due to poor visual hierarchy.
- **Disjointed user interfaces:** Different screens looking like they were built by different companies.
- **Amateur branding:** Visual identities that fail to communicate the enterprise caliber of your services.
- **Developer rework:** Developers spending hours guessing padding, font sizes, and responsive behaviors.

Veluno Softtech designs intuitive, modern, and accessible software interfaces backed by disciplined design systems and authoritative corporate branding.

## What Is Included

### 1. User Journey Mapping & Wireframing
We outline every user flow, edge case, and navigation pathway before writing visual assets, ensuring zero cognitive friction.

### 2. Interactive High-Fidelity Prototypes
Realistic Figma prototypes that allow you to click through, test, and refine your product before code development begins.

### 3. Comprehensive Design Systems
A modular library of buttons, form inputs, modals, navigation bars, and data tables that streamline development and ensure visual harmony.

### 4. Corporate Brand Identity
Clean, geometric vector logos, cohesive color palettes, typography guidelines, and branded collateral tailored for commercial leadership.

## Frequently Asked Questions

#### Do you provide design-to-code handover for our developers?
Yes. Our Figma files are organized with auto-layout, named variables, and design tokens matching Tailwind CSS and React component structures.

#### Can you redesign an existing software interface without breaking backend functionality?
Yes. We redesign user experiences while preserving underlying database schemas and API response structures.`
  },

  // 6. Custom Software Development
  {
    id: "custom-software-development",
    name: "Custom Software Development",
    pillar: "Custom Engineering",
    aliases: ["custom-software", "veluno-systems"],
    title: "Custom Software Development — Tailored Business Engines",
    tagline: "Purpose-built business software, internal operations portals, automated data processing pipelines, and proprietary tools engineered around your exact commercial workflow.",
    capabilities: [
      "Bespoke Business Process Automation",
      "Internal Operations & Admin Dashboards",
      "Database Modeling & Performance Tuning",
      "Automated ETL & Reporting Pipelines",
      "Legacy Software Modernization & Refactoring"
    ],
    deliverables: [
      "Bespoke software application tailored to your unique workflows",
      "Clean, documented, and modular codebase with 100% IP transfer",
      "PostgreSQL / database architecture with optimized indexes",
      "Role-based staff permissions and comprehensive audit logging",
      "Comprehensive deployment documentation and staff training session"
    ],
    techStack: ["Node.js", "Python", "React", "PostgreSQL", "Docker", "AWS / Azure", "Redis"],
    content: `## Software Tailored to How Your Business Actually Operates

Off-the-shelf software often forces growing companies into rigid operational constraints, charging exorbitant per-seat licensing fees. Growing organizations face:
- **Manual spreadsheet coordination:** Hours wasted copying data across disjointed spreadsheets and desktop apps.
- **Ballooning software subscriptions:** Paying thousands of dollars each month for bloated SaaS tools where you use only 10% of features.
- **Operational blind spots:** Inability to generate real-time reports tailored to your specific business KPIs.
- **Vendor lock-in:** Critical business data trapped in proprietary systems with limited export options.

Veluno Softtech develops custom business software built precisely around your operational rules, eliminating repetitive labor and unlocking permanent competitive advantages.

## What Is Included

### 1. Deep Operational Workflow Mapping
We sit down with your key stakeholders to understand every operational handoff, approval bottleneck, and calculation rule.

### 2. Tailored Database & Logic Architecture
We build relational data models that reflect your true business entities—orders, dispatches, inventory, payments, and staff tasks.

### 3. Role-Based Internal Interfaces
Clean, ergonomic web interfaces for operations managers, field agents, and executives with granular permission controls.

### 4. Automated Reporting & Business Intelligence
Automated dashboards and scheduled email reports that summarize revenue, labor hours, and delivery metrics in real time.

## Frequently Asked Questions

#### What are the cost advantages of custom software vs off-the-shelf SaaS?
While custom software requires upfront investment, it eliminates recurring per-seat monthly fees, provides 100% intellectual property ownership, and adapts to your business rather than forcing you to adapt to it.

#### Who owns the code and data?
You do. We provide 100% source code ownership, repository access, and database credentials upon completion with zero recurring vendor royalties.`
  },

  // 7. CRM & ERP Solutions
  {
    id: "crm-erp-development",
    name: "CRM & ERP Solutions",
    pillar: "Enterprise Systems",
    aliases: ["crm-erp", "enterprise-software", "api-integrations"],
    title: "CRM & ERP Solutions — Centralized Enterprise Operations",
    tagline: "Custom CRM and lightweight ERP solutions that integrate inventory, customer relationships, order fulfillment, and financial accounting into one unified single source of truth.",
    capabilities: [
      "Custom CRM Pipeline & Lead Tracking Systems",
      "ERP Inventory & Multi-Warehouse Tracking",
      "Third-Party API & Webhook Integrations",
      "Automated Invoicing & Payment Reconciliation",
      "Multi-Department Communication Workflows"
    ],
    deliverables: [
      "Centralized operational database and management interface",
      "Automated webhook integrations with third-party logistics/accounting APIs",
      "Multi-stage pipeline tracking with automated milestone triggers",
      "Automated invoice and PDF purchase order generation",
      "Full role-based security permissions and administrative activity logs"
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Redis Queues", "REST APIs", "Tailwind CSS"],
    content: `## Centralize Operations with a Unified Single Source of Truth

When departments use disconnected systems, information gaps create delays, duplicate work, and billing errors. Organizations often struggle with:
- **Fragmented customer records:** Sales, support, and billing teams holding contradictory customer information.
- **Delayed inventory synchronization:** Sales teams promising items that warehouse staff have already dispatched.
- **Manual invoice reconciliation:** Accounting teams spending days matching bank deposits to physical receipts.
- **Complex enterprise ERP bloat:** Legacy enterprise software that requires 12 months to deploy and costs millions in consulting.

Veluno Softtech designs streamlined, intuitive CRM and lightweight ERP systems that connect your teams, automate repetitive status handoffs, and give leadership instant visibility.

## What Is Included

### 1. Unified Customer & Account 360
A consolidated dashboard displaying client communication history, active quotes, invoices, and service requests in one place.

### 2. Inventory & Order Management
Real-time tracking of raw materials, warehouse stock levels, purchase orders, and customer dispatch milestones.

### 3. API Integrations & Webhooks
Direct bi-directional data flow connecting payment gateways, shipping carriers, and existing accounting packages.

### 4. Automated Alerts & Document Generation
Automated generation of purchase orders, dispatch notes, and invoice PDFs triggered by milestone updates.

## Frequently Asked Questions

#### Can this integrate with our existing accounting or logistics providers?
Yes. We build custom API connectors and webhook consumers to sync data directly with accounting software, port portals, and freight carriers.

#### Is a custom CRM/ERP easier for employees to learn than legacy enterprise packages?
Significantly easier. Because we design the interface specifically around your company's terminology and daily tasks, onboarding takes hours instead of weeks.`
  },

  // 8. AI & Business Automation
  {
    id: "ai-automation",
    name: "AI & Business Automation",
    pillar: "Artificial Intelligence",
    aliases: ["ai-systems", "voice-ai", "automation"],
    title: "AI & Business Automation — Conversational Voice & Intelligent Workflows",
    tagline: "Sub-second conversational voice AI agents, automated telephony assistants, intelligent document processing, and AI workflows that scale customer support and operational throughput 24/7.",
    capabilities: [
      "Sub-Second Conversational Voice AI Telephony",
      "Multilingual Natural Language Voice Agents",
      "Intelligent Document & Invoice OCR Processing",
      "Automated CRM Lead Qualification & Calendar Booking",
      "Custom RAG (Retrieval-Augmented Generation) Knowledge Bases"
    ],
    deliverables: [
      "Production-ready Conversational Voice AI pipeline via WebRTC / SIP",
      "Trained model agents fluent in English and regional languages",
      "Automated calendar booking and CRM contact extraction webhooks",
      "Executive analytics dashboard with call logs, audio playback, and sentiment telemetry",
      "Complete cloud deployment architecture with scalable concurrency"
    ],
    techStack: ["Python", "FastAPI", "WebRTC", "OpenAI Realtime API", "Twilio / SIP", "PostgreSQL", "React"],
    content: `## Put Business Operations on Intelligent Autopilot 24/7

High support volumes and manual customer intake drain company resources and lead to missed opportunities during non-business hours. Common challenges include:
- **Missed inbound phone calls:** High-intent prospects calling after hours and hanging up on generic answering machines.
- **Rigid IVR menus:** Frustrating 'press 1 for sales' telephone trees that alienate high-value callers.
- **Manual data re-entry:** Staff spending hours manually typing customer details from calls and emails into CRMs.
- **High customer support labor costs:** Employing large shifts of representatives to answer repetitive queries.

Veluno Softtech develops natural, human-speed conversational voice AI agents and automated business pipelines that handle inquiries, schedule appointments, and update databases instantly.

## What Is Included

### 1. Sub-Second Real-Time Conversational Turn-Taking
Streaming audio pipelines engineered on WebRTC and neural speech synthesis, allowing callers to talk naturally without awkward robotic latency.

### 2. Domain-Specific Business Knowledge
Your AI agent is trained specifically on your company's services, pricing guidelines, FAQs, and operational rules, ensuring accurate and compliant answers.

### 3. Automated Telephony & SIP Integration
Direct integration with phone numbers via Twilio or enterprise SIP trunks, routing calls seamlessly to human staff when specialized assistance is needed.

### 4. Instant CRM & Calendar Actions
During the call, the AI agent extracts the caller's name, requirements, and preferred meeting times, booking calendar appointments and dispatching email confirmations in real time.

## Frequently Asked Questions

#### How fast is the voice AI response time?
Our voice pipelines achieve sub-600ms conversational turn-taking, allowing natural, human-grade conversational interruptions and fluid responses.

#### Can the voice agent speak regional accents or languages?
Yes. We train and fine-tune models to converse fluently in English, regional languages, and natural accents, ensuring clear and comfortable caller experiences.`
  },

  // 9. Digital Marketing & Social Media (Veluno Growth)
  {
    id: "veluno-growth",
    name: "Digital Marketing & Social Media",
    pillar: "Growth Engineering",
    aliases: ["digital-marketing", "social-media", "performance-marketing", "seo-cro"],
    title: "Digital Marketing & Social Media — Performance Growth & Brand Reach",
    tagline: "Full-funnel digital marketing, targeted performance advertising (Google & Meta), dedicated B2B social media handling (LinkedIn, X, Instagram), and data-driven conversion rate optimization.",
    capabilities: [
      "Targeted Paid Advertising (Google Search & Meta Ads)",
      "Dedicated Social Media Management & Creative Graphics",
      "B2B Thought Leadership & Executive Branding (LinkedIn)",
      "Technical Core Web Vitals SEO & Schema Architecture",
      "Conversion Rate Optimization (CRO) & Funnel Analytics"
    ],
    deliverables: [
      "Multi-channel paid advertising campaigns with strict ROAS thresholds",
      "Monthly social media editorial calendars with custom vector graphics & copy",
      "Technical SEO auditing and high-ranking topic clustering",
      "A/B tested conversion landing page variants",
      "Executive bi-weekly analytics reports tracking pipeline and customer acquisition costs"
    ],
    techStack: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "GA4", "PostHog", "GTM"],
    content: `## Engineering-Led Digital Marketing & Social Media Management

Marketing without technical rigor and clean attribution leads to wasted spend and vanity metrics. Growing businesses routinely face:
- **Invisible in organic search:** High-intent buyers search for solutions, but competitors dominate the rankings.
- **Inconsistent social media presence:** Sparse, uninspired posts that fail to build community or establish thought leadership.
- **Leaky conversion funnels:** Traffic reaches your pages, but slow speeds and confusing layouts cause visitors to bounce.
- **Attribution blind spots:** Running campaigns without knowing which specific channels generate closed, paying customers.

Veluno Softtech bridges full-stack engineering with commercial strategy. We execute digital marketing, high-impact social media management, and precision analytics that turn traffic into predictable revenue.

## What Is Included

### 1. Dedicated Social Media Handling & Content Creation
Strategic content calendars, custom graphics, high-engagement carousels, and executive thought leadership on LinkedIn, X, and Instagram.

### 2. High-Intent Digital Advertising
Targeted campaigns across Google Search, LinkedIn Ads, and Meta designed around commercial buyer intents and strict cost-per-acquisition (CPA) limits.

### 3. Technical SEO & Search Authority
Structuring metadata, semantic HTML5, Core Web Vitals, and JSON-LD schema so search engines index and rank your pages with lasting authority.

### 4. Conversion Rate Optimization (CRO) & Funnels
Iterative A/B testing of headlines, layouts, micro-interactions, and forms to maximize lead capture without increasing ad spend.

## Frequently Asked Questions

#### How do you measure digital marketing ROI?
We install server-side conversion tracking (GA4, GTM, Meta CAPI) that maps every inbound enquiry directly to the campaign and keyword that produced it.

#### What social platforms do you specialize in?
We specialize in B2B thought leadership on LinkedIn and X (Twitter), alongside brand storytelling and visual engagement on Instagram and YouTube.`
  },

  // 10. Proactive Maintenance & Cloud Ops (Veluno Care)
  {
    id: "veluno-care",
    name: "Maintenance & Cloud Ops",
    pillar: "Continuous Care",
    aliases: ["maintenance", "cloud-ops"],
    title: "Maintenance & Cloud Ops — Proactive Security & 24/7 SLA Uptime",
    tagline: "Proactive security audits, 24/7 uptime monitoring, managed cloud deployments, and continuous engineering sprints to keep your software fast, secure, and evolving.",
    capabilities: [
      "24/7 Uptime & Error Telemetry Monitoring",
      "Proactive Security Audits & Patch Management",
      "Automated Off-Site Backups & Disaster Recovery",
      "Database Query Optimization & Performance Tuning",
      "Dedicated Monthly Engineering Sprint Capacity"
    ],
    deliverables: [
      "Round-the-clock automated uptime and error response monitoring",
      "Monthly dependency security audits and framework updates",
      "Automated off-site database backups with verified restore procedures",
      "Dedicated monthly engineering sprint hours for feature enhancements",
      "Executive monthly system health and reliability reporting"
    ],
    techStack: ["AWS", "Google Cloud", "Docker", "Datadog / Sentry", "PostgreSQL", "GitHub Actions"],
    content: `## Continuous Engineering & Mission-Critical Support

Launching software is day one of your operational lifecycle. Without proactive maintenance, applications suffer from:
- **Security vulnerabilities:** Unpatched open-source packages exposing customer data to exploits.
- **Unexpected downtime:** Traffic spikes or database locks crashing servers during peak business hours.
- **Creeping technical debt:** Minor bugs accumulating until the application becomes slow and unstable.
- **No dedicated support:** Scrambling to find an engineer when critical production errors arise.

Veluno Softtech provides guaranteed peace of mind. We manage your cloud infrastructure, monitor system health around the clock, and allocate dedicated monthly engineering capacity to keep your software evolving.

## What Is Included

### 1. 24/7 Uptime & Error Telemetry
Real-time monitoring that alerts our engineering team immediately if response times degrade or production errors occur.

### 2. Proactive Security Audits & Patching
Auditing dependencies, applying critical security patches, and hardening cloud configurations before vulnerabilities can be exploited.

### 3. Database Health & Automated Backups
Scheduled off-site snapshots, database index optimization, and disaster recovery testing so your business data is always safe.

### 4. Dedicated Monthly Engineering Hours
A steady pool of engineering hours every month for minor feature requests, UX polishes, and workflow refinements.

## Frequently Asked Questions

#### What is your incident response SLA?
For critical production incidents affecting availability, our engineering response window is under 30 minutes with 24/7 escalation protocols.

#### Can we roll over unused monthly engineering hours?
Yes. Unused monthly sprint capacity rolls over for up to 60 days, giving you the flexibility to pool hours for larger feature sprints.`
  }
];
