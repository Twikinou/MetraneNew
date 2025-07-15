// Metrane Modern Website JavaScript

class MetraneWebsite {
  constructor() {
    this.init();
  }
  
  init() {
    this.setupMobileMenu();
    this.setupScrollEffects();
    this.setupCookieConsent();
    this.setupAnimations();
    this.setupSmoothScrolling();
    this.setupLazyLoading();
    
    // Show cookie consent after page load
    setTimeout(() => {
      this.showCookieConsent();
    }, 1500);
  }
  
  // Mobile Menu Management
  setupMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });
      
      // Close menu when clicking on a link
      const navLinks = navMenu.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileToggle.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }
  }
  
  // Header Scroll Effects
  setupScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.8)';
        header.style.backdropFilter = 'blur(12px)';
      }
      
      // Hide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', this.throttle(updateHeader, 16));
  }
  
  // Cookie Consent Management
  setupCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptCookies');
    const declineButton = document.getElementById('declineCookies');
    
    if (!cookieConsent) return;
    
    // Check if user has already made a choice
    if (localStorage.getItem('cookieChoice')) {
      return;
    }
    
    acceptButton?.addEventListener('click', () => {
      localStorage.setItem('cookieChoice', 'accepted');
      this.hideCookieConsent();
      this.trackEvent('cookie_accepted');
    });
    
    declineButton?.addEventListener('click', () => {
      localStorage.setItem('cookieChoice', 'declined');
      this.hideCookieConsent();
      this.trackEvent('cookie_declined');
    });
  }
  
  showCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    if (cookieConsent && !localStorage.getItem('cookieChoice')) {
      cookieConsent.classList.add('show');
    }
  }
  
  hideCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    if (cookieConsent) {
      cookieConsent.classList.remove('show');
      setTimeout(() => {
        cookieConsent.style.display = 'none';
      }, 300);
    }
  }
  
  // Intersection Observer for Animations
  setupAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
      '.feature-card, .section-header, .hero-stats, .question-section'
    );
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }
  
  // Smooth Scrolling for Navigation
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // Lazy Loading for Images
  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });
      
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
  
  // Utility Functions
  throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    
    return function (...args) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }
  
  trackEvent(eventName, properties = {}) {
    // Analytics tracking placeholder
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, properties);
    }
    
    console.log('Event tracked:', eventName, properties);
  }
}

// Button Click Handlers
document.addEventListener('DOMContentLoaded', () => {
  // Initialize website
  new MetraneWebsite();
  
  // CTA Button handlers
  const ctaButtons = document.querySelectorAll('[data-action="cta"]');
  ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.open('mailto:contact@metrane.com?subject=Demande de renseignements', '_blank');
    });
  });
  
  // Demo button handlers
  const demoButtons = document.querySelectorAll('[data-action="demo"]');
  demoButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Redirect to demo or open modal
      console.log('Demo requested');
    });
  });
  
  // Feature link handlers
  const featureLinks = document.querySelectorAll('.feature-link');
  featureLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const feature = link.closest('.feature-card').querySelector('.feature-title').textContent;
      console.log('Feature interest:', feature);
    });
  });
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  // Escape key closes mobile menu
  if (e.key === 'Escape') {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navMenu?.classList.contains('active')) {
      mobileToggle?.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});

// Performance Monitoring
if ('PerformanceObserver' in window) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.startTime);
      }
    }
  });
  
  observer.observe({ entryTypes: ['largest-contentful-paint'] });
}