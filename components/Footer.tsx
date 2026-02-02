import React from 'react';
import { UI_TRANSLATIONS, WP_CONFIG } from '../constants';

const Footer: React.FC = () => {
  const t = UI_TRANSLATIONS;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f1a] text-slate-400 pt-24 pb-12 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="th-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2 mb-8">
               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-base shadow-lg shadow-blue-500/20">T</div>
               <span className="text-xl font-black text-white tracking-tighter">TechHub<span className="text-blue-500">.news</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-10 text-slate-500 font-medium">
              {t.footerDesc} 全球领先的 Web3 与前沿科技资讯分发平台，致力于为用户提供最即时、最深度、最客观的新闻内容。
            </p>
            <div className="flex items-center space-x-4">
              {['Twitter', 'Telegram', 'Discord', 'RSS'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current opacity-20"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">{t.news}</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="#/category/crypto" className="hover:text-blue-500 transition-colors">加密货币</a></li>
                <li><a href="#/category/ai" className="hover:text-blue-500 transition-colors">人工智能</a></li>
                <li><a href="#/category/policy" className="hover:text-blue-500 transition-colors">政策法规</a></li>
                <li><a href="#/category/web3" className="hover:text-blue-500 transition-colors">Web3 生态</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">关于我们</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="#" className="hover:text-blue-500 transition-colors">关于团队</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">广告合作</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">加入我们</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">免责声明</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">订阅我们的邮件周刊</h4>
            <p className="text-xs text-slate-500 mb-6 font-bold uppercase tracking-wider">每周获取精选深度内容</p>
            <div className="flex p-1 bg-slate-900 rounded-2xl border border-white/5 focus-within:border-blue-500/30 transition-all">
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="bg-transparent border-none focus:ring-0 text-xs px-4 flex-grow text-white font-medium"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all">
                订阅
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-600">
             © {currentYear} {WP_CONFIG.siteName.toUpperCase()}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-8 text-[10px] font-black uppercase tracking-widest text-slate-600">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;