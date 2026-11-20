import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { insights } from '../../data/insights';

const InsightDetail = () => {
  const { slug } = useParams();
  const post = insights.find(p => p.slug === slug);

  if (!post) return <Navigate to="/404" />;

  // Simple Markdown Parser for the content
  const renderContent = (content: string) => {
    return content.trim().split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('### ')) {
        return <h2 key={idx} className="text-2xl font-bold text-navy-900 mt-10 mb-4">{paragraph.replace('### ', '')}</h2>;
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map(item => item.replace('- ', ''));
        return (
          <ul key={idx} className="list-disc pl-6 space-y-2 my-6">
            {items.map((item, i) => (
              <li key={i} className="text-lg text-gray-700">{item}</li>
            ))}
          </ul>
        );
      }
      // Bold parsing helper
      const parts = paragraph.split('**');
      if (parts.length > 1) {
         return (
           <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-6">
             {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-semibold text-navy-900">{part}</strong> : part)}
           </p>
         )
      }
      return <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-6">{paragraph}</p>;
    });
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Veluno Softtech Insights</title>
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link to="/insights" className="inline-flex items-center text-gray-500 mb-8 hover:text-navy-900 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to insights
        </Link>
        
        <div className="mb-12 border-b border-gray-200 pb-8">
          <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
            <span className="font-semibold text-accent-700 bg-accent-100 px-3 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6 leading-tight">{post.title}</h1>
        </div>

        <div className="prose max-w-none">
          {renderContent(post.content)}
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Discuss your digital strategy</h2>
          <p className="text-gray-600 mb-6">Want to see how these principles apply to your business? Let's talk.</p>
          <Link to="/contact" className="inline-block bg-navy-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-800 transition-colors">
            Contact Our Team
          </Link>
        </div>
      </div>
    </>
  );
};

export default InsightDetail;