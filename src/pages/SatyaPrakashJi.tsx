import { useTranslation } from 'react-i18next';
import PravachanList from '../components/PravachanList';
import { satyaPrakashJiPravachans } from '../data/pravachans';
import satyaPrakashJiImage from '../assets/PapajiPrasad_2017_12x18_600dpi.jpg';

export default function SatyaPrakashJi() {
  const { t } = useTranslation();

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white text-center mb-2">
            {t('satyaPrakashJi.pageTitle')}
          </h1>
          <p className="text-amber-200 text-center">{t('satyaPrakashJi.pageSubtitle')}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={satyaPrakashJiImage}
                  alt={t('satyaPrakashJi.pageTitle')}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-serif font-semibold text-amber-900 mb-3">{t('satyaPrakashJi.keyInfo')}</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-amber-600">{t('satyaPrakashJi.birth')}</dt>
                    <dd className="text-amber-900 font-medium">{t('satyaPrakashJi.birthDate')}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-600">{t('satyaPrakashJi.mahaSamadhi')}</dt>
                    <dd className="text-amber-900 font-medium">{t('satyaPrakashJi.mahaSamadhiDate')}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-600">{t('satyaPrakashJi.location')}</dt>
                    <dd className="text-amber-900 font-medium">{t('satyaPrakashJi.locationValue')}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-600">{t('satyaPrakashJi.guru')}</dt>
                    <dd className="text-amber-900 font-medium">{t('satyaPrakashJi.guruValue')}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
                {t('satyaPrakashJi.aboutTitle')}
              </h2>
              <div className="prose prose-amber max-w-none text-amber-800">
                <p>{t('satyaPrakashJi.aboutText1')}</p>
                <p>{t('satyaPrakashJi.aboutText2')}</p>
                <p>{t('satyaPrakashJi.aboutText3')}</p>

                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 my-6">
                  <h4 className="font-semibold text-amber-900 mb-2">{t('satyaPrakashJi.aboutWebsiteTitle')}</h4>
                  <p className="text-sm">{t('satyaPrakashJi.aboutWebsiteText')}</p>
                </div>

                <p>{t('satyaPrakashJi.punyaTithiText')}</p>
                <p>{t('satyaPrakashJi.birthAnniversaryText')}</p>
              </div>
            </div>

            <PravachanList
              pravachans={satyaPrakashJiPravachans}
              title={t('satyaPrakashJi.pravachansTitle')}
            />

            <div className="bg-amber-100 rounded-xl p-6 border border-amber-300">
              <p className="text-amber-800 text-sm">
                <strong>Note:</strong> {t('satyaPrakashJi.pravachansNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
