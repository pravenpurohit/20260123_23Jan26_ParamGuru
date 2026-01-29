//Gemini try 2
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, Home } from 'lucide-react'; // Added Home icon for mobile convenience
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
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative" aria-label="Top">
        
        {/* Main Header Container */}
        <div className="flex h-20 items-center justify-between">

          {/* 1. LEFT: Empty placeholder or Home Icon (keeps layout balanced) */}
          <div className="flex-1 flex justify-start">
             {/* Optional: Small Home Icon on far left for easy access, visible mainly on mobile */}
            <Link to="/" className="lg:hidden text-amber-200 hover:text-white">
               <Home className="h-6 w-6" />
            </Link>
          </div>

          {/* 2. CENTER: Absolute Positioned Title (Param Guru) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full text-center pointer-events-none">
            {/* pointer-events-auto added to Link so you can still click it */}
            <Link to="/" className="inline-block pointer-events-auto">
              <div className="text-amber-100 flex flex-col items-center">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold tracking-wide text-center whitespace-nowrap drop-shadow-md">
                  {t('header.title')}
                </h1>
                <p className="text-xs text-amber-200 font-light hidden sm:block text-center tracking-wider">
                  {t('header.subtitle')}
                </p>
              </div>
            </Link>
          </div>

          {/* 3. RIGHT: Navigation & Language Toggle */}
          <div className="flex-1 flex justify-end items-center z-20">
            
            {/* DESKTOP VIEW: Nav Links + Lang Switch */}
            <div className="hidden lg:flex lg:items-center lg:gap-6">
              
              {/* Nav Links */}
              <div className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                      location.pathname === item.href
                        ? 'bg-amber-700 text-white shadow-sm'
                        : 'text-amber-100 hover:bg-amber-700 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Desktop Language Switcher */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-amber-300/30 flex">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-sm font-bold rounded-md transition-colors ${
                    isEnglish ? 'bg-amber-100 text-amber-900' : 'text-amber-200 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <div className="w-[1px] bg-amber-300/30 mx-1 my-1"></div>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-3 py-1 text-sm font-bold rounded-md transition-colors ${
                    isHindi ? 'bg-amber-100 text-amber-900' : 'text-amber-200 hover:text-white'
                  }`}
                >
                  HI
                </button>
              </div>
            </div>

            {/* MOBILE VIEW: Burger Menu + Compact Lang */}
            <div className="flex items-center gap-3 lg:hidden">
              {/* Compact Mobile Lang Switch */}
              <button 
                onClick={() => setLanguage(isEnglish ? 'hi' : 'en')}
                className="text-amber-100 font-bold text-sm border border-amber-400/50 rounded px-2 py-1"
              >
                {isEnglish ? 'HI' : 'EN'}
              </button>

              <button
                type="button"
                className="text-amber-100 hover:text-white p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-7 w-7" /> : <ChevronDown className="h-7 w-7" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden relative z-50 pb-4 border-t border-amber-700/50 pt-2 animate-in slide-in-from-top-2 fade-in duration-200">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-md mx-2 ${
                    location.pathname === item.href
                      ? 'bg-amber-700 text-white'
                      : 'text-amber-100 hover:bg-amber-700/50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}