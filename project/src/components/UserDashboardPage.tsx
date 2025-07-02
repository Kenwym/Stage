import { useParams } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import { useEffect, useState } from 'react';

// Mapping du code (MoisAnnée) vers l'eventId
const codeToEventId: Record<string, string> = {
  'Juillet2025': '2025-07',
  'Fevrier2025': '2025-02',
  'Septembre2025': '2025-09',
  'Octobre2025': '2025-10',
  'Novembre2024': '2024-11'
};

// Mapping des eventId vers les données de l'événement
const eventDataMap: Record<string, any> = {
  '2025-07': {
    name: 'Utilisateur',
    email: 'utilisateur@email.com',
    participationType: 'presentiel',
    eventDetails: {
      title: 'Apéri-TIGcRE Paris',
      date: '3 Juillet 2025',
      time: '19h00 - 22h00',
      theme: 'Innovation & Entrepreneuriat',
      location: 'Rooftop Le Perchoir, Paris',
      address: '14 Rue Crespin du Gast, 75011 Paris'
    }
  },
  '2025-02': {
    name: 'Utilisateur',
    email: 'utilisateur@email.com',
    participationType: 'presentiel',
    eventDetails: {
      title: 'Apéri-TIGcRE Paris (Février)',
      date: 'Février 2025',
      time: '19h00 - 22h00',
      theme: 'Tech & Innovation',
      location: 'Paris',
      address: 'Adresse à venir'
    }
  },
  '2025-09': {
    name: 'Utilisateur',
    email: 'utilisateur@email.com',
    participationType: 'presentiel',
    eventDetails: {
      title: 'Apéri-TIGcRE Paris (Septembre)',
      date: '4 Septembre 2025',
      time: '19h00 - 22h00',
      theme: 'Rentrée & Projets',
      location: 'Paris',
      address: 'Adresse à venir'
    }
  },
  '2025-10': {
    name: 'Utilisateur',
    email: 'utilisateur@email.com',
    participationType: 'presentiel',
    eventDetails: {
      title: 'Apéri-TIGcRE Paris (Octobre)',
      date: '9 Octobre 2025',
      time: '19h00 - 22h00',
      theme: 'Automne & Réseautage',
      location: 'Paris',
      address: 'Adresse à venir'
    }
  },
  '2024-11': {
    name: 'Utilisateur',
    email: 'utilisateur@email.com',
    participationType: 'centre',
    eventDetails: {
      title: 'Apéri-TIGcRE Lyon',
      date: 'Novembre 2024',
      time: '19h00 - 22h00',
      theme: 'Entreprendre ensemble',
      location: 'Lyon',
      address: 'Adresse à venir'
    }
  }
};

export default function UserDashboardPage() {
  const { eventId } = useParams();
  const [valid, setValid] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const code = localStorage.getItem('tigcre_access');
    if (code && codeToEventId[code] === eventId) {
      setUserData(eventDataMap[eventId || '']);
      setValid(true);
    } else {
      setValid(false);
    }
  }, [eventId]);

  if (!valid) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-xl shadow p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Accès refusé</h2>
          <p className="mb-4 text-gray-700">
            Accès direct interdit.<br />
            Merci de passer par le formulaire d'accès.
          </p>
          <a
            href="/"
            className="inline-block mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    );
  }

  return (
    <UserDashboard
      userData={userData}
      onClose={() => {
        localStorage.removeItem('tigcre_access');
        window.location.href = '/';
      }}
    />
  );
}