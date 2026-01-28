import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Play, Users, BookOpen, Mic, CalendarDays } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { upcomingEvents } from '../data/pravachans';
import shardaCharanJiImage from '../assets/2017_Pitaji_Photo_Final_NoLayers_24x36_300dpi_DateCorrected.jpg';
import satyaPrakashJiImage from '../assets/PapajiPrasad_2017_12x18_600dpi.jpg';

export default function Home() {
  const { t } = useTranslation();

  const exploreLinks = [
    {
      title: t('home.spiritualLineage'),
      description: t('home.spiritualLineageDesc'),
      href: '/lineage',
      icon: Users,
    },
    {
      title: t('home.audioRecordings'),
      description: t('home.audioRecordingsDesc'),
      href: '/media',
      icon: Mic,
    },
    {
      title: t('home.teachingsTitle'),
      description: t('home.teachingsDesc'),
      href: '/teachings',
      icon: BookOpen,
    },
    {
      title: t('home.satsangPrograms'),
      description: t('home.satsangProgramsDesc'),
      href: '/programs',
      icon: CalendarDays,
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-b from-amber-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4">
              {t('home.heroTitle')}
            </h1>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              {t('home.heroSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
            <Link to="/sharda-charan-ji" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                <img
                  src={shardaCharanJiImage}
                  alt={t('home.shardaCharanJiName')}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3 sm:p-6">
                  <h3 className="text-sm sm:text-xl font-serif font-semibold text-white">
                    {t('home.shardaCharanJiName')}
                  </h3>
                  <p className="text-amber-200 text-xs sm:text-sm mt-1">{t('home.shardaCharanJiPlace')}</p>
                </div>
              </div>
            </Link>

            <Link to="/satya-prakash-ji" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                <img
                  src={satyaPrakashJiImage}
                  alt={t('home.satyaPrakashJiName')}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3 sm:p-6">
                  <h3 className="text-sm sm:text-xl font-serif font-semibold text-white">
                    {t('home.satyaPrakashJiName')}
                  </h3>
                  <p className="text-amber-200 text-xs sm:text-sm mt-1">{t('home.satyaPrakashJiPlace')}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-900 mb-2">
              {t('home.explore')}
            </h2>
            <p className="text-amber-700">{t('home.exploreSubtitle')}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group bg-amber-50 rounded-xl p-4 sm:p-6 hover:bg-amber-100 transition-colors border border-amber-200 hover:border-amber-300"
              >
                <link.icon className="h-8 w-8 text-amber-700 mb-3 group-hover:text-amber-800" />
                <h3 className="font-semibold text-amber-900 mb-1 text-sm sm:text-base">{link.title}</h3>
                <p className="text-amber-700 text-xs sm:text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">
              {t('home.peaceTitle')}
            </h2>
            <div className="prose prose-lg prose-amber mx-auto text-amber-800">
              <p>
                {t('home.peaceText1')}
              </p>
              <p>
                {t('home.peaceText2')}
              </p>
              <p className="text-amber-600 italic">
                {t('home.peaceQuote')}
              </p>
            </div>
            <Link
              to="/teachings"
              className="inline-flex items-center mt-8 px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors font-medium"
            >
              {t('home.exploreTeachings')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-4">
              {t('home.upcomingPrograms')}
            </h2>
            <p className="text-amber-700">{t('home.upcomingProgramsSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.slice(0, 6).map((event, index) => (
              <div
                key={index}
                className="bg-amber-50 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-amber-500"
              >
                <h3 className="font-semibold text-lg text-amber-900 mb-3">{event.name}</h3>
                <div className="space-y-2 text-sm text-amber-700">
                  <p className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-amber-500" />
                    {event.dates}
                  </p>
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-amber-500" />
                    {event.location}, {event.jila}, {event.state}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/programs"
              className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium"
            >
              {t('home.viewAllPrograms')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-800 to-amber-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              {t('home.liveSatsang')}
            </h2>
            <p className="text-amber-200 mb-8 max-w-2xl mx-auto">
              {t('home.liveSatsangDesc')}
            </p>
            <a
              href="https://www.youtube.com/@ramashramsatsangch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-amber-900 rounded-lg hover:bg-amber-50 transition-colors font-semibold shadow-lg"
            >
              <Play className="mr-3 h-6 w-6" />
              {t('home.visitYoutube')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12 border border-amber-200">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
                {t('home.aboutWebsite')}
              </h2>
              <p className="text-amber-800 leading-relaxed">
                {t('home.aboutWebsiteText')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
