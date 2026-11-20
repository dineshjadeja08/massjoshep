import fs from 'fs';
import path from 'path';

const basePath = 'C:/Users/VIKNESH B/OneDrive/Desktop/XenFirm/xfnew/src';

// 1. Update Home.tsx
const homePath = path.join(basePath, 'pages/Home.tsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

homeContent = homeContent.replace(
  /Enterprise-grade digital solutions for <span className="text-accent-500">growing businesses\.<\/span>/,
  'Custom applications, connected systems and <span className="text-accent-500">practical delivery.</span>'
);

homeContent = homeContent.replace(
  /We design, build, and scale custom software, web applications, and AI integrations for forward-thinking companies across the globe\./,
  'Custom applications, connected systems and practical delivery for growing businesses that need dependable software outcomes.'
);

homeContent = homeContent.replace(
  /We deliver end-to-end technical solutions to solve complex business challenges\./,
  'Stack in active delivery: React, JavaScript/TypeScript, Node.js, REST APIs, PostgreSQL and cloud deployment.'
);

// Update Services in Home.tsx
const oldServicesArrayRegex = /{\[\s*{ icon: Globe.*?\]\.map/s;
const newServicesArray = `{[
              { icon: Globe, title: 'Web applications', desc: 'Customer portals, business websites and web apps built around how you work.', link: '/services/web-development' },
              { icon: Code, title: 'Custom business software', desc: 'Purpose-built tools for operations, bookings, sales and workflows.', link: '/services/custom-software' },
              { icon: Database, title: 'Backend & API integrations', desc: 'Connect your applications, payments and systems with APIs.', link: '/services/api-integrations' },
              { icon: Smartphone, title: 'Mobile applications', desc: 'Plan and build mobile experiences connected to your business systems.', link: '/services/mobile-apps' }
            ].map`;
homeContent = homeContent.replace(oldServicesArrayRegex, newServicesArray);

// Update the Link in the map
homeContent = homeContent.replace(
  /<Link to="\/services" className="inline-flex items-center text-navy-900/g,
  '<Link to={service.link} className="inline-flex items-center text-navy-900'
);

fs.writeFileSync(homePath, homeContent);

// 2. Update Header.tsx
const headerPath = path.join(basePath, 'components/layout/Header.tsx');
let headerContent = fs.readFileSync(headerPath, 'utf8');

headerContent = headerContent.replace(
  /<Link to="\/services\/custom-websites".*?<\/Link>\s*<Link to="\/services\/web-apps-saas".*?<\/Link>\s*<Link to="\/services\/ai-automation".*?<\/Link>\s*<Link to="\/services\/integrations-apis".*?<\/Link>\s*<Link to="\/services\/ongoing-support".*?<\/Link>/s,
  `<Link to="/services/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-600">Web Applications</Link>
                  <Link to="/services/custom-software" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-600">Custom Business Software</Link>
                  <Link to="/services/mobile-apps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-600">Mobile Applications</Link>
                  <Link to="/services/api-integrations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-600">Backend & API</Link>
                  <Link to="/services/automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-600">AI & Automation</Link>
                  <Link to="/services/ui-ux-design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-600">Product Design</Link>`
);
fs.writeFileSync(headerPath, headerContent);

// 3. Update Footer.tsx
const footerPath = path.join(basePath, 'components/layout/Footer.tsx');
let footerContent = fs.readFileSync(footerPath, 'utf8');

footerContent = footerContent.replace(
  /An IT services & digital product company delivering production-grade solutions for growing businesses worldwide\./,
  'Custom applications, connected systems and practical delivery for growing businesses that need dependable software outcomes.'
);

footerContent = footerContent.replace(
  /<a href="#" className="text-gray-400 hover:text-accent-500 transition-colors"><Linkedin className="w-5 h-5" \/><\/a>\s*<a href="#" className="text-gray-400 hover:text-accent-500 transition-colors"><Twitter className="w-5 h-5" \/><\/a>\s*<a href="#" className="text-gray-400 hover:text-accent-500 transition-colors"><Github className="w-5 h-5" \/><\/a>/,
  `<a href="https://www.linkedin.com/company/xenfirm-technologies" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://wa.me/919080824626" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="https://github.com/dineshjadeja08/xenfirm_Tech" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-500 transition-colors"><Github className="w-5 h-5" /></a>`
);

footerContent = footerContent.replace(
  /<li><Link to="\/services\/custom-websites".*?<\/Link><\/li>\s*<li><Link to="\/services\/web-apps-saas".*?<\/Link><\/li>\s*<li><Link to="\/services\/ai-automation".*?<\/Link><\/li>\s*<li><Link to="\/services\/integrations-apis".*?<\/Link><\/li>/s,
  `<li><Link to="/services/web-development" className="text-gray-400 hover:text-white transition-colors">Web Applications</Link></li>
              <li><Link to="/services/custom-software" className="text-gray-400 hover:text-white transition-colors">Custom Software</Link></li>
              <li><Link to="/services/api-integrations" className="text-gray-400 hover:text-white transition-colors">API Integrations</Link></li>
              <li><Link to="/services/automation" className="text-gray-400 hover:text-white transition-colors">AI & Automation</Link></li>`
);

footerContent = footerContent.replace(/\+91 98765 43210/g, '+91 90808 24626');
footerContent = footerContent.replace(/tel:\+919876543210/g, 'tel:+919080824626');
fs.writeFileSync(footerPath, footerContent);

// 4. Update Services.tsx
const servicesPath = path.join(basePath, 'pages/services/Services.tsx');
let servicesContent = fs.readFileSync(servicesPath, 'utf8');

servicesContent = servicesContent.replace(
  /\[\s*{\s*id: 'custom-websites'[\s\S]*?}\s*\]/s,
  `[
            { id: 'web-development', title: 'Web applications', desc: 'Customer portals, business websites and web applications built around the way you work.' },
            { id: 'custom-software', title: 'Custom business software', desc: 'Purpose-built tools for operations, bookings, sales and the workflows that make your business different.' },
            { id: 'mobile-apps', title: 'Mobile applications', desc: 'Plan and build mobile experiences connected to your business systems.' },
            { id: 'api-integrations', title: 'Backend & API integrations', desc: 'Connect your applications, payments and business systems with well-defined APIs.' },
            { id: 'automation', title: 'AI & workflow automation', desc: 'Reduce repetitive work with practical automation and carefully scoped AI integrations.' },
            { id: 'ui-ux-design', title: 'Product design', desc: 'Clear user journeys and responsive interfaces that make complex software easier to use.' },
            { id: 'maintenance', title: 'Cloud & software maintenance', desc: 'Deployment, updates and ongoing improvements for the software your business depends on.' },
            { id: 'digital-marketing', title: 'Web presence & growth', desc: 'Improve your website content, search foundations and campaign measurement.' }
          ]`
);
servicesContent = servicesContent.replace(
  /<p className="text-gray-600">Enterprise-grade solutions tailored to your business needs\.<\/p>/,
  '<p className="text-gray-600">{s.desc}</p>'
);
fs.writeFileSync(servicesPath, servicesContent);

// 5. Update Contact.tsx
const contactPath = path.join(basePath, 'pages/Contact.tsx');
let contactContent = fs.readFileSync(contactPath, 'utf8');
contactContent = contactContent.replace(/\+91 98765 43210/g, '+91 90808 24626');
contactContent = contactContent.replace(/tel:\+919876543210/g, 'tel:+919080824626');
fs.writeFileSync(contactPath, contactContent);

// 6. Append case study to caseStudies.ts
const caseStudiesPath = path.join(basePath, 'data/caseStudies.ts');
let caseStudiesContent = fs.readFileSync(caseStudiesPath, 'utf8');
const newCaseStudy = `,
  {
    slug: 'guru-rooster-farm',
    clientName: 'Guru Rooster Farm',
    industry: 'Agriculture',
    services: ['Web Development', 'Digital Marketing'],
    region: 'India',
    heroImage: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80',
    summary: 'A clear online introduction for an agricultural business. Website design and development focused on presenting the farm and supporting its online presence.',
    challenge: 'Guru Rooster Farm needed a modern, online presence to introduce their agricultural business to a wider audience, support growth, and build credibility.',
    approach: [
      { title: 'Business Presentation', description: 'Designed a clean, professional narrative highlighting the farm operations.' },
      { title: 'Website Design & Development', description: 'Built a responsive, fast-loading website optimized for potential partners.' }
    ],
    techStack: ['React', 'Tailwind CSS', 'Vite'],
    results: [
      { metric: '100%', label: 'Mobile Optimized' },
      { metric: 'Fast', label: 'Page Load Speed' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1535090467336-9501f96eef89?auto=format&fit=crop&q=80'
    ],
    timeline: '1 Month',
    relatedCaseStudies: []
  }
`;
caseStudiesContent = caseStudiesContent.replace(/\];$/, newCaseStudy + '];');
fs.writeFileSync(caseStudiesPath, caseStudiesContent);

console.log('Successfully updated content from xenfirm.com');
