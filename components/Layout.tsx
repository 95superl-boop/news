import React, { useState } from 'react';

// Mock translation function for UI demo
const __ = (text: string, domain: string = 'techhub') => text;

const LanguageSwitcher: React.FC = () => {
  return (
    <div className="relative group px-2">
      <button className="text-xs font-bold text-gray-500 hover:text-blue-600 flex items-center" aria-label={__('切换语言', 'techhub')}>
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        EN/中文
      </button>
      <div className="absolute right-0 top-full mt-2 bg-white shadow-xl border border-gray-100 rounded-lg py-2 hidden group-hover:block z-50 min-w-[100px]">
        <a href="?lang=zh" className="block px-4 py-1.5 text-xs hover:bg-gray-50">简体中文</a>
        <a href="?lang=en" className="block px-4 py-1.5 text-xs hover:bg-gray-50">English</a>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="th-header-sticky" role="banner">
      <div className="th-container">
        <div className="th-flex-between h-16 lg:h-20">
          <div className="th-flex-center">
            <a href="#/" className="th-flex-center space-x-2" aria-label={__('首页', 'techhub')}>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">T</div>
              <span className="text-xl font-bold text-slate-900 hidden sm:block">TechHub<span className="text-blue-600">.news</span></span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center space-x-6" role="navigation">
            <a href="#/" className="th-nav-link">{__('首页', 'techhub')}</a>
            <div className="relative group">
              <button className="th-nav-link flex items-center" aria-haspopup="true">
                {__('资讯', 'techhub')} <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-2 hidden group-hover:block transition-all">
                <a href="#/category/crypto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">{__('加密货币', 'techhub')}</a>
                <a href="#/category/ai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">{__('人工智能', 'techhub')}</a>
              </div>
            </div>
            <a href="#/flash" className="th-nav-link">{__('快讯', 'techhub')}</a>
          </nav>

          <div className="th-flex-center space-x-2">
            <LanguageSwitcher />
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-1.5 border border-transparent focus-within:border-blue-400 focus-within:bg-white transition-all">
              <input type="text" placeholder={__('搜索资讯...', 'techhub')} className="bg-transparent border-none focus:ring-0 text-sm w-32 lg:w-48 text-gray-700" aria-label={__('搜索', 'techhub')} />
            </div>
            <button className="hidden sm:block text-sm font-semibold text-slate-700 hover:text-blue-600">{__('登录', 'techhub')}</button>
            <button className="th-btn th-btn-primary">{__('订阅', 'techhub')}</button>
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-label={__('主菜单', 'techhub')}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16" role="contentinfo">
      <div className="th-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 text-white mb-6">
               <span className="text-xl font-black">TechHub.news</span>
            </div>
            <p className="text-sm leading-relaxed">
              {__('TechHub.news 是领先的全球科技与 Web3 资讯分发平台。', 'techhub')}
            </p>
          </div>
          <div id="footer-sidebar-1">
             <h4 className="text-white font-bold mb-6">{__('快速链接', 'techhub')}</h4>
             {/* WP Tag placeholder for dynamic_sidebar('footer-1') */}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Fixed: Defined LayoutProps to include children
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;