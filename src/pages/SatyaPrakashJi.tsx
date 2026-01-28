import PravachanList from '../components/PravachanList';
import { satyaPrakashJiPravachans } from '../data/pravachans';
import satyaPrakashJiImage from '../assets/PapajiPrasad_2017_12x18_600dpi.jpg';

export default function SatyaPrakashJi() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white text-center mb-2">
            Param Guru Shri Satya Prakash Ji Maharaj
          </h1>
          <p className="text-amber-200 text-center">Bikaner (1941 - 2002)</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={satyaPrakashJiImage}
                  alt="Param Guru Shri Satya Prakash Ji Maharaj"
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-serif font-semibold text-amber-900 mb-3">Key Information</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-amber-600">Birth</dt>
                    <dd className="text-amber-900 font-medium">January 9, 1941</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-600">Maha Samadhi</dt>
                    <dd className="text-amber-900 font-medium">June 20, 2002</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-600">Location</dt>
                    <dd className="text-amber-900 font-medium">Bikaner, Rajasthan</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-600">Guru</dt>
                    <dd className="text-amber-900 font-medium">Param Guru Shri Sharda Charan Ji</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
                About Param Guru Ji
              </h2>
              <div className="prose prose-amber max-w-none text-amber-800">
                <p>
                  Param Guru Shri Satya Prakash Ji Maharaj carried the sacred torch of the
                  Ramashram Satsang Ch. lineage, guiding countless seekers on the path of
                  inner awakening. Based in Bikaner, Rajasthan, he dedicated his life to
                  spreading the teachings of his Guru, Param Guru Shri Sharda Charan Ji Maharaj.
                </p>
                <p>
                  His methods were uniquely suited for the modern householder - persons with
                  limited time, family responsibilities, and worldly obligations. He demonstrated
                  through his own life that spiritual attainment does not require renunciation
                  of the world, but rather a transformation of one's relationship with it.
                </p>
                <p>
                  Guruji's pravachans (discourses) are not mere philosophical talks but
                  transmissions of spiritual energy. When listened to with receptivity and
                  devotion, they continue to guide seekers even after his physical departure
                  in 2002.
                </p>

                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 my-6">
                  <h4 className="font-semibold text-amber-900 mb-2">About This Website</h4>
                  <p className="text-sm">
                    This website was created on the divine orders of Param Guru Ji himself.
                    During his physical presence, he instructed the creation of this digital
                    sanctuary and personally chose the name "Param Guru" for it. It serves
                    as a virtual ashram, preserving his teachings for generations of seekers.
                  </p>
                </div>

                <p>
                  His Punya Tithi (death anniversary) is observed on Ganga Dussehra each year at Bikaner,
                  Rajasthan, where devotees gather to honor his memory and receive continued
                  spiritual blessings.
                </p>
                <p>
                  His Birth anniversary is celebrated in Bikaner in the form of the Bikaner Satsang
                  Program on January 9th and 10th every year.
                </p>
              </div>
            </div>

            <PravachanList
              pravachans={satyaPrakashJiPravachans}
              title="Amrit Vani - Sacred Discourses"
            />

            <div className="bg-amber-100 rounded-xl p-6 border border-amber-300">
              <p className="text-amber-800 text-sm">
                <strong>Note:</strong> Click on any pravachan to open it in Google Drive,
                where you can play or download the audio recording. These recordings
                are preserved treasures of spiritual wisdom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
