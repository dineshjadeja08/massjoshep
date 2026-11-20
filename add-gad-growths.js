import fs from 'fs';
import path from 'path';

const caseStudiesPath = 'C:/Users/VIKNESH B/OneDrive/Desktop/XenFirm/xfnew/src/data/caseStudies.ts';

if (fs.existsSync(caseStudiesPath)) {
  let content = fs.readFileSync(caseStudiesPath, 'utf8');
  
  const gadGrowthsCaseStudy = `,
  {
    slug: 'gad-growths',
    type: 'client',
    clientName: 'GAD Growths',
    industry: 'Digital Marketing & Consulting',
    services: ['Web development', 'Web presence & growth'],
    region: 'International / UAE-focused',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    summary: 'A conversion-focused website that connects strategy, SEO, content, paid media, websites, and CRM into one clear growth system.',
    challenge: 'GAD Growths needed a digital presence that could explain its growth-marketing services clearly and present strategy, SEO, websites, content, paid advertising, and CRM as one connected system. The key challenge was avoiding a generic agency website by demonstrating how they connect marketing activities to commercial outcomes.',
    approach: [
      { title: 'Clear positioning', description: 'Structured the messaging around GAD Growths as a partner for businesses seeking measurable growth—not simply as a provider of disconnected marketing services.' },
      { title: 'Conversion-led structure', description: 'Organised the website to move visitors through a logical journey: understand the business, identify the challenge, see the strategic process, build confidence through proof, and take action.' },
      { title: 'Service integration', description: 'Instead of presenting SEO, paid media, content, websites, and CRM as isolated services, the website positioned them as connected parts of a complete growth system.' },
      { title: 'Professional visual experience', description: 'Used a clean, modern, strategic visual language suitable for international clients and consultative B2B services.' }
    ],
    techStack: ['Pending Client Verification'],
    results: [
      { metric: 'Positioning', label: 'Established as a strategic partner rather than a basic marketing vendor.' },
      { metric: 'Conversion', label: 'Created a clearer path from visitor interest to client enquiry.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
    ],
    timeline: 'Completed',
    relatedCaseStudies: []
  }
];`;

  content = content.replace(/\];$/, gadGrowthsCaseStudy);
  fs.writeFileSync(caseStudiesPath, content);
  console.log('Successfully added GAD Growths case study.');
} else {
  console.error('Could not find caseStudies.ts');
}
