import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.velunosofttech.com';

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/services/dedicated-team',
  '/services/veluno-web',
  '/services/veluno-products',
  '/services/veluno-systems',
  '/services/veluno-growth',
  '/services/veluno-care',
  '/services/web-development',
  '/services/custom-software',
  '/services/mobile-apps',
  '/services/api-integrations',
  '/services/automation',
  '/services/ui-ux-design',
  '/services/maintenance',
  '/services/digital-marketing',
  '/engineering',
  '/security',
  '/europe',
  '/middle-east',
  '/australia',
  '/industries/fintech',
  '/industries/healthcare',
  '/industries/agriculture',
  '/industries/e-commerce',
  '/industries/logistics',
  '/work',
  '/insights',
  '/careers',
  '/contact',
  '/trust',
  '/partners',
  '/resources',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy'
];

const caseStudies = [
  'zylinn-ai',
  'linksync',
  'cavve',
  'fleet-tracking-platform',
  'xenbill',
  'xenstaff',
  'commerce-platform-concept'
];

const insights = [
  'the-true-cost-of-legacy-software',
  'why-we-scope-before-we-build'
];

const urls = [
  ...staticRoutes,
  ...caseStudies.map(slug => `/work/${slug}`),
  ...insights.map(slug => `/insights/${slug}`)
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : url.startsWith('/services') || url.startsWith('/industries') || url.startsWith('/regions') ? '0.9' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), `User-agent: *
Allow: /
Sitemap: ${BASE_URL}/sitemap.xml
`);

console.log(`Sitemap and robots.txt generated successfully with ${urls.length} URLs.`);
