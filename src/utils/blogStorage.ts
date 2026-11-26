import { type BlogPost, initialInsights } from '../data/insights';

const STORAGE_KEY = 'veluno_custom_blog_posts';

export const getStoredBlogPosts = (): BlogPost[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return initialInsights;
    const parsed: BlogPost[] = JSON.parse(saved);
    
    // Merge: custom posts take precedence or are prepended to initial insights
    const customSlugs = new Set(parsed.map(p => p.slug));
    const merged = [
      ...parsed,
      ...initialInsights.filter(p => !customSlugs.has(p.slug))
    ];
    return merged;
  } catch (e) {
    console.error('Failed to read blog posts from storage', e);
    return initialInsights;
  }
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  const posts = getStoredBlogPosts();
  return posts.find(p => p.slug === slug);
};

export const saveBlogPost = (post: BlogPost): void => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const existing: BlogPost[] = saved ? JSON.parse(saved) : [];
    
    const index = existing.findIndex(p => p.slug === post.slug);
    let updated: BlogPost[];
    if (index >= 0) {
      updated = [...existing];
      updated[index] = post;
    } else {
      updated = [post, ...existing];
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save blog post', e);
  }
};

export const deleteBlogPost = (slug: string): void => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const existing: BlogPost[] = JSON.parse(saved);
    const updated = existing.filter(p => p.slug !== slug);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to delete blog post', e);
  }
};
