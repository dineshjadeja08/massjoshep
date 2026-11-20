const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'caseStudies.ts');
let content = fs.readFileSync(filePath, 'utf8');

const purpleSquadObj = `  {
    slug: 'purple-squad',
    type: 'client',
    clientName: 'Purple Squad',
    industry: 'Home services / Local service marketplace',
    services: ['Product strategy', 'UI/UX design', 'Responsive web development', 'Service discovery'],
    region: 'Chennai, India',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
    summary: 'Building a trust-first home-services booking experience for Chennai. A mobile-friendly customer journey focused on clear service discovery, transparent pricing, verified technicians, and support.',
    challenge: 'Home-service customers often face unclear pricing, difficulty finding trustworthy technicians, confusing service options, and poor communication. Purple Squad needed a platform that could reduce these doubts before a customer makes a call or booking request. The challenge was to make it feel fast, reliable, local, and easy to use.',
    approach: [
      { title: 'Service Discovery', description: 'Designed dedicated categories for appliances, AC service, sofa repair, water-tank cleaning, and more so users can quickly identify the service they need.' },
      { title: 'Pricing & Trust', description: 'Implemented clear messaging around expected prices before booking and verified-professional positioning to reduce hesitation and build trust.' },
      { title: 'Scheduling & Support', description: 'Added preferred time-slot messaging for customer control and clear phone/support access before and after booking.' },
      { title: 'Website Experience', description: 'The homepage was structured to guide visitors from discovery to action, with high-priority service promotions like an AC-service campaign and transparent pricing.' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    results: [
      { metric: 'Launch', label: 'Structured base for tracking service-page engagement, call clicks, and booking enquiries.' },
      { metric: 'Value', label: 'Clearer discovery, better trust-building, and scalable service categories.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80'
    ],
    timeline: 'Live',
    relatedCaseStudies: []
  },`;

// Insert it before the last array bracket
const newContent = content.replace('export const caseStudies: CaseStudy[] = [', 'export const caseStudies: CaseStudy[] = [\n' + purpleSquadObj);

fs.writeFileSync(filePath, newContent);
console.log('Success');
