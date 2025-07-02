import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { projets } from '../data/projets';

export default function ProjetPage() {
  const { slug } = useParams<{ slug: string }>();
  const projet = projets.find((p) => p.slug === slug);
  const location = useLocation();
  const navigate = useNavigate();

  // Récupère l'eventId depuis le query param ?eventId=xxxx si présent
  const params = new URLSearchParams(location.search);
  const eventId = params.get('eventId');

  if (!projet) {
    return (
      <div className="max-w-xl mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Projet introuvable</h2>
        <Link to="/projets" className="text-orange-700 hover:underline">Retour à la liste des projets</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12">
      <img
        src={projet.img || '/images/participants/arbre.jpg'}
        alt={projet.name}
        className="w-24 h-24 rounded-full object-cover border border-orange-200 mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{projet.project}</h1>
      <h2 className="text-xl text-gray-700 mb-6">
        par {projet.name}
        {projet.events && projet.events.length > 0 && (
          <span> — {projet.events.join(', ')}</span>
        )}
      </h2>
      <p className="text-gray-800 mb-8">{projet.description}</p>
      <div className="flex gap-4">
        <Link to="/projets" className="text-orange-700 hover:underline">
          ← Retour à la liste des projets
        </Link>
        {eventId && (
          <button
            className="text-orange-700 hover:underline"
            onClick={() => navigate(`/dashboard/${eventId}`)}
          >
            ← Retour au planning de l'événement
          </button>
        )}
      </div>
    </div>
  );
}