export interface ServiceOffering {
  title: string;
  deliverables: string;
  category: 'sme' | 'enterprise' | 'ecommerce' | 'marketing' | 'creative';
  badge?: string;
  iconName?: string;
}

export interface EnterpriseSolution {
  title: string;
  modules: string;
  highlight?: boolean;
}

export interface VelunoPackage {
  name: string;
  subtitle: string;
  features: string[];
  bestFor: string;
  popular?: boolean;
}

// 1. Customer & SME Software Services (18 Services)
export const SME_SERVICES: ServiceOffering[] = [
  {
    title: 'Business website',
    deliverables: 'Responsive websites, landing pages, CMS, contact forms, SEO basics',
    category: 'sme',
    badge: 'High Demand'
  },
  {
    title: 'E-commerce website',
    deliverables: 'Online store, product catalogue, cart, checkout, payments, orders, admin panel',
    category: 'sme',
    badge: 'Popular'
  },
  {
    title: 'Mobile app',
    deliverables: 'Android/iOS apps, customer apps, delivery apps, booking apps',
    category: 'sme',
    badge: 'Native & Hybrid'
  },
  {
    title: 'Web application',
    deliverables: 'Customer portals, dashboards, internal tools, booking systems',
    category: 'sme'
  },
  {
    title: 'Custom software',
    deliverables: 'Software built for a specific workflow or business need',
    category: 'sme'
  },
  {
    title: 'CRM software',
    deliverables: 'Leads, customers, sales pipeline, follow-ups, reports',
    category: 'sme'
  },
  {
    title: 'Billing & invoicing software',
    deliverables: 'Quotations, invoices, GST, payment tracking, reports',
    category: 'sme'
  },
  {
    title: 'Inventory software',
    deliverables: 'Stock, purchases, sales, warehouses, barcode support',
    category: 'sme'
  },
  {
    title: 'POS software',
    deliverables: 'Retail billing, products, offers, daily sales, reports',
    category: 'sme'
  },
  {
    title: 'Booking system',
    deliverables: 'Appointments, staff schedules, reminders, online payments',
    category: 'sme'
  },
  {
    title: 'School / coaching software',
    deliverables: 'Admissions, fees, attendance, exams, parent portal',
    category: 'sme'
  },
  {
    title: 'Clinic / hospital software',
    deliverables: 'Appointments, patient records, billing, prescriptions',
    category: 'sme'
  },
  {
    title: 'Real-estate software',
    deliverables: 'Property listings, leads, site visits, agent management',
    category: 'sme'
  },
  {
    title: 'Restaurant software',
    deliverables: 'Menu, orders, KOT, tables, delivery, billing',
    category: 'sme'
  },
  {
    title: 'Automation',
    deliverables: 'WhatsApp automation, email workflows, data entry automation, approvals',
    category: 'sme',
    badge: 'Efficiency'
  },
  {
    title: 'API integration',
    deliverables: 'Connect websites/apps with payment, SMS, WhatsApp, accounting, logistics tools',
    category: 'sme'
  },
  {
    title: 'UI/UX design',
    deliverables: 'User research, wireframes, app/web design, design systems',
    category: 'sme'
  },
  {
    title: 'Maintenance & support',
    deliverables: 'Bug fixes, updates, backups, monitoring, feature improvements',
    category: 'sme'
  }
];

// 2. Enterprise Solutions (16 Enterprise Systems)
export const ENTERPRISE_SOLUTIONS: EnterpriseSolution[] = [
  {
    title: 'ERP (Enterprise Resource Planning)',
    modules: 'Finance, purchases, sales, inventory, production, HR, reporting',
    highlight: true
  },
  {
    title: 'CRM (Enterprise Customer Relationship)',
    modules: 'Leads, customers, sales teams, quotations, follow-ups, analytics'
  },
  {
    title: 'HRMS (Human Resource Management)',
    modules: 'Employee records, attendance, leave, payroll, appraisals, recruitment',
    highlight: true
  },
  {
    title: 'SCM (Supply Chain Management)',
    modules: 'Suppliers, purchase orders, procurement, vendor management'
  },
  {
    title: 'WMS (Warehouse Management System)',
    modules: 'Warehouses, stock movement, picking, packing, dispatch, barcode/QR'
  },
  {
    title: 'Logistics Software',
    modules: 'Orders, drivers, vehicles, routes, delivery tracking, proof of delivery'
  },
  {
    title: 'Fleet Management System',
    modules: 'Vehicles, fuel, maintenance, driver records, trip reports'
  },
  {
    title: 'Manufacturing ERP',
    modules: 'BOM, production planning, job cards, quality control, machine tracking'
  },
  {
    title: 'Distribution Software',
    modules: 'Distributors, dealers, sales targets, schemes, primary/secondary sales'
  },
  {
    title: 'Retail Chain Software',
    modules: 'Multi-store inventory, central purchasing, pricing, loyalty, reporting'
  },
  {
    title: 'Hospital Management System (HMS)',
    modules: 'OPD/IPD, appointments, pharmacy, lab, billing, reports'
  },
  {
    title: 'School / Campus ERP',
    modules: 'Students, fees, attendance, exams, transport, communication'
  },
  {
    title: 'Construction / Project ERP',
    modules: 'Projects, BOQ, procurement, site progress, contractor billing'
  },
  {
    title: 'Business Intelligence (BI)',
    modules: 'Dashboards, KPIs, sales analytics, custom reports'
  },
  {
    title: 'System Integration Hub',
    modules: 'ERP-CRM-POS-accounting-marketplace-logistics integrations'
  },
  {
    title: 'SaaS Product Development',
    modules: 'Multi-tenant platforms, subscriptions, admin panels, APIs'
  }
];

// 3. E-Commerce Services Suite
export const ECOMMERCE_SUITE = [
  {
    title: 'E-commerce Website Development',
    desc: 'Shopify, WooCommerce, or custom high-speed headless e-commerce development.'
  },
  {
    title: 'Product Catalogue Setup',
    desc: 'Structured SKUs, variant matrices, bulk CSV imports, categories, and inventory tags.'
  },
  {
    title: 'Payment Gateway Integration',
    desc: 'Seamless checkout via Razorpay, Stripe, Cashfree, PayU, and Cash on Delivery (COD).'
  },
  {
    title: 'Shipping & Courier Integration',
    desc: 'Automated AWB generation, live tracking webhooks, Shiprocket, Delhivery, and Bluedart.'
  },
  {
    title: 'Inventory & Order Management',
    desc: 'Real-time multi-warehouse stock sync, dispatch manifests, order status notifications.'
  },
  {
    title: 'Customer Accounts & Loyalty',
    desc: 'Self-serve order history, passwordless login, points rewards, and VIP member tiers.'
  },
  {
    title: 'Coupons, Offers & Referrals',
    desc: 'Dynamic promo engine: percentage discounts, BOGO rules, affiliate links, and coupons.'
  },
  {
    title: 'Marketplace Integration',
    desc: 'Two-way catalog and inventory syncing with Amazon, Flipkart, Meesho, and Myntra.'
  },
  {
    title: 'E-Commerce Mobile App',
    desc: 'Native iOS & Android mobile shopping applications with one-click biometric checkout.'
  },
  {
    title: 'Product Photography Coordination',
    desc: 'Clean studio product shots, white-background e-com assets, and lifestyle imagery.'
  },
  {
    title: 'E-Commerce SEO & Optimization',
    desc: 'Product schema markup, category SEO authority, Google Merchant Center feed setup.'
  },
  {
    title: 'Abandoned-Cart Recovery',
    desc: 'Automated WhatsApp, SMS, and email reminders to recapture dropped checkouts.'
  },
  {
    title: 'Sales Analytics & Reporting',
    desc: 'Customer lifetime value (LTV), cohort retention, GMV metrics, and sales trend reports.'
  }
];

// 4. Digital Marketing Services
export const DIGITAL_MARKETING_SERVICES = [
  {
    service: 'Search Engine Optimization (SEO)',
    deliverables: 'Keyword research, on-page SEO, technical SEO, local SEO, content strategy, backlinks'
  },
  {
    service: 'Google Ads',
    deliverables: 'Search, display, YouTube, shopping, lead-generation campaigns'
  },
  {
    service: 'Meta Ads',
    deliverables: 'Facebook and Instagram lead ads, catalogue ads, retargeting'
  },
  {
    service: 'Social Media Management',
    deliverables: 'Content calendar, posts, reels, captions, community management, monthly reports'
  },
  {
    service: 'Content Marketing',
    deliverables: 'Blogs, landing-page copy, product descriptions, case studies'
  },
  {
    service: 'Email Marketing',
    deliverables: 'Newsletters, drip campaigns, lead nurturing, automation'
  },
  {
    service: 'WhatsApp Marketing',
    deliverables: 'Business setup, catalogues, broadcast campaigns, chat automation'
  },
  {
    service: 'Local SEO',
    deliverables: 'Google Business Profile, reviews, maps ranking, local citations'
  },
  {
    service: 'Analytics & Tracking',
    deliverables: 'GA4 setup, conversion tracking, dashboards, monthly performance reports'
  },
  {
    service: 'Lead Generation Systems',
    deliverables: 'Landing pages, forms, CRM integration, follow-up workflows'
  }
];

// 5. Social Media & Creative Services
export const CREATIVE_SERVICES = [
  {
    service: 'Social Media Management',
    offer: 'Strategy, posting schedule, captions, hashtags, engagement'
  },
  {
    service: 'Content Creation',
    offer: 'Reels, posts, carousels, stories, product creatives'
  },
  {
    service: 'Graphic Design',
    offer: 'Logos, brochures, banners, catalogues, packaging, presentations'
  },
  {
    service: 'Video Editing',
    offer: 'Reels, YouTube videos, ads, testimonials, product videos'
  },
  {
    service: 'Short-Form Video',
    offer: 'Instagram Reels, YouTube Shorts, Facebook Reels, TikTok'
  },
  {
    service: 'Ad Creatives',
    offer: 'Static ads, carousel ads, video ads, UGC-style creatives'
  },
  {
    service: 'Brand Identity',
    offer: 'Logo, brand colours, typography, brand guidelines'
  },
  {
    service: 'Corporate Video',
    offer: 'Company profile, product demo, client testimonial, event coverage'
  },
  {
    service: 'Motion Graphics',
    offer: 'Animated explainers, logo animation, social-media motion posts'
  },
  {
    service: 'Photography Coordination',
    offer: 'Product photography, business photography, event coverage'
  }
];

// 6. Recommended Veluno Service Packages
export const VELUNO_PACKAGES: VelunoPackage[] = [
  {
    name: 'Starter Business Package',
    subtitle: 'Everything needed to launch a credible online presence.',
    features: [
      'High-speed responsive business website',
      'Basic on-page SEO setup & metadata',
      'Google Business Profile setup & verification',
      'Interactive WhatsApp enquiry triggers',
      '1 Month complimentary post-launch support'
    ],
    bestFor: 'Local shops, service providers, clinics, and new startups.'
  },
  {
    name: 'Growth Package',
    subtitle: 'Drive qualified leads and online sales velocity.',
    popular: true,
    features: [
      'Custom website or full e-commerce store',
      'Technical SEO and Google Ads campaign setup',
      'Social media management (8–12 posts/reels per month)',
      'Meta lead generation & retargeting ads',
      'Monthly executive performance report & consultation'
    ],
    bestFor: 'Retailers, clinics, real estate firms, coaching centers, restaurants.'
  },
  {
    name: 'Software Package',
    subtitle: 'Tailored systems to automate daily operations and workflows.',
    features: [
      'Custom CRM, ERP, client portal, or mobile app',
      'End-to-end business workflow automation',
      'Custom admin dashboard with analytics',
      'Secure third-party API & payment integrations',
      'Staff onboarding, training documentation, and priority support'
    ],
    bestFor: 'Manufacturers, distributors, schools, hospitals, logistics operators.'
  },
  {
    name: 'Enterprise Package',
    subtitle: 'Mission-critical software architecture for complex operations.',
    features: [
      'Full ERP / CRM / HRMS system implementation',
      'Multi-location, branch, and role-based access control (RBAC)',
      'Custom integrations with legacy databases & machinery',
      'Comprehensive data migration & sanitization',
      'Dedicated engineering squad, SLA uptime guarantee & 24/7 escalation'
    ],
    bestFor: 'Larger corporations, factories, retail chains, hospitals, supply chains.'
  }
];
