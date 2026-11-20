import { createClient } from '@sanity/client';

// Only initialize if keys are present, otherwise export a dummy client
// This prevents the app from crashing while the user sets up their Sanity account.
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

export const sanityClient = projectId ? createClient({
  projectId,
  dataset,
  useCdn: true, // Use CDN for faster read responses
  apiVersion: '2023-05-03', // Date of setup
}) : null;

/**
 * Example helper function to fetch case studies.
 * In a real MNC environment, `services.ts` and `caseStudies.ts` would call these
 * instead of exporting hardcoded arrays.
 */
export async function fetchCaseStudiesFromSanity() {
  if (!sanityClient) {
    console.warn("Sanity client not configured. Falling back to local data.");
    return null; // Signals the app to use local fallback data
  }
  
  const query = '*[_type == "caseStudy"]';
  return await sanityClient.fetch(query);
}
