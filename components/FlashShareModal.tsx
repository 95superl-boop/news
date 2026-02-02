
import React, { useState, useRef } from 'react';
import { FlashNews, ShareConfig, ShareLayoutStyle } from '../types';
import { WP_CONFIG } from '../constants';

interface FlashShareModalProps {
  news: FlashNews;
  config: ShareConfig;
  onClose: () => void;
}

const FlashShareModal: React.FC<FlashShareModalProps> = ({ news, config, onClose }) => {
  const [activeLayout, setActiveLayout] = useState<ShareLayoutStyle>(config.layoutStyle || 'standard');
  const [activeTheme, setActiveTheme] = useState(config.theme || 'gradient');
  const [activeLogoPos, setActiveLogoPos] = useState<'top' | 'bottom'>(config.logoPosition || 'top');
  
  // Use WP Backend Config if available, otherwise fallback to props/defaults
  const [currentLogo, setCurrentLogo] = useState(WP_CONFIG.logoUrl || config.logoUrl || '');
  const [currentQr, setCurrentQr] = useState(WP_CONFIG.qrUrl || config.qrCodeUrl || '');
  
  const cardRef = useRef<HTMLDivElement>(null);

  const getThemeClasses = () => {
    switch (activeTheme) {
      case 'dark': return 'bg-slate-950 text-white';
      case 'light': return 'bg-white text-slate-900 border border-slate-100 shadow-xl';
      case 'gold': return 'bg-[#1a1a1a] text-[#d4af37] border-2 border-[#d4af37]/30';
      case 'gradient':
      default: return 'bg-gradient-to-br from-[#0052ff] to-[#002b85] text-white';
    }
  };

  const layouts: { id: ShareLayoutStyle; label: string }[] = [
    { id: 'standard', label: '标准' },
    { id: 'poster', label: '海报' },
    { id: 'minimal', label: '简约' },
    { id: 'breaking', label: '大新闻' },
  ];

  const LogoComponent = () => (
    <div className="flex items-center space-x-3">
      {currentLogo ? (
        <img src={currentLogo} alt="Logo" className="h-8 w-auto object-contain max-w-[120px]" />
      ) : (
        <div className="flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-lg ${activeTheme === 'light' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>T</div>
          <span className="font-black text-lg tracking-tight">{WP_CONFIG.siteName || 'TechHub'}<span className="opacity-60">.news</span></span>
        </div>
      )}
    </div>
  );

  const QrCodeComponent = () => (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-16 h-16 bg-white p-1.5 rounded-xl shadow-inner flex items-center justify-center shrink-0 overflow-hidden">
        {currentQr ? (
          <img src={currentQr} alt="QR Code" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-slate-900 flex flex-wrap p-0.5 overflow-hidden">
             {Array.from({length: 64}).map((_, i) => (
               <div key={i} className={`w-[12.5%] h-[12.5%] ${Math.random() > 0.4 ? 'bg-white' : 'bg-black'}`}></div>
             ))}
          </div>
        )}
      </div>
      <span className="text-[8px] font-black opacity-40 uppercase tracking-[0.2em]">扫码阅读原文</span>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 overflow-y-auto">
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl items-start justify-center py-10">
        
        {/* Left: Control Panel */}
        <div className="w-full lg:w-80 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-2xl shrink-0 lg:sticky lg:top-10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-white font-black text-sm uppercase tracking-widest">全局样式定制</h3>
            <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <div className="space-y-8">
            <div>
              <label className="text-[10px] text-white/40 font-bold uppercase block mb-4 tracking-widest">布局模板</label>
              <div className="grid grid-cols-2 gap-3">
                {layouts.map(l => (
                  <button 
                    key={l.id}
                    onClick={() => setActiveLayout(l.id)}
                    className={`px-4 py-3 rounded-2xl text-[10px] font-black uppercase transition-all duration-300 border ${
                      activeLayout === l.id ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] text-white/40 font-bold uppercase block mb-4 tracking-widest">配色与位置</label>
              <div className="space-y-4">
                <div className="flex gap-2">
                  {['gradient', 'dark', 'light', 'gold'].map(t => (
                    <button 
                      key={t}
                      onClick={() => setActiveTheme(t as any)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        activeTheme === t ? 'border-white scale-110' : 'border-transparent opacity-50'
                      } ${
                        t === 'gradient' ? 'bg-blue-600' : t === 'dark' ? 'bg-slate-900' : t === 'light' ? 'bg-white' : 'bg-[#d4af37]'
                      }`}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                   {(['top', 'bottom'] as const).map(pos => (
                      <button 
                        key={pos}
                        onClick={() => setActiveLogoPos(pos)}
                        className={`px-3 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${
                          activeLogoPos === pos ? 'bg-white text-slate-900' : 'bg-white/5 text-white/40'
                        }`}
                      >
                        {pos === 'top' ? '顶部 Logo' : '底部 Logo'}
                      </button>
                   ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <button 
              className="w-full bg-white text-slate-900 font-black text-xs uppercase tracking-widest py-5 rounded-[2rem] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2"
              onClick={() => alert('正在渲染长图...')}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              <span>下载高清分享图</span>
            </button>
            <p className="text-[10px] text-white/20 text-center mt-6 font-bold tracking-widest uppercase">Adaptive WP Theme Engine v1.2</p>
          </div>
        </div>

        {/* Right: Preview Card */}
        <div className="relative w-full max-w-md shrink-0">
          <div 
            ref={cardRef}
            id="share-card-canvas"
            className={`relative overflow-hidden rounded-[3rem] flex flex-col transition-all duration-500 min-h-[650px] h-auto shadow-2xl ${getThemeClasses()} ${
              activeLayout === 'minimal' ? 'p-12' : 'p-0'
            }`}
            style={{ width: '100%', maxWidth: '420px' }}
          >
            {activeLogoPos === 'top' && activeLayout !== 'minimal' && (
              <div className="p-12 pb-4 flex items-center justify-between">
                <LogoComponent />
                <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">Flash News</div>
              </div>
            )}

            <div className={`flex-grow p-12 ${activeLogoPos === 'top' ? 'pt-6' : 'pt-16'}`}>
              <div className="mb-6 opacity-40 text-[10px] font-black tracking-[0.2em] uppercase">{news.date} <span className="mx-2 text-blue-500">/</span> {news.time}</div>
              <h2 className={`font-black mb-10 leading-[1.15] tracking-tight ${activeLayout === 'poster' ? 'text-4xl' : 'text-3xl'}`}>
                {news.title}
              </h2>
              <div className={`text-base leading-[1.85] opacity-80 whitespace-pre-wrap font-medium ${activeLayout === 'minimal' ? 'text-center' : ''}`}>
                {news.content}
              </div>
              <div className="h-16"></div>
            </div>

            {(activeLayout !== 'minimal') && (
              <div className="mt-auto p-12 pt-8 flex items-center justify-between border-t border-current/10 bg-current/5">
                <div className="space-y-5">
                  {activeLogoPos === 'bottom' && <LogoComponent />}
                  <p className="text-[10px] font-black tracking-[0.1em] opacity-40 uppercase">Provided by {WP_CONFIG.siteName}</p>
                </div>
                <QrCodeComponent />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashShareModal;
