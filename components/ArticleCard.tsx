import React from 'react';
import { Post } from '../types';

// Fixed: Updated translation function to accept optional domain parameter
const __ = (text: string, domain: string = 'techhub') => text;

interface ArticleCardProps {
  post: Post;
  variant?: 'list' | 'grid' | 'card' | 'featured' | 'compact';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post, variant = 'grid' }) => {
  // Placeholder for WordPress Feature Image with lazy loading and fallback
  const FeatureImage = (
    <div className="lazy-placeholder w-full h-full">
      <img 
        src={post.featured_image} 
        alt={post.title} 
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onLoad={(e) => (e.currentTarget.parentElement?.classList.remove('lazy-placeholder'))}
      />
      {/* WP Tag: {{ the_post_thumbnail('large') }} */}
    </div>
  );

  if (variant === 'featured') {
    return (
      <div className="relative group overflow-hidden rounded-2xl h-[400px] lg:h-[500px]">
        {FeatureImage}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 lg:p-10 w-full">
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.categories[0].name} {/* WP Tag: {{ the_category(', ') }} */}
            </span>
            <span className="text-slate-300 text-xs font-medium">{post.date}</span>
          </div>
          <a href={post.link} className="block group-hover:text-blue-400 transition-colors">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight">
               {post.title} {/* WP Tag: {{ the_title() }} */}
            </h2>
          </a>
          <p className="text-slate-300 line-clamp-2 max-w-2xl mb-6 hidden md:block">{post.excerpt}</p>
        </div>
      </div>
    );
  }

  // Simplified logic for standard grid card
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
      <a href={post.link} className="block overflow-hidden h-48">
        {FeatureImage}
      </a>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-3 text-[10px] font-bold">
          <span className="text-blue-600 uppercase">{post.categories[0].name}</span>
          <span className="text-gray-400">{post.date}</span>
        </div>
        <a href={post.link} className="block group-hover:text-blue-600 transition-colors mb-3">
          <h3 className="font-bold text-slate-800 leading-tight line-clamp-2">{post.title}</h3>
        </a>
        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
          <span className="text-[10px] text-gray-400 uppercase tracking-tighter">
            {__('阅读原文', 'techhub')} &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;