//Gemini Try 4
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
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

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en');
  };

  const currentLang = i18n.language === 'en' ? 'EN' : 'HI';

  return (
    // Removed 'max-w-...' constraints to fix the cramping issue
    <header className="bg-[#6B3419] text-white shadow-lg sticky top-0 z-50 w-full">
      <nav className="w-full px-6 lg:px-12 h-20 relative flex items-center">
        
        {/* --- GRID LAYOUT: Forces strictly separated Left, Center, and Right sections --- */}
        <div className="grid grid-cols-3 w-full items-center">

          {/* 1. LEFT COLUMN: Empty Placeholder (Balances the grid so Title is perfectly centered) */}
          <div className="hidden lg:block">
             {/* Optional: Add a Logo here if you ever need one */}
          </div>
          {/* Mobile spacer */}
          <div className="lg:hidden"></div> 

          {/* 2. CENTER COLUMN: Title (Absolute Center) */}
          <div className="flex flex-col items-center justify-center text-center mx-auto">
            <Link to="/" className="group">
              <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wide drop-shadow-md">
                {t('header.title')}
              </h1>
              <p className="text-xs text-amber-200/80 font-light tracking-widest uppercase mt-1">
                {t('header.subtitle')}
              </p>
            </Link>
          </div>

          {/* 3. RIGHT COLUMN: Navigation & Actions (Pushed to Far Right) */}
          <div className="flex justify-end items-center gap-4">
            
            {/* === DESKTOP NAV (Visible on Large Screens) === */}
            <div className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    location.pathname === item.href
                      ? 'text-white font-bold border-b-2 border-amber-400 pb-1'
                      : 'text-amber-100 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* === LANGUAGE BUTTON (Visible on ALL Screens) === */}
            {/* Styled to match your screenshot (Outlined Box) */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 border border-amber-200/40 rounded text-sm font-semibold hover:bg-white/10 transition-all uppercase tracking-wider"
            >
              {currentLang}
            </button>

            {/* === MOBILE HAMBURGER (Hidden on Desktop) === */}
            <button
              type="button"
              className="lg:hidden p-1 text-amber-100 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>

        {/* === MOBILE MENU OVERLAY === */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#5D2C1D] shadow-xl border-t border-amber-800/50 lg:hidden">
            <div className="flex flex-col p-6 space-y-4 text-center">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block text-lg font-medium py-2 ${
                    location.pathname === item.href
                      ? 'text-white bg-white/10 rounded-lg'
                      : 'text-amber-100 hover:text-white'
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