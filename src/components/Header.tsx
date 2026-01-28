import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, Globe } from 'lucide-react';
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
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isHindi = i18n.language === 'hi';
  const switchToLang = isHindi ? 'English' : 'हिंदी';
  const switchToLangShort = isHindi ? 'EN' : 'हि';

  return (
    <header className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 shadow-lg sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="text-amber-100">
                <h1 className="text-lg sm:text-xl font-serif font-bold tracking-wide">{t('header.title')}</h1>
                <p className="text-xs text-amber-200 font-light hidden sm:block">{t('header.subtitle')}</p>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-1">
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
            <button
              onClick={toggleLanguage}
              type="button"
              className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 text-base font-bold rounded-lg bg-white text-amber-900 hover:bg-amber-100 active:bg-amber-200 border-2 border-amber-300 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-amber-800"
              aria-label={`Switch to ${switchToLang}`}
            >
              <Globe className="h-5 w-5 flex-shrink-0" strokeWidth={2.5} />
              <span className="whitespace-nowrap">{switchToLang}</span>
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLanguage}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-bold rounded-lg bg-white text-amber-900 hover:bg-amber-100 active:bg-amber-200 border-2 border-amber-300 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              aria-label={`Switch to ${switchToLang}`}
            >
              <Globe className="h-4 w-4 flex-shrink-0" strokeWidth={2.5} />
              <span>{switchToLangShort}</span>
            </button>
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

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-amber-700 pt-2">
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
