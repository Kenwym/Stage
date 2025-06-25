import React from 'react';
import { Calendar, MapPin, Users, Clock, Video } from 'lucide-react';

interface Event {
  id: string;
  date: string;
  time: string;
  location: string;
  city: string;
  type: 'presentiel' | 'centre' | 'hybride';
  capacity: number;
  registered: number;
  status: 'open' | 'full' | 'closed';
}

interface EventCalendarProps {
  onRegisterClick: (eventId: string) => void;
}

export default function EventCalendar({ onRegisterClick }: EventCalendarProps) {
  const events: Event[] = [
    {
      id: '1',
      date: '15 Mars 2025',
      time: '18h30 - 21h30',
      location: 'Rooftop Le Perchoir',
      city: 'Paris',
      type: 'presentiel',
      capacity: 80,
      registered: 67,
      status: 'open'
    },
    {
      id: '2',
      date: '22 Mars 2025',
      time: '18h30 - 21h30',
      location: 'Centre Coworking Alsace',
      city: 'Strasbourg',
      type: 'centre',
      capacity: 30,
      registered: 18,
      status: 'open'
    },
    {
      id: '3',
      date: '5 Avril 2025',
      time: '18h30 - 21h30',
      location: 'Terrasse Nationale',
      city: 'Paris',
      type: 'hybride',
      capacity: 100,
      registered: 85,
      status: 'open'
    },
    {
      id: '4',
      date: '12 Avril 2025',
      time: '18h30 - 21h30',
      location: 'Espace Numérique',
      city: 'Strasbourg',
      type: 'centre',
      capacity: 25,
      registered: 25,
      status: 'full'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-green-600 bg-green-100';
      case 'full': return 'text-red-600 bg-red-100';
      case 'closed': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open': return 'Inscriptions ouvertes';
      case 'full': return 'Complet';
      case 'closed': return 'Fermé';
      default: return 'Indisponible';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'presentiel': return 'text-blue-600 bg-blue-100';
      case 'centre': return 'text-purple-600 bg-purple-100';
      case 'hybride': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'presentiel': return 'Présentiel';
      case 'centre': return 'Centre + Visio';
      case 'hybride': return 'Hybride';
      default: return 'Non défini';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'presentiel': return <MapPin size={14} />;
      case 'centre': return <Users size={14} />;
      case 'hybride': return <Video size={14} />;
      default: return <MapPin size={14} />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Prochains Événements
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez les dates de nos prochains apéri-tigcres et inscrivez-vous pour participer à nos événements de networking et de présentation de projets.
          </p>
          
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Présentiel Paris</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-gray-600">Centre Strasbourg + Visio</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-600">Format Hybride</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.date}</h3>
                  <div className="flex items-center space-x-2 text-gray-600 mb-1">
                    <Clock size={16} />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <MapPin size={16} />
                    <span className="text-sm">{event.location}, {event.city}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getTypeColor(event.type)}`}>
                      {getTypeIcon(event.type)}
                      <span>{getTypeText(event.type)}</span>
                    </span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                  {getStatusText(event.status)}
                </span>
              </div>

              {/* Event Type Description */}
              <div className="mb-4 p-3 bg-white/50 rounded-lg">
                <p className="text-xs text-gray-600">
                  {event.type === 'presentiel' && 'Événement en présentiel à Paris avec networking direct'}
                  {event.type === 'centre' && 'Centre physique à Strasbourg connecté aux présentations en visio'}
                  {event.type === 'hybride' && 'Événement combinant présentiel Paris, centre Strasbourg et présentations visio'}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 flex items-center space-x-1">
                    <Users size={14} />
                    <span>Participants</span>
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {event.registered}/{event.capacity}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                  ></div>
                </div>
              </div>

              <button
                onClick={() => onRegisterClick(event.id)}
                disabled={event.status !== 'open'}
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                  event.status === 'open'
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                {event.status === 'open' ? 'Inscrivez-vous à cet événement' : 'Inscriptions fermées'}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Comment ça marche ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Présentiel Paris</h4>
              <p className="text-sm text-gray-600">
                Participez directement aux événements parisiens pour un networking en face à face
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Centre Strasbourg</h4>
              <p className="text-sm text-gray-600">
                Rejoignez d'autres participants dans notre centre strasbourgeois avec connexion aux présentations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Présentation Visio</h4>
              <p className="text-sm text-gray-600">
                Présentez votre projet en ligne sans vous déplacer, accessible depuis partout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}