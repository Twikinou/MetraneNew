// Metrane Language System with Dropdown
const translations = {
  en: {
    // Navigation - English translation of French
    nav: {
      solutions: "Solutions",
      product: "Product", 
      about: "About",
      contact: "Contact",
      startFree: "Get a demo"
    },
    
    // Hero Section - English translation
    hero: {
      badge: "Metrane is now in Africa! 🌍",
      title: "Take control.<br>Own your <span class='gradient-text'>reporting</span>.",
      subtitle: "Your teams know what they need. Give them the tools to do it. Metrane helps you build the exact reporting your business needs.",
      startFree: "Get a demo", 
      talkSales: "Learn more",
      stats: {
        companies: "Companies",
        uptime: "Uptime",
        support: "Support"
      }
    },
    
    // Question Section
    question: {
      title: "How does your team decide<br>what to report 📊 next?",
      subtitle: "Let your data lead the way. Metrane makes sense of complex<br>business intelligence so you make better decisions.",
      startFree: "Get a demo",
      viewPricing: "View pricing"
    },
    
    // Features Section - English translation
    features: {
      title: "Everything you need to<br>scale your reporting",
      subtitle: "From compliance challenges to agile reporting tools",
      
      business: {
        title: "Our Business",
        description: "From compliance challenges to agile reporting tools, we provide solutions adapted to your regulatory and business needs.",
        link: "Learn more"
      },
      
      tools: {
        title: "Metrane Tools", 
        description: "An open reporting tool in the hands of users, making business teams autonomous from IT constraints.",
        link: "Learn more"
      },
      
      expertise: {
        title: "Our Expertise",
        description: "Our experience building custom solutions and assisting you end-to-end with your projects.",
        link: "Learn more"
      }
    },
    
    // CTA Section
    cta: {
      title: "Need information?",
      subtitle: "Join 500+ companies already using Metrane",
      button: "Get a demo",
      contact: "Need help? Call us at",
      phone: "01 86 95 04 08"
    },
    
    // Footer
    footer: {
      tagline: "Intuitive Data Reporting",
      columns: {
        product: {
          title: "Product",
          links: ["Features", "Pricing", "Security", "API"]
        },
        company: {
          title: "Company",
          links: ["About", "Careers", "News", "Contact"]
        },
        resources: {
          title: "Resources",
          links: ["Documentation", "Help Center", "Community", "Blog"]
        },
        contact: {
          title: "Contact",
          address: "10 rue de Penthièvre<br>75008 Paris<br>01 86 95 04 08"
        }
      },
      legal: {
        copyright: "© 2024 Metrane. All rights reserved.",
        links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
      }
    },
    
    // Cookie Consent
    cookies: {
      text: "We use cookies to improve your experience and analyze site traffic.",
      learnMore: "Learn more",
      accept: "Accept all",
      decline: "Decline"
    }
  },
  
  fr: {
    // Navigation - selon vos spécifications
    nav: {
      solutions: "Solutions",
      product: "Produit", 
      about: "À propos",
      contact: "Contact",
      startFree: "Demander une démo"
    },
    
    // Hero Section
    hero: {
      badge: "Metrane est maintenant en Afrique ! 🌍",
      title: "Prenez le contrôle<br>de vos <span class='gradient-text'>reportings</span>",
      subtitle: "Vos métiers savent ce qu'ils veulent. Offrez-leur les moyens de le faire. Metrane vous aide à créer le reporting dont votre entreprise a besoin.",
      startFree: "Demander une démo", 
      talkSales: "En savoir plus",
      stats: {
        companies: "Entreprises",
        uptime: "Disponibilité",
        support: "Support"
      }
    },
    
    // Question Section
    question: {
      title: "Comment votre équipe décide<br>quoi reporter 📊 ensuite ?",
      subtitle: "Laissez vos données vous guider. Metrane donne du sens à<br>l'intelligence business complexe pour de meilleures décisions.",
      startFree: "Demander une démo",
      viewPricing: "Voir les prix"
    },
    
    // Features Section - Basé sur contenu Figma original mais modernisé
    features: {
      title: "Tout ce dont vous avez besoin pour<br>faire évoluer votre reporting",
      subtitle: "Des enjeux de conformité aux outils de reporting agiles",
      
      business: {
        title: "Notre métier",
        description: "Des enjeux de la conformité aux outils de reporting agiles, nous proposons des solutions adaptées à vos besoins réglementaires et business.",
        link: "En savoir plus"
      },
      
      tools: {
        title: "Metrane Tools",
        description: "Un outil de reporting ouvert à la main de l'utilisateur, qui rend autonome les métiers et les maîtrises d'ouvrage vis-à-vis des contraintes informatiques.",
        link: "En savoir plus"
      },
      
      expertise: {
        title: "Notre expertise", 
        description: "Notre expérience pour construire avec vous des solutions sur mesure et vous assister de bout en bout de vos projets.",
        link: "En savoir plus"
      }
    },
    
    // CTA Section - Basé sur contenu Figma original
    cta: {
      title: "Besoin d'un renseignement ?",
      subtitle: "Rejoignez 500+ entreprises qui utilisent déjà Metrane",
      button: "Demander une démo",
      contact: "Besoin d'aide ? Appelez-nous au",
      phone: "01 86 95 04 08"
    },
    
    // Footer
    footer: {
      tagline: "Intuitive Data Reporting",
      columns: {
        product: {
          title: "Produit",
          links: ["Fonctionnalités", "Prix", "Sécurité", "API"]
        },
        company: {
          title: "Entreprise",
          links: ["À propos", "Carrières", "Actualités", "Contact"] 
        },
        resources: {
          title: "Ressources",
          links: ["Documentation", "Centre d'aide", "Communauté", "Blog"]
        },
        contact: {
          title: "Contact",
          address: "10 rue de Penthièvre<br>75008 Paris<br>01 86 95 04 08"
        }
      },
      legal: {
        copyright: "© 2024 Metrane. Tous droits réservés.",
        links: ["Politique de confidentialité", "Conditions d'utilisation", "Politique des cookies"]
      }
    },
    
    // Cookie Consent
    cookies: {
      text: "Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic du site.",
      learnMore: "En savoir plus", 
      accept: "Tout accepter",
      decline: "Refuser"
    }
  }
};

// Language Manager Class with Dropdown
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('metrane-lang') || 'fr'; // Français par défaut
    this.init();
  }
  
  init() {
    this.createLanguageSwitch();
    this.updateContent();
    this.bindEvents();
  }
  
  createLanguageSwitch() {
    // Ajouter le dropdown de langue dans le header (desktop)
    const navActions = document.querySelector('.nav-actions');
    if (navActions) {
      const langDropdown = document.createElement('div');
      langDropdown.className = 'language-dropdown';
      langDropdown.innerHTML = `
        <button class="lang-dropdown-btn" id="langDropdownBtn">
          <span class="lang-current">${this.currentLang.toUpperCase()}</span>
          <svg class="lang-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="lang-dropdown-menu" id="langDropdownMenu">
          <button class="lang-option ${this.currentLang === 'fr' ? 'active' : ''}" data-lang="fr">
            <span class="lang-flag">🇫🇷</span>
            <span class="lang-name">Français</span>
          </button>
          <button class="lang-option ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">
            <span class="lang-flag">🇺🇸</span>
            <span class="lang-name">English</span>
          </button>
        </div>
      `;
      navActions.insertBefore(langDropdown, navActions.firstChild);
      
      // Setup dropdown behavior
      this.setupDropdown();
    }
    
    // Ajouter le dropdown de langue dans le menu mobile
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
      const mobileLangDropdown = document.createElement('div');
      mobileLangDropdown.className = 'mobile-language-dropdown';
      mobileLangDropdown.innerHTML = `
        <button class="mobile-lang-dropdown-btn" id="mobileLangDropdownBtn">
          <span class="mobile-lang-current">
            <span class="lang-flag">${this.currentLang === 'fr' ? '🇫🇷' : '🇺🇸'}</span>
            <span class="lang-name">${this.currentLang === 'fr' ? 'Français' : 'English'}</span>
          </span>
          <svg class="lang-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="mobile-lang-dropdown-menu" id="mobileLangDropdownMenu">
          <button class="mobile-lang-option ${this.currentLang === 'fr' ? 'active' : ''}" data-lang="fr">
            <span class="lang-flag">🇫🇷</span>
            <span class="lang-name">Français</span>
          </button>
          <button class="mobile-lang-option ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">
            <span class="lang-flag">🇺🇸</span>
            <span class="lang-name">English</span>
          </button>
        </div>
      `;
      navMenu.appendChild(mobileLangDropdown);
      
      // Setup mobile dropdown behavior
      this.setupMobileDropdown();
    }
  }
  
  bindEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.lang-option') || e.target.closest('.mobile-lang-option')) {
        const newLang = e.target.closest('.lang-option, .mobile-lang-option').dataset.lang;
        if (newLang !== this.currentLang) {
          this.switchLanguage(newLang);
          
          // Fermer le menu mobile si on est sur mobile
          if (e.target.closest('.mobile-lang-option')) {
            const mobileToggle = document.getElementById('mobileToggle');
            const navMenu = document.getElementById('navMenu');
            
            if (mobileToggle && navMenu && navMenu.classList.contains('active')) {
              mobileToggle.classList.remove('active');
              navMenu.classList.remove('active');
              document.body.style.overflow = '';
            }
          }
        }
      }
    });
  }
  
  setupDropdown() {
    const dropdownBtn = document.getElementById('langDropdownBtn');
    const dropdownMenu = document.getElementById('langDropdownMenu');
    
    if (dropdownBtn && dropdownMenu) {
      dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
        dropdownBtn.classList.toggle('active');
      });
      
      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-dropdown')) {
          dropdownMenu.classList.remove('show');
          dropdownBtn.classList.remove('active');
        }
      });
      
      // Close dropdown on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          dropdownMenu.classList.remove('show');
          dropdownBtn.classList.remove('active');
        }
      });
    }
  }
  
  setupMobileDropdown() {
    const mobileDropdownBtn = document.getElementById('mobileLangDropdownBtn');
    const mobileDropdownMenu = document.getElementById('mobileLangDropdownMenu');
    
    if (mobileDropdownBtn && mobileDropdownMenu) {
      mobileDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileDropdownMenu.classList.toggle('show');
        mobileDropdownBtn.classList.toggle('active');
      });
      
      // Close mobile dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.mobile-language-dropdown')) {
          mobileDropdownMenu.classList.remove('show');
          mobileDropdownBtn.classList.remove('active');
        }
      });
    }
  }
  
  switchLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('metrane-lang', lang);
    
    // Mettre à jour le dropdown desktop
    const currentLangSpan = document.querySelector('.lang-current');
    const langOptions = document.querySelectorAll('.lang-option');
    const dropdownMenu = document.getElementById('langDropdownMenu');
    const dropdownBtn = document.getElementById('langDropdownBtn');
    
    if (currentLangSpan) {
      currentLangSpan.textContent = lang.toUpperCase();
    }
    
    langOptions.forEach(option => {
      option.classList.toggle('active', option.dataset.lang === lang);
    });
    
    // Fermer le dropdown desktop
    if (dropdownMenu && dropdownBtn) {
      dropdownMenu.classList.remove('show');
      dropdownBtn.classList.remove('active');
    }
    
    // Mettre à jour le dropdown mobile
    const mobileLangCurrent = document.querySelector('.mobile-lang-current');
    const mobileLangOptions = document.querySelectorAll('.mobile-lang-option');
    const mobileDropdownMenu = document.getElementById('mobileLangDropdownMenu');
    const mobileDropdownBtn = document.getElementById('mobileLangDropdownBtn');
    
    if (mobileLangCurrent) {
      mobileLangCurrent.innerHTML = `
        <span class="lang-flag">${lang === 'fr' ? '🇫🇷' : '🇺🇸'}</span>
        <span class="lang-name">${lang === 'fr' ? 'Français' : 'English'}</span>
      `;
    }
    
    mobileLangOptions.forEach(option => {
      option.classList.toggle('active', option.dataset.lang === lang);
    });
    
    // Fermer le dropdown mobile
    if (mobileDropdownMenu && mobileDropdownBtn) {
      mobileDropdownMenu.classList.remove('show');
      mobileDropdownBtn.classList.remove('active');
    }
    
    this.updateContent();
    
    // Animation de transition
    document.body.style.opacity = '0.8';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 150);
  }
  
  updateContent() {
    const t = translations[this.currentLang];
    
    // Navigation
    this.updateElement('[data-i18n="nav.solutions"]', t.nav.solutions);
    this.updateElement('[data-i18n="nav.product"]', t.nav.product);
    this.updateElement('[data-i18n="nav.about"]', t.nav.about);
    this.updateElement('[data-i18n="nav.contact"]', t.nav.contact);
    this.updateElement('[data-i18n="nav.startFree"]', t.nav.startFree);
    
    // Hero
    this.updateElement('[data-i18n="hero.badge"]', t.hero.badge);
    this.updateElement('[data-i18n="hero.title"]', t.hero.title);
    this.updateElement('[data-i18n="hero.subtitle"]', t.hero.subtitle);
    this.updateElement('[data-i18n="hero.startFree"]', t.hero.startFree);
    this.updateElement('[data-i18n="hero.talkSales"]', t.hero.talkSales);
    
    // Stats
    this.updateElement('[data-i18n="hero.stats.companies"]', t.hero.stats.companies);
    this.updateElement('[data-i18n="hero.stats.uptime"]', t.hero.stats.uptime);
    this.updateElement('[data-i18n="hero.stats.support"]', t.hero.stats.support);
    
    // Question
    this.updateElement('[data-i18n="question.title"]', t.question.title);
    this.updateElement('[data-i18n="question.subtitle"]', t.question.subtitle);
    this.updateElement('[data-i18n="question.startFree"]', t.question.startFree);
    this.updateElement('[data-i18n="question.viewPricing"]', t.question.viewPricing);
    
    // Features
    this.updateElement('[data-i18n="features.title"]', t.features.title);
    this.updateElement('[data-i18n="features.subtitle"]', t.features.subtitle);
    
    this.updateElement('[data-i18n="features.business.title"]', t.features.business.title);
    this.updateElement('[data-i18n="features.business.description"]', t.features.business.description);
    this.updateElement('[data-i18n="features.business.link"]', t.features.business.link);
    
    this.updateElement('[data-i18n="features.tools.title"]', t.features.tools.title);
    this.updateElement('[data-i18n="features.tools.description"]', t.features.tools.description);
    this.updateElement('[data-i18n="features.tools.link"]', t.features.tools.link);
    
    this.updateElement('[data-i18n="features.expertise.title"]', t.features.expertise.title);
    this.updateElement('[data-i18n="features.expertise.description"]', t.features.expertise.description);
    this.updateElement('[data-i18n="features.expertise.link"]', t.features.expertise.link);
    
    // CTA
    this.updateElement('[data-i18n="cta.title"]', t.cta.title);
    this.updateElement('[data-i18n="cta.subtitle"]', t.cta.subtitle);
    this.updateElement('[data-i18n="cta.button"]', t.cta.button);
    this.updateElement('[data-i18n="cta.contact"]', t.cta.contact);
    
    // Footer
    this.updateElement('[data-i18n="footer.tagline"]', t.footer.tagline);
    this.updateElement('[data-i18n="footer.copyright"]', t.footer.legal.copyright);
    
    // Footer columns
    this.updateElement('[data-i18n="footer.product.title"]', t.footer.columns.product.title);
    this.updateElement('[data-i18n="footer.company.title"]', t.footer.columns.company.title);
    this.updateElement('[data-i18n="footer.resources.title"]', t.footer.columns.resources.title);
    this.updateElement('[data-i18n="footer.contact.title"]', t.footer.columns.contact.title);
    this.updateElement('[data-i18n="footer.contact.address"]', t.footer.columns.contact.address);
    
    // Cookies
    this.updateElement('[data-i18n="cookies.text"]', t.cookies.text);
    this.updateElement('[data-i18n="cookies.learnMore"]', t.cookies.learnMore);
    this.updateElement('[data-i18n="cookies.accept"]', t.cookies.accept);
    this.updateElement('[data-i18n="cookies.decline"]', t.cookies.decline);
  }
  
  updateElement(selector, content) {
    const element = document.querySelector(selector);
    if (element) {
      element.innerHTML = content;
    }
  }
  
  getCurrentLanguage() {
    return this.currentLang;
  }
}