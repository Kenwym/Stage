import { useParams, Link } from 'react-router-dom';
import { profils } from '../data/profils';
import { projets } from '../data/projets';

export default function ProfilPage() {
  const { slug } = useParams<{ slug: string }>();
  const personne = profils.find((p) => p.slug === slug);
  const projetsPerso = projets.filter((p) => p.slug === slug);

  if (!personne) {
    return (
      <div className="max-w-xl mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Profil introuvable</h2>
        <Link to="/profils" className="text-orange-700 hover:underline">Retour à la liste des profils</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12">
      <img
        src={personne.img || '/images/participants/arbre.jpg'}
        alt={personne.name}
        className="w-24 h-24 rounded-full object-cover border border-orange-200 mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{personne.name}</h1>
      <p className="text-gray-700 mb-6">{personne.bio}</p>
      {personne.linkedin && (
        <a
          href={personne.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline mb-6 block"
        >
          Voir le profil LinkedIn
        </a>
      )}
      <h2 className="text-xl font-semibold mt-8 mb-4">Projets présentés :</h2>
      <ul>
        {projetsPerso.map((projet) => (
          <li key={projet.project} className="mb-2">
            <Link
              to={`/projets/${projet.slug}`}
              className="text-orange-700 hover:underline font-medium"
            >
              {projet.project}
            </Link>
            <span className="text-gray-500 text-sm ml-2">{projet.short}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link to="/profils" className="text-orange-700 hover:underline">
          ← Retour à la liste des profils
        </Link>
      </div>
    </div>
  );
}