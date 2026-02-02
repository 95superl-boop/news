
/**
 * Main Entry Point - TechHub News
 */

import { initNavigation } from './navigation';
import { SearchSystem } from './search';
import { initComments } from './comments';

document.addEventListener('DOMContentLoaded', () => {
  // Init Navigation
  initNavigation();

  // Init Search
  new SearchSystem('[data-search-input]');

  // Init Comments (only on single post pages)
  if (document.querySelector('#comments')) {
    initComments();
  }

  // Global Performance: Image Lazy Loading
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          // Trigger actual load if needed manually, or let browser handle native lazy load
          observer.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => observer.observe(img));
  }

  console.log('TechHub News JS Modules Initialized Successfully');
});
