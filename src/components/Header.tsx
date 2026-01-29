import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown } from 'lucide-react';
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
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-3 gap-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <div className="text-amber-100">
                <h1 className="text-lg sm:text-xl font-serif font-bold tracking-wide text-center">{t('header.title')}</h1>
                <p className="text-xs text-amber-200 font-light hidden sm:block text-center">{t('header.subtitle')}</p>
              </div>
            </Link>

            <div className="flex items-center gap-3 lg:hidden">
              <div className="inline-flex bg-white rounded-lg p-1 shadow-lg border-2 border-amber-300">
                <button
                  onClick={() => setLanguage('en')}
                  type="button"
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all duration-200 ${
                    isEnglish
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-transparent text-amber-900 hover:bg-amber-100'
                  }`}
                  aria-label="Switch to English"
                  aria-pressed={isEnglish}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  type="button"
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all duration-200 ${
                    isHindi
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-transparent text-amber-900 hover:bg-amber-100'
                  }`}
                  aria-label="Switch to Hindi"
                  aria-pressed={isHindi}
                >
                  हिंदी
                </button>
              </div>
              <button
                type="button"
                className="text-amber-100 hover:text-white p-2 flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-amber-300 rounded-md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className="text-sm font-medium">{t('nav.menu')}</span>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'bg-amber-700 text-white'
                      : 'text-amber-100 hover:bg-amber-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="inline-flex bg-white rounded-lg p-1 shadow-lg border-2 border-amber-300">
              <button
                onClick={() => setLanguage('en')}
                type="button"
                className={`px-4 py-2 text-sm font-bold rounded-md transition-all duration-200 ${
                  isEnglish
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-transparent text-amber-900 hover:bg-amber-100'
                }`}
                aria-label="Switch to English"
                aria-pressed={isEnglish}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('hi')}
                type="button"
                className={`px-4 py-2 text-sm font-bold rounded-md transition-all duration-200 ${
                  isHindi
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-transparent text-amber-900 hover:bg-amber-100'
                }`}
                aria-label="Switch to Hindi"
                aria-pressed={isHindi}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-amber-700 pt-2">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-md ${
                    location.pathname === item.href
                      ? 'bg-amber-700 text-white'
                      : 'text-amber-100 hover:bg-amber-700'
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
