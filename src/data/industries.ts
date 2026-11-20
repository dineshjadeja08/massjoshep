import { Landmark, HeartPulse, Wheat, ShoppingBag, Truck } from 'lucide-react';

export interface Industry {
  id: string;
  slug: string;
  title: string;
  icon: any; // Using any for Lucide icon reference
  heroTitle: string;
  heroSubtitle: string;
  challenges: string[];
  solutions: {
    title: string;
    description: string;
  }[];
}

export const industries: Industry[] = [
  {
    id: '1',
    slug: 'fintech',
    title: 'FinTech',
    icon: Landmark,
    heroTitle: 'Secure, Scalable FinTech Engineering',
    heroSubtitle: 'We build secure payment gateway integrations, financial dashboards, and automated transaction reconciliation workflows.',
    challenges: [
      'Strict regulatory and compliance requirements (PCI-DSS, GDPR)',
      'Need for sub-millisecond transaction speeds',
      'Complex legacy system integrations',
      'Absolute data security and encryption requirements'
    ],
    solutions: [
      {
        title: 'Core Banking Systems',
        description: 'Modernizing legacy mainframes with microservices architecture for faster product rollouts.'
      },
      {
        title: 'Payment Gateways',
        description: 'Building secure, high-throughput transaction processing systems with multi-currency support.'
      },
      {
        title: 'Blockchain & Smart Contracts',
        description: 'Developing immutable ledgers and automated execution engines for secure B2B transfers.'
      }
    ]
  },
  {
    id: '2',
    slug: 'healthcare',
    title: 'Healthcare',
    icon: HeartPulse,
    heroTitle: 'Compliant Healthcare Software',
    heroSubtitle: 'Data privacy-conscious engineering for telehealth portals, patient scheduling systems, and records integration.',
    challenges: [
      'Data privacy and security standards (GDPR, HIPAA awareness)',
      'Interoperability between different medical record formats',
      'Reliable real-time data synchronization for provider dashboards',
      'Robust uptime and access control requirements'
    ],
    solutions: [
      {
        title: 'Telemedicine Platforms',
        description: 'Secure WebRTC video streaming with integrated scheduling and prescription management.'
      },
      {
        title: 'EHR Integrations',
        description: 'Seamlessly syncing patient records across disparate healthcare providers using FHIR standards.'
      },
      {
        title: 'AI Diagnostics',
        description: 'Deploying machine learning models to assist in radiology imaging and predictive patient care.'
      }
    ]
  },
  {
    id: '3',
    slug: 'agriculture',
    title: 'Agriculture',
    icon: Wheat,
    heroTitle: 'AgriTech & Supply Chain Engineering',
    heroSubtitle: 'IoT data pipelines and predictive AI to optimize crop yields and logistics.',
    challenges: [
      'Processing massive amounts of IoT sensor data',
      'Offline-first capabilities for remote farm locations',
      'Complex supply chain traceability',
      'Predicting unpredictable weather patterns'
    ],
    solutions: [
      {
        title: 'IoT Sensor Dashboards',
        description: 'Real-time telemetry processing for soil moisture, temperature, and crop health.'
      },
      {
        title: 'Predictive Yield AI',
        description: 'Machine learning pipelines that forecast harvest yields based on historical and satellite data.'
      },
      {
        title: 'Supply Chain Traceability',
        description: 'End-to-end tracking systems ensuring farm-to-table transparency and quality control.'
      }
    ]
  },
  {
    id: '4',
    slug: 'e-commerce',
    title: 'E-commerce',
    icon: ShoppingBag,
    heroTitle: 'High-Volume E-commerce Platforms',
    heroSubtitle: 'Headless commerce architecture, API integrations, and inventory synchronization systems designed for fast, dependable customer experiences.',
    challenges: [
      'Handling massive traffic spikes during sales events',
      'Sub-second page load times for conversion optimization',
      'Complex inventory synchronization across multiple warehouses',
      'Personalization at scale'
    ],
    solutions: [
      {
        title: 'Headless Commerce',
        description: 'Decoupled frontend (Next.js/React) from backend engines (Shopify/Magento) for blazing fast speeds.'
      },
      {
        title: 'Real-time Inventory',
        description: 'Event-driven architectures using Kafka to sync stock levels across thousands of SKUs instantly.'
      },
      {
        title: 'AI Recommendation Engines',
        description: 'Deploying RAG and collaborative filtering to increase average order value (AOV).'
      }
    ]
  },
  {
    id: '5',
    slug: 'logistics',
    title: 'Logistics',
    icon: Truck,
    heroTitle: 'Logistics & Fleet Management',
    heroSubtitle: 'Real-time routing, warehouse automation, and global supply chain visibility.',
    challenges: [
      'Real-time GPS tracking of thousands of vehicles',
      'Dynamic route optimization to reduce fuel costs',
      'Complex warehouse inventory management',
      'Cross-border customs and documentation automation'
    ],
    solutions: [
      {
        title: 'Fleet Tracking Portals',
        description: 'WebSocket-driven dashboards showing real-time telemetry and geofencing alerts.'
      },
      {
        title: 'Algorithmic Routing',
        description: 'AI-powered route calculation engines that adapt to traffic, weather, and delivery windows.'
      },
      {
        title: 'Warehouse Automation (WMS)',
        description: 'Custom software to orchestrate barcode scanning, pick-and-pack workflows, and automated guided vehicles.'
      }
    ]
  }
];

export const getIndustryBySlug = (slug: string) => {
  return industries.find(i => i.slug === slug);
};
