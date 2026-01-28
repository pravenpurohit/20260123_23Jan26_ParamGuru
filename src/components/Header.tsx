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

  const switchToLang = i18n.language === 'hi' ? 'English' : 'हिंदी';

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
                    : 'text-amber-100 hover:bg-amber-700/50 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="ml-4 px-4 py-2.5 text-base font-semibold rounded-lg transition-all duration-200 bg-amber-600 text-white hover:bg-amber-500 flex items-center gap-2 border-2 border-amber-400 shadow-md hover:shadow-lg"
              aria-label={`Switch to ${switchToLang}`}
            >
              <Globe className="h-5 w-5" />
              <span>{switchToLang}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="text-white bg-amber-600 hover:bg-amber-500 p-2.5 flex items-center space-x-1.5 border-2 border-amber-400 rounded-lg shadow-md"
              aria-label={`Switch to ${switchToLang}`}
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-semibold">{i18n.language === 'hi' ? 'EN' : 'हि'}</span>
            </button>
            <button
              type="button"
              className="text-amber-100 hover:text-white p-2 flex items-center space-x-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="text-sm font-medium">{t('nav.menu')}</span>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-amber-700/50 pt-2">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-md ${
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
