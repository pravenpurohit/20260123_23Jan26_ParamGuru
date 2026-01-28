import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Play, Users, BookOpen, Mic, CalendarDays } from 'lucide-react';
import { upcomingEvents } from '../data/pravachans';
import shardaCharanJiImage from '../assets/2017_Pitaji_Photo_Final_NoLayers_24x36_300dpi_DateCorrected.jpg';
import satyaPrakashJiImage from '../assets/PapajiPrasad_2017_12x18_600dpi.jpg';

const exploreLinks = [
  {
    title: 'Spiritual Lineage',
    description: 'Discover the sacred succession of Gurus from the Ramashram Satsang Silsila',
    href: '/lineage',
    icon: Users,
  },
  {
    title: 'Audio Recordings',
    description: 'Listen to rare pravachans (discourses) from both Param Gurus',
    href: '/media',
    icon: Mic,
  },
  {
    title: 'Teachings',
    description: 'Explore the spiritual wisdom and philosophy of the lineage',
    href: '/teachings',
    icon: BookOpen,
  },
  {
    title: 'Satsang Programs / Meditation Camps',
    description: 'Find upcoming meditation camps and spiritual gatherings',
    href: '/programs',
    icon: CalendarDays,
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-b from-amber-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4">
              The Sacred Lineage
            </h1>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              A river of grace flowing from the Gurus to the seekers
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
            <Link to="/sharda-charan-ji" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                <img
                  src={shardaCharanJiImage}
                  alt="Param Guru Shri Sharda Charan Ji Maharaj"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3 sm:p-6">
                  <h3 className="text-sm sm:text-xl font-serif font-semibold text-white">
                    Param Guru Shri Sharda Charan Ji Maharaj
                  </h3>
                  <p className="text-amber-200 text-xs sm:text-sm mt-1">Agra (1910 - 1983)</p>
                </div>
              </div>
            </Link>

            <Link to="/satya-prakash-ji" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                <img
                  src={satyaPrakashJiImage}
                  alt="Param Guru Shri Satya Prakash Ji Maharaj"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3 sm:p-6">
                  <h3 className="text-sm sm:text-xl font-serif font-semibold text-white">
                    Param Guru Shri Satya Prakash Ji Maharaj
                  </h3>
                  <p className="text-amber-200 text-xs sm:text-sm mt-1">Bikaner (1941 - 2002)</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-900 mb-2">
              Explore
            </h2>
            <p className="text-amber-700">Discover the spiritual heritage of Ramashram Satsang</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group bg-amber-50 rounded-xl p-4 sm:p-6 hover:bg-amber-100 transition-colors border border-amber-200 hover:border-amber-300"
              >
                <link.icon className="h-8 w-8 text-amber-700 mb-3 group-hover:text-amber-800" />
                <h3 className="font-semibold text-amber-900 mb-1 text-sm sm:text-base">{link.title}</h3>
                <p className="text-amber-700 text-xs sm:text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">
              Finding Peace in a Restless World
            </h2>
            <div className="prose prose-lg prose-amber mx-auto text-amber-800">
              <p>
                In the midst of life's endless pursuits, the soul seeks something permanent,
                something beyond the fleeting pleasures of the material world. The Ramashram
                Satsang Ch. offers a time-tested path of inner transformation for the modern
                householder.
              </p>
              <p>
                Our lineage teaches that one need not renounce the world to find God. The path
                lies in living as a "guest" in this world, enjoying its blessings while remaining
                anchored in the eternal truth. Through meditation and the grace of the Guru,
                peace unfolds naturally from within.
              </p>
              <p className="text-amber-600 italic">
                "The more spiritual a person is, the more human they are."
              </p>
            </div>
            <Link
              to="/teachings"
              className="inline-flex items-center mt-8 px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors font-medium"
            >
              Explore the Teachings
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-4">
              Upcoming Satsang Programs
            </h2>
            <p className="text-amber-700">Join us for spiritual gatherings and meditation camps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.slice(0, 6).map((event, index) => (
              <div
                key={index}
                className="bg-amber-50 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-amber-500"
              >
                <h3 className="font-semibold text-lg text-amber-900 mb-3">{event.name}</h3>
                <div className="space-y-2 text-sm text-amber-700">
                  <p className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-amber-500" />
                    {event.dates}
                  </p>
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-amber-500" />
                    {event.location}, {event.jila}, {event.state}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/programs"
              className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium"
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-800 to-amber-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Live Satsang Telecasts
            </h2>
            <p className="text-amber-200 mb-8 max-w-2xl mx-auto">
              Watch live and recorded Satsang programs from various locations.
              The YouTube channel continues the tradition of sharing spiritual wisdom
              following the Gurus' departure from their physical forms.
            </p>
            <a
              href="https://www.youtube.com/@ramashramsatsangch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-amber-900 rounded-lg hover:bg-amber-50 transition-colors font-semibold shadow-lg"
            >
              <Play className="mr-3 h-6 w-6" />
              Visit Our YouTube Channel
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12 border border-amber-200">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
                About This Website
              </h2>
              <p className="text-amber-800 leading-relaxed">
                This website was created on the divine orders of Param Guru Shri Satya Prakash
                Ji Maharaj, who chose the name "Param Guru" for this virtual sanctuary during
                his physical presence. It serves as a digital ashram, preserving and sharing the
                sacred teachings, discourses (pravachans), and spiritual heritage of the
                Ramashram Satsang Ch. lineage for seekers across the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
