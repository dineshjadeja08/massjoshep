export interface ServiceItem {
  id: string;
  name: string;
  pillar: string;
  title: string;
  tagline: string;
  capabilities: string[];
  deliverables: string[];
  aliases?: string[];
  content: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "veluno-web",
    name: "Veluno Web",
    pillar: "Veluno Web",
    aliases: ["web-development", "ui-ux-design"],
    title: "Veluno Web — High-Performance Websites & E-Commerce",
    tagline: "Business websites, high-converting landing pages, e-commerce platforms, and custom CMS solutions engineered for authority and business growth.",
    capabilities: [
      "Modern Enterprise Websites",
      "High-Converting Landing Pages",
      "Full-Featured E-Commerce Platforms",
      "Headless CMS Architecture",
      "Responsive UI/UX & Design Systems"
    ],
    deliverables: [
      "Production-ready Next.js / React application",
      "Component-driven responsive design system",
      "Custom CMS integration & admin authoring flow",
      "Optimized Core Web Vitals (LCP < 2.5s, 95+ PageSpeed)",
      "Technical SEO & Schema markup pre-configured"
    ],
    content: `## Modern Web Experiences Built for Commercial Results

At Veluno Softtech, we view your website as your most critical digital asset and primary conversion engine. Many businesses struggle with:
- **Clunky legacy websites:** Outdated designs that fail to reflect the caliber and maturity of your business.
- **Slow loading speeds:** Bloated themes and plugins that cause 40%+ bounce rates on mobile.
- **Rigid content management:** Reliance on external developers for simple copy or page updates.
- **Weak conversion funnels:** Visitors arriving but leaving without booking calls or requesting quotations.

Veluno Web delivers modern, minimal, and high-performance web systems engineered on modern frameworks (React, Next.js, TypeScript, Tailwind CSS) that position your company as an industry leader.

## Core Capabilities & Deliverables

### Business Websites & Portals
Clean, responsive corporate websites designed to establish trust, communicate clear value propositions, and guide enterprise buyers to conversion.

### High-Converting Landing Pages
Laser-focused landing pages built around psychological conversion principles, fast loading times, and friction-free lead capture.

### E-Commerce & Transactional Platforms
Fast, frictionless checkout experiences, custom product catalogs, inventory synchronizations, and secure payment integrations (Stripe, Razorpay, etc.).

### Custom CMS & Content Workflows
Empowering your marketing team with intuitive headless content management systems (Sanity, Strapi, or custom dashboards) so content updates happen in seconds.

| Customer Need | Veluno Web Solution | Primary Business Outcome |
|---|---|---|
| Modernizing an outdated company website | Bespoke corporate site with design system | Elevated brand credibility & enterprise positioning |
| Driving qualified leads from ad campaigns | Ultra-fast conversion landing pages | 2x-3x higher form completion and booking rates |
| Selling complex products or services online | Tailored e-commerce platform & checkout | Reduced cart abandonment & frictionless payments |`
  },
  {
    id: "veluno-products",
    name: "Veluno Products",
    pillar: "Veluno Products",
    aliases: ["custom-software", "mobile-apps"],
    title: "Veluno Products — SaaS Platforms & Custom Applications",
    tagline: "SaaS platforms, custom web applications, cross-platform mobile apps, and executive dashboards built to scale.",
    capabilities: [
      "Multi-Tenant SaaS Platforms",
      "Custom Internal Web Applications",
      "Cross-Platform Mobile Apps (iOS & Android)",
      "Real-Time Executive Dashboards",
      "Role-Based Access Control (RBAC)"
    ],
    deliverables: [
      "Scalable frontend & backend application architecture",
      "Role-based authentication & session security",
      "Interactive data visualization & reporting modules",
      "Automated CI/CD deployment pipelines",
      "Comprehensive API and system documentation"
    ],
    content: `## Purpose-Built Software for Scalable Growth

When off-the-shelf software forces you to change your successful operational workflows, it is time for a custom product. Off-the-shelf tools often bring:
- **Spreadsheet chaos:** Running core business logic across fragile, error-prone spreadsheets.
- **Data silos:** Team members wasting hours manually transferring records between incompatible systems.
- **Fragmented customer experience:** Forcing clients into disjointed portals that erode trust.
- **Linear headcount scaling:** Operational overhead expanding with every new customer.

Veluno Products designs and engineers software tailored precisely to your company's operational reality, giving your team and customers frictionless digital tools.

## Core Capabilities & Deliverables

### Multi-Tenant SaaS Architecture
End-to-end SaaS engineering including subscription billing, multi-tenant database isolation, user management, and self-service onboarding.

### Custom Internal Dashboards & Operations Portals
Purpose-built software tools that consolidate your operations, automate routine data lookups, and give leadership real-time visibility.

### Cross-Platform Mobile Applications
Native-quality iOS and Android applications developed with React Native or Flutter, featuring offline synchronization and hardware integration.

### Secure Authentication & Access Control
Enterprise security standards including Multi-Factor Authentication (MFA), Single Sign-On (SSO), and granular role-based permissions.

| Customer Need | Veluno Products Solution | Primary Business Outcome |
|---|---|---|
| Launching a proprietary subscription product | Full-stack SaaS platform with billing | Accelerated time-to-market with zero technical debt |
| Dispatch, logistics, or booking bottlenecks | Custom operational portal | 60%+ reduction in manual coordination hours |
| Mobile workforce needing offline access | Offline-first mobile app with cloud sync | Uninterrupted field productivity across all locations |`
  },
  {
    id: "veluno-systems",
    name: "Veluno Systems",
    pillar: "Veluno Systems",
    aliases: ["api-integrations", "automation"],
    title: "Veluno Systems — API Integrations & Workflow Automation",
    tagline: "API integrations, CRM/ERP connections, data pipelines, and end-to-end workflow automation connecting your digital ecosystem.",
    capabilities: [
      "Custom RESTful & GraphQL APIs",
      "Enterprise CRM & ERP Connectors",
      "Automated Data Ingestion & ETL Pipelines",
      "Event-Driven Webhook Orchestration",
      "Practical AI & Intelligent Document Processing"
    ],
    deliverables: [
      "Robust API middleware and synchronization workers",
      "Automated data verification & error-retry queues",
      "Centralized event logging & webhook receivers",
      "Interactive API documentation & Postman collections",
      "Service health alerts and telemetry"
    ],
    content: `## Unifying Your Fragmented Digital Architecture

Modern enterprises run on dozens of cloud tools and internal databases. When they don't communicate seamlessly:
- **Manual syncs:** Staff spend hours copying and pasting records between sales, inventory, and accounting.
- **Inconsistent records:** The CRM shows a deal as won, but invoicing or fulfillment has no record of it.
- **Delayed insights:** Executives wait days or weeks for manual spreadsheet compilation before making decisions.
- **Human error:** Critical operational mistakes introduced through repetitive manual data entry.

Veluno Systems architects secure, resilient pipelines and API integrations that connect your systems, automating data flows with zero manual intervention.

## Core Capabilities & Deliverables

### Enterprise API Integrations
Connecting your custom software to external platforms such as Salesforce, HubSpot, Stripe, QuickBooks, Zoho, and custom legacy databases.

### Workflow Orchestration & Data Pipelines
Automating multi-step business processes across departments with automated validations, transactional integrity, and fail-safe recovery.

### Practical Scoped AI & Automation
Deploying targeted machine learning models for optical character recognition (OCR), invoice processing, and automated ticket classification.

### Legacy Modernization & API Wrappers
Building clean RESTful and GraphQL layers over existing legacy databases without requiring high-risk migrations.

| Customer Need | Veluno Systems Solution | Primary Business Outcome |
|---|---|---|
| Disconnected CRM and billing systems | Automated bidirectional webhook pipeline | Zero manual data entry & 100% billing accuracy |
| High-volume PDF invoices or paperwork | Intelligent document parser with AI extraction | Extraction time cut from 15 minutes to 3 seconds |
| Exposing secure internal data to partners | Hardened RESTful API gateway with token auth | Safe, compliant data exchange with third parties |`
  },
  {
    id: "veluno-growth",
    name: "Veluno Growth",
    pillar: "Veluno Growth",
    aliases: ["digital-marketing"],
    title: "Veluno Growth — Technical SEO & Performance Marketing",
    tagline: "Technical SEO, digital marketing, product analytics, and conversion rate optimization (CRO) that turn digital traffic into verified pipeline.",
    capabilities: [
      "Technical SEO & Schema Engineering",
      "High-Performance Paid Advertising (PPC)",
      "Conversion Rate Optimization (CRO)",
      "Full-Funnel Analytics & Attribution",
      "Content Strategy & High-Intent Topic Clustering"
    ],
    deliverables: [
      "Comprehensive technical SEO and speed audit",
      "Conversion-optimized landing page variants",
      "GTM, GA4, and server-side Conversion API setup",
      "PPC campaign architecture and negative keyword matrices",
      "Monthly executive revenue & pipeline attribution reports"
    ],
    content: `## Engineering-Led Growth and Conversion Architecture

Marketing without technical rigor and clean attribution leads to wasted spend and vanity metrics. Growing businesses routinely face:
- **Invisible in organic search:** High-intent enterprise buyers search for solutions, but competitors dominate the rankings.
- **Leaky conversion funnels:** Traffic reaches your pages, but slow speeds and confusing layouts cause visitors to bounce.
- **Attribution blind spots:** Running campaigns without knowing which specific channels generate closed, paying customers.
- **Developer-marketer divide:** Marketers request landing page changes that take engineering weeks to deploy.

Veluno Growth bridges full-stack engineering with commercial strategy. We build and execute technical SEO, high-velocity conversion funnels, and precision analytics that turn traffic into predictable revenue.

## Core Capabilities & Deliverables

### Technical SEO & Search Dominance
Structuring metadata, semantic HTML5, Core Web Vitals, and JSON-LD schema so search engines index and rank your pages with authority.

### Conversion Rate Optimization (CRO)
Iterative A/B testing of headlines, layouts, micro-interactions, and forms to maximize lead capture without increasing ad spend.

### Precision Paid Media
Targeted campaigns across Google Search, LinkedIn, and Meta designed around high-intent commercial keywords and tight cost-per-lead limits.

### Full-Funnel Analytics & CRM Attribution
Implementing server-side tracking (Google Tag Manager, GA4, Meta CAPI) that routes leads straight into your CRM with source attribution.

| Customer Need | Veluno Growth Solution | Primary Business Outcome |
|---|---|---|
| Stagnant organic traffic from search engines | Technical SEO overhaul & schema clustering | Top-page rankings for commercial keyword clusters |
| High ad spend with low form completions | Re-engineered CRO landing pages & WhatsApp funnels | 40%+ drop in cost-per-acquisition (CPA) |
| Inability to measure true marketing ROI | Server-side attribution pipeline to CRM | Complete visibility into closed revenue per channel |`
  },
  {
    id: "veluno-care",
    name: "Veluno Care",
    pillar: "Veluno Care",
    aliases: ["maintenance"],
    title: "Veluno Care — Proactive Maintenance & Managed Hosting",
    tagline: "Proactive maintenance, uptime monitoring, managed hosting support, and iterative improvements that keep your software fast and secure.",
    capabilities: [
      "Proactive Security Audits & Patching",
      "24/7 Uptime & Error Telemetry",
      "Managed Cloud Hosting & Edge Deployments",
      "Database Optimization & Backups",
      "Iterative Feature Development"
    ],
    deliverables: [
      "Regular dependency and security updates",
      "24/7 automated uptime monitoring & response",
      "Automated off-site database backups",
      "Monthly performance and health reporting",
      "Dedicated monthly engineering sprint capacity"
    ],
    content: `## Continuous Engineering & Mission-Critical Support

Launching software is not the finish line—it is day one of your operational lifecycle. Without proactive maintenance, applications suffer from:
- **Security vulnerabilities:** Unpatched open-source packages exposing customer data to exploits.
- **Unexpected downtime:** Traffic spikes or database locks crashing servers during peak business hours.
- **Creeping technical debt:** Minor bugs accumulating until the application becomes slow and unstable.
- **No dedicated support:** Scrambling to find an engineer when critical production errors arise.

Veluno Care provides guaranteed peace of mind. We manage your cloud infrastructure, monitor system health around the clock, and allocate dedicated monthly engineering capacity to keep your software evolving.

## Core Capabilities & Deliverables

### Proactive Security Audits & Patching
Auditing dependencies, applying critical security patches, and hardening configurations before vulnerabilities can be exploited.

### 24/7 Uptime & Error Telemetry
Real-time monitoring that alerts our engineering team immediately if response times degrade or errors occur.

### Database Health & Automated Backups
Scheduled off-site snapshots, database index optimization, and disaster recovery testing so your business data is always safe.

### Dedicated Monthly Engineering Hours
A steady pool of engineering hours every month for minor feature requests, UX polishes, and workflow refinements.

| Customer Need | Veluno Care Solution | Primary Business Outcome |
|---|---|---|
| Peace of mind that production won't crash | 24/7 uptime monitoring & instant alert response | 99.9%+ availability and rapid incident resolution |
| Security compliance & patch management | Monthly dependency audits & automated updates | Reduced risk of exploits and data breaches |
| Ongoing tweaks without new contracts | Flexible monthly engineering sprint allocation | Continuous improvements aligned with business needs |`
  }
];
