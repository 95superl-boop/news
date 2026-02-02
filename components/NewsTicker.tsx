
import React, { useState, useEffect } from 'react';
import { FlashNews } from '../types';

interface NewsTickerProps {
  items: FlashNews[];
  variant?: 'scroll' | 'static' | 'summary';
}

const NewsTicker: React.FC<NewsTickerProps> = ({ items, variant = 'scroll' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (variant === 'scroll') {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [items.length, variant]);

  if (variant === 'summary') {
    return (
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-200 transition-colors group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-600 font-bold text-xs">{item.time}</span>
              <span className="text-xs text-gray-400">快讯</span>
            </div>
            <h4 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
            <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center shadow-sm overflow-hidden h-10">
      <div className="flex-shrink-0 flex items-center mr-4">
        <span className="font-bold text-xs bg-white text-blue-600 px-2 py-0.5 rounded mr-2">快讯</span>
        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex-grow relative overflow-hidden h-full">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 flex items-center transition-all duration-700 ease-in-out ${
              idx === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <p className="text-sm font-medium truncate w-full cursor-pointer hover:underline">
              <span className="mr-2 opacity-70">[{item.time}]</span>
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex-shrink-0 flex space-x-2 ml-4">
        <button onClick={() => setCurrentIndex((currentIndex - 1 + items.length) % items.length)} className="hover:text-blue-200 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % items.length)} className="hover:text-blue-200 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default NewsTicker;
