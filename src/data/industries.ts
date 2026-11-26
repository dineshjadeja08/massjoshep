import { 
  Landmark, 
  HeartPulse, 
  Wheat, 
  ShoppingBag, 
  Truck,
  ShieldCheck,
  Lock,
  Activity,
  Zap,
  Server,
  Database,
  Cpu
} from 'lucide-react';

export interface IndustrySolution {
  title: string;
  description: string;
  features: string[];
  techHighlight: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface Industry {
  id: string;
  slug: string;
  title: string;
  category: string;
  icon: any;
  heroTitle: string;
  heroSubtitle: string;
  metaDescription: string;
  overview: string[];
  complianceStandards: string[];
  challenges: {
    title: string;
    description: string;
  }[];
  solutions: IndustrySolution[];
  techStack: {
    category: string;
    items: string[];
  }[];
  securityGuarantees: string[];
  relatedCaseStudySlugs: string[];
  faqs: IndustryFAQ[];
}

export const industries: Industry[] = [
  // 1. FINTECH & FINANCIAL SERVICES
  {
    id: '1',
    slug: 'fintech',
    title: 'FinTech & Banking',
    category: 'Financial Technology & Payments',
    icon: Landmark,
    heroTitle: 'Enterprise FinTech Software & Payment Automation',
    heroSubtitle: 'We architect sub-second payment gateway integrations, zero-loss double-entry ledgers, automated reconciliation pipelines, and regulatory-compliant financial portals.',
    metaDescription: 'Veluno Softtech engineers enterprise-grade FinTech platforms, automated payment gateways, double-entry financial ledgers, and PCI-DSS compliant financial portals.',
    overview: [
      'The modern financial ecosystem requires absolute architectural discipline. With transaction volumes multiplying and consumer expectations anchored around instant settlements, financial institutions cannot afford latency spikes, reconciliation drifts, or security vulnerabilities.',
      'At Veluno Softtech, we engineer high-throughput financial architectures from the ground up. Whether you are building an automated B2B invoicing SaaS, a multi-currency payment router, or a real-time receivables ledger, our engineering pods deploy immutable event-sourcing and hardened API contracts.',
      'Every system we build incorporates strict segregation of duties, zero-trust cryptographic verification, and end-to-end automated audit logging to ensure turnkey compliance with national and international monetary authorities.'
    ],
    complianceStandards: [
      'PCI-DSS v4.0 Level 1 Compliance Guidelines',
      'ISO/IEC 27001 Information Security Management',
      'SOC 2 Type II Audited Operational Controls',
      'RBI & International Data Localization Mandates',
      'GDPR Article 32 Strict Cryptographic Encryption'
    ],
    challenges: [
      {
        title: 'Multi-Gateway Reconciliation Drift',
        description: 'Businesses transacting through multiple payment gateways face manual ledger mismatches, delayed settlements, and unaccounted gateway fee deductions.'
      },
      {
        title: 'Latency Spikes During Concurrency Surges',
        description: 'Flash commerce sales or month-end billing cycles frequently overwhelm un-indexed relational databases, causing payment gateway timeout failures and duplicate charges.'
      },
      {
        title: 'Rigid Legacy Mainframe Integrations',
        description: 'Traditional core banking systems rely on batch processing and obsolete SOAP interfaces, restricting real-time balance calculations and modern mobile client experiences.'
      },
      {
        title: 'Strict Regulatory Auditing & Data Sovereignty',
        description: 'Financial applications must prove un-tampered transaction provenance, maintain immutable historical ledgers, and adhere to strict territorial data residence laws.'
      }
    ],
    solutions: [
      {
        title: 'High-Concurrency Payment Orchestration & Smart Routing',
        description: 'Intelligent multi-acquirer routing engine that evaluates gateway success rates, regional processing latency, and merchant fees in real time, routing payments across optimal channels to reduce drop-offs by up to 14%.',
        features: [
          'Automatic failover across secondary payment gateways',
          'Tokenized 1-click recurring card subscriptions',
          'Support for UPI, SEPA, ACH, Wire, and Credit/Debit rails',
          'Webhook retry queues with exponential backoff'
        ],
        techHighlight: 'Event-driven Node.js & Go microservices communicating over gRPC with Redis fallback state.'
      },
      {
        title: 'Event-Sourced Double-Entry Ledger Engines',
        description: 'Audit-proof transactional accounting core where balances are calculated from an immutable, append-only log of signed debits and credits, completely eliminating discrepancy risks.',
        features: [
          'ACID-compliant transaction processing with strict row locking',
          'Automated bank feed synchronization and auto-clearing',
          'Multi-currency balance support with live forex updates',
          'Comprehensive audit trails stamped with cryptographic hashes'
        ],
        techHighlight: 'PostgreSQL partitioned tables combined with TimescaleDB for sub-millisecond historical ledger querying.'
      },
      {
        title: 'Automated Billing, Invoicing & GST Portals',
        description: 'Complete commercial invoicing workspaces built for businesses to generate compliant tax invoices, track payment receivables, manage supplier dues, and visualize cash-flow trends.',
        features: [
          'Instant PDF invoice generation with embedded QR payment links',
          'Automatic overdue reminders via email & WhatsApp triggers',
          'Real-time customer receivables aging breakdown',
          'Seamless export to tally and enterprise accounting software'
        ],
        techHighlight: 'Built as demonstrated in our live client deployment for Bill Now (bill-now.netlify.app).'
      },
      {
        title: 'Real-Time Fraud Telemetry & Velocity Screening',
        description: 'Low-latency risk-scoring pipeline evaluating device fingerprints, IP velocity, geofence deviations, and transaction size patterns before authoring payment requests.',
        features: [
          'Sub-40ms asynchronous risk evaluation per checkout request',
          'Configurable threshold rules for manual verification triggers',
          'Blacklist/whitelist address and PAN/SSN databases',
          'Automated suspicious activity report (SAR) generation'
        ],
        techHighlight: 'Apache Kafka streaming into Redis sliding-window velocity aggregators.'
      }
    ],
    techStack: [
      {
        category: 'Backend & High-Throughput APIs',
        items: ['Go (Golang)', 'Rust', 'TypeScript / Node.js', 'Python FastAPI', 'gRPC']
      },
      {
        category: 'Relational & Analytical Ledgers',
        items: ['PostgreSQL (ACID)', 'TimescaleDB', 'Redis Enterprise', 'ClickHouse']
      },
      {
        category: 'Event Streaming & Queues',
        items: ['Apache Kafka', 'RabbitMQ', 'AWS SQS / SNS', 'BullMQ']
      },
      {
        category: 'Security & Key Management',
        items: ['HashiCorp Vault', 'AWS KMS', 'Hardware Security Modules (HSM)', 'mTLS 1.3']
      }
    ],
    securityGuarantees: [
      'Zero cardholder PAN or CVV storage: 100% tokenized gateway abstraction',
      'End-to-end TLS 1.3 encryption in transit with AES-256-GCM encryption at rest',
      'Granular role-based access control (RBAC) with compulsory MFA enforcement',
      'Immutable audit trails with time-stamped cryptographically signed records',
      '99.99% operational uptime SLA with automated multi-zone failover clusters'
    ],
    relatedCaseStudySlugs: ['bill-now', 'xenbill'],
    faqs: [
      {
        question: 'How does Veluno Softtech ensure PCI-DSS compliance for payment platforms?',
        answer: 'We architect systems utilizing tokenized gateway proxies (such as Stripe, Razorpay, or Adyen). Zero sensitive cardholder data (PAN, CVV) touches your application servers, keeping your infrastructure within SAQ-A scope and dramatically simplifying annual compliance audits while ensuring maximum security.'
      },
      {
        question: 'Can you integrate our software with legacy banking systems and core ledgers?',
        answer: 'Yes. We frequently build secure adapter layers (API gateways) that bridge legacy core banking mainframes (SOAP/XML, ISO 8583, MT940 batch files) with modern RESTful and GraphQL endpoints, enabling modern client-facing applications without requiring complete legacy overhaul.'
      },
      {
        question: 'What is your approach to data residency and regulatory compliance in India and abroad?',
        answer: 'We configure geographically pinned cloud environments (AWS Mumbai, Azure Central India, GCP Frankfurt, or AWS US-East) with strict data residency boundaries. All customer records, payment logs, and financial archives reside exclusively within sovereign borders mandated by RBI, GDPR, or federal directives.'
      },
      {
        question: 'Do you provide full source code ownership upon milestone completion?',
        answer: 'Yes. Veluno Softtech operates under a 100% client intellectual property transfer model. Upon milestone sign-off, all Git repositories, infrastructure-as-code scripts, data schemas, and documentation are transferred unconditionally to your organization.'
      }
    ]
  },

  // 2. HEALTHCARE & LIFE SCIENCES
  {
    id: '2',
    slug: 'healthcare',
    title: 'Healthcare & Life Sciences',
    category: 'Digital Health & Medical Software',
    icon: HeartPulse,
    heroTitle: 'Compliant Healthcare Software & Telehealth Platforms',
    heroSubtitle: 'Engineering HIPAA and GDPR-compliant digital health portals, encrypted WebRTC telemedicine pipelines, and seamless FHIR medical record integrations.',
    metaDescription: 'Veluno Softtech designs HIPAA-compliant healthcare software, secure telemedicine platforms, EHR/FHIR integrations, and patient management portals.',
    overview: [
      'Digital healthcare platforms carry life-critical responsibility. In an industry governed by strict patient privacy regulations, clinical workflows demand ultra-dependable uptime, instantaneous data synchronization, and absolute data confidentiality.',
      'Veluno Softtech partners with healthcare providers, clinic networks, digital health startups, and medical technology enterprises to engineer secure, accessible medical applications. We eliminate operational bottlenecks like fragmented medical histories, patient appointment drop-offs, and disjointed laboratory communication.',
      'Our medical software architecture adheres to international clinical informatics benchmarks, including HL7 FHIR protocols, HIPAA administrative safeguards, and GDPR sensitive health data processing standards.'
    ],
    complianceStandards: [
      'HIPAA Security & Privacy Rule Compliance Guidelines',
      'HL7 / FHIR R4 Clinical Interoperability Standards',
      'GDPR Special Category Health Data Regulations (Article 9)',
      'ISO 27799 Health Informatics Security Management',
      'DISHA (Digital Information Security in Healthcare Act) Protocols'
    ],
    challenges: [
      {
        title: 'Siloed Medical Records & Interoperability Barriers',
        description: 'Hospitals and diagnostic clinics frequently run disparate proprietary software, preventing seamless patient health summary handoffs during critical care.'
      },
      {
        title: 'Strict Patient Privacy & PHI Exposure Penalties',
        description: 'Protected Health Information (PHI) faces catastrophic legal penalties and loss of trust if exposed through unencrypted databases or misconfigured access rights.'
      },
      {
        title: 'Unreliable Telehealth Video & Audio Quality',
        description: 'Standard consumer video tools experience packet loss, jitter, and dropped connections over unstable 4G networks, frustrating patients and physicians.'
      },
      {
        title: 'Complex Clinical Scheduling & Provider Burnout',
        description: 'Manual scheduling causes double bookings, long patient wait times, and high administrative friction for hospital nursing and front-desk teams.'
      }
    ],
    solutions: [
      {
        title: 'Encrypted WebRTC Telemedicine Pipelines',
        description: 'Browser-based, zero-install virtual consultation rooms featuring sub-200ms latency, peer-to-peer end-to-end encryption, digital whiteboards, and real-time vitals display.',
        features: [
          'Bandwidth-adaptive video streaming with packet loss concealment',
          'In-session encrypted chat and secure lab document sharing',
          'Integrated digital prescription writer with digital signatures',
          'Automated session timestamping and insurance billing codes'
        ],
        techHighlight: 'WebRTC media servers (LiveKit / mediasoup) orchestrated with Node.js signaling and Redis state.'
      },
      {
        title: 'FHIR & HL7-Compliant EHR Integration Bridges',
        description: 'Standardized clinical integration services connecting custom patient portals directly into legacy Hospital Information Systems (HIS) and laboratory management databases.',
        features: [
          'Bi-directional synchronization of patient allergies, meds, and labs',
          'JSON-to-FHIR R4 transformation pipelines',
          'Standardized SNOMED-CT and ICD-10 diagnostic coding validation',
          'Strict patient identity matching and deduplication algorithms'
        ],
        techHighlight: 'HAPI FHIR / custom TypeScript middleware with cryptographic data sanitation layers.'
      },
      {
        title: 'Clinic Operations, Appointment & Billing Portals',
        description: 'Comprehensive clinic management system managing doctor schedules, patient intake kiosks, queue tokens, pharmacy inventory, and insurance claims.',
        features: [
          'Live patient queue status visible on waiting room screens and phones',
          'Automated SMS/WhatsApp appointment reminders with 1-click confirmation',
          'Integrated diagnostic bill generation with split insurance/co-pay',
          'Multi-location provider capacity tracking and leave management'
        ],
        techHighlight: 'React frontend with real-time WebSocket room subscriptions and PostgreSQL backend.'
      },
      {
        title: 'Conversational Voice AI for Patient Triage & Booking',
        description: 'Sub-second conversational voice bots handling round-the-clock clinic inbound calls, answering clinic FAQs, booking doctor slots, and routing urgent cases to emergency lines.',
        features: [
          'Natural human-grade speech turn-taking in under 600ms',
          'Multilingual support for patient convenience',
          'Direct live calendar booking into provider EHR schedules',
          'Automated emergency keyword escalation protocols'
        ],
        techHighlight: 'Engineered on our proprietary voice pipeline demonstrated in Zylo Voice.'
      }
    ],
    techStack: [
      {
        category: 'Frontend & Video Streaming',
        items: ['React', 'Next.js', 'React Native (iOS/Android)', 'WebRTC', 'LiveKit SDK']
      },
      {
        category: 'Clinical Standards & Backend',
        items: ['HL7 FHIR R4', 'Node.js', 'Python FastAPI', 'PostgreSQL (pgcrypto)', 'Redis']
      },
      {
        category: 'Cloud & Regulatory Hosting',
        items: ['AWS HIPAA-Eligible Stack', 'GCP Healthcare API', 'Docker', 'Terraform']
      },
      {
        category: 'Security & Access Protocols',
        items: ['SMART on FHIR', 'OAuth 2.0 / OIDC', 'AES-256 Field-Level Encryption', 'Audit Trails']
      }
    ],
    securityGuarantees: [
      'Comprehensive Business Associate Agreement (BAA) readiness across infrastructure',
      'Field-level AES-256 encryption for all Protected Health Information (PHI)',
      'Automated session timeouts, device authorization, and compulsory physician MFA',
      'Complete HIPAA-compliant audit logging recording every read/write to patient charts',
      'Zero third-party analytics trackers or tracking cookies on patient-facing screens'
    ],
    relatedCaseStudySlugs: ['zylinn-ai', 'linksync'],
    faqs: [
      {
        question: 'How do you ensure telehealth platforms comply with HIPAA and medical privacy rules?',
        answer: 'We implement zero-knowledge encryption principles where video and audio streams are end-to-end encrypted via WebRTC (SRTP/DTLS). Patient medical records are encrypted at rest using field-level AES-256 keys. We sign Business Associate Agreements (BAAs) with all cloud hosting providers and configure strict immutable audit logs.'
      },
      {
        question: 'Can you connect your custom clinic software with existing hospital EHR systems?',
        answer: 'Yes. We utilize HL7 FHIR (Fast Healthcare Interoperability Resources) and SMART on FHIR protocols to establish bi-directional sync with leading EHRs like Epic, Cerner, Allscripts, and proprietary hospital management software, ensuring doctors never have to re-enter data across multiple screens.'
      },
      {
        question: 'Can patient booking bots work over regular phone calls?',
        answer: 'Yes. Using our low-latency voice AI pipeline, patients can call your clinic phone number directly. The voice agent verifies their patient ID, answers doctor availability queries, and confirms appointments into your calendar in under 60 seconds without human intervention.'
      },
      {
        question: 'Can the patient portal be distributed as native iOS and Android apps?',
        answer: 'Yes. We build responsive web portals alongside cross-platform mobile apps using React Native or Flutter, allowing patients to book visits, view lab results, and receive medicine reminders with biometric FaceID authentication.'
      }
    ]
  },

  // 3. AGRICULTURE & SUPPLY CHAIN (AGRITECH)
  {
    id: '3',
    slug: 'agriculture',
    title: 'AgriTech & Supply Chain',
    category: 'Smart Agriculture & Food Supply',
    icon: Wheat,
    heroTitle: 'AgriTech Platforms & Farm-to-Table Supply Chains',
    heroSubtitle: 'Engineering IoT sensor data pipelines, offline-first field apps, satellite telemetry integrations, and transparent crop batch traceability software.',
    metaDescription: 'Veluno Softtech develops smart AgriTech software, farm-to-table traceability systems, IoT telemetry dashboards, and offline-first mobile crop applications.',
    overview: [
      'Agriculture is experiencing a historic technological transition. Volatile weather patterns, supply chain friction, water scarcity, and stringent food safety documentation make real-time data transparency indispensable for modern agribusinesses.',
      'Veluno Softtech engineers robust AgriTech software capable of operating in low-bandwidth rural environments. We bridge the gap between physical farm sensors, drone/satellite imaging, cold-chain warehouses, and consumer marketplaces.',
      'From farmer procurement portals to automated cold-storage telematics and retail batch tracking, our software helps agricultural enterprises minimize post-harvest losses, optimize irrigation schedules, and guarantee harvest traceability.'
    ],
    complianceStandards: [
      'GS1 Global Traceability Standards (EPCIS)',
      'ISO 11783 (ISOBUS) Agricultural Electronics Standards',
      'GlobalGAP Certification Documentation Frameworks',
      'FSSAI & International Food Safety Traceability Protocols',
      'Open Geospatial Consortium (OGC) Mapping Protocols'
    ],
    challenges: [
      {
        title: 'Unstable Rural Connectivity & Offline Isolation',
        description: 'Field agents and farm supervisors frequently work in remote regions with zero mobile cellular coverage, rendering standard cloud-only web applications unusable.'
      },
      {
        title: 'High-Volume IoT Telemetry Ingestion',
        description: 'Thousands of soil moisture probes, weather stations, and drone flights generate massive streams of time-series data that crash standard relational databases.'
      },
      {
        title: 'Opaque Farm-to-Table Traceability',
        description: 'Lack of digital batch tagging leads to food fraud, inability to trace contamination outbreaks, and failure to satisfy export quality standards.'
      },
      {
        title: 'Complex Multi-Party Commission & Payment Settlements',
        description: 'Managing payments across thousands of smallholder farmers, local aggregators, transport drivers, and processing mills is prone to errors and delays.'
      }
    ],
    solutions: [
      {
        title: 'Offline-First Field Officer Mobile Apps',
        description: 'Mobile applications engineered with local SQLite and WatermelonDB caching, enabling field agents to record crop acreage, soil tests, and farmer data offline, synchronizing automatically when connectivity is restored.',
        features: [
          'Conflict-free replicated data types (CRDTs) for collision-free sync',
          'GPS polygon plotting for farm boundary mapping',
          'Offline camera capture with automated image compression',
          'Multilingual voice and text interface tailored for rural operatives'
        ],
        techHighlight: 'React Native with SQLite offline storage and background worker sync queues.'
      },
      {
        title: 'Real-Time IoT Soil & Weather Sensor Dashboards',
        description: 'High-throughput telemetry ingestion pipeline processing soil moisture, pH, ambient temperature, and leaf wetness sensor data with automated threshold alerts for irrigation valves.',
        features: [
          'MQTT and HTTP endpoint ingestion handling 10,000+ pings/sec',
          'Automated SMS/WhatsApp alerts for frost, pest risk, or dry soil',
          'Predictive irrigation schedule recommendations based on weather APIs',
          'Hardware-agnostic sensor calibration interfaces'
        ],
        techHighlight: 'Go-based ingestion gateway streaming into TimescaleDB and Redis caching.'
      },
      {
        title: 'Farm-to-Table Batch Traceability & QR Verification',
        description: 'End-to-end provenance software assigning unique GS1-compliant QR codes to every harvest crate, tracking warehouse storage temperatures, transit duration, and retail delivery.',
        features: [
          'Cryptographically verified batch handoff receipts',
          'Consumer-facing scan landing pages displaying farmer origin and harvest date',
          'Cold-chain temperature alert logging for refrigerated reefer trucks',
          'Export certificate generation conforming to European & US standards'
        ],
        techHighlight: 'PostgreSQL relational ledger with immutable audit tables and QR generation engines.'
      },
      {
        title: 'Agri-Procurement & Direct Farmer Payout Engine',
        description: 'Digital procurement desk software that records weighbridge data, calculates quality grade deductions, and triggers instant direct bank transfers (IMPS/NEFT/UPI) to farmers.',
        features: [
          'Direct integration with digital weighbridges via serial RS-232/USB',
          'Configurable grade-to-price deduction matrix',
          'Automated payment batch dispatch via commercial banking APIs',
          'SMS receipt dispatch in local vernacular languages'
        ],
        techHighlight: 'Node.js backend with bank API webhooks and automated reconciliation.'
      }
    ],
    techStack: [
      {
        category: 'Mobile & Offline Systems',
        items: ['React Native', 'SQLite', 'WatermelonDB', 'Background Fetch', 'Mapbox']
      },
      {
        category: 'IoT Telemetry & Ingestion',
        items: ['MQTT Protocol', 'Go (Golang)', 'TimescaleDB', 'Redis', 'Docker']
      },
      {
        category: 'Geospatial & Mapping',
        items: ['PostGIS', 'GeoJSON', 'Leaflet / OpenLayers', 'Sentinel Satellite APIs']
      },
      {
        category: 'Dispatches & Payments',
        items: ['Node.js', 'PostgreSQL', 'Banking Payment Gateways', 'WhatsApp Cloud API']
      }
    ],
    securityGuarantees: [
      'Offline cryptographic token storage ensuring offline data cannot be spoofed',
      'Tamper-evident batch audit records protecting export certification validity',
      'Role-based field officer permissions preventing unauthorized price overrides',
      'Bank-grade TLS 1.3 encryption for all farmer procurement and payout transactions',
      '99.9% cloud infrastructure availability during high-intensity harvest seasons'
    ],
    relatedCaseStudySlugs: ['commerce-platform-concept', 'fleet-tracking-platform'],
    faqs: [
      {
        question: 'How do field agents use the app when there is zero internet in farm fields?',
        answer: 'Our mobile applications are designed offline-first. Field agents can map farm boundaries, log crop inspections, and take photos entirely offline. The data is saved to a local encrypted SQLite database and automatically syncs with the central cloud server the moment the phone reconnects to 4G or Wi-Fi.'
      },
      {
        question: 'Can your software connect to hardware weighbridges and IoT soil probes?',
        answer: 'Yes. We build hardware integration drivers that read live data from serial ports (RS-232/USB) on weighbridges, as well as MQTT/CoAP gateways that receive real-time telemetry from soil sensors, weather stations, and cold storage thermostats.'
      },
      {
        question: 'How does QR-code crop traceability work for retail consumers?',
        answer: 'When a crop batch is packed at the collection center, our system generates a unique GS1-compliant QR code sticker. When end-consumers or supermarket auditors scan this code with their smartphone, it loads a beautiful branded mobile page showing farm origin, harvesting date, pesticide safety test certificates, and cold-chain temperature history.'
      },
      {
        question: 'Can we automate farmer payouts directly from the procurement desk?',
        answer: 'Yes. The system automatically calculates total net payout based on crop weight and quality deductions, and connects directly with corporate banking APIs to disburse funds to the farmer via IMPS or direct transfer within minutes.'
      }
    ]
  },

  // 4. E-COMMERCE & RETAIL
  {
    id: '4',
    slug: 'e-commerce',
    title: 'E-Commerce & Retail',
    category: 'High-Volume Digital Commerce',
    icon: ShoppingBag,
    heroTitle: 'Headless E-Commerce Platforms & Scalable Retail Software',
    heroSubtitle: 'Engineering sub-second headless storefronts, multi-warehouse inventory ledgers, custom Shopify Plus apps, and high-converting checkout architectures.',
    metaDescription: 'Veluno Softtech architects high-performance headless e-commerce stores, custom Shopify Plus applications, multi-warehouse inventory systems, and checkout funnels.',
    overview: [
      'In modern e-commerce, milliseconds directly translate into millions in commercial revenue. Research consistently proves that every 100ms reduction in page load latency yields a measurable 1% to 3% lift in checkout conversion rates.',
      'Veluno Softtech engineers custom, fast e-commerce platforms that break free from slow, plugin-heavy templates. We specialize in headless commerce architectures, decoupled storefronts, and automated backend operations.',
      'From custom B2B wholesale portals with tiered net-terms pricing to high-volume B2C direct-to-consumer storefronts that withstand 50,000+ concurrent flash-sale shoppers, our platforms are engineered for commercial dominance.'
    ],
    complianceStandards: [
      'PCI-DSS Level 1 Payment Card Security Standards',
      'GDPR & CCPA Consumer Privacy & Cookie Consent Protocols',
      'WCAG 2.1 AA Digital Accessibility Compliance',
      'ISO/IEC 27001 Information Security Management',
      'SOC 2 Type II Audited Checkout Infrastructures'
    ],
    challenges: [
      {
        title: 'Heavy Theme Bloat & 40%+ Mobile Bounce Rates',
        description: 'Standard off-the-shelf themes loaded with unoptimized third-party plugins drag down Google Lighthouse scores below 40, devastating SEO rankings and ad conversion.'
      },
      {
        title: 'Inventory Desynchronization & Stock-Out Friction',
        description: 'Selling simultaneously across physical stores, websites, and marketplaces leads to accidental overselling, canceled orders, and frustrated customers.'
      },
      {
        title: 'Abandoned Checkout Funnels & Clunky Forms',
        description: 'Forcing shoppers through multi-page checkout flows with slow address lookups and limited payment methods causes over 70% of shoppers to abandon their carts.'
      },
      {
        title: 'Rigid B2B Commercial Rules in B2C Platforms',
        description: 'Wholesale buyers need tiered pricing, minimum order quantities (MOQ), custom credit terms, and GST invoicing that standard shopping carts cannot handle.'
      }
    ],
    solutions: [
      {
        title: 'Headless Next.js Storefronts (Sub-2s Mobile LCP)',
        description: 'Completely decoupled frontend built with Next.js, React, and Tailwind CSS powered by edge CDN caching, delivering instantaneous catalog browsing and 95+ PageSpeed scores.',
        features: [
          'Sub-second instant search and multi-facet filtering (Algolia / Meilisearch)',
          'Static site generation (SSG) with incremental static regeneration (ISR)',
          'Dynamic Open Graph social preview cards for every product SKU',
          'Native mobile web experience with fluid app-like micro-interactions'
        ],
        techHighlight: 'Next.js App Router deployed on edge CDN with GraphQL API federation.'
      },
      {
        title: 'Real-Time Multi-Warehouse Inventory Synchronization',
        description: 'Event-driven inventory synchronization engine that updates available-to-promise (ATP) stock levels across your physical retail POS, website, Amazon, and warehouse ERP.',
        features: [
          'Sub-second stock reservation during checkout to prevent overselling',
          'Automated low-stock supplier re-ordering purchase order generation',
          'Intelligent order routing to the fulfillment center nearest the customer',
          'Support for product bundles, kits, and split-shipment tracking'
        ],
        techHighlight: 'Apache Kafka event stream feeding Redis atomic counters and PostgreSQL.'
      },
      {
        title: 'High-Converting 1-Page Express Checkout',
        description: 'Streamlined, conversion-optimized checkout pipeline supporting Apple Pay, Google Pay, credit cards, local UPI, NetBanking, and Buy Now Pay Later (BNPL).',
        features: [
          'Automatic address auto-complete and pin code validation',
          'Real-time shipping rate calculation based on weight and destination',
          'Tokenized 1-click checkout for returning authenticated customers',
          'Abandoned cart recovery webhooks triggering automated email/WhatsApp sequences'
        ],
        techHighlight: 'PCI-compliant Stripe Elements / Razorpay Checkout with zero cardholder server footprint.'
      },
      {
        title: 'Custom B2B Wholesale & Distributor Portals',
        description: 'Specialized enterprise trade portals allowing wholesale partners to place bulk orders with custom customer-specific pricing, credit terms, and instant GST invoicing.',
        features: [
          'Tiered volume discounts and minimum order quantity (MOQ) logic',
          'Net 30/60 day payment term applications and credit line tracking',
          'Quick bulk order CSV upload and re-order templates',
          'Automated GST e-invoice and e-way bill generation'
        ],
        techHighlight: 'PostgreSQL with multi-tenant company accounts and PDF generation workers.'
      }
    ],
    techStack: [
      {
        category: 'Headless Storefronts & UI',
        items: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Radix UI']
      },
      {
        category: 'Commerce Engines & Backends',
        items: ['Shopify Plus API', 'Medusa.js', 'Node.js', 'PostgreSQL', 'Redis']
      },
      {
        category: 'Search & Performance Caching',
        items: ['Algolia Search', 'Meilisearch', 'Cloudflare Workers', 'Edge Caching']
      },
      {
        category: 'Payments & Logistical Gateways',
        items: ['Stripe', 'Razorpay', 'Apple Pay / Google Pay', 'Shiprocket / Delhivery APIs']
      }
    ],
    securityGuarantees: [
      '100% PCI-DSS Level 1 compliant checkout architecture with zero server card storage',
      'DDoS mitigation and bot protection safeguarding checkout endpoints during flash sales',
      'Automated rate-limiting on voucher and discount endpoints preventing brute-force attacks',
      'Encrypted customer PII storage conforming to GDPR and global privacy frameworks',
      'Guaranteed 99.99% availability during Black Friday and peak festive traffic spikes'
    ],
    relatedCaseStudySlugs: ['commerce-platform-concept', 'bill-now'],
    faqs: [
      {
        question: 'What is the speed difference between a headless storefront and a regular Shopify theme?',
        answer: 'Standard Shopify themes rely on heavy Liquid templating, render-blocking stylesheets, and dozens of third-party apps that drag mobile load times to 4-8 seconds. A headless Next.js storefront compiles to ultra-lean static HTML served from edge CDNs globally, loading in under 1.5 seconds and lifting conversion rates by 15-25%.'
      },
      {
        question: 'Can you migrate our store from WooCommerce or Magento without losing SEO rankings?',
        answer: 'Yes. We map and migrate every product URL, collection structure, customer account, and order history, implementing comprehensive 301 redirect maps and JSON-LD schema so your organic Google search rankings and domain authority remain protected.'
      },
      {
        question: 'How do you handle multi-warehouse inventory when orders are placed simultaneously?',
        answer: 'We utilize atomic Redis lock counters and event-driven queues (Kafka/BullMQ). When a customer initiates checkout, items are reserved temporarily. If payment succeeds, stock is committed and decremented across all physical and digital channels in sub-second time.'
      },
      {
        question: 'Can we build custom B2B trade features like net-terms and wholesale pricing?',
        answer: 'Yes. We build custom B2B portals with role-based access, customer-specific tier pricing, minimum order quantities, credit limit approvals, and automated GST billing alongside your consumer storefront.'
      }
    ]
  },

  // 5. LOGISTICS & FLEET TELEMATICS
  {
    id: '5',
    slug: 'logistics',
    title: 'Logistics & Fleet Telematics',
    category: 'Supply Chain & Telematics Software',
    icon: Truck,
    heroTitle: 'Logistics, Fleet Telematics & Supply Chain Software',
    heroSubtitle: 'Engineering high-frequency vehicle GPS tracking dashboards, AI route optimization engines, warehouse WMS systems, and automated proof-of-delivery mobile apps.',
    metaDescription: 'Veluno Softtech develops real-time logistics software, fleet GPS telematics portals, AI route optimization, and warehouse management systems.',
    overview: [
      'Modern logistics and transport networks operate in hyper-competitive margins where delayed dispatches, un-optimized vehicle routes, and inventory blind spots directly erode profitability.',
      'Veluno Softtech engineers enterprise-grade logistics and telematics platforms capable of processing millions of GPS telemetry pings per minute while maintaining sub-second dashboard rendering.',
      'We combine cloud geospatial engines, algorithmic dispatching, automated customs documentation, and mobile driver applications to provide end-to-end supply chain visibility from the loading dock to the final customer doorstep.'
    ],
    complianceStandards: [
      'ISO 28000 Security Management for Supply Chains',
      'AIS-140 Intelligent Transportation Standards (India)',
      'Electronic Logging Device (ELD) & Hours of Service (HOS) Mandates',
      'EU Mobility Package Driving Time Regulations',
      'GDPR Geolocation Data Privacy Frameworks'
    ],
    challenges: [
      {
        title: 'Massive GPS Telemetry Ingestion Overload',
        description: 'Tracking thousands of commercial vehicles transmitting live coordinates every 5 seconds generates gigabytes of time-series data that crashes standard databases.'
      },
      {
        title: 'Fuel Wastage from Inefficient Multi-Stop Routing',
        description: 'Manual route planning results in excessive driving miles, traffic bottlenecks, and missed delivery SLA windows, driving up operational fleet fuel costs.'
      },
      {
        title: 'Disjointed Warehouse Picking & Slow Dispatches',
        description: 'Paper-based picking lists and manual barcode recording cause loading delays, shipping wrong SKUs, and lost inventory traceability.'
      },
      {
        title: 'Disputed Deliveries & Lack of Real-Time Proof',
        description: 'Customers disputing delivery times or reporting damaged shipments without timestamped photo evidence and digital signatures causes painful chargebacks.'
      }
    ],
    solutions: [
      {
        title: 'High-Frequency Fleet GPS Telematics & Geofencing',
        description: 'Real-time fleet tracking portal displaying live vehicle positions, route histories, speed telematics, ignition status, and automatic geofence entry/exit alerts.',
        features: [
          'Sub-500ms vehicle position updates using WebSocket streaming',
          'Interactive SVG/Vector maps rendering thousands of vehicles without lag',
          'Instant SMS/Email alerts for speed violations, harsh braking, and route deviation',
          'Historical route playback with fuel consumption estimates'
        ],
        techHighlight: 'As featured in our VeloFleet telematics architecture monitoring 1,500+ commercial vehicles.'
      },
      {
        title: 'Algorithmic Route Optimization & Dispatch Engine',
        description: 'Automated vehicle routing engine that factors in multi-stop drop sequences, live traffic conditions, vehicle weight capacity, and customer delivery windows.',
        features: [
          'Multi-vehicle Traveling Salesperson (VRP) heuristic calculations',
          'Automatic re-routing when drivers encounter unexpected road closures',
          'Estimated Time of Arrival (ETA) updates sent live to awaiting customers',
          'Fuel cost reduction of up to 18% across commercial routes'
        ],
        techHighlight: 'Python optimization algorithms (OR-Tools) integrated into Node.js dispatch workers.'
      },
      {
        title: 'Warehouse Management (WMS) & Barcode Handhelds',
        description: 'Rugged barcode scanning software orchestrating warehouse bin locations, pick-and-pack wave workflows, dock door assignments, and real-time inventory adjustments.',
        features: [
          'Optimized picker walking paths to minimize warehouse retrieval time',
          'Real-time barcode scanning verification preventing wrong-item dispatches',
          'Automated shipping label and packing slip printing',
          'Cross-docking and inventory cycle-counting workflows'
        ],
        techHighlight: 'Fast web application optimized for Android industrial barcode scanner hardware (Zebra / Honeywell).'
      },
      {
        title: 'Driver Mobile App & Electronic Proof of Delivery (e-POD)',
        description: 'Turn-by-turn navigation and delivery confirmation app allowing drivers to capture digital customer signatures, take parcel photos, and log delivery statuses.',
        features: [
          'Offline signature and photo capture when delivering in basements',
          'Automated real-time customer notification with live delivery link',
          'Cash-on-Delivery (COD) reconciliation and digital payment collection',
          'Driver daily hours of service (HOS) and vehicle inspection checklist'
        ],
        techHighlight: 'React Native mobile app with background GPS telemetry and SQLite caching.'
      }
    ],
    techStack: [
      {
        category: 'Real-Time Telematics & Maps',
        items: ['WebSockets', 'Mapbox GL JS', 'Leaflet', 'Go (Golang)', 'Redis Pub/Sub']
      },
      {
        category: 'Time-Series Data & Storage',
        items: ['TimescaleDB', 'PostGIS (Geospatial)', 'PostgreSQL', 'ClickHouse']
      },
      {
        category: 'Route Optimization & AI',
        items: ['Google OR-Tools', 'Python FastAPI', 'OSRM (Open Source Routing Machine)']
      },
      {
        category: 'Mobile & Handheld WMS',
        items: ['React Native', 'SQLite', 'Zebra DataWedge API', 'Node.js']
      }
    ],
    securityGuarantees: [
      'Encrypted GPS telemetry ingestion safeguarding commercial supply chain confidentiality',
      'Granular fleet manager permissions restricting vehicle control commands by branch',
      'Immutable delivery audit records with tamper-proof timestamps and GPS coordinates',
      '99.99% high-availability cloud cluster ensuring real-time tracking never goes dark',
      'Automated daily database backups with verified disaster recovery restore plans'
    ],
    relatedCaseStudySlugs: ['fleet-tracking-platform', 'commerce-platform-concept'],
    faqs: [
      {
        question: 'How many vehicles can your fleet telematics portal track simultaneously?',
        answer: 'Our event-driven microservices architecture (Go, TimescaleDB, Redis Pub/Sub) is benchmarked to process telemetry from over 50,000 active GPS devices simultaneously with sub-500ms map update latency and zero database CPU bottlenecks.'
      },
      {
        question: 'Can the driver mobile app work offline in underground parking or rural spots?',
        answer: 'Yes. The driver app caches all delivery route stops, customer instructions, and digital signatures locally in SQLite. The driver can collect signatures, take delivery photos, and mark stops completed offline; all records upload automatically once mobile data is regained.'
      },
      {
        question: 'Does the route optimization engine adapt to live road traffic?',
        answer: 'Yes. Our route optimization engine connects with real-time traffic APIs and historical congestion patterns, dynamically calculating the fastest sequential multi-stop sequence and recalculating ETAs automatically when unexpected delays occur.'
      },
      {
        question: 'Can your WMS integrate with industrial barcode scanners?',
        answer: 'Yes. We engineer responsive web applications and native Android apps with dedicated hardware drivers for Zebra, Honeywell, and Datalogic scanners, supporting rapid 1D/2D barcode and QR scanning without keystroke lag.'
      }
    ]
  }
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().replace(/[^a-z0-9]/g, '');
  return industries.find(
    (i) => i.slug === slug || i.slug.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized
  );
};
