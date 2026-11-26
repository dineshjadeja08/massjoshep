import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, PenLine, Clock, Calendar, ArrowRight, Tag } from 'lucide-react';
import { getStoredBlogPosts } from '../../utils/blogStorage';
import FadeIn from '../../components/ui/FadeIn';

const CATEGORIES = [
  'All',
  'Architecture',
  'Engineering Process',
  'Artificial Intelligence',
  'E-Commerce',
  'FinTech',
  'Cloud & Security'
];

const Insights = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Load from local storage + bundled defaults
  const allPosts = useMemo(() => {
    return getStoredBlogPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.summary.toLowerCase().includes(query) ||
        post.tags?.some(tag => tag.toLowerCase().includes(query)) ||
        post.author?.name.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [allPosts, selectedCategory, searchQuery]);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Veluno Softtech Engineering & Architecture Blog',
    'description': 'Technical perspectives, production engineering case studies, systems architecture, and AI deployment field notes from Veluno Softtech.',
    'url': 'https://www.velunosofttech.com/blog',
    'publisher': {
      '@type': 'Organization',
      'name': 'Veluno Softtech',
      'url': 'https://www.velunosofttech.com',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.velunosofttech.com/favicon.svg'
      }
    },
    'blogPost': allPosts.map(post => ({
      '@type': 'BlogPosting',
      'headline': post.title,
      'description': post.summary,
      'datePublished': post.date,
      'url': `https://www.velunosofttech.com/blog/${post.slug}`,
      'author': {
        '@type': 'Person',
        'name': post.author?.name || 'Veluno Engineering Team'
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Engineering Blog & Architecture Insights | Veluno Softtech</title>
        <meta
          name="description"
          content="In-depth technical guides, cloud architecture teardowns, AI engineering practices, and digital enterprise modernization insights by Veluno Softtech."
        />
        <meta name="keywords" content="software engineering blog, system architecture, cloud migration, AI development, fintech engineering, headless ecommerce, Veluno Softtech" />
        <link rel="canonical" href="https://www.velunosofttech.com/blog" />
        <meta property="og:title" content="Engineering Blog & Architecture Insights | Veluno Softtech" />
        <meta property="og:description" content="In-depth technical guides, cloud architecture teardowns, AI engineering practices, and digital enterprise modernization insights." />
        <meta property="og:url" content="https://www.velunosofttech.com/blog" />
        <meta property="og:type" content="blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>

      {/* Header Banner */}
      <div className="bg-navy-900 text-white py-20 border-b-4 border-accent-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-accent-500/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-accent-400 font-mono text-xs uppercase tracking-widest block mb-2 font-semibold">
                  Technical Journal & Knowledge Base
                </span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                  Insights & Engineering Field Notes
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mt-4 leading-relaxed font-sans">
                  Deep dives into systems architecture, production AI engineering, enterprise refactoring, and resilient software delivery.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <a
                  href="/admin/"
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-xs font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <PenLine className="w-4 h-4" />
                  Netlify CMS
                </a>
                <Link
                  to="/blog/studio"
                  className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-gray-200 border border-navy-700 px-4 py-2.5 rounded-xs font-semibold text-sm transition-all"
                >
                  Quick Studio
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Filters & Search Bar */}
      <div className="bg-gray-50 border-b border-gray-200 py-6 sticky top-20 z-20 backdrop-blur-md bg-gray-50/95">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 text-xs font-semibold rounded-xs border transition-colors ${
                      isActive
                        ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, tags, authors..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-xs focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Articles Listing */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-24 bg-white border border-gray-200 rounded-xs p-12">
            <p className="text-gray-500 text-lg mb-4">No insights found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-accent-600 font-semibold text-sm hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => {
              const isFirstFeatured = idx === 0 && selectedCategory === 'All' && !searchQuery;

              return (
                <FadeIn
                  key={post.slug}
                  delay={idx * 0.05}
                  className={isFirstFeatured ? 'md:col-span-2 lg:col-span-3' : ''}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className={`group flex flex-col h-full bg-white border border-gray-200 hover:border-accent-500 rounded-xs overflow-hidden transition-all duration-200 hover:shadow-lg ${
                      isFirstFeatured ? 'lg:flex-row' : ''
                    }`}
                  >
                    {/* Cover image if available or featured pattern */}
                    {post.coverImage ? (
                      <div
                        className={`${
                          isFirstFeatured
                            ? 'lg:w-1/2 min-h-[260px]'
                            : 'h-48'
                        } w-full overflow-hidden bg-gray-100 relative shrink-0`}
                      >
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-navy-900/90 text-white text-[11px] font-mono uppercase px-2.5 py-1 rounded-xs tracking-wider backdrop-blur-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`${
                          isFirstFeatured ? 'lg:w-1/2 min-h-[260px]' : 'h-36'
                        } w-full bg-linear-to-br from-navy-900 via-navy-800 to-accent-950 p-6 flex flex-col justify-between relative shrink-0`}
                      >
                        <span className="self-start bg-accent-500/20 text-accent-300 border border-accent-400/30 text-[11px] font-mono uppercase px-2.5 py-1 rounded-xs tracking-wider">
                          {post.category}
                        </span>
                        <div className="text-white/40 font-mono text-xs">
                          veluno.engineering // {post.slug.substring(0, 18)}...
                        </div>
                      </div>
                    )}

                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-medium">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-gray-400" />
                            {post.date}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-gray-400" />
                            {post.readTime}
                          </span>
                        </div>

                        <h2
                          className={`font-heading font-bold text-navy-900 group-hover:text-accent-600 transition-colors mb-3 leading-snug ${
                            isFirstFeatured ? 'text-2xl md:text-3xl' : 'text-xl'
                          }`}
                        >
                          {post.title}
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3 mb-6">
                          {post.summary}
                        </p>
                      </div>

                      <div>
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-xs font-mono"
                              >
                                <Tag className="w-2.5 h-2.5 text-gray-400" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                          {post.author ? (
                            <div className="flex items-center gap-2">
                              {post.author.avatar ? (
                                <img
                                  src={post.author.avatar}
                                  alt={post.author.name}
                                  className="w-6 h-6 rounded-full object-cover"
                                />
                              ) : (
                                <div className="w-6 h-6 rounded-full bg-accent-100 text-accent-700 font-bold flex items-center justify-center text-[10px]">
                                  {post.author.name.charAt(0)}
                                </div>
                              )}
                              <span className="text-gray-700 font-semibold">{post.author.name}</span>
                            </div>
                          ) : (
                            <span className="text-gray-500">Veluno Team</span>
                          )}

                          <span className="font-semibold text-accent-600 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Read Post <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        )}

        {/* Bottom CTA for no-code publishing */}
        <div className="mt-20 bg-linear-to-r from-navy-900 to-navy-800 text-white p-8 md:p-12 rounded-xs border-l-4 border-accent-500 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <span className="text-accent-400 font-mono text-xs uppercase tracking-wider block mb-1">Decap / Netlify CMS Integration</span>
            <h3 className="text-2xl font-bold font-heading mb-2">Publish Articles with Netlify CMS</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Login to Netlify CMS at <span className="font-mono text-accent-300">/admin/</span> to manage articles with rich markdown, media uploads, and automatic GitHub deployment without touching source code.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/admin/"
              className="shrink-0 bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm px-6 py-3 rounded-xs inline-flex items-center gap-2 transition-colors shadow-sm"
            >
              <PenLine className="w-4 h-4" /> Open Netlify CMS
            </a>
            <Link
              to="/blog/studio"
              className="shrink-0 bg-navy-800 hover:bg-navy-700 text-gray-200 border border-navy-700 font-semibold text-sm px-5 py-3 rounded-xs inline-flex items-center gap-2 transition-colors"
            >
              Quick Studio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
