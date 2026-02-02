import React from 'react';
import { UI_TRANSLATIONS, WP_CONFIG } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const t = UI_TRANSLATIONS;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="th-container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center">
              <a href="#/" className="flex items-center space-x-2">
                {WP_CONFIG.logoUrl ? (
                  <img src={WP_CONFIG.logoUrl} alt={WP_CONFIG.siteName} className="h-8 w-auto" />
                ) : (
                  <>
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">T</div>
                    <span className="text-xl font-black text-slate-900 hidden sm:block tracking-tight">TechHub<span className="text-blue-600">.news</span></span>
                  </>
                )}
              </a>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#/" className="text-sm font-bold text-slate-600 hover:text-blue-600">{t.home}</a>
              <a href="#/category/crypto" className="text-sm font-bold text-slate-600 hover:text-blue-600">{t.news}</a>
              <a href="#/flash" className="text-sm font-bold text-slate-600 hover:text-blue-600">{t.flash}</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-50 rounded-full px-4 py-2 border border-transparent focus-within:border-blue-400 focus-within:bg-white transition-all">
                <input type="text" placeholder={t.search} className="bg-transparent border-none focus:ring-0 text-xs w-24 lg:w-40 font-medium text-slate-600" />
              </div>
              <button className="bg-blue-600 text-white text-xs font-black px-6 py-2.5 rounded-full uppercase tracking-widest hover:bg-blue-700 shadow-lg shadow-blue-100">
                {t.subscribe}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main id="main-content" className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-950 text-slate-400 py-20">
        <div className="th-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-black text-white tracking-tighter">TechHub<span className="text-blue-500">.news</span></span>
              <p className="text-sm leading-loose max-w-sm mt-8 opacity-60">{t.footerDesc}</p>
            </div>
            <div>
               <h4 className="text-white text-xs font-black mb-8 uppercase tracking-widest">{WP_CONFIG.siteName}</h4>
               <ul className="space-y-4 text-sm font-medium">
                 <li><a href="#" className="hover:text-blue-500">{t.home}</a></li>
                 <li><a href="#/flash" className="hover:text-blue-500">{t.flash}</a></li>
               </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-900 text-[10px] font-bold uppercase tracking-widest opacity-40">
             © {new Promise(() => {}).then(() => new Date().getFullYear()) && '2025'} {WP_CONFIG.siteName.toUpperCase()}. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
