import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import NewsTicker from './NewsTicker';
import FlashShareModal from './FlashShareModal';
import { MOCK_POSTS, FLASH_NEWS, UI_TRANSLATIONS } from '../constants';
import { FlashNews, ShareConfig } from '../types';

const Sidebar: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<FlashNews | null>(null);
  const t = UI_TRANSLATIONS;

  const shareConfig: ShareConfig = {
    logoPosition: 'top',
    theme: 'gradient',
    layoutStyle: 'standard',
    showQrCode: true,
    brandName: 'TechHub.news'
  };

  return (
    <aside className="space-y-10">
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-800 border-l-4 border-blue-600 pl-3">{t.popular}</h3>
          <a href="#/category/all" className="text-xs text-blue-600 font-bold uppercase tracking-widest">{t.viewAll}</a>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
          {MOCK_POSTS.slice(0, 5).map((post) => (
            <ArticleCard key={post.id} post={post} variant="compact" />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-800 border-l-4 border-blue-600 pl-3">7x24 {t.flash}</h3>
          <a href="#/flash" className="text-xs text-blue-600 font-bold uppercase tracking-widest">{t.flashChannel}</a>
        </div>
        <NewsTicker 
          items={FLASH_NEWS} 
          variant="summary" 
          onShare={(news) => setSelectedNews(news)} 
        />
      </section>

      <a 
        href="https://techub.news" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block rounded-3xl overflow-hidden bg-slate-100 border border-gray-200 h-[250px] flex flex-col items-center justify-center text-center p-6 group cursor-pointer relative shadow-sm hover:shadow-xl transition-all"
      >
        <img src="https://picsum.photos/seed/ad/400/300" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Advertisement" />
        <div className="absolute inset-0 bg-blue-900/30 group-hover:bg-blue-600/40 transition-colors"></div>
        <div className="relative z-10">
            <span className="bg-white/90 backdrop-blur px-2 py-0.5 rounded text-[10px] font-black text-slate-800 mb-2 inline-block tracking-widest uppercase">SPONSORED</span>
            <h4 className="text-xl font-black text-white drop-shadow-lg leading-tight">全球最大的区块链峰会<br/>现已开启报名</h4>
            <div className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest group-hover:scale-110 transition-transform shadow-lg">立即点击</div>
        </div>
      </a>

      <section>
        <h3 className="text-lg font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-3">{t.tags}</h3>
        <div className="flex flex-wrap gap-2">
          {['比特币', '以太坊', 'ETF', '人工智能', 'OpenAI', 'Layer2'].map((tag) => (
            <a 
              key={tag} 
              href={`#/tag/${tag}`} 
              className="bg-white border border-gray-100 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm"
            >
              #{tag}
            </a>
          ))}
        </div>
      </section>

      {selectedNews && (
        <FlashShareModal 
          news={selectedNews} 
          config={shareConfig}
          onClose={() => setSelectedNews(null)}
        />
      )}
    </aside>
  );
};

export default Sidebar;