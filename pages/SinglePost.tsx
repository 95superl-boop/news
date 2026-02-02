import React from 'react';
import Sidebar from '../components/Sidebar';
import ArticleCard from '../components/ArticleCard';
import { MOCK_POSTS } from '../constants';

// Fixed: Updated translation function to accept optional domain parameter
const __ = (text: string, domain: string = 'techhub') => text;

const SinglePost: React.FC = () => {
  const post = MOCK_POSTS[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <article className="lg:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden" role="article">
          <div className="p-6 lg:p-10 border-b border-gray-50">
            <h1 className="text-2xl lg:text-4xl font-black text-slate-800 mb-6 leading-tight">
              {post.title} {/* {{ the_title() }} */}
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full" />
                <div>
                  <div className="text-sm font-bold text-slate-800">{post.author.name}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest">{post.date}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="p-6 lg:p-10 wp-content text-slate-700 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            {/* WP Tag: {{ the_content() }} */}
            
            <div className="mt-8 flex flex-wrap gap-2">
              {/* WP Tag: {{ the_tags('<span class="tag-title">' . __('标签:', 'techhub') . '</span> ', ' ') }} */}
              {post.tags.map(tag => (
                <a key={tag.id} href="#" className="bg-gray-100 hover:bg-blue-600 hover:text-white px-4 py-1 rounded-full text-xs font-medium transition-all">
                  #{tag.name}
                </a>
              ))}
            </div>
          </div>

          {/* Comments Section Placeholder */}
          <section className="p-6 lg:p-10 bg-slate-50 border-t border-gray-100" id="comments">
            <h3 className="text-xl font-bold text-slate-800 mb-8">{__('评论', 'techhub')}</h3>
            
            <div className="wp-comments-template">
               {/* WP Tag: {{ comments_template() }} */}
               <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center text-gray-400 italic">
                 {__('加载评论系统中...', 'techhub')}
               </div>
            </div>
          </section>
        </article>

        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;