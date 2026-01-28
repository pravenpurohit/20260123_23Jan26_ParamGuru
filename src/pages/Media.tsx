import { Play, ExternalLink, Video, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Media() {
  const { t } = useTranslation();

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-white text-center mb-4">
            {t('media.pageTitle')}
          </h1>
          <p className="text-amber-200 text-center max-w-2xl mx-auto">
            {t('media.pageSubtitle')}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-red-600 to-red-700 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Play className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                {t('media.liveTelecastTitle')}
              </h2>
              <p className="text-red-100 mb-6 leading-relaxed">
                {t('media.liveTelecastDesc')}
              </p>
              <a
                href="https://www.youtube.com/@ramashramsatsangch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center self-start px-6 py-3 bg-white text-red-700 rounded-lg hover:bg-red-50 transition-colors font-semibold shadow-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                {t('media.visitYoutube')}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">
                @ramashramsatsangch
              </h3>
              <div className="space-y-4 text-amber-700">
                <p>
                  {t('media.channelFeatures')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Video className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('media.featureLive')}</span>
                  </li>
                  <li className="flex items-start">
                    <Video className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('media.featureBhandara')}</span>
                  </li>
                  <li className="flex items-start">
                    <Video className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('media.featurePravachans')}</span>
                  </li>
                  <li className="flex items-start">
                    <Video className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('media.featureDiscourses')}</span>
                  </li>
                </ul>
                <p className="text-sm text-amber-600 italic mt-4">
                  {t('media.subscribeNote')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-500">
            <div className="flex items-center mb-4">
              <Headphones className="h-8 w-8 text-amber-600 mr-3" />
              <h3 className="text-xl font-serif font-semibold text-amber-900">
                {t('media.audioPravachans')}
              </h3>
            </div>
            <p className="text-amber-700 mb-6">
              {t('media.audioPravachansDesc')}
            </p>
            <div className="space-y-3">
              <Link
                to="/satya-prakash-ji"
                className="block p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
              >
                <h4 className="font-medium text-amber-900">
                  {t('home.satyaPrakashJiName')}
                </h4>
                <p className="text-sm text-amber-600">{t('media.satyaPrakashJiRecordings')}</p>
              </Link>
              <Link
                to="/sharda-charan-ji"
                className="block p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
              >
                <h4 className="font-medium text-amber-900">
                  {t('home.shardaCharanJiName')}
                </h4>
                <p className="text-sm text-amber-600">{t('media.shardaCharanJiRecordings')}</p>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-500">
            <div className="flex items-center mb-4">
              <Video className="h-8 w-8 text-amber-600 mr-3" />
              <h3 className="text-xl font-serif font-semibold text-amber-900">
                {t('media.videoArchive')}
              </h3>
            </div>
            <p className="text-amber-700 mb-6">
              {t('media.videoArchiveDesc')}
            </p>
            <ul className="space-y-2 text-amber-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                {t('media.recentBhandara')}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                {t('media.guruPurnimaCelebrations')}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                {t('media.punyaTithiPrograms')}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                {t('media.regularSatsang')}
              </li>
            </ul>
            <a
              href="https://www.youtube.com/@ramashramsatsangch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-6 text-amber-700 hover:text-amber-900 font-medium"
            >
              {t('media.browseAllVideos')}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 border border-amber-200">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
            {t('media.howToUseTitle')}
          </h2>
          <div className="prose prose-amber max-w-none text-amber-800">
            <p>
              {t('media.howToUseText')}
            </p>
            <ul>
              <li><strong>{t('media.playDirectly')}</strong></li>
              <li><strong>{t('media.download')}</strong></li>
              <li><strong>{t('media.share')}</strong></li>
            </ul>
            <p className="italic">
              {t('media.sacredNote')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
