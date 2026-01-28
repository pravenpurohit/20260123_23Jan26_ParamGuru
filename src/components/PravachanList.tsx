import { useState } from 'react';
import { ExternalLink, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Pravachan } from '../data/pravachans';

interface PravachanListProps {
  pravachans: Pravachan[];
  title: string;
}

export default function PravachanList({ pravachans, title }: PravachanListProps) {
  const [expandedYear, setExpandedYear] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();

  const years = [...new Set(pravachans.map(p => p.year))].sort((a, b) => b - a);
  const pravachansByYear = years.reduce((acc, year) => {
    acc[year] = pravachans.filter(p => p.year === year);
    return acc;
  }, {} as Record<number, Pravachan[]>);

  const displayedYears = showAll ? years : years.slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-amber-700 to-amber-800 px-6 py-4">
        <h3 className="text-xl font-serif font-semibold text-white">{title}</h3>
        <p className="text-amber-100 text-sm mt-1">{pravachans.length} {t('pravachanList.recordingsAvailable')}</p>
      </div>

      <div className="divide-y divide-amber-100">
        {displayedYears.map((year) => (
          <div key={year}>
            <button
              onClick={() => setExpandedYear(expandedYear === year ? null : year)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-amber-50 transition-colors"
            >
              <span className="font-semibold text-amber-900">{year}</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-amber-600">{pravachansByYear[year].length} {t('pravachanList.recordings')}</span>
                {expandedYear === year ? (
                  <ChevronUp className="h-5 w-5 text-amber-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-amber-600" />
                )}
              </div>
            </button>

            {expandedYear === year && (
              <div className="bg-amber-50 px-6 py-4 space-y-3">
                {pravachansByYear[year].map((pravachan, index) => (
                  <a
                    key={index}
                    href={pravachan.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all hover:bg-amber-100/50 border border-amber-100"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-amber-900">{pravachan.title}</h4>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-amber-600">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {pravachan.date}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {pravachan.location}
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="h-5 w-5 text-amber-500 flex-shrink-0 ml-4" />
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {years.length > 5 && (
        <div className="px-6 py-4 bg-amber-50 border-t border-amber-100">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full text-center text-amber-700 hover:text-amber-900 font-medium transition-colors"
          >
            {showAll ? t('pravachanList.showLess') : t('pravachanList.showAll', { count: years.length })}
          </button>
        </div>
      )}
    </div>
  );
}
