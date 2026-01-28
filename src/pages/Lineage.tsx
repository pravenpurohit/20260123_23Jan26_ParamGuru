import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ramChandraJiImage from '../assets/paramgurushriramchandraji.jpeg';
import chaturbhujSahaiJiImage from '../assets/paramgurushrichaturbhujsahaiji.jpeg';
import shardaCharanJiImage from '../assets/2017_Pitaji_Photo_Final_NoLayers_24x36_300dpi_DateCorrected.jpg';
import satyaPrakashJiImage from '../assets/PapajiPrasad_2017_12x18_600dpi.jpg';

const lineageData = [
  {
    name: "Param Guru Ram Chandra Ji Maharaj (Lala Ji)",
    title: "The Founder",
    years: "1873 - 1931",
    location: "Mainpuri / Farrukhabad, Uttar Pradesh",
    description: `Param Guru Ram Chandra Ji Maharaj, affectionately known as Lala Ji, represents the genesis of this sacred spiritual current. Born in 1873 in Mainpuri (U.P.), he lived the life of a Grihastha (householder) while being a government employee in Farrukhabad.

His spiritual journey took a remarkable turn when he received initiation from a Sufi saint, Maulana Shah Fazal Ahmad Khan. This syncretic connection bridges Hindu and Sufi mysticism, demonstrating that the language of the soul transcends all religious boundaries.

Lala Ji's primary contribution to the lineage was the re-introduction of Pranahuti (Yogic Transmission) - the capacity of the Guru to transmit spiritual energy directly into the heart of the aspirant, awakening dormant spiritual centers without arduous physical austerities. His vision of the "Universal Dance," where he perceived the entire cosmos vibrating with divine energy, established the energy-based nature of meditation practiced in the Satsang.`,
    link: null,
    image: ramChandraJiImage,
  },
  {
    name: "Param Guru Shri Chaturbhuj Sahai Ji Maharaj",
    title: "The Systematizer",
    years: "1873 - 1957",
    location: "Etah / Mathura, Uttar Pradesh",
    description: `Born in 1873 in Etah, Uttar Pradesh, Param Guru Shri Chaturbhuj Sahai Ji Maharaj was both a contemporary and devoted disciple of Lala Ji. Professionally, he served as a homeopathic doctor, embodying the "Healer" archetype of the lineage.

In 1930, he founded Ramashram Satsang Mathura, transforming the personal transmission of Lala Ji into a structured organization capable of reaching the masses. He championed the philosophy of Grihastha Yoga, teaching that the friction of family life is actually a tool for polishing the soul.

His profound teaching, "The more spiritual a person is, the more human they are," serves as the ethical compass for the Satsang. It reminds us that if our meditation does not make us kinder, more patient, and more honest, it serves no purpose. He represents the Methodology - assuring seekers that they can practice this yoga without disrupting their social responsibilities.`,
    link: null,
    image: chaturbhujSahaiJiImage,
  },
  {
    name: "Param Guru Shri Sharda Charan Ji Maharaj",
    title: "The Home of Truth and Englightenment - Satya Sadan",
    years: "1910 - 1983",
    location: "Agra, Uttar Pradesh",
    description: `Param Guru Shri Sharda Charan Ji Maharaj exemplifies the profound bond between Master and Disciple. A resident of Agra, his devotion to Shri Chaturbhuj Sahai Ji was so complete that he effaced his own identity in service of his Guru.

When he established his branch of the Satsang, he did not name it after himself. Instead, he called it "Ramashram Satsang Ch." - permanently affixing the initial of his Guru (Chaturbhuj) to the organization's identity. This "Ch." is not merely a letter; it is a monument to humility, teaching disciples that the spiritual path is not about becoming a "Guru" but about remaining an eternal "Disciple."

He represents the sacred Link that connects the source in Mathura to the stream that flows through Bikaner and beyond. His pravachans (discourses) continue to guide seekers on the path of devotion and surrender.`,
    link: "/sharda-charan-ji",
    image: shardaCharanJiImage,
  },
  {
    name: "Param Guru Shri Satya Prakash Ji Maharaj",
    title: "The Light of Truth and Enlightenment - Satya Ka Prakash",
    years: "1941 - 2002",
    location: "Bikaner, Rajasthan",
    description: `Param Guru Shri Satya Prakash Ji Maharaj carried the weight of this illustrious lineage, guiding modern seekers through the unique challenges of contemporary life. Based in Bikaner, Rajasthan, his methods are particularly well-suited for persons leading household lives with limited time for spiritual practice.

His pravachans are not mere lectures but transmissions of the divine energy he received from Shri Sharda Charan Ji. He serves as the spiritual focus for the Bikaner center, providing practical guidance on integrating meditation into daily life while fulfilling worldly responsibilities.

This very website was created on his orders, given while he was in his physical form. He personally chose the name "Param Guru" for this digital sanctuary. Though he left his physical body in 2002, his spiritual presence continues to guide sincere seekers through his recorded teachings and the living tradition he established.`,
    link: "/satya-prakash-ji",
    image: satyaPrakashJiImage,
  },
];

export default function Lineage() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-white text-center mb-4">
            The Sacred Lineage
          </h1>
          <p className="text-amber-200 text-center max-w-2xl mx-auto">
            Guru Parampara - The unbroken chain of spiritual transmission from Master to Disciple
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
            Understanding the Lineage
          </h2>
          <p className="text-amber-800 leading-relaxed">
            In the digital world, where anyone can claim spiritual authority, the lineage provides
            the pedigree of authentic teaching. Just as a lit candle can only be kindled by another
            lit candle, spiritual awakening requires transmission from an awakened Master. The
            Ramashram Satsang Ch. traces its roots through an unbroken chain of realized souls,
            each transmitting the divine light to the next generation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-300 hidden md:block" />

          <div className="space-y-12">
            {lineageData.map((guru, index) => (
              <div key={index} className="relative">
                <div className="hidden md:block absolute left-6 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow" />

                <div className="md:ml-16 bg-white rounded-2xl shadow-lg overflow-hidden">
                  {guru.image && (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={guru.image}
                        alt={guru.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  )}

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
                        View Discourses & Learn More
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
            The Significance of "Ch."
          </h2>
          <p className="text-amber-800 leading-relaxed">
            The "Ch." in Ramashram Satsang Ch. stands for "Chaturbhuj" - the name of Param Guru
            Shri Chaturbhuj Sahai Ji Maharaj. When Shri Sharda Charan Ji established his branch
            in Agra, his devotion was so complete that he named it not after himself, but after
            his beloved Guru. This act of supreme humility teaches us that the spiritual path is
            about becoming smaller, not greater; about dissolving the ego in devotion, not
            building monuments to oneself.
          </p>
        </div>
      </div>
    </div>
  );
}
