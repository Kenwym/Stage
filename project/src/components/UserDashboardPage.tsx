import { useParams } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import { useEffect, useState } from 'react';
import { events } from '../data/events';
import { accessCodes } from '../data/accessCodes'; // Ajout

export default function UserDashboardPage() {
  const { eventId } = useParams();
  const [valid, setValid] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const code = localStorage.getItem('tigcre_access');
    // Utilise le mapping centralisé
    if (code && accessCodes[code] === eventId) {
      const event = events.find(e => e.id === eventId);

      const userData = event
        ? {
            name: 'Utilisateur',
            email: 'utilisateur@email.com',
            participationType: event.participationType || 'presentiel',
            eventDetails: {
              title: event.title,
              date: event.date,
              time: event.time,
              theme: event.theme,
              location: event.location,
              address: event.address
            }
          }
        : null;

      setUserData(userData);
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