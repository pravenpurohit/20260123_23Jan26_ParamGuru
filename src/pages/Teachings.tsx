import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const sectionKeys = [
  'sadhna',
  'evolution',
  'confusion',
  'dispassion',
  'sadhnaDetail',
  'transcendental',
  'journey',
  'communities',
  'guruDisciple',
  'howToBeDisciple',
  'threeStages',
  'diksha',
  'samarpan',
  'behavior',
  'concentration',
  'householders'
];

export default function Teachings() {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);
  const { t } = useTranslation();

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-white text-center mb-4">
            {t('teachings.pageTitle')}
          </h1>
          <p className="text-amber-200 text-center max-w-2xl mx-auto">
            {t('teachings.pageSubtitle')}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <p className="text-amber-800 leading-relaxed text-lg">
            {t('teachings.introText')}
          </p>
        </div>

        <div className="space-y-4">
          {sectionKeys.map((key, index) => (
            <div key={key} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-amber-50 transition-colors"
              >
                <h2 className="text-lg font-serif font-semibold text-amber-900 pr-4">
                  {t(`teachings.sections.${key}.title`)}
                </h2>
                {expandedSection === index ? (
                  <ChevronUp className="h-5 w-5 text-amber-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-amber-600 flex-shrink-0" />
                )}
              </button>

              {expandedSection === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-amber-100 pt-4">
                    {t(`teachings.sections.${key}.content`).split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-amber-800 leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 border border-amber-200">
          <p className="text-amber-800 text-center italic text-lg">
            {t('teachings.quote')}
          </p>
          <p className="text-amber-600 text-center text-sm mt-2">
            {t('teachings.quoteAuthor')}
          </p>
        </div>
      </div>
    </div>
  );
}
