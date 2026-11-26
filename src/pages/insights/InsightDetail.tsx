import React, { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar, User, Tag, Share2, BookOpen, ChevronRight, PenLine } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug, getStoredBlogPosts } from '../../utils/blogStorage';

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = useMemo(() => (slug ? getPostBySlug(slug) : undefined), [slug]);
  const allPosts = useMemo(() => getStoredBlogPosts(), []);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related posts from same category or fallback
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (b.category === post.category && a.category !== post.category) return 1;
      return 0;
    })
    .slice(0, 3);

  const canonicalUrl = `https://www.velunosofttech.com/blog/${post.slug}`;
  const coverImageUrl = post.coverImage || 'https://www.velunosofttech.com/og-image.jpg';

  // Schema.org BlogPosting
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.summary,
    'image': coverImageUrl,
    'datePublished': post.date,
    'dateModified': post.date,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    'author': {
      '@type': 'Person',
      'name': post.author?.name || 'Veluno Softtech Engineering',
      'jobTitle': post.author?.role || 'Technical Consultant'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Veluno Softtech',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.velunosofttech.com/favicon.svg'
      }
    },
    'articleSection': post.category,
    'keywords': post.tags?.join(', ') || post.category
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.velunosofttech.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Blog',
        'item': 'https://www.velunosofttech.com/blog'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': post.title,
        'item': canonicalUrl
      }
    ]
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`${post.title} via @VelunoSofttech`);
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${text}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Veluno Softtech Engineering Blog</title>
        <meta name="description" content={post.summary} />
        {post.tags && <meta name="keywords" content={post.tags.join(', ')} />}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* OpenGraph */}
        <meta property="og:title" content={`${post.title} | Veluno Softtech`} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={coverImageUrl} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        {post.author && <meta property="article:author" content={post.author.name} />}
        {post.tags?.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.summary} />
        <meta name="twitter:image" content={coverImageUrl} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Article Header & Breadcrumbs */}
      <div className="bg-navy-900 text-white pt-12 pb-16 border-b border-navy-800">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-gray-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-accent-400 truncate max-w-[200px] md:max-w-md">{post.category}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-6 text-xs">
            <span className="bg-accent-500/20 text-accent-300 border border-accent-400/30 px-3 py-1 rounded-xs font-mono uppercase tracking-wider font-semibold">
              {post.category}
            </span>
            <span className="text-gray-400 flex items-center gap-1.5 font-sans">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-gray-400 flex items-center gap-1.5 font-sans">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 font-sans">
            {post.summary}
          </p>

          {/* Author Block */}
          {post.author && (
            <div className="flex items-center gap-4 pt-6 border-t border-navy-800/80">
              {post.author.avatar ? (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent-500"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-accent-500 text-white font-bold flex items-center justify-center text-lg">
                  {post.author.name.charAt(0)}
                </div>
              )}
              <div>
                <div className="font-semibold text-white text-sm">{post.author.name}</div>
                <div className="text-xs text-gray-400">{post.author.role}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Article Body */}
          <article className="flex-1 min-w-0">
            {/* Optional Cover Image */}
            {post.coverImage && (
              <div className="mb-10 rounded-xs overflow-hidden border border-gray-200 shadow-sm max-h-[440px]">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Markdown Body */}
            <div className="prose prose-lg max-w-none prose-navy prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-navy-900 prose-code:text-accent-700 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-xs prose-pre:bg-navy-900 prose-pre:text-gray-100">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-3 font-mono">
                  Related Topics
                </span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-xs font-mono transition-colors"
                    >
                      <Tag className="w-3 h-3 text-gray-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-navy-900 transition-colors font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all insights
              </Link>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                  <Share2 className="w-3.5 h-3.5" /> Share:
                </span>
                <button
                  onClick={shareOnTwitter}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-navy-900 px-3 py-1 rounded-xs font-semibold transition-colors"
                >
                  X / Twitter
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-navy-900 px-3 py-1 rounded-xs font-semibold transition-colors"
                >
                  LinkedIn
                </button>
              </div>
            </div>

            {/* Strategy / Contact Banner */}
            <div className="mt-16 bg-navy-900 text-white p-8 md:p-10 rounded-xs border-l-4 border-accent-500 shadow-md">
              <h2 className="text-2xl font-bold font-heading mb-3 text-white">
                Engineering a Similar System for Your Enterprise?
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-sans">
                Our principal software architects and technical leads assist organizations in modernizing enterprise backends, integrating AI workflows, and constructing high-throughput web applications with guaranteed SLAs.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xs font-semibold text-sm transition-colors shadow-sm"
                >
                  Schedule an Architecture Review
                </Link>
                <Link
                  to="/services"
                  className="inline-block border border-gray-600 hover:border-gray-400 text-gray-200 px-6 py-3 rounded-xs font-semibold text-sm transition-colors"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold font-heading text-navy-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent-500" />
                Related Technical Reading
              </h2>
              <Link to="/blog" className="text-accent-600 font-semibold text-sm hover:underline">
                View all articles &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  to={`/blog/${rPost.slug}`}
                  className="group bg-white border border-gray-200 hover:border-accent-500 p-6 rounded-xs transition-all hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-gray-500 mb-3 font-mono">
                      <span className="text-accent-600 font-semibold">{rPost.category}</span>
                      <span>{rPost.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-navy-900 group-hover:text-accent-600 transition-colors mb-2 line-clamp-2">
                      {rPost.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {rPost.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-navy-900 group-hover:text-accent-600">
                    <span>Read insight</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InsightDetail;
