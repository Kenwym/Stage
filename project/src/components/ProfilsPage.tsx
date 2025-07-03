import { Link } from 'react-router-dom';
import { profils } from '../data/profils';

export default function ProfilsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Tous les profils des lanceurs de projets</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {profils.map((personne) => (
          <li key={personne.slug} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img
              src={personne.img || '/images/participants/arbre.jpg'}
              alt={personne.name}
              className="w-20 h-20 rounded-full object-cover border border-orange-200 mb-4"
            />
            <h2 className="text-lg font-semibold mb-1 text-gray-800">{personne.name}</h2>
            <p className="text-gray-500 text-xs mb-4 text-center">{personne.bio}</p>
            <Link
              to={`/profil/${personne.slug}`}
              className="text-orange-700 hover:underline font-medium"
            >
              Voir le profil
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}