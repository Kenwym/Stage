import { Link } from 'react-router-dom';
import { projets } from '../data/projets';
import { profils } from '../data/profils';

export default function ProjetsPage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Projets présentés</h1>
      <ul className="space-y-6">
        {projets.map((p) => (
          <li key={p.slug} className="flex items-center space-x-4 bg-white rounded-xl shadow p-4">
            <img
              src={p.img || '/images/participants/arbre.jpg'}
              alt={p.project}
              className="w-14 h-14 rounded-full object-cover border border-orange-200"
            />
            <div className="flex-1">
              <Link
                to={`/projets/${p.slug}`}
                className="text-orange-700 hover:underline font-semibold text-lg"
              >
                {p.project}
              </Link>
              <div className="text-gray-700 text-sm">
                {p.authors && p.authors.map((slug, i) => {
                  const profil = profils.find(pr => pr.slug === slug);
                  return profil ? (
                    <span key={slug}>
                      {i > 0 && ', '}
                      <Link
                        to={`/profil/${profil.slug}`}
                        className="text-orange-700 hover:underline"
                      >
                        {profil.name}
                      </Link>
                    </span>
                  ) : null;
                })}
                {p.events && p.events.length > 0 && (
                  <> — <span className="text-gray-400">{p.events.join(', ')}</span></>
                )}
              </div>
              <div className="text-gray-500 text-xs mt-1">{p.short}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}