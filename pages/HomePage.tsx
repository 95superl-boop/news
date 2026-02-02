
import React, { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import NewsTicker from '../components/NewsTicker';
import Sidebar from '../components/Sidebar';
import { MOCK_POSTS, FLASH_NEWS, CATEGORIES } from '../constants';

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top News Ticker */}
      <div className="mb-8">
        <NewsTicker items={FLASH_NEWS} />
      </div>

      {/* Featured Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ArticleCard post={MOCK_POSTS[0]} variant="featured" />
          </div>
          <div className="space-y-6">
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
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.slug
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-400 font-medium hidden sm:inline">布局:</span>
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button 
                  onClick={() => setLayout('grid')}
                  className={`p-1.5 rounded-md transition-all ${layout === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                </button>
                <button 
                  onClick={() => setLayout('list')}
                  className={`p-1.5 rounded-md transition-all ${layout === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Posts Feed */}
          <div className={layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-2'}>
            {[...MOCK_POSTS, ...MOCK_POSTS].map((post, idx) => (
              <ArticleCard key={post.id + '-' + idx} post={post} variant={layout} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center space-x-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-slate-700 font-medium hover:bg-gray-50 transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-slate-700 font-medium hover:bg-gray-50 transition-colors">3</button>
              <span className="px-2 text-gray-400">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-slate-700 font-medium hover:bg-gray-50 transition-colors">12</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
          </div>
          
          <div className="mt-10 text-center">
              <button className="bg-slate-800 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-900 transition-colors shadow-lg">加载更多文章</button>
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
