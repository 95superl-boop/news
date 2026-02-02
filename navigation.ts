
/**
 * Navigation Module
 * Handles mobile drawer, dropdowns, and scroll-spy.
 */

export const initNavigation = () => {
  const mobileMenuBtn = document.querySelector('[data-mobile-menu]');
  const mobileNav = document.querySelector('[data-mobile-nav]');

  // Mobile Toggle
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      document.body.classList.toggle('overflow-hidden');
    });
  }

  // Scroll Spy Logic
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const header = document.querySelector('header');
    if (header) {
      if (scrollPos > 100) {
        header.classList.add('th-header-scrolled');
      } else {
        header.classList.remove('th-header-scrolled');
      }
    }
  });

  console.log('Navigation system initialized');
};
