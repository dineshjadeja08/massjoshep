import fs from 'fs';
import path from 'path';

const basePath = 'C:/Users/VIKNESH B/OneDrive/Desktop/XenFirm/xfnew/src';

// ============================================================================
// 1. SERVICES DATA
// ============================================================================
const servicesDataPath = path.join(basePath, 'data/services.ts');
const servicesDataContent = `export const servicesData = [
  {
    id: 'web-development',
    title: 'Web applications',
    tagline: 'Customer portals, business websites and web applications built around the way you work.',
    content: `Modern web applications are the backbone of digital business. We build scalable, high-performance web platforms that serve as the primary interface between you and your customers. Whether you need a secure client portal, a high-traffic business website, or a complex web-based SaaS application, our engineering team delivers solutions that are fast, accessible, and secure.

### Our Approach
- **Discovery & Architecture:** We map out user journeys, data flow, and system architecture before writing a single line of code.
- **Frontend Excellence:** Utilizing React and modern CSS frameworks to deliver responsive, intuitive user experiences.
- **Robust Backend:** Building secure Node.js and PostgreSQL foundations that scale with your traffic.
- **Performance Optimization:** Ensuring rapid load times and passing core web vitals for optimal SEO and user retention.`
  },
  {
    id: 'custom-software',
    title: 'Custom business software',
    tagline: 'Purpose-built tools for operations, bookings, sales and the workflows that make your business different.',
    content: `Off-the-shelf software often forces you to change your operations to fit the tool. We build custom business software that adapts to your unique workflows. From internal CRM systems to specialized inventory management and operational dashboards, we engineering solutions that eliminate manual bottlenecks and reduce operational overhead.

### What We Build
- **Operational Dashboards:** Real-time visibility into your critical business metrics.
- **Custom CRMs:** Client relationship management tailored to your exact sales cycle.
- **Workflow Automation:** Systems that replace spreadsheets and manual data entry.
- **Booking & Scheduling Systems:** Complex logic engines for managing time, resources, and availability.`
  },
  {
    id: 'mobile-apps',
    title: 'Mobile applications',
    tagline: 'Plan and build mobile experiences connected to your business systems.',
    content: `We design and develop native and cross-platform mobile applications that put your business in the pockets of your customers and workforce. Our mobile solutions are tightly integrated with your backend systems, ensuring real-time data synchronization and a seamless experience across all devices.

### Mobile Capabilities
- **Cross-Platform Development:** Leveraging React Native to deploy to iOS and Android simultaneously without compromising performance.
- **Offline Capabilities:** Designing apps that work seamlessly in low-connectivity environments.
- **Hardware Integration:** Utilizing device features like GPS, camera, and biometric authentication safely.
- **Enterprise Mobility:** Secure internal applications for field workers and remote teams.`
  },
  {
    id: 'api-integrations',
    title: 'Backend & API integrations',
    tagline: 'Connect your applications, payments and business systems with well-defined APIs.',
    content: `Data silos are the enemy of efficiency. We specialize in connecting fragmented software ecosystems through robust, secure API integrations. Whether you need to connect your custom application to a legacy ERP, integrate a complex payment gateway, or build a unified data lake, our backend engineers ensure data flows reliably and securely.

### Integration Expertise
- **Custom API Development:** Designing scalable REST and GraphQL APIs for your platforms.
- **Third-Party Connections:** Integrating with Salesforce, Stripe, Twilio, AWS, and enterprise ERPs.
- **Legacy System Modernization:** Building modern API wrappers around legacy databases to unlock trapped data.
- **Data Synchronization:** Real-time, fault-tolerant data pipelines that keep systems in sync.`
  },
  {
    id: 'automation',
    title: 'AI & workflow automation',
    tagline: 'Reduce repetitive work with practical automation and carefully scoped AI integrations.',
    content: `We cut through the AI hype to deliver practical, measurable automation. By identifying high-volume, low-value manual tasks in your organization, we deploy targeted automation and machine learning solutions that free up your team to focus on strategic work.

### Practical AI Applications
- **Intelligent Document Processing:** Automatically extracting structured data from PDFs, emails, and invoices.
- **Workflow Orchestration:** Connecting disparate tools to automate repetitive task handoffs.
- **Customer Support Augmentation:** Deploying scoped LLM-based assistants to handle tier-1 support queries using your proprietary data.
- **Predictive Analytics:** Utilizing historical data to forecast trends and automate decision-making rules.`
  },
  {
    id: 'ui-ux-design',
    title: 'Product design',
    tagline: 'Clear user journeys and responsive interfaces that make complex software easier to use.',
    content: `Great software is only valuable if people can actually use it. Our product design process bridges the gap between complex technical requirements and intuitive human experiences. We design interfaces that reduce cognitive load, minimize training time, and guide users naturally toward their goals.

### Design Process
- **User Research:** Understanding the context, pain points, and technical proficiency of your end-users.
- **Wireframing & Prototyping:** Rapid iteration of layouts and user flows before development begins.
- **Design Systems:** Creating scalable component libraries that ensure visual consistency across your entire product suite.
- **Usability Testing:** Validating design assumptions with real users to ensure the interface performs as intended.`
  },
  {
    id: 'maintenance',
    title: 'Cloud & software maintenance',
    tagline: 'Deployment, updates and ongoing improvements for the software your business depends on.',
    content: `Launching a digital product is only the beginning. Software requires ongoing care to remain secure, performant, and aligned with evolving business needs. Our maintenance agreements provide peace of mind with guaranteed response times, proactive security patching, and continuous infrastructure optimization.

### Maintenance Pillars
- **Cloud Infrastructure:** Managing AWS, Vercel, or custom cloud environments for maximum uptime.
- **Security & Compliance:** Regular dependency auditing, vulnerability patching, and access reviews.
- **Performance Monitoring:** Real-time alerting for server errors, slow API routes, and downtime.
- **Iterative Enhancements:** A dedicated allocation of monthly hours to build new features and refine existing workflows.`
  },
  {
    id: 'digital-marketing',
    title: 'Web presence & growth',
    tagline: 'Improve your website content, search foundations and campaign measurement.',
    content: `A great platform needs visibility to generate ROI. We combine technical SEO, content strategy, and rigorous analytics to ensure your digital products reach their intended audience. We focus on measurable commercial outcomes, connecting acquisition metrics directly to your bottom line.

### Growth Strategies
- **Technical SEO:** Optimizing site architecture, core web vitals, and metadata for search engine visibility.
- **Conversion Rate Optimization (CRO):** A/B testing and refining user journeys to turn more visitors into qualified leads.
- **Analytics & Tracking:** Implementing robust tracking architectures (GTM, GA4, Meta) to measure campaign effectiveness accurately.
- **Content Architecture:** Structuring your digital presence to answer user intent and build industry authority.`
  }
];
`;
fs.writeFileSync(servicesDataPath, servicesDataContent);

// ============================================================================
// 2. SERVICE DETAIL COMPONENT
// ============================================================================
const serviceDetailPath = path.join(basePath, 'pages/services/ServiceDetail.tsx');
const serviceDetailContent = `import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { servicesData } from '../../data/services';
import ReactMarkdown from 'react-markdown'; // Using a simple component, but we will parse basic markdown manually for safety if needed.

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.id === slug);

  if (!service) return <Navigate to="/404" />;

  // Simple Markdown Parser for the content
  const renderContent = (content: string) => {
    return content.split('\\n\\n').map((paragraph, idx) => {
      if (paragraph.startsWith('### ')) {
        return <h2 key={idx} className="text-2xl font-bold text-navy-900 mt-8 mb-4">{paragraph.replace('### ', '')}</h2>;
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\\n').map(item => item.replace('- ', ''));
        return (
          <ul key={idx} className="space-y-3 my-4">
            {items.map((item, i) => {
              const parts = item.split('**');
              return (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    {parts.length > 1 ? (
                      <><strong>{parts[1]}</strong>{parts[2]}</>
                    ) : (
                      item
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        );
      }
      return <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-6">{paragraph}</p>;
    });
  };

  return (
    <>
      <Helmet>
        <title>{service.title} | XenFirm Services</title>
      </Helmet>
      
      <div className="bg-navy-900 text-white py-20 border-b-4 border-accent-500">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-gray-300 mb-8 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">{service.tagline}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 prose max-w-none">
            {renderContent(service.content)}
          </div>
          
          <div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 sticky top-24">
              <h3 className="text-xl font-bold text-navy-900 mb-4">Ready to discuss your project?</h3>
              <p className="text-gray-600 mb-6">We provide written scopes before development and agree on support hours upfront.</p>
              <Link to="/contact" className="block w-full bg-navy-900 text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-navy-800 transition-colors">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;`;
fs.writeFileSync(serviceDetailPath, serviceDetailContent);

// ============================================================================
// 3. LEGAL PAGES
// ============================================================================
const createLegalPage = (title, content) => `import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page = () => {
  return (
    <>
      <Helmet>
        <title>${title} | XenFirm Technologies</title>
      </Helmet>
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-8">${title}</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          ${content}
        </div>
      </div>
    </>
  );
};

export default Page;`;

const privacyContent = `
<p className="mb-4">Last updated: October 2026</p>
<h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">1. Introduction</h2>
<p className="mb-4">XenFirm Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website xenfirm.com or use our IT services and software products.</p>
<h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">2. Information We Collect</h2>
<p className="mb-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>
<ul className="list-disc pl-6 mb-4 space-y-2">
  <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number that you voluntarily give to us when choosing to participate in various activities related to our services.</li>
  <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
</ul>
<h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">3. Use of Your Information</h2>
<p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
<ul className="list-disc pl-6 mb-4 space-y-2">
  <li>Deliver targeted advertising, coupons, newsletters, and other information regarding our services.</li>
  <li>Email you regarding your account or order.</li>
  <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
  <li>Respond to product and customer service requests.</li>
</ul>
<h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">4. Contact Us</h2>
<p className="mb-4">If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:hello@xenfirm.com" className="text-accent-500 hover:underline">hello@xenfirm.com</a></p>
`;

const termsContent = `
<p className="mb-4">Last updated: October 2026</p>
<h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">1. Agreement to Terms</h2>
<p className="mb-4">These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and XenFirm Technologies (“we,” “us” or “our”), concerning your access to and use of the xenfirm.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
<h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">2. Intellectual Property Rights</h2>
<p className="mb-4">Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.</p>
<h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">3. User Representations</h2>
<p className="mb-4">By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</p>
<h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">4. Governing Law</h2>
<p className="mb-4">These Terms shall be governed by and defined following the laws of the jurisdictions in which XenFirm operates. XenFirm Technologies and yourself irrevocably consent that the courts of competent jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
`;

const cookieContent = `
<p className="mb-4">Last updated: October 2026</p>
<h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">1. What are cookies?</h2>
<p className="mb-4">Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
<h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">2. How do we use cookies?</h2>
<p className="mb-4">We use cookies to:</p>
<ul className="list-disc pl-6 mb-4 space-y-2">
  <li>Understand and save user's preferences for future visits.</li>
  <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future.</li>
  <li>Secure our contact forms and authentication systems.</li>
</ul>
<h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">3. Your choices regarding cookies</h2>
<p className="mb-4">If you prefer to avoid the use of cookies on the Website, first you must disable the use of cookies in your browser and then delete the cookies saved in your browser associated with this website. You may use this option for preventing the use of cookies at any time.</p>
`;

fs.writeFileSync(path.join(basePath, 'pages/legal/PrivacyPolicy.tsx'), createLegalPage('Privacy Policy', privacyContent));
fs.writeFileSync(path.join(basePath, 'pages/legal/TermsOfService.tsx'), createLegalPage('Terms of Service', termsContent));
fs.writeFileSync(path.join(basePath, 'pages/legal/CookiePolicy.tsx'), createLegalPage('Cookie Policy', cookieContent));

// ============================================================================
// 4. INSIGHTS & NEWS
// ============================================================================
const insightsDataPath = path.join(basePath, 'data/insights.ts');
const insightsDataContent = `export const insights = [
  {
    slug: 'the-true-cost-of-legacy-software',
    title: 'The Hidden Costs of Legacy Software in Enterprise Operations',
    date: 'Oct 12, 2026',
    category: 'Engineering',
    readTime: '5 min read',
    summary: 'Why putting off system modernization is costing you more than just technical debt.',
    content: `
Legacy software often feels like a comfortable pair of shoes—it's worn in, everyone knows how to use it, and replacing it feels expensive. However, the true cost of maintaining outdated systems goes far beyond the server bills.

### 1. The Maintenance Tax
Every year, older frameworks become harder to support. Finding developers who know legacy languages (or want to work with them) becomes increasingly expensive. We often see companies spending 70% of their IT budget just "keeping the lights on."

### 2. The Security Liability
Security patches for outdated libraries eventually stop. When your core business logic relies on unsupported dependencies, you aren't just accumulating technical debt; you're accumulating significant legal and operational risk.

### 3. The Integration Barrier
Modern business relies on connected systems. If your CRM cannot talk to your accounting software without a human manually moving CSV files, you are losing thousands of hours a year to data entry. Modern APIs are no longer a luxury; they are a baseline requirement.

### How to approach modernization safely
At XenFirm, we never recommend ripping and replacing critical systems overnight. We advocate for the **Strangler Fig Pattern**:
- Identify a single, high-value component of the legacy system.
- Build a modern microservice alongside it.
- Route traffic for that specific function to the new service.
- Repeat until the old system is retired.

This mitigates risk, ensures business continuity, and delivers ROI incrementally.
    `
  },
  {
    slug: 'why-we-scope-before-we-build',
    title: 'Why We Insist on Written Scope Before Development',
    date: 'Sep 28, 2026',
    category: 'Process',
    readTime: '4 min read',
    summary: 'The importance of defining success criteria before writing a single line of code.',
    content: `
In the rush to get a product to market, many agencies and internal teams dive straight into writing code. At XenFirm, we require a written, agreed-upon scope before development begins. Here is why this saves our clients time, money, and frustration.

### Alignment over Assumptions
"Build an inventory dashboard" means something entirely different to a warehouse manager than it does to a software engineer. Writing down the exact user stories forces everyone to confront their assumptions.

### Preventing Scope Creep
Scope creep is the quiet killer of software budgets. By defining exactly what is in bounds for Version 1.0—and crucially, what is *out* of bounds—we protect the timeline and the budget. When a great new idea surfaces during development, it doesn't derail the project; it gets logged for Version 1.1.

### Clear Acceptance Criteria
How do we know when a feature is "done"? Without a written scope, "done" is subjective. With a scope, "done" means the feature passes the specific, written acceptance criteria agreed upon during the Define phase.
    `
  }
];
`;
fs.writeFileSync(insightsDataPath, insightsDataContent);

const insightsListPath = path.join(basePath, 'pages/insights/Insights.tsx');
const insightsListContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { insights } from '../../data/insights';

const Insights = () => {
  return (
    <>
      <Helmet>
        <title>Insights | XenFirm Technologies</title>
      </Helmet>
      
      <div className="bg-navy-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-6">Insights & News</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Thoughts, updates, and engineering practices from the XenFirm team.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid gap-12">
          {insights.map(post => (
            <article key={post.slug} className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-200 pb-12 last:border-0">
              <div className="md:w-1/4 shrink-0">
                <span className="text-xs font-semibold text-accent-700 bg-accent-100 px-3 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
                <p className="text-gray-500 text-sm mt-4">{post.date}</p>
                <p className="text-gray-500 text-sm">{post.readTime}</p>
              </div>
              <div className="md:w-3/4">
                <Link to={`/insights/${post.slug}`}>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-4 hover:text-accent-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 text-lg mb-6">{post.summary}</p>
                <Link to={`/insights/${post.slug}`} className="font-semibold text-navy-900 hover:text-accent-600 inline-flex items-center">
                  Read article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Insights;`;
fs.writeFileSync(insightsListPath, insightsListContent);

const insightDetailPath = path.join(basePath, 'pages/insights/InsightDetail.tsx');
const insightDetailContent = `import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { insights } from '../../data/insights';

const InsightDetail = () => {
  const { slug } = useParams();
  const post = insights.find(p => p.slug === slug);

  if (!post) return <Navigate to="/404" />;

  // Simple Markdown Parser for the content
  const renderContent = (content: string) => {
    return content.trim().split('\\n\\n').map((paragraph, idx) => {
      if (paragraph.startsWith('### ')) {
        return <h2 key={idx} className="text-2xl font-bold text-navy-900 mt-10 mb-4">{paragraph.replace('### ', '')}</h2>;
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\\n').map(item => item.replace('- ', ''));
        return (
          <ul key={idx} className="list-disc pl-6 space-y-2 my-6">
            {items.map((item, i) => (
              <li key={i} className="text-lg text-gray-700">{item}</li>
            ))}
          </ul>
        );
      }
      // Bold parsing helper
      const parts = paragraph.split('**');
      if (parts.length > 1) {
         return (
           <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-6">
             {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-semibold text-navy-900">{part}</strong> : part)}
           </p>
         )
      }
      return <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-6">{paragraph}</p>;
    });
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | XenFirm Insights</title>
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link to="/insights" className="inline-flex items-center text-gray-500 mb-8 hover:text-navy-900 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to insights
        </Link>
        
        <div className="mb-12 border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
            <span className="font-semibold text-accent-700 bg-accent-100 px-3 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6 leading-tight">{post.title}</h1>
        </div>

        <div className="prose max-w-none">
          {renderContent(post.content)}
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Discuss your digital strategy</h3>
          <p className="text-gray-600 mb-6">Want to see how these principles apply to your business? Let's talk.</p>
          <Link to="/contact" className="inline-block bg-navy-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-800 transition-colors">
            Contact Our Team
          </Link>
        </div>
      </div>
    </>
  );
};

export default InsightDetail;`;
fs.writeFileSync(insightDetailPath, insightDetailContent);


// ============================================================================
// 5. CAREERS INDEX PAGE
// ============================================================================
const careersListPath = path.join(basePath, 'pages/careers/Careers.tsx');
const careersListContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

const Careers = () => {
  const openRoles = [
    { slug: 'senior-full-stack-engineer', title: 'Senior Full Stack Engineer (React/Node)', location: 'Remote / Global', type: 'Full-time' },
    { slug: 'product-designer', title: 'Product Designer (UI/UX)', location: 'Remote / Global', type: 'Full-time' },
    { slug: 'technical-project-manager', title: 'Technical Project Manager', location: 'India (Remote)', type: 'Full-time' }
  ];

  return (
    <>
      <Helmet>
        <title>Careers | XenFirm Technologies</title>
      </Helmet>
      
      <div className="bg-navy-900 text-white py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl font-heading font-bold mb-6">Build software that works.</h1>
          <p className="text-xl text-gray-300">Join our global team of engineers, designers, and strategists delivering dependable outcomes for growing businesses.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-8">Open Roles</h2>
          
          <div className="space-y-4">
            {openRoles.map(role => (
              <Link key={role.slug} to={`/careers/${role.slug}`} className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-accent-500 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-accent-600 transition-colors">{role.title}</h3>
                    <div className="flex items-center space-x-6 mt-3 text-sm text-gray-500">
                      <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {role.location}</span>
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {role.type}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-navy-900 font-semibold group-hover:text-accent-600 flex items-center">
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-3">Don't see a fit?</h3>
          <p className="text-gray-600 mb-6">We are always looking for talented people. Send a general application and we'll keep you in mind for future roles.</p>
          <Link to="/careers/general-application" className="inline-block bg-navy-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-800 transition-colors">
            Submit General Application
          </Link>
        </div>
      </div>
    </>
  );
};

export default Careers;`;
fs.writeFileSync(careersListPath, careersListContent);

console.log('Successfully generated rich content for Services, Legal, Insights, and Careers pages.');

