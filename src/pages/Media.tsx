import { Play, ExternalLink, Video, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Media() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-white text-center mb-4">
            Satsang Media
          </h1>
          <p className="text-amber-200 text-center max-w-2xl mx-auto">
            Immerse yourself in the vibration of past and live Satsang programs
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
                Live Satsang Telecasts
              </h2>
              <p className="text-red-100 mb-6 leading-relaxed">
                The YouTube channel continues the sacred tradition of sharing spiritual wisdom
                following the departure of the Gurus from their physical forms. Watch live
                telecasts of satsang programs from various locations and access an archive
                of past recordings.
              </p>
              <a
                href="https://www.youtube.com/@ramashramsatsangch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center self-start px-6 py-3 bg-white text-red-700 rounded-lg hover:bg-red-50 transition-colors font-semibold shadow-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Visit YouTube Channel
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">
                @ramashramsatsangch
              </h3>
              <div className="space-y-4 text-amber-700">
                <p>
                  The official YouTube channel of Ramashram Satsang Ch. features:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Video className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Live telecasts of satsang programs</span>
                  </li>
                  <li className="flex items-start">
                    <Video className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Recordings from Bhandaras and special occasions</span>
                  </li>
                  <li className="flex items-start">
                    <Video className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pravachans from various centers</span>
                  </li>
                  <li className="flex items-start">
                    <Video className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Spiritual discourses and meditation guidance</span>
                  </li>
                </ul>
                <p className="text-sm text-amber-600 italic mt-4">
                  Subscribe to the channel to receive notifications for live programs.
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
                Audio Pravachans
              </h3>
            </div>
            <p className="text-amber-700 mb-6">
              Access the sacred discourses (pravachans) of our Gurus in audio format.
              These recordings preserve the voice and wisdom of the Masters for
              future generations.
            </p>
            <div className="space-y-3">
              <Link
                to="/satya-prakash-ji"
                className="block p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
              >
                <h4 className="font-medium text-amber-900">
                  Param Guru Shri Satya Prakash Ji Maharaj
                </h4>
                <p className="text-sm text-amber-600">90+ recordings from 1984-2002</p>
              </Link>
              <Link
                to="/sharda-charan-ji"
                className="block p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
              >
                <h4 className="font-medium text-amber-900">
                  Param Guru Shri Sharda Charan Ji Maharaj
                </h4>
                <p className="text-sm text-amber-600">20+ recordings from 1979-1981</p>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-500">
            <div className="flex items-center mb-4">
              <Video className="h-8 w-8 text-amber-600 mr-3" />
              <h3 className="text-xl font-serif font-semibold text-amber-900">
                Video Archive
              </h3>
            </div>
            <p className="text-amber-700 mb-6">
              The YouTube channel serves as the video archive for Satsang programs.
              Visit the channel to browse:
            </p>
            <ul className="space-y-2 text-amber-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                Recent Bhandara recordings
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                Guru Purnima celebrations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                Punya Tithi (anniversary) programs
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                Regular satsang sessions
              </li>
            </ul>
            <a
              href="https://www.youtube.com/@ramashramsatsangch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-6 text-amber-700 hover:text-amber-900 font-medium"
            >
              Browse All Videos
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 border border-amber-200">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
            How to Use the Audio Pravachans
          </h2>
          <div className="prose prose-amber max-w-none text-amber-800">
            <p>
              The audio pravachans are stored on Google Drive for universal access.
              When you click on a pravachan link, it will open in Google Drive where you can:
            </p>
            <ul>
              <li><strong>Play directly</strong> - Listen in your browser without downloading</li>
              <li><strong>Download</strong> - Save to your device for offline listening</li>
              <li><strong>Share</strong> - Share the link with other seekers</li>
            </ul>
            <p className="italic">
              These recordings are sacred treasures. Listen with receptivity and devotion,
              preferably in a quiet environment conducive to contemplation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
