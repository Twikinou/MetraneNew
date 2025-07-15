# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Development Server
```bash
# Start local development server on port 8080
./start.sh
# or manually:
python3 -m http.server 8080
```

### File Structure
- `index.html` - Main HTML page with modern landing page structure
- `script.js` - Main JavaScript functionality with MetraneWebsite class
- `languages.js` - Internationalization system with French/English translations
- `style.css` - CSS styles (referenced but not in root directory)
- `start.sh` - Simple Python HTTP server launcher script
- `assets/` - Static assets directory

## Architecture Overview

### Core Components

**MetraneWebsite Class** (script.js:3-224)
- Main application controller managing all interactive features
- Handles mobile menu, scroll effects, cookie consent, animations
- Uses modern JavaScript patterns with throttling and intersection observers

**LanguageManager Class** (languages.js:207-489)
- Bilingual system supporting French (default) and English
- Creates language dropdown in both desktop and mobile navigation
- Stores language preference in localStorage
- Updates all content dynamically using data-i18n attributes

### Key Features
- **Responsive Design**: Mobile-first approach with burger menu and mobile-specific dropdowns
- **Internationalization**: Complete FR/EN translation system with localStorage persistence
- **Performance Optimizations**: Lazy loading, throttled scroll handlers, intersection observers
- **User Experience**: Smooth scrolling, animated elements, cookie consent management
- **Accessibility**: Keyboard navigation support (ESC key closes menus)

### Translation System
Content is managed through the `translations` object in languages.js with nested structure:
- `nav` - Navigation items
- `hero` - Main hero section content
- `features` - Product features descriptions
- `cta` - Call-to-action sections
- `footer` - Footer content and legal information
- `cookies` - Cookie consent text

All translatable content uses `data-i18n` attributes pointing to translation keys.

### Event Handling
- CTA buttons open mailto links to contact@metrane.com
- Feature links log interaction events for analytics
- Mobile menu closes on navigation or ESC key
- Language switching triggers smooth opacity transitions

This is a static website project focused on presenting Metrane's business intelligence and reporting solutions with modern web standards and bilingual support.