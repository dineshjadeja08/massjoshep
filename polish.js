import fs from 'fs';
import path from 'path';

const basePath = 'C:/Users/VIKNESH B/OneDrive/Desktop/XenFirm/xfnew/src';

// 1. UPDATE INDEX.CSS (Brand Color)
const cssPath = path.join(basePath, 'index.css');
if (fs.existsSync(cssPath)) {
  let cssContent = fs.readFileSync(cssPath, 'utf8');
  cssContent = cssContent.replace(/--color-accent-500: #00F0FF;/, '--color-accent-500: #0a7b5a;');
  cssContent = cssContent.replace(/--color-accent-600: #00D1FF;/, '--color-accent-600: #086147;');
  fs.writeFileSync(cssPath, cssContent);
}

// 2. UPDATE HEADER.TSX
const headerPath = path.join(basePath, 'components/layout/Header.tsx');
if (fs.existsSync(headerPath)) {
  let headerContent = fs.readFileSync(headerPath, 'utf8');
  // Add Products to Nav
  const productsNav = `
          {/* Products Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-accent-600 transition-colors">
              Products <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-lg overflow-hidden py-2"
                >
                  <div className="block px-4 py-2 text-sm text-gray-400">NowSuite <span className="text-xs bg-gray-100 px-2 py-0.5 rounded ml-2 text-gray-500">Coming soon</span></div>
                  <div className="block px-4 py-2 text-sm text-gray-400">Linkora <span className="text-xs bg-gray-100 px-2 py-0.5 rounded ml-2 text-gray-500">Coming soon</span></div>
                  <a href="/upskill" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-600 border-t border-gray-100 mt-2 pt-2">XenFirm Upskill</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
`;
  if (!headerContent.includes('Products Dropdown')) {
    headerContent = headerContent.replace(
      /<Link to="\/industries" className="text-sm font-medium text-gray-700 hover:text-accent-600 transition-colors">Industries<\/Link>/,
      productsNav
    );
    // Remove industries from mobile menu
    headerContent = headerContent.replace(/<Link to="\/industries" onClick=\{\(\) => setMobileMenuOpen\(false\)\} className="text-lg font-medium text-gray-800">Industries<\/Link>/, '');
    
    // Add state for products dropdown
    headerContent = headerContent.replace(
      /const \[servicesOpen, setServicesOpen\] = useState\(false\);/,
      `const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);`
    );
  }
  fs.writeFileSync(headerPath, headerContent);
}

// 3. UPDATE FOOTER.TSX
const footerPath = path.join(basePath, 'components/layout/Footer.tsx');
if (fs.existsSync(footerPath)) {
  let footerContent = fs.readFileSync(footerPath, 'utf8');
  
  // Replace Quick Links with Company, and Services
  footerContent = footerContent.replace(
    /<h4 className="text-lg font-heading font-semibold mb-6">Company<\/h4>.*?<\/ul>\s*<\/div>/s,
    `<h4 className="text-lg font-heading font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/insights" className="text-gray-400 hover:text-white transition-colors">Insights & News</Link></li>
              <li><a href="/verify" className="text-gray-400 hover:text-white transition-colors">Verify a certificate</a></li>
            </ul>
          </div>`
  );

  footerContent = footerContent.replace(
    /<li><Link to="\/services\/web-development" className="text-gray-400 hover:text-white transition-colors">Web Applications<\/Link><\/li>.*?<\/ul>/s,
    `<li><Link to="/services/web-development" className="text-gray-400 hover:text-white transition-colors">Web applications</Link></li>
              <li><Link to="/services/custom-software" className="text-gray-400 hover:text-white transition-colors">Custom business software</Link></li>
              <li><Link to="/services/mobile-apps" className="text-gray-400 hover:text-white transition-colors">Mobile applications</Link></li>
              <li><Link to="/services/api-integrations" className="text-gray-400 hover:text-white transition-colors">Backend & API integrations</Link></li>
              <li><Link to="/services/automation" className="text-gray-400 hover:text-white transition-colors">AI & workflow automation</Link></li>
              <li><Link to="/services/ui-ux-design" className="text-gray-400 hover:text-white transition-colors">Product design</Link></li>
              <li><Link to="/services/maintenance" className="text-gray-400 hover:text-white transition-colors">Cloud & software maintenance</Link></li>
              <li><Link to="/services/digital-marketing" className="text-gray-400 hover:text-white transition-colors">Web presence & growth</Link></li>
            </ul>`
  );
  
  fs.writeFileSync(footerPath, footerContent);
}

// 4. UPDATE HOME.TSX
const homePath = path.join(basePath, 'pages/Home.tsx');
if (fs.existsSync(homePath)) {
  let homeContent = fs.readFileSync(homePath, 'utf8');
  
  // Tagline
  homeContent = homeContent.replace(
    /<motion\.h1[^>]*>.*?<\/motion\.h1>/s,
    `<motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-6"
            >
              Software that works. <span className="text-accent-500">For the way you work.</span>
            </motion.h1>`
  );

  // Standfirst
  homeContent = homeContent.replace(
    /<motion\.p\s+initial=\{\{ opacity: 0, y: 20 \}\}\s+animate=\{\{ opacity: 1, y: 0 \}\}\s+transition=\{\{ delay: 0\.1 \}\}\s+className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"\s*>\s*.*?\s*<\/motion\.p>/s,
    `<motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            >
              Custom applications, connected systems and practical delivery for growing businesses that need dependable software outcomes.
            </motion.p>`
  );

  // Replace Logo Strip (Tech Stack)
  homeContent = homeContent.replace(
    /<section className="py-12 bg-gray-50 border-b border-gray-200">.*?<\/section>/s,
    `<section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Stack in active delivery</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 font-medium text-navy-900 text-lg">
            <span>React</span>
            <span>JavaScript/TypeScript</span>
            <span>Node.js</span>
            <span>REST APIs</span>
            <span>PostgreSQL</span>
            <span>Cloud Deployment</span>
          </div>
        </div>
      </section>`
  );

  // Add Why XenFirm / Pillars
  const pillarsSection = `
      {/* Why XenFirm */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">Why XenFirm?</h2>
            <p className="text-gray-600 text-lg">We build trust through clarity, transparency, and practical delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Written scope before development</h3>
              <p className="text-gray-600">We agree what is being built, what success looks like and what is out of scope before implementation starts.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Milestone reviews</h3>
              <p className="text-gray-600">Work is reviewed at practical milestones so decisions stay visible and progress stays aligned with your priorities.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Documented handover</h3>
              <p className="text-gray-600">Each delivery includes handover notes so your team can run, extend and maintain the solution with confidence.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Support hours agreed upfront</h3>
              <p className="text-gray-600">Support coverage is defined before launch so your team knows escalation paths, response windows and ownership.</p>
            </div>
          </div>
        </div>
      </section>
  `;
  
  // Replace the old Stats section with the new Pillars
  homeContent = homeContent.replace(
    /<section className="py-20 bg-gray-50 border-t border-b border-gray-200">.*?<\/section>/s,
    pillarsSection
  );
  
  fs.writeFileSync(homePath, homeContent);
}

// 5. UPDATE DATA/CASESTUDIES.TS
const caseStudiesPath = path.join(basePath, 'data/caseStudies.ts');
if (fs.existsSync(caseStudiesPath)) {
  const newCaseStudies = `import { z } from 'zod';

export const caseStudySchema = z.object({
  slug: z.string(),
  type: z.enum(['client', 'concept']),
  clientName: z.string(),
  industry: z.string(),
  services: z.array(z.string()),
  region: z.string(),
  heroImage: z.string(),
  summary: z.string(),
  challenge: z.string(),
  approach: z.array(z.object({ title: z.string(), description: z.string() })),
  techStack: z.array(z.string()),
  results: z.array(z.object({ metric: z.string(), label: z.string() })).optional(),
  gallery: z.array(z.string()),
  timeline: z.string(),
  relatedCaseStudies: z.array(z.string()),
});

export type CaseStudy = z.infer<typeof caseStudySchema>;

export const caseStudies: CaseStudy[] = [
  {
    slug: 'guru-rooster-farm',
    type: 'client',
    clientName: 'Guru Rooster Farm',
    industry: 'Agriculture',
    services: ['Web Development', 'Digital Marketing'],
    region: 'India',
    heroImage: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80',
    summary: 'A clear online introduction for an agricultural business. Website design and development focused on presenting the farm and supporting its online presence.',
    challenge: 'Guru Rooster Farm needed a modern, online presence to introduce their agricultural business to a wider audience, support growth, and build credibility.',
    approach: [
      { title: 'Discover', description: 'Understood the farm operations, target audience, and current online footprint.' },
      { title: 'Define', description: 'Agreed on deliverables, site architecture, and visual identity that aligns with their agricultural roots.' },
      { title: 'Build & review', description: 'Designed and developed a responsive, fast-loading website optimized for potential partners.' },
      { title: 'Launch & care', description: 'Deployed the site with documented handover and agreed support hours for content updates.' }
    ],
    techStack: ['React', 'Tailwind CSS', 'Vite'],
    results: [
      { metric: 'Goal', label: 'Establish a clear, professional online narrative.' },
      { metric: 'Outcome', label: 'Successfully launched a mobile-optimized business presentation.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1535090467336-9501f96eef89?auto=format&fit=crop&q=80'
    ],
    timeline: '1 Month',
    relatedCaseStudies: []
  },
  {
    slug: 'commerce-platform-concept',
    type: 'concept',
    clientName: 'Commerce Platform Workflow',
    industry: 'Retail & E-Commerce',
    services: ['Custom Business Software', 'Backend & API integrations'],
    region: 'Global',
    heroImage: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80',
    summary: 'A sample brief showing how a connected storefront, inventory system, and payment workflow could be scoped and delivered.',
    challenge: 'This illustrative concept demonstrates our approach to solving fragmented commerce systems where inventory, storefront, and payments operate in silos, causing fulfillment delays and poor customer experiences.',
    approach: [
      { title: 'Discover', description: 'Map out the user journeys for customers, warehouse staff, and finance teams.' },
      { title: 'Define', description: 'Scope out microservices architecture and agree on API boundaries.' },
      { title: 'Build & review', description: 'Develop a headless commerce frontend connected to a centralized inventory database with milestone check-ins.' },
      { title: 'Launch & care', description: 'Plan deployment with phased rollouts and comprehensive monitoring.' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80'
    ],
    timeline: 'Sample Scope (3-4 Months)',
    relatedCaseStudies: []
  }
];
`;
  fs.writeFileSync(caseStudiesPath, newCaseStudies);
}

// 6. UPDATE WORK.TSX (Disclaimer and Honesty Model)
const workPath = path.join(basePath, 'pages/work/Work.tsx');
if (fs.existsSync(workPath)) {
  let workContent = fs.readFileSync(workPath, 'utf8');
  
  workContent = workContent.replace(
    /<p className="text-xl text-gray-300 max-w-2xl">Explore our portfolio of successful digital transformations\.<\/p>/,
    `<div className="max-w-3xl">
            <p className="text-xl text-gray-300 mb-4">We share project context honestly — without fabricated metrics or unverified outcomes.</p>
            <p className="text-sm text-gray-400">Projects are clearly labeled as real client deliveries or illustrative concepts showing how we scope work.</p>
          </div>`
  );
  
  // Add badge to card
  workContent = workContent.replace(
    /<div className="flex space-x-2">/g,
    `<div className="flex space-x-2 mb-3">
                <span className={\`text-xs font-semibold px-3 py-1 rounded-full \${cs.type === 'client' ? 'bg-accent-100 text-accent-700' : 'bg-gray-100 text-gray-600'}\`}>
                  {cs.type === 'client' ? 'Client project overview' : 'Illustrative concept'}
                </span>
              </div>
              <div className="flex space-x-2">`
  );

  fs.writeFileSync(workPath, workContent);
}

// 7. UPDATE CASESTUDYDETAIL.TSX
const caseDetailPath = path.join(basePath, 'pages/work/CaseStudyDetail.tsx');
if (fs.existsSync(caseDetailPath)) {
  let detailContent = fs.readFileSync(caseDetailPath, 'utf8');
  
  detailContent = detailContent.replace(
    /<h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">\{study\.clientName\}<\/h1>/,
    `<div className="mb-4 inline-block">
              <span className={\`text-xs font-semibold px-3 py-1 rounded-full \${study.type === 'client' ? 'bg-accent-500 text-white' : 'bg-gray-700 text-gray-200'}\`}>
                {study.type === 'client' ? 'Client project overview' : 'Illustrative concept'}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">{study.clientName}</h1>`
  );

  // Wrap results in conditional render
  detailContent = detailContent.replace(
    /<h3 className="font-bold text-navy-900 mb-4">Impact<\/h3>\s*<div className="space-y-4 mb-8">\s*\{study\.results\.map[^\}]+?\}\)\}\s*<\/div>/s,
    `{study.results && study.results.length > 0 && (
                <>
                  <h3 className="font-bold text-navy-900 mb-4">Impact / Goals</h3>
                  <div className="space-y-4 mb-8">
                    {study.results.map((res, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-2xl font-heading font-bold text-accent-600 mb-1">{res.metric}</div>
                        <div className="text-sm text-gray-600 font-medium leading-tight">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}`
  );
  
  fs.writeFileSync(caseDetailPath, detailContent);
}

// 8. UPDATE APP.TSX (Remove Industries)
const appPath = path.join(basePath, 'App.tsx');
if (fs.existsSync(appPath)) {
  let appContent = fs.readFileSync(appPath, 'utf8');
  appContent = appContent.replace(/import Industries from '.\/pages\/industries\/Industries';\n/, '');
  appContent = appContent.replace(/import IndustryDetail from '.\/pages\/industries\/IndustryDetail';\n/, '');
  appContent = appContent.replace(/<Route path="\/industries" element=\{<Industries \/>\} \/>\n/, '');
  appContent = appContent.replace(/<Route path="\/industries\/:slug" element=\{<IndustryDetail \/>\} \/>\n/, '');
  fs.writeFileSync(appPath, appContent);
}

console.log('Finished updating content and fixing honesty model.');
