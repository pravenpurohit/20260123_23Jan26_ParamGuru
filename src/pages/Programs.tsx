import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { upcomingEvents } from '../data/pravachans';

export default function Programs() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-white text-center mb-4">
            Satsang Programs
          </h1>
          <p className="text-amber-200 text-center max-w-2xl mx-auto">
            Bhandaras, Satsang Programs, Spiritual Meditation camps
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-amber-700 to-amber-800 px-6 py-4">
            <h2 className="text-xl font-serif font-semibold text-white">
              Scheduled Spiritual Meditation camps / Satsang Programs
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-amber-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-amber-900">
                    Program Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-amber-900">
                    Dates
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-amber-900">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-amber-900">
                    Jila
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-amber-900">
                    State
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100">
                {upcomingEvents.map((event, index) => (
                  <tr key={index} className="hover:bg-amber-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-medium text-amber-900">{event.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center text-amber-700">
                        <Calendar className="h-4 w-4 mr-2 text-amber-500" />
                        {event.dates}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {event.mapsUrl ? (
                        <a
                          href={event.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-amber-700 hover:text-amber-900 transition-colors"
                        >
                          <MapPin className="h-4 w-4 mr-2 text-amber-500" />
                          {event.location}
                          <ExternalLink className="h-3 w-3 ml-1 text-amber-500" />
                        </a>
                      ) : (
                        <span className="flex items-center text-amber-700">
                          <MapPin className="h-4 w-4 mr-2 text-amber-500" />
                          {event.location}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-amber-700">
                      {event.jila}
                    </td>
                    <td className="px-6 py-4 text-amber-700">
                      {event.state}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-amber-500 hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-amber-900 mb-4">
                  {event.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-amber-700">
                    <Calendar className="h-5 w-5 mr-3 text-amber-500" />
                    <span>{event.dates}</span>
                  </div>
                  {event.mapsUrl ? (
                    <a
                      href={event.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-amber-700 hover:text-amber-900 transition-colors"
                    >
                      <MapPin className="h-5 w-5 mr-3 text-amber-500" />
                      <span>{event.location}, Jila {event.jila}, {event.state}</span>
                      <ExternalLink className="h-3 w-3 ml-2 text-amber-500" />
                    </a>
                  ) : (
                    <div className="flex items-center text-amber-700">
                      <MapPin className="h-5 w-5 mr-3 text-amber-500" />
                      <span>{event.location}, Jila {event.jila}, {event.state}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
            About Bhandaras and Satsang Programs
          </h2>
          <div className="prose prose-amber max-w-none text-amber-800">
            <p>
              <strong>Bhandara</strong> is a spiritual gathering that typically spans 2-3 days,
              featuring pravachans (discourses) and group meditation. These events provide an
              opportunity for seekers to immerse themselves in the spiritual atmosphere and
              receive the blessings of the lineage.
            </p>
            <p>
              <strong>Punya Tithi</strong> refers to the death anniversary of a Guru, observed with
              special reverence. Devotees gather to honor the departed Master and receive
              continued spiritual guidance through the living tradition.
            </p>
            <p>
              <strong>Guru Poornima</strong> is the sacred day dedicated to honoring the Guru,
              celebrated on the full moon day in the Hindu month of Ashadha (July). It is one
              of the most important occasions in the spiritual calendar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
