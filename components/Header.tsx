import React, { useState, useEffect } from 'react';
import { UI_TRANSLATIONS, WP_CONFIG } from '../constants';

const Header: React.FC = () => {
  const t = UI_TRANSLATIONS;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-[60] transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3' : 'bg-white py-5'
    } border-b border-slate-100`}>
      <div className="th-container">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="#/" className="flex items-center space-x-3 group">
              {WP_CONFIG.logoUrl ? (
                <img src={WP_CONFIG.logoUrl} alt={WP_CONFIG.siteName} className="h-9 w-auto" />
              ) : (
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">T</div>
                  <div className="ml-3 hidden sm:block">
                    <span className="text-xl font-black text-slate-900 tracking-tighter">TechHub</span>
                    <span className="text-xl font-black text-blue-600 tracking-tighter">.news</span>
                  </div>
                </div>
              )}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {[
              { label: t.home, path: '#/' },
              { label: t.news, path: '#/category/crypto' },
              { label: t.flash, path: '#/flash' }
            ].map((link) => (
              <a 
                key={link.label}
                href={link.path}
                className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center group relative">
              <div className="absolute left-4 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input 
                type="text" 
                placeholder={t.search} 
                className="bg-slate-100 border-none rounded-full pl-11 pr-4 py-2.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all w-32 lg:w-48 xl:w-64"
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="hidden sm:block text-xs font-black text-slate-500 hover:text-blue-600 uppercase tracking-widest px-4 py-2 transition-colors">
                {t.login}
              </button>
              <button className="th-btn-primary px-8 py-3 rounded-2xl shadow-xl shadow-blue-100/50">
                {t.subscribe}
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button className="lg:hidden p-2 text-slate-900">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;