import PravachanList from '../components/PravachanList';
import { shardaCharanJiPravachans } from '../data/pravachans';
import shardaCharanJiImage from '../assets/2017_Pitaji_Photo_Final_NoLayers_24x36_300dpi_DateCorrected.jpg';

export default function ShardaCharanJi() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white text-center mb-2">
            Param Guru Shri Sharda Charan Ji Maharaj
          </h1>
          <p className="text-amber-200 text-center">Agra (1910 - 1983)</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={shardaCharanJiImage}
                  alt="Param Guru Shri Sharda Charan Ji Maharaj"
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-serif font-semibold text-amber-900 mb-3">Key Information</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-amber-600">Birth</dt>
                    <dd className="text-amber-900 font-medium">September 26, 1910</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-600">Maha Samadhi</dt>
                    <dd className="text-amber-900 font-medium">January 28, 1983</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-600">Location</dt>
                    <dd className="text-amber-900 font-medium">Agra, Uttar Pradesh</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-amber-600">Guru</dt>
                    <dd className="text-amber-900 font-medium">Param Guru Shri Chaturbhuj Sahai Ji</dd>
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
                  Param Guru Shri Sharda Charan Ji Maharaj stands as a towering example of
                  devotion and surrender in the spiritual lineage. Born on September 26, 1910,
                  in Agra, his life was a testament to the transformative power of complete
                  dedication to the Guru.
                </p>
                <p>
                  His relationship with his Guru, Param Guru Shri Chaturbhuj Sahai Ji Maharaj,
                  was one of absolute surrender. When he established his branch of the Satsang,
                  he demonstrated supreme humility by naming it "Ramashram Satsang Ch." - the
                  "Ch." standing for Chaturbhuj, his beloved Guru's name. This act teaches us
                  that true spirituality lies in becoming smaller, not greater.
                </p>

                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 my-6">
                  <h4 className="font-semibold text-amber-900 mb-2">The Meaning of "Ch."</h4>
                  <p className="text-sm">
                    The "Ch." in Ramashram Satsang Ch. is a monument to devotion. Rather than
                    naming the organization after himself, Shri Sharda Charan Ji permanently
                    affixed his Guru's initial to its identity. This teaches disciples that
                    the spiritual path is about dissolving the ego in service of the Master,
                    not building monuments to oneself.
                  </p>
                </div>

                <p>
                  His pravachans continue to inspire seekers on the path of devotion. Through
                  his teachings, he emphasized the importance of the Guru-disciple relationship
                  and the power of complete surrender (Samarpan) in spiritual attainment.
                </p>
                <p>
                  His Punya Tithi (death anniversary) is observed on Ravidas Jayanti each year, while
                  his Janam Divas (birthday) on September 26th is celebrated with special
                  satsang programs at various centers.
                </p>
              </div>
            </div>

            <PravachanList
              pravachans={shardaCharanJiPravachans}
              title="Amrit Vani - Sacred Discourses"
            />

            <div className="bg-amber-100 rounded-xl p-6 border border-amber-300">
              <p className="text-amber-800 text-sm">
                <strong>Note:</strong> Click on any pravachan to open it in Google Drive,
                where you can play or download the audio recording. These rare recordings
                from the late 1970s and early 1980s preserve the voice and wisdom of
                Param Guru Ji for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
