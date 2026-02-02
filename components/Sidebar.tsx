
import React from 'react';
import ArticleCard from './ArticleCard';
import NewsTicker from './NewsTicker';
import { MOCK_POSTS, FLASH_NEWS } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="space-y-10">
      {/* Search Widget */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm md:hidden">
          <h3 className="text-sm font-bold text-slate-800 mb-4 border-l-4 border-blue-600 pl-3">全站搜索</h3>
          <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
            <input type="text" placeholder="关键字..." className="bg-transparent border-none focus:ring-0 text-sm flex-grow" />
            <button className="text-blue-600 hover:text-blue-700">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </div>
      </div>

      {/* Popular Posts */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-800 border-l-4 border-blue-600 pl-3">热门排行</h3>
          <a href="#" className="text-xs text-blue-600 font-medium">查看更多</a>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
          {MOCK_POSTS.slice(0, 5).map((post) => (
            <ArticleCard key={post.id} post={post} variant="compact" />
          ))}
        </div>
      </section>

      {/* Flash News Widget */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-800 border-l-4 border-blue-600 pl-3">7x24快讯</h3>
          <a href="#" className="text-xs text-blue-600 font-medium">进入频道</a>
        </div>
        <NewsTicker items={FLASH_NEWS} variant="summary" />
      </section>

      {/* Ad Space */}
      <div className="rounded-2xl overflow-hidden bg-slate-100 border border-gray-200 h-[250px] flex flex-col items-center justify-center text-center p-6 group cursor-pointer relative">
        <img src="https://picsum.photos/seed/ad/400/300" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors"></div>
        <div className="relative z-10">
            <span className="bg-white/90 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold text-slate-800 mb-2 inline-block">ADVERTISEMENT</span>
            <h4 className="text-lg font-black text-white drop-shadow-md">全球最大的区块链峰会<br/>现已开启报名</h4>
            <button className="mt-4 bg-white text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold hover:scale-105 transition-transform">立即查看</button>
        </div>
      </div>

      {/* Tag Cloud */}
      <section>
        <h3 className="text-lg font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-3">热门标签</h3>
        <div className="flex flex-wrap gap-2">
          {['比特币', '以太坊', 'ETF', '人工智能', 'OpenAI', 'Layer2', 'DEFI', 'NFT', '监管', '香港'].map((tag) => (
            <a key={tag} href="#" className="bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
              #{tag}
            </a>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
