import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { insights } from '../../data/insights';
import FadeIn from '../../components/ui/FadeIn';

const Insights = () => {
  return (
    <>
      <Helmet>
        <title>Insights | Veluno Softtech</title>
      </Helmet>
      
      <div className="bg-navy-900 text-white py-24 border-b-4 border-accent-500">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <span className="text-accent-500 font-bold tracking-widest uppercase text-xs mb-3 block">Technical Engineering & Operations</span>
            <h1 className="text-4xl md:text-5xl font-heading font-medium mb-6 tracking-tight">Insights & Field Notes</h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">Perspectives on systems architecture, delivery governance, and digital engineering from our senior technical leads.</p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <div className="grid gap-6">
          {insights.map((post, idx) => (
            <FadeIn key={post.slug} delay={idx * 0.1}>
              <Link to={`/insights/${post.slug}`} className="group block bg-white p-8 md:p-10 border border-gray-200 rounded-sm hover:border-accent-500 transition-colors">
                <article className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4 shrink-0">
                    <span className="text-xs font-semibold text-accent-700 bg-accent-50 border border-accent-200 px-3 py-1 rounded-sm uppercase tracking-wider">{post.category}</span>
                    <p className="text-gray-500 text-sm mt-6 font-medium">{post.date}</p>
                    <p className="text-gray-400 text-sm">{post.readTime}</p>
                  </div>
                  <div className="md:w-3/4">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-4 group-hover:text-accent-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{post.summary}</p>
                    <span className="font-semibold text-navy-900 group-hover:text-accent-600 inline-flex items-center transition-colors">
                      Read article <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </span>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
};

export default Insights;