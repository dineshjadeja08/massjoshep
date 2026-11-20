# Veluno Softtech Corporate Website

A production-grade, multi-page website built for Veluno Softtech using modern web standards.

## Tech Stack
- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Routing:** React Router (v6)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod for validation

## Setup Instructions

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`
2. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`
3. **Build for production:**
   \`\`\`bash
   npm run build
   \`\`\`

## Content Management (Data Layer)

This site uses a lightweight JSON/TypeScript data layer for managing content without touching component layout code.

### How to add a new Case Study
1. Open \`src/data/caseStudies.ts\`.
2. Add a new object to the \`caseStudies\` array following the \`caseStudySchema\`.
3. Fill out fields like \`slug\` (which generates the URL \`/work/your-slug\`), \`clientName\`, \`challenge\`, \`approach\`, \`techStack\`, and \`results\`.
4. Run the app to see it automatically appear in the filterable grid on the \`/work\` page and dynamically generate its detail page.

### How to update Services, Industries, or Insights
Currently, these are mapped out as stubs. To manage them with the same scalable pattern as Case Studies:
1. Create a schema and data array in \`src/data/\` (e.g., \`services.ts\`).
2. Map over the array in their respective index pages (e.g., \`src/pages/services/Services.tsx\`).
3. Fetch the exact item by slug in the detail pages (e.g., \`ServiceDetail.tsx\`).

## Configuring Endpoints and Links

### Contact Form
The contact form uses a placeholder endpoint. To wire it to a real service like Formspree:
1. Go to Formspree, create a new form, and get the endpoint URL.
2. Open \`src/pages/Contact.tsx\`.
3. Locate the \`fetch\` call inside \`onSubmit\`:
   \`\`\`ts
   const response = await fetch('https://formspree.io/f/placeholder', { ... })
   \`\`\`
4. Replace the placeholder URL with your real Formspree (or custom serverless function) endpoint.

### Social Links and Contact Info
Update the placeholder data directly in the footer and contact page:
- **Social links:** Open \`src/components/layout/Footer.tsx\` and update the \`href\` attributes for LinkedIn, Twitter, and GitHub.
- **WhatsApp/Phone:** Update the phone links in \`Footer.tsx\` and \`Contact.tsx\` (\`<a href="tel:+1234567890">\`).

## Placeholder Content Notice
Sections marked with placeholder data (e.g., the Leadership Team grid on the About page, Demo Case Studies, and Client Logos) are intentionally left for you to populate with real team photos, legitimate client testimonials, and authentic case studies before production launch.



