import React from 'react';
import Sidebar from '../components/Sidebar';
import { MOCK_POSTS } from '../constants';

const __ = (text: string, domain: string = 'techhub') => text;

interface SinglePostProps {
  postId?: number;
}

const SinglePost: React.FC<SinglePostProps> = ({ postId = 1 }) => {
  // 模拟查找文章逻辑
  const post = MOCK_POSTS.find(p => p.id === postId) || MOCK_POSTS[0];

  return (
    <div className="th-container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <article className="lg:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden" role="article">
          <div className="p-6 lg:p-12 border-b border-gray-50">
            <div className="flex items-center space-x-2 mb-6">
              <a href="#/" className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">HOME</a>
              <span className="text-gray-300">/</span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{post.categories?.[0]?.name || 'NEWS'}</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <img src={post.author.avatar} alt={post.author.name} className="w-14 h-14 rounded-2xl object-cover shadow-md" />
                <div>
                  <div className="text-sm font-black text-slate-900">{post.author.name}</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{post.date} · {post.views} VIEWS</div>
                </div>
              </div>
              <div className="flex space-x-2">
                 <button className="p-3 rounded-xl bg-gray-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                 </button>
                 <button className="p-3 rounded-xl bg-gray-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                 </button>
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-12">
            <div className="rounded-3xl overflow-hidden mb-10 shadow-2xl">
              <img src={post.featured_image} alt="" className="w-full h-auto" />
            </div>

            <div className="wp-content prose prose-blue max-w-none text-slate-700 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-3">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest w-full mb-2">TAGS:</span>
              {post.tags.map(tag => (
                <a key={tag.id} href={`#/tag/${tag.slug}`} className="bg-slate-100 hover:bg-blue-600 hover:text-white px-5 py-2 rounded-xl text-xs font-bold transition-all">
                  #{tag.name}
                </a>
              ))}
            </div>
          </div>

          <section className="p-6 lg:p-12 bg-slate-50 border-t border-gray-100" id="comments">
            <h3 className="text-2xl font-black text-slate-900 mb-8">{__('参与讨论', 'techhub')}</h3>
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-center">
               <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
               </div>
               <p className="text-slate-500 font-medium mb-6">{__('目前还没有评论，快来抢占沙发吧！', 'techhub')}</p>
               <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                 {__('发表评论', 'techhub')}
               </button>
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