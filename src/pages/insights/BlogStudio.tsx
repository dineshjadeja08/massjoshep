import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FileEdit, 
  Eye, 
  Save, 
  Trash2, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  Copy, 
  Lock, 
  Unlock,
  Layers,
  Clock,
  Tag,
  Image as ImageIcon
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PageBanner from '../../components/ui/PageBanner';
import { type BlogPost, initialInsights } from '../../data/insights';
import { getStoredBlogPosts, saveBlogPost, deleteBlogPost } from '../../utils/blogStorage';

const CATEGORIES = [
  'Architecture',
  'Engineering Process',
  'Artificial Intelligence',
  'E-Commerce',
  'FinTech',
  'Cloud & Security',
  'Mobile Engineering',
  'Digital Strategy'
];

export const BlogStudio: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // Accessible by default or with PIN
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('Veluno Engineering Pod');
  const [authorRole, setAuthorRole] = useState('Senior Systems Architect');
  const [coverImage, setCoverImage] = useState('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200');
  const [tagsInput, setTagsInput] = useState('Software, Architecture, Engineering');

  const [activeTab, setActiveTab] = useState<'edit' | 'preview' | 'manage'>('edit');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setAllPosts(getStoredBlogPosts());
  }, []);

  // Auto-generate slug from title if not manually customized
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!slug || slug === title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')) {
      const generated = val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      setSlug(generated);
    }
  };

  const calculateReadTime = (text: string) => {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !slug.trim() || !content.trim()) {
      alert('Please provide a Title, Slug, and Article Content.');
      return;
    }

    const postDate = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }).format(new Date());

    const newPost: BlogPost = {
      slug: slug.trim().toLowerCase(),
      title: title.trim(),
      date: postDate,
      category,
      readTime: calculateReadTime(content),
      summary: summary.trim() || title.trim(),
      content: content.trim(),
      author: {
        name: authorName.trim() || 'Veluno Engineering Team',
        role: authorRole.trim() || 'Software Systems Specialist'
      },
      coverImage: coverImage.trim() || undefined,
      tags: tagsInput.split(',').map(t => t.trim()).filter(Boolean),
      isCustom: true
    };

    saveBlogPost(newPost);
    setAllPosts(getStoredBlogPosts());
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  const handleEditExisting = (post: BlogPost) => {
    setTitle(post.title);
    setSlug(post.slug);
    setCategory(post.category);
    setSummary(post.summary);
    setContent(post.content);
    setAuthorName(post.author.name);
    setAuthorRole(post.author.role);
    setCoverImage(post.coverImage || '');
    setTagsInput((post.tags || []).join(', '));
    setActiveTab('edit');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (postSlug: string) => {
    if (confirm(`Are you sure you want to delete the post "${postSlug}"?`)) {
      deleteBlogPost(postSlug);
      setAllPosts(getStoredBlogPosts());
    }
  };

  const handleExportJson = () => {
    const postData = {
      title,
      slug,
      category,
      summary,
      author: { name: authorName, role: authorRole },
      coverImage,
      tags: tagsInput.split(',').map(t => t.trim()),
      content
    };
    navigator.clipboard.writeText(JSON.stringify(postData, null, 2));
    alert('Article JSON copied to clipboard! You can paste this anywhere or add to codebase.');
  };

  return (
    <>
      <Helmet>
        <title>Blog Publishing Studio | Veluno Softtech</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Top Banner */}
      <PageBanner
        title="Blog Studio"
        breadcrumb="Publishing Center"
        category="Content Management"
        subtitle="Write, format, preview, and publish authoritative articles without touching any source code."
      />

      <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">
        
        {/* Navigation & Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-[#0B1F3A]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
            <a
              href="/admin/"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-teal-600 hover:text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-xs transition-colors"
            >
              <span>Open Netlify CMS (/admin) →</span>
            </a>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xs border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab('edit')}
              className={`px-3.5 py-1.5 rounded-xs text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'edit' ? 'bg-[#0B1F3A] text-white shadow-2xs' : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              Editor
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`px-3.5 py-1.5 rounded-xs text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'preview' ? 'bg-[#0B1F3A] text-white shadow-2xs' : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              Live Preview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('manage')}
              className={`px-3.5 py-1.5 rounded-xs text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'manage' ? 'bg-[#0B1F3A] text-white shadow-2xs' : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              Manage Posts ({allPosts.length})
            </button>
          </div>
        </div>

        {/* Success Alert */}
        {savedSuccess && (
          <div className="mb-6 p-4 rounded-xs bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center justify-between animate-in fade-in">
            <div className="flex items-center gap-2 text-xs font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Article published successfully! It is now live on the site at <strong>/insights/{slug}</strong></span>
            </div>
            <Link 
              to={`/insights/${slug}`}
              className="text-xs font-mono font-bold uppercase text-emerald-700 hover:underline"
            >
              View Live Post →
            </Link>
          </div>
        )}

        {/* =========================================================================
            TAB 1: EDITOR FORM
            ========================================================================= */}
        {activeTab === 'edit' && (
          <form onSubmit={handleSave} className="space-y-6">
            
            <div className="bg-white p-6 md:p-8 rounded-xs border border-slate-200 shadow-xs space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                
                {/* Title */}
                <div className="md:col-span-8">
                  <label className="block text-xs font-bold text-[#0B1F3A] uppercase font-mono mb-1.5">
                    Article Headline *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. Scaling Real-Time WebSockets to 50,000 Concurrent Sockets"
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs px-4 py-2.5 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                {/* Category */}
                <div className="md:col-span-4">
                  <label className="block text-xs font-bold text-[#0B1F3A] uppercase font-mono mb-1.5">
                    Category Pillar *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs px-4 py-2.5 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#2563EB]"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Slug & Cover Image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] uppercase font-mono mb-1.5">
                    URL Slug (Canonical Path) *
                  </label>
                  <div className="flex items-center">
                    <span className="text-xs font-mono text-slate-400 bg-slate-100 border border-r-0 border-slate-300 px-3 py-2.5 rounded-l-xs">
                      /insights/
                    </span>
                    <input
                      type="text"
                      required
                      value={slug}
                      onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}
                      placeholder="scaling-real-time-websockets"
                      className="w-full bg-[#F8FAFC] border border-slate-300 rounded-r-xs px-4 py-2.5 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#2563EB] font-mono text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] uppercase font-mono mb-1.5">
                    Hero Cover Image URL
                  </label>
                  <input
                    type="url"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs px-4 py-2.5 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
              </div>

              {/* Author & Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] uppercase font-mono mb-1.5">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Alex Henderson"
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs px-4 py-2 text-xs text-[#0B1F3A] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] uppercase font-mono mb-1.5">
                    Author Role / Department
                  </label>
                  <input
                    type="text"
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    placeholder="e.g. Senior Distributed Systems Lead"
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs px-4 py-2 text-xs text-[#0B1F3A] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] uppercase font-mono mb-1.5">
                    Keywords / Tags (Comma-Separated)
                  </label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="WebSockets, Redis, Node.js"
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs px-4 py-2 text-xs text-[#0B1F3A] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
              </div>

              {/* SEO Summary / Excerpt */}
              <div>
                <label className="block text-xs font-bold text-[#0B1F3A] uppercase font-mono mb-1.5">
                  SEO Meta Description & Search Excerpt *
                </label>
                <textarea
                  rows={2}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="A concise 150-160 character summary describing the core technical takeaways for Google search results."
                  className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs px-4 py-2 text-xs text-[#0B1F3A] focus:outline-none focus:border-[#2563EB] leading-relaxed"
                />
              </div>

              {/* Markdown Content Editor */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-[#0B1F3A] uppercase font-mono">
                    Article Body (Markdown Supported) *
                  </label>
                  <span className="text-[11px] font-mono text-slate-400">
                    Supports H2 (##), H3 (###), lists (-), bold (**), code blocks, and tables
                  </span>
                </div>
                <textarea
                  rows={14}
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder={`Write your article in Markdown...

## Section Title

Explain the engineering concept here with clear takeaways.

### Key Architectural Guidelines
- Guideline 1: Zero single points of failure
- Guideline 2: Immutable append-only audit logs

\`\`\`typescript
const example = "Clean architecture";
\`\`\`
`}
                  className="w-full bg-[#F8FAFC] font-mono text-xs border border-slate-300 rounded-xs p-4 text-[#0B1F3A] focus:outline-none focus:border-[#2563EB] leading-relaxed"
                />
              </div>

            </div>

            {/* Bottom Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-xs bg-[#0B1F3A] text-white">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                <Clock className="w-4 h-4 text-[#14B8A6]" />
                <span>Calculated Reading Time: {calculateReadTime(content)}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleExportJson}
                  className="px-4 py-2 rounded-xs border border-slate-700 bg-white/10 hover:bg-white/20 text-xs font-mono font-bold uppercase transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy JSON</span>
                </button>

                <button
                  type="submit"
                  className="btn-teal px-6 py-2.5 rounded-xs text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Save className="w-4 h-4" />
                  <span>Publish Article to Site</span>
                </button>
              </div>
            </div>

          </form>
        )}

        {/* =========================================================================
            TAB 2: LIVE PREVIEW
            ========================================================================= */}
        {activeTab === 'preview' && (
          <div className="bg-white p-8 md:p-12 rounded-xs border border-slate-200 shadow-sm max-w-4xl mx-auto">
            {coverImage && (
              <div className="aspect-[16/9] rounded-xs overflow-hidden mb-8 bg-slate-900 border border-slate-200">
                <img src={coverImage} alt={title || 'Article Cover'} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="mb-8 border-b border-slate-200 pb-6">
              <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-xs bg-[#14B8A6] text-[#0B1F3A] font-bold uppercase">
                  {category}
                </span>
                <span className="text-slate-500">{calculateReadTime(content)}</span>
                <span className="text-slate-500">· Today</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1F3A] mb-4 leading-tight">
                {title || 'Untitled Article Preview'}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                {summary || 'Article summary preview will appear here.'}
              </p>

              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-xs">
                  {authorName.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B1F3A]">{authorName}</div>
                  <div className="text-[11px] text-slate-500">{authorRole}</div>
                </div>
              </div>
            </div>

            <div className="prose max-w-none prose-slate prose-headings:font-heading prose-h2:text-2xl prose-h2:font-extrabold prose-h2:text-[#0B1F3A] prose-h3:text-lg prose-h3:font-bold prose-h3:text-[#0B1F3A] prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content || '*No article body entered yet. Switch back to the Editor tab to compose your post.*'}
              </ReactMarkdown>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: MANAGE POSTS
            ========================================================================= */}
        {activeTab === 'manage' && (
          <div className="bg-white p-6 md:p-8 rounded-xs border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-heading font-bold text-[#0B1F3A]">
                Published Articles ({allPosts.length})
              </h3>
              <button
                type="button"
                onClick={() => {
                  setTitle('');
                  setSlug('');
                  setSummary('');
                  setContent('');
                  setActiveTab('edit');
                }}
                className="btn-primary py-2 px-4 rounded-xs text-xs font-bold uppercase tracking-wider"
              >
                + New Article
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {allPosts.map((post) => (
                <div key={post.slug} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="min-w-0 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-heading font-bold text-[#0B1F3A] hover:text-[#2563EB]">
                        {post.title}
                      </span>
                      {post.isCustom && (
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-xs bg-emerald-100 text-emerald-800 font-bold uppercase">
                          Custom
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500">
                      <span>{post.category}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>/insights/{post.slug}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      to={`/insights/${post.slug}`}
                      className="px-3 py-1.5 rounded-xs bg-slate-100 hover:bg-slate-200 text-xs font-mono font-bold text-slate-700"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleEditExisting(post)}
                      className="px-3 py-1.5 rounded-xs bg-blue-50 hover:bg-blue-100 text-xs font-mono font-bold text-[#2563EB] cursor-pointer"
                    >
                      Edit
                    </button>
                    {post.isCustom && (
                      <button
                        type="button"
                        onClick={() => handleDelete(post.slug)}
                        className="px-2 py-1.5 rounded-xs bg-rose-50 hover:bg-rose-100 text-xs text-rose-600 cursor-pointer"
                        title="Delete custom post"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </>
  );
};

export default BlogStudio;
