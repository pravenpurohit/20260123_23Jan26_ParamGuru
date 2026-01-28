import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ramChandraJiImage from '../assets/paramgurushriramchandraji.jpeg';
import chaturbhujSahaiJiImage from '../assets/paramgurushrichaturbhujsahaiji.jpeg';
import shardaCharanJiImage from '../assets/2017_Pitaji_Photo_Final_NoLayers_24x36_300dpi_DateCorrected.jpg';
import satyaPrakashJiImage from '../assets/PapajiPrasad_2017_12x18_600dpi.jpg';

export default function Lineage() {
  const { t } = useTranslation();

  const lineageData = [
    {
      name: t('lineage.ramChandraJiName'),
      title: t('lineage.ramChandraJiTitle'),
      years: t('lineage.ramChandraJiYears'),
      location: t('lineage.ramChandraJiLocation'),
      description: t('lineage.ramChandraJiDesc'),
      link: null,
      image: ramChandraJiImage,
    },
    {
      name: t('lineage.chaturbhujJiName'),
      title: t('lineage.chaturbhujJiTitle'),
      years: t('lineage.chaturbhujJiYears'),
      location: t('lineage.chaturbhujJiLocation'),
      description: t('lineage.chaturbhujJiDesc'),
      link: null,
      image: chaturbhujSahaiJiImage,
    },
    {
      name: t('lineage.shardaCharanJiName'),
      title: t('lineage.shardaCharanJiTitle'),
      years: t('lineage.shardaCharanJiYears'),
      location: t('lineage.shardaCharanJiLocation'),
      description: t('lineage.shardaCharanJiDesc'),
      link: "/sharda-charan-ji",
      image: shardaCharanJiImage,
    },
    {
      name: t('lineage.satyaPrakashJiName'),
      title: t('lineage.satyaPrakashJiTitle'),
      years: t('lineage.satyaPrakashJiYears'),
      location: t('lineage.satyaPrakashJiLocation'),
      description: t('lineage.satyaPrakashJiDesc'),
      link: "/satya-prakash-ji",
      image: satyaPrakashJiImage,
    },
  ];

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-white text-center mb-4">
            {t('lineage.pageTitle')}
          </h1>
          <p className="text-amber-200 text-center max-w-2xl mx-auto">
            {t('lineage.pageSubtitle')}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
            {t('lineage.understandingTitle')}
          </h2>
          <p className="text-amber-800 leading-relaxed">
            {t('lineage.understandingText')}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-300 hidden md:block" />

          <div className="space-y-12">
            {lineageData.map((guru, index) => (
              <div key={index} className="relative">
                <div className="hidden md:block absolute left-6 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow" />

                <div className="md:ml-16 bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={guru.image}
                      alt={guru.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-amber-900">
                          {guru.name}
                        </h3>
                        <p className="text-amber-600 font-medium">{guru.title}</p>
                      </div>
                      <div className="text-right text-sm text-amber-700">
                        <p className="font-medium">{guru.years}</p>
                        <p>{guru.location}</p>
                      </div>
                    </div>

                    <div className="prose prose-amber max-w-none">
                      {guru.description.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-amber-800 mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {guru.link && (
                      <Link
                        to={guru.link}
                        className="inline-flex items-center mt-6 text-amber-700 hover:text-amber-900 font-medium"
                      >
                        {t('lineage.viewDiscourses')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 border border-amber-200">
          <h2 className="text-xl font-serif font-bold text-amber-900 mb-4">
            {t('lineage.significanceTitle')}
          </h2>
          <p className="text-amber-800 leading-relaxed">
            {t('lineage.significanceText')}
          </p>
        </div>
      </div>
    </div>
  );
}
