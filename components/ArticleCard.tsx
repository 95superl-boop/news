import React from 'react';
import { Post } from '../types';

const __ = (text: string, domain: string = 'techhub') => text;

interface ArticleCardProps {
  post: Post;
  variant?: 'list' | 'grid' | 'card' | 'featured' | 'compact';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post, variant = 'grid' }) => {
  if (!post) {
    return (
      <div className="bg-slate-100 rounded-2xl animate-pulse h-48 flex items-center justify-center text-slate-400 text-xs italic">
        Loading content...
      </div>
    );
  }

  const postUrl = `#/post/${post.id}`;

  const FeatureImage = (
    <div className="lazy-placeholder w-full h-full bg-slate-100">
      <img 
        src={post.featured_image} 
        alt={post.title} 
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );

  if (variant === 'compact') {
    return (
      <div className="flex items-center space-x-4 py-4 group cursor-pointer">
        <div className="w-20 h-14 flex-shrink-0 overflow-hidden rounded-lg">
          {FeatureImage}
        </div>
        <div className="flex-grow min-w-0">
          <a href={postUrl} className="block group-hover:text-blue-600 transition-colors">
            <h4 className="text-sm font-bold text-slate-800 line-clamp-2 leading-snug">{post.title}</h4>
          </a>
          <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">{post.date}</div>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="relative group overflow-hidden rounded-3xl h-[400px] lg:h-[500px] shadow-xl">
        {FeatureImage}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 lg:p-10 w-full">
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-widest">
              {post.categories?.[0]?.name || 'News'}
            </span>
            <span className="text-slate-300 text-xs font-medium">{post.date}</span>
          </div>
          <a href={postUrl} className="block group-hover:text-blue-400 transition-colors">
            <h2 className="text-2xl lg:text-4xl font-black text-white mb-4 leading-tight">
               {post.title}
            </h2>
          </a>
          <p className="text-slate-300 line-clamp-2 max-w-2xl mb-6 hidden md:block text-sm opacity-90">{post.excerpt}</p>
        </div>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-all group">
        <a href={postUrl} className="w-full sm:w-48 lg:w-64 h-40 flex-shrink-0 overflow-hidden rounded-xl">
          {FeatureImage}
        </a>
        <div className="flex flex-col justify-center">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-blue-600 text-[10px] font-bold uppercase">{post.categories?.[0]?.name || 'News'}</span>
            <span className="text-gray-400 text-[10px]">{post.date}</span>
          </div>
          <a href={postUrl} className="block group-hover:text-blue-600 transition-colors mb-2">
            <h3 className="text-lg font-bold text-slate-800 leading-tight">{post.title}</h3>
          </a>
          <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">{post.excerpt}</p>
          <a href={postUrl} className="text-[10px] text-blue-600 font-bold uppercase tracking-widest hover:underline">{__('阅读全文', 'techhub')} &rarr;</a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
      <a href={postUrl} className="block overflow-hidden h-48">
        {FeatureImage}
      </a>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-3 text-[10px] font-bold">
          <span className="text-blue-600 uppercase tracking-widest">{post.categories?.[0]?.name || 'News'}</span>
          <span className="text-gray-400">{post.date}</span>
        </div>
        <a href={postUrl} className="block group-hover:text-blue-600 transition-colors mb-3">
          <h3 className="font-bold text-slate-800 leading-snug line-clamp-2 text-base">{post.title}</h3>
        </a>
        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
          <div className="flex items-center space-x-2">
            <img src={post.author.avatar} alt="" className="w-5 h-5 rounded-full" />
            <span className="text-[10px] font-medium text-gray-500">{post.author.name}</span>
          </div>
          <a href={postUrl} className="text-[10px] text-blue-600 font-bold uppercase tracking-tighter hover:translate-x-1 transition-transform inline-flex items-center">
            {__('阅读全文', 'techhub')} &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;