import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If the browser does not support IntersectionObserver or prefers-reduced-motion, reveal immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll, .feature-card, .iconic-card, .stat-box-card, .workflow-step-card, .section-header')
        .forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Reveal once
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Targets to animate
    const selector = '.reveal-on-scroll, .feature-card, .iconic-card, .stat-box-card, .workflow-step-card, .role-display-box, .realistic-smartphone-wrapper, .erp-mockup-wrapper, .section-header';
    const targets = document.querySelectorAll(selector);

    targets.forEach((target, index) => {
      // Add automatic slight stagger delay if inside a grid
      if (!target.style.transitionDelay && (target.classList.contains('iconic-card') || target.classList.contains('feature-card') || target.classList.contains('stat-box-card'))) {
        target.style.transitionDelay = `${(index % 4) * 0.08}s`;
      }
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);
}
