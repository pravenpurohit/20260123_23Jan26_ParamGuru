import { useTranslation } from 'react-i18next';
import PravachanList from '../components/PravachanList';
import { shardaCharanJiPravachans } from '../data/pravachans';
import shardaCharanJiImage from '../assets/2017_Pitaji_Photo_Final_NoLayers_24x36_300dpi_DateCorrected.jpg';

export default function ShardaCharanJi() {
  const { t } = useTranslation();

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white text-center mb-2">
            {t('shardaCharanJi.pageTitle')}
          </h1>
          <p className="text-amber-200 text-center">{t('shardaCharanJi.pageSubtitle')}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={shardaCharanJiImage}
                  alt={t('shardaCharanJi.pageTitle')}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-serif font-semibold text-amber-900 mb-3">{t('shardaCharanJi.keyInfo')}</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-amber-600">{t('shardaCharanJi.birth')}</dt>
                    <dd className="text-amber-900 font-medium">{t('shardaCharanJi.birthDate')}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-600">{t('shardaCharanJi.mahaSamadhi')}</dt>
                    <dd className="text-amber-900 font-medium">{t('shardaCharanJi.mahaSamadhiDate')}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-600">{t('shardaCharanJi.location')}</dt>
                    <dd className="text-amber-900 font-medium">{t('shardaCharanJi.locationValue')}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-600">{t('shardaCharanJi.guru')}</dt>
                    <dd className="text-amber-900 font-medium">{t('shardaCharanJi.guruValue')}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
                {t('shardaCharanJi.aboutTitle')}
              </h2>
              <div className="prose prose-amber max-w-none text-amber-800">
                <p>{t('shardaCharanJi.aboutText1')}</p>
                <p>{t('shardaCharanJi.aboutText2')}</p>

                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 my-6">
                  <h4 className="font-semibold text-amber-900 mb-2">{t('shardaCharanJi.meaningChTitle')}</h4>
                  <p className="text-sm">{t('shardaCharanJi.meaningChText')}</p>
                </div>

                <p>{t('shardaCharanJi.aboutText3')}</p>
                <p>{t('shardaCharanJi.punyaTithiText')}</p>
              </div>
            </div>

            <PravachanList
              pravachans={shardaCharanJiPravachans}
              title={t('shardaCharanJi.pravachansTitle')}
            />

            <div className="bg-amber-100 rounded-xl p-6 border border-amber-300">
              <p className="text-amber-800 text-sm">
                <strong>Note:</strong> {t('shardaCharanJi.pravachansNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
