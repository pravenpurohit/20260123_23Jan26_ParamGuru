import { Heart, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const navigationLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.lineage'), href: '/lineage' },
    { name: t('footer.satyaPrakashJi'), href: '/satya-prakash-ji' },
    { name: t('footer.shardaCharanJi'), href: '/sharda-charan-ji' },
    { name: t('footer.teachingsLink'), href: '/teachings' },
    { name: t('footer.satsangPrograms'), href: '/programs' },
    { name: t('footer.audioRecordings'), href: '/media' },
  ];

  return (
    <footer className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-serif font-semibold text-amber-100 mb-4">{t('footer.title')}</h3>
            <p className="text-amber-200 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold text-amber-100 mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-amber-200 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold text-amber-100 mb-4">{t('footer.locations')}</h3>
            <div className="space-y-3">
              <a
                href="https://maps.app.goo.gl/6DWXpKfnqZo6b2LYA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-amber-200 hover:text-white text-sm transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>{t('footer.bikaner')}</span>
                <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0" />
              </a>
              <a
                href="https://maps.app.goo.gl/GgAQzr53xieSpYV18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-amber-200 hover:text-white text-sm transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>{t('footer.agra')}</span>
                <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold text-amber-100 mb-4">{t('footer.connect')}</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@paramguru.net"
                className="flex items-center text-amber-200 hover:text-white text-sm transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@paramguru.net
              </a>
              <a
                href="https://www.youtube.com/@ramashramsatsangch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-amber-200 hover:text-white text-sm transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                YouTube: @ramashramsatsangch
              </a>
            </div>
            <p className="text-amber-300 text-sm mt-4">
              {t('footer.inquiryNote')}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-amber-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-200 text-sm">
              {t('footer.quote')}
            </p>
            <p className="text-amber-300 text-sm flex items-center">
              {t('footer.madeWith')} <Heart className="h-4 w-4 mx-1 text-red-400" /> {t('footer.forSeekers')}
            </p>
          </div>
          <p className="text-amber-400 text-xs text-center mt-4">
            {currentYear} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
