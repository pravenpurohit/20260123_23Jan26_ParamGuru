import { Heart, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Lineage', href: '/lineage' },
  { name: 'Param Guru Shri Satya Prakash Ji', href: '/satya-prakash-ji' },
  { name: 'Param Guru Shri Sharda Charan Ji', href: '/sharda-charan-ji' },
  { name: 'Teachings & Pravachans', href: '/teachings' },
  { name: 'Satsang Programs', href: '/programs' },
  { name: 'Audio Recordings', href: '/media' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-serif font-semibold text-amber-100 mb-4">Param Guru</h3>
            <p className="text-amber-200 text-sm leading-relaxed">
              This website was created on the orders of Param Guru Shri Satya Prakash Ji Maharaj during his physical presence.
              He chose the name "Param Guru" for this digital sanctuary of spiritual wisdom.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold text-amber-100 mb-4">Quick Links</h3>
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
            <h3 className="text-lg font-serif font-semibold text-amber-100 mb-4">Locations</h3>
            <div className="space-y-3">
              <a
                href="https://maps.app.goo.gl/6DWXpKfnqZo6b2LYA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-amber-200 hover:text-white text-sm transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Bikaner, Rajasthan</span>
                <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0" />
              </a>
              <a
                href="https://maps.app.goo.gl/GgAQzr53xieSpYV18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-amber-200 hover:text-white text-sm transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Agra, Uttar Pradesh</span>
                <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold text-amber-100 mb-4">Connect</h3>
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
              For inquiries about Satsang and meditation practices, please attend any of our upcoming programs.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-amber-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-200 text-sm">
              "The more spiritual a person is, the more human they are."
            </p>
            <p className="text-amber-300 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for seekers of truth
            </p>
          </div>
          <p className="text-amber-400 text-xs text-center mt-4">
            {currentYear} Ramashram Satsang Ch. Bhoodkabagh, Bikaner center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
