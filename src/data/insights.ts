export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  coverImage?: string;
  tags?: string[];
  isCustom?: boolean;
}

// Auto-load posts managed via Netlify CMS in src/content/blog/
const cmsModules = import.meta.glob<{ default: BlogPost }>('../content/blog/*.json', { eager: true });
const cmsPosts: BlogPost[] = Object.values(cmsModules).map((m) => m.default);

export const initialInsights: BlogPost[] = cmsPosts.length > 0 ? cmsPosts : [
  {
    slug: 'the-true-cost-of-legacy-software',
    title: 'The Hidden Costs of Legacy Software in Enterprise Operations',
    date: 'Oct 12, 2026',
    category: 'Architecture',
    readTime: '6 min read',
    summary: 'Why putting off system modernization is costing growing enterprises more than technical debt through maintenance taxes, security vulnerabilities, and integration barriers.',
    author: {
      name: 'Technical Architecture Lead',
      role: 'Veluno Softtech Engineering Hub, Chennai',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    tags: ['Legacy Modernization', 'Strangler Fig', 'Microservices', 'Enterprise Architecture'],
    content: `
Legacy software often feels like a comfortable pair of shoes—it is worn in, everyone knows how to use it, and replacing it feels expensive. However, the true commercial cost of maintaining outdated systems goes far beyond monthly cloud or hosting invoices.

### 1. The Maintenance Tax
Every year, older frameworks become harder to support. Finding software engineers who know obsolete languages (or want to work with them) becomes increasingly expensive. In our technical audits, enterprise organizations regularly allocate 70% of their operational IT budget purely to "keeping the lights on," leaving negligible budget for new product initiatives.

### 2. The Security & Regulatory Liability
Critical security patches for outdated open-source dependencies eventually stop. When your core operational logic relies on unmaintained libraries, you are not simply accumulating technical debt; you are accumulating acute legal and regulatory exposure under GDPR, ISO/IEC 27001, and SOC 2 frameworks.

### 3. The Integration Barrier
Modern commerce depends on interconnected digital ecosystems. If your CRM cannot communicate bi-directionally with your warehouse ledger or accounting software without a human employee manually moving CSV files, you are losing hundreds of working hours every quarter to manual transcription errors.

### The Strangler-Fig Pattern: Phased Modernization Without Operational Downtime
At Veluno Softtech, we advise against high-risk "rip and replace" projects that attempt to rewrite multi-year codebases overnight. Instead, we architect **Strangler-Fig Modernization Pipelines**:
- **Step 1:** Isolate a single high-value capability (such as payment processing or user auth).
- **Step 2:** Build an independent, cloud-native microservice alongside the legacy monolithic core.
- **Step 3:** Route live network traffic for that specific capability to the new microservice via an API gateway.
- **Step 4:** Iterate progressively until the legacy system is cleanly retired with zero downtime.

This controlled approach guarantees continuous business continuity, controls budget allocation, and delivers measurable ROI at each milestone.
`
  },
  {
    slug: 'why-we-scope-before-we-build',
    title: 'Why We Insist on Written Functional Scoping Before Writing Code',
    date: 'Sep 28, 2026',
    category: 'Engineering Process',
    readTime: '5 min read',
    summary: 'Preventing scope creep, aligning stakeholder expectations, and defining unambiguous acceptance criteria before writing the first line of code.',
    author: {
      name: 'Product Delivery Squad',
      role: 'Veluno Softtech Engineering Hub, Chennai',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    tags: ['Project Scoping', 'Agile Governance', 'Sprint Planning', 'Client Trust'],
    content: `
In the rush to get software products to market, many software agencies and internal engineering teams dive headfirst into writing code before aligning on explicit requirements. At Veluno Softtech, we mandate a written, mutual functional scope before development sprints begin.

### Alignment Over Assumptions
"Build an inventory dashboard" means something entirely different to a warehouse dock supervisor than it does to a software developer. Documenting user journeys and database relationships forces all stakeholders to confront edge-case assumptions before expensive engineering hours are consumed.

### Preventing Scope Creep & Budget Blowouts
Scope creep is the quiet killer of software milestones. By clearly identifying what is in-bounds for Version 1.0—and critically, what is explicitly *out-of-bounds*—we protect project delivery timelines and financial budgets. When a valuable new feature idea emerges during development, it does not derail the active release sprint; it gets cataloged for Version 1.1.

### Written Acceptance Criteria
How do stakeholders know when a feature is truly complete? Without an explicit written specification, "done" is subjective and prone to conflicting opinions. With written acceptance criteria, "done" means the feature passes automated unit tests, satisfies security checks, and matches the agreed Figma interaction model.
`
  },
  {
    slug: 'sub-second-conversational-voice-ai-webrtc',
    title: 'Architecting Sub-Second Conversational Voice AI Pipelines with WebRTC',
    date: 'Nov 04, 2026',
    category: 'Artificial Intelligence',
    readTime: '7 min read',
    summary: 'How full-duplex WebRTC audio streaming, neural speech synthesis, and real-time state management eliminate robotic conversational lag in automated phone bots.',
    author: {
      name: 'AI Engineering Lead',
      role: 'Veluno Softtech Engineering Hub, Chennai',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    coverImage: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1200',
    tags: ['Voice AI', 'WebRTC', 'FastAPI', 'Neural TTS', 'Zylo Voice'],
    content: `
Traditional Interactive Voice Response (IVR) phone systems ("press 1 for billing, press 2 for support") create immense customer friction. Meanwhile, naive implementations of AI voice bots suffer from 2-to-4 second response delays, creating disjointed, robotic conversations where humans and machines continuously speak over each other.

### The Sub-600ms Latency Budget
To achieve natural, human-grade conversational interruptions, an AI voice pipeline must execute the complete round-trip within **600 milliseconds**:
1. **Audio Packet Ingestion (WebRTC / SIP):** Streaming raw Opus packets over UDP directly to the media server (<40ms).
2. **Streaming Speech-to-Text (STT):** Transcribing interim tokens as the caller speaks rather than waiting for silence (<120ms).
3. **LLM First-Token Generation:** Streaming inference using optimized semantic models (<180ms).
4. **Streaming Neural Text-to-Speech (TTS):** Synthesizing phonemes into audio buffers on the fly (<150ms).
5. **Jitter Buffer & Playback:** Returning audio packets over the telephony SIP trunk (<30ms).

### Full-Duplex Interruptibility
The defining hallmark of an elite voice agent is **barge-in capability**. When a human caller interrupts with "Wait, can you change that time to 3 PM?", the system must instantly detect the caller's acoustic energy, cancel in-flight audio playback within 50ms, and recalculate conversational context without audio clipping.

At Veluno Softtech, we engineered this exact architecture for **Zylo Voice**, allowing automated telephony pods to qualify sales leads, confirm appointments, and synchronize CRM records in real time.
`
  },
  {
    slug: 'headless-ecommerce-core-web-vitals-conversion',
    title: 'Headless Commerce vs Monolithic Themes: Core Web Vitals & Conversion Benchmarks',
    date: 'Nov 18, 2026',
    category: 'E-Commerce',
    readTime: '6 min read',
    summary: 'A technical breakdown of why decoupled Next.js storefronts consistently outperform standard CMS themes by achieving sub-1.5s mobile LCP and 18%+ conversion lifts.',
    author: {
      name: 'Frontend Systems Architect',
      role: 'Veluno Softtech Engineering Hub, Chennai',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    tags: ['Headless Commerce', 'Next.js 15', 'Core Web Vitals', 'CRO', 'Shopify Plus'],
    content: `
Every 100-millisecond reduction in mobile page load latency yields a measurable 1.1% to 2.8% lift in checkout conversion rate. Despite this, many commercial brands continue running monolithic templates weighed down by render-blocking scripts and dozens of third-party tracking apps.

### The Problem With Plugin Bloat
In standard monolithic platforms (such as classic Shopify Liquid themes or WooCommerce), every added marketing feature—a review widget, pop-up modal, currency converter, or bundle builder—injects an external JavaScript script tag. Over time, the Total Blocking Time (TBT) spikes past 1,200ms, dragging Google Lighthouse mobile scores down to 35/100.

### The Decoupled Advantage
In a headless commerce architecture, the user-facing storefront is decoupled entirely from the backend commerce engine:
- **Frontend:** Next.js / React compiled to ultra-lean static HTML served from edge CDNs globally.
- **Backend:** Shopify Plus, Medusa.js, or Commercelayer accessed strictly via GraphQL APIs.
- **Search & Filtering:** Algolia or Meilisearch returning product results in sub-50ms without hitting the primary database.

The result is a storefront that renders in under 1.5 seconds on 4G mobile devices, passes all Google Core Web Vitals metrics, and delivers instantaneous catalog browsing.
`
  }
];

export const insights: BlogPost[] = initialInsights;
