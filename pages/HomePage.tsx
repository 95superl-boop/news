import React, { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import NewsTicker from '../components/NewsTicker';
import Sidebar from '../components/Sidebar';
import { MOCK_POSTS, FLASH_NEWS, CATEGORIES } from '../constants';

const __ = (text: string, domain: string = 'techhub') => text;

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  return (
    <div className="th-container py-8">
      {/* Top News Ticker */}
      <div className="mb-8">
        <NewsTicker items={FLASH_NEWS} />
      </div>

      {/* Featured Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <ArticleCard post={MOCK_POSTS[0]} variant="featured" />
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <ArticleCard post={MOCK_POSTS[1]} variant="grid" />
            <ArticleCard post={MOCK_POSTS[2]} variant="grid" />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          {/* Content Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-100 pb-4 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide -mx-2 px-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                    activeCategory === cat.slug
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200'
                      : 'bg-white text-slate-600 border-gray-200 hover:border-blue-400 hover:text-blue-600'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest hidden sm:inline">VIEW:</span>
              <div className="bg-gray-100 rounded-xl p-1 flex">
                <button 
                  onClick={() => setLayout('grid')}
                  aria-label="Grid View"
                  className={`p-2 rounded-lg transition-all ${layout === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                </button>
                <button 
                  onClick={() => setLayout('list')}
                  aria-label="List View"
                  className={`p-2 rounded-lg transition-all ${layout === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Posts Feed */}
          <div className={layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : 'flex flex-col gap-6'}>
            {[...MOCK_POSTS, ...MOCK_POSTS].map((post, idx) => (
              <ArticleCard key={`${post.id}-${idx}`} post={post} variant={layout} />
            ))}
          </div>

          {/* Pagination - Essential for Home Page as per requirement */}
          <div className="mt-16 flex justify-center items-center space-x-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-400 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-200 transition-all">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-slate-700 font-bold hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-slate-700 font-bold hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm">3</button>
              <span className="px-3 text-gray-300 font-bold">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-slate-700 font-bold hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm">12</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-400 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
              </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;