
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import FlashShareModal from '../components/FlashShareModal';
import { FLASH_NEWS } from '../constants';
import { FlashNews, ShareConfig } from '../types';

const __ = (text: string) => text;

const FlashNewsPage: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<FlashNews | null>(null);
  
  // 模拟从 WordPress 后端获取的分享配置
  const shareConfig: ShareConfig = {
    logoPosition: 'top',
    theme: 'gradient',
    layoutStyle: 'standard',
    showQrCode: true,
    brandName: 'TechHub.news',
    logoUrl: '', // 如果为空，则使用内置 SVG Logo
    qrCodeUrl: '', // 如果为空，则生成默认占位二维码
  };

  // 按日期对快讯进行分组
  const groupedNews = FLASH_NEWS.reduce((acc: Record<string, FlashNews[]>, item) => {
    if (!acc[item.date]) acc[item.date] = [];
    acc[item.date].push(item);
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedNews).sort((a, b) => b.localeCompare(a));

  return (
    <div className="th-container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-4">
               <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
               <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter">
                 {__('7x24 快讯')}
               </h1>
            </div>
            <p className="text-slate-500 font-medium text-lg">{__('追踪全球 Web3 与科技前沿的秒级动态。')}</p>
          </div>

          <div className="space-y-12 relative before:absolute before:left-[11px] before:top-4 before:bottom-0 before:w-0.5 before:bg-blue-100">
            {sortedDates.map(date => (
              <div key={date} className="relative">
                {/* 日期圆点与标签 */}
                <div className="flex items-center mb-8 sticky top-[100px] z-10">
                   <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg shadow-blue-200 z-10"></div>
                   <div className="ml-6 px-5 py-2 bg-slate-900 text-white rounded-2xl text-xs font-black tracking-widest shadow-xl">
                     {date}
                   </div>
                </div>

                <div className="ml-12 space-y-10">
                  {groupedNews[date].map(news => (
                    <article 
                      key={news.id} 
                      className="bg-white rounded-[2rem] border border-gray-100 p-8 lg:p-10 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all group relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                           <span className="text-blue-600 font-black text-base tracking-widest">{news.time}</span>
                           <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                           {news.tag && (
                             <span className="text-[10px] font-black px-3 py-1 bg-blue-50 text-blue-600 rounded-lg uppercase tracking-widest">{news.tag}</span>
                           )}
                        </div>
                      </div>
                      
                      <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                        {news.title}
                      </h2>
                      
                      <p className="text-slate-600 text-base leading-relaxed mb-8 opacity-80">
                        {news.content}
                      </p>
                      
                      <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                        <div className="flex items-center space-x-6">
                          <button className="text-[10px] font-black text-gray-400 hover:text-blue-600 uppercase tracking-widest flex items-center transition-colors">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                            {__('转发内容')}
                          </button>
                        </div>
                        <button 
                          onClick={() => setSelectedNews(news)}
                          className="bg-slate-50 text-slate-800 text-[10px] font-black px-6 py-3 rounded-2xl uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                        >
                          {__('生成分享图')}
                        </button>
                      </div>
                      
                      {/* 背景装饰 */}
                      <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                         <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button className="bg-white border-2 border-slate-900 text-slate-900 px-12 py-4 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl">
                {__('查看更早的快讯')}
             </button>
          </div>
        </div>

        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>

      {/* 分享弹窗 */}
      {selectedNews && (
        <FlashShareModal 
          news={selectedNews} 
          config={shareConfig}
          onClose={() => setSelectedNews(null)}
        />
      )}
    </div>
  );
};

export default FlashNewsPage;
