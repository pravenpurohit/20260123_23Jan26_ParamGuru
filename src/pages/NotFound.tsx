import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-amber-800/20 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-amber-900 mb-4">
          {t('notFound.title')}
        </h2>
        <p className="text-amber-700 mb-8 max-w-md mx-auto">
          {t('notFound.message')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            {t('notFound.goHome')}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-amber-700 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {t('notFound.goBack')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
