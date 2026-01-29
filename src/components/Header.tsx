//Gemini try 3
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.lineage'), href: '/lineage' },
    { name: t('nav.satyaPrakashJi'), href: '/satya-prakash-ji' },
    { name: t('nav.shardaCharanJi'), href: '/sharda-charan-ji' },
    { name: t('nav.teachings'), href: '/teachings' },
    { name: t('nav.programs'), href: '/programs' },
    { name: t('nav.media'), href: '/media' },
  ];

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const isHindi = i18n.language === 'hi';
  const isEnglish = i18n.language === 'en';

  return (
    <header className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 shadow-lg sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative h-20" aria-label="Top">
        
        {/* --- GRID LAYOUT: LEFT | CENTER | RIGHT --- */}
        <div className="grid grid-cols-3 items-center h-full w-full">

          {/* 1. LEFT COLUMN: Empty (or Logo if needed later) */}
          <div className="flex justify-start">
             {/* Keeps the grid balanced. Can add a small logo here if desired. */}
          </div>

          {/* 2. CENTER COLUMN: Title (Absolute Centered) */}
          {/* We use absolute positioning here to ensure it is DEAD CENTER relative to the screen, ignoring the side columns */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto text-center z-10">
            <Link to="/" className="flex flex-col items-center group">
              <h1 className="text-xl sm:text-2xl font-serif font-bold tracking-wide text-amber-100 drop-shadow-md group-hover:text-white transition-colors">
                {t('header.title')}
              </h1>
              <p className="text-[10px] sm:text-xs text-amber-200/80 font-light tracking-widest uppercase group-hover:text-amber-100 transition-colors">
                {t('header.subtitle')}
              </p>
            </Link>
          </div>

          {/* 3. RIGHT COLUMN: Navigation & Actions */}
          <div className="flex justify-end items-center z-20">
            
            {/* === DESKTOP VIEW (Visible ONLY on XL screens 1280px+) === */}
            {/* We hide this on LG screens because 7 links + Title is too wide for standard laptops */}
            <div className="hidden xl:flex items-center gap-6">
              <div className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                      location.pathname === item.href
                        ? 'bg-amber-700/80 text-white shadow-sm'
                        : 'text-amber-100 hover:bg-amber-700/50 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Language Switcher (Desktop) */}
              <div className="flex bg-amber-950/30 rounded-lg p-1 border border-amber-400/20">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs font-bold rounded transition-all ${
                    isEnglish ? 'bg-amber-100 text-amber-900 shadow-sm' : 'text-amber-300 hover:text-white'
                  }`}
                >
                  ENG
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-3 py-1 text-xs font-bold rounded transition-all ${
                    isHindi ? 'bg-amber-100 text-amber-900 shadow-sm' : 'text-amber-300 hover:text-white'
                  }`}
                >
                  हिंदी
                </button>
              </div>
            </div>

            {/* === MOBILE/TABLET/LAPTOP VIEW (Visible on screens < XL) === */}
            {/* This ensures the menu button is visible on your 16 inch mac if the text is too long */}
            <div className="flex xl:hidden items-center gap-4">
               {/* Compact Language Toggle */}
               <button 
                onClick={() => setLanguage(isEnglish ? 'hi' : 'en')}
                className="text-amber-100 text-sm font-semibold border border-amber-400/30 rounded px-2 py-1 hover:bg-amber-700/50 transition-colors"
              >
                {isEnglish ? 'HI' : 'EN'}
              </button>

              {/* Hamburger Button */}
              <button
                type="button"
                className="text-amber-100 hover:text-white p-2 rounded-md hover:bg-amber-800/50 focus:outline-none transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                 {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* === EXPANDABLE MENU (For Mobile, Tablet & Smaller Laptops) === */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-20 left-0 w-full bg-gradient-to-b from-amber-900 to-amber-950 shadow-xl border-t border-amber-700/50">
            <div className="flex flex-col p-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? 'bg-amber-700 text-white'
                      : 'text-amber-100 hover:bg-amber-800 hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Menu Footer: Extra Language Controls if needed */}
              <div className="pt-4 mt-2 border-t border-amber-800 flex justify-center gap-4">
                 <span className="text-amber-300 text-sm font-light">Language:</span>
                 <button onClick={() => setLanguage('en')} className={`text-sm font-bold ${isEnglish ? 'text-white underline' : 'text-amber-400'}`}>English</button>
                 <button onClick={() => setLanguage('hi')} className={`text-sm font-bold ${isHindi ? 'text-white underline' : 'text-amber-400'}`}>हिंदी</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}