import { useParams, Link } from 'react-router-dom';
import { projets } from '../data/projets';

export default function ProjetPage() {
  const { slug } = useParams<{ slug: string }>();
  const projet = projets.find((p) => p.slug === slug);

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
      <h2 className="text-xl text-gray-700 mb-6">par {projet.name} — {projet.date}</h2>
      <p className="text-gray-800 mb-8">{projet.description}</p>
      <Link to="/projets" className="text-orange-700 hover:underline">← Retour à la liste des projets</Link>
    </div>
  );
}