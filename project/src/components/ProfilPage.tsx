import { useParams, Link } from 'react-router-dom';
import { profils } from '../data/profils';
import { projets } from '../data/projets';

export default function ProfilPage() {
  const { slug } = useParams<{ slug: string }>();
  const personne = profils.find((p) => p.slug === slug);
  const projetsPerso = projets.filter((p) => p.authors && p.authors.includes(slug || ''));

  if (!personne) {
    return (
      <div className="max-w-xl mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Profil introuvable</h2>
        <Link to="/profils" className="text-orange-700 hover:underline">Retour à la liste des profils</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      {/* Haut de page : image à gauche, texte à droite */}
      <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
        {/* Photo en plus gros */}
        <div className="flex-shrink-0 w-full md:w-72 flex flex-col items-center md:items-start">
          <img
            src={personne.img || '/images/participants/arbre.jpg'}
            alt={personne.name}
            className="w-60 h-60 rounded-2xl object-cover border-4 border-orange-200 shadow mb-4"
          />
          <div className="w-full text-center md:text-left">
            <h1 className="text-2xl font-bold mb-1">{personne.name}</h1>
            <div className="mb-1">
              <span className="text-gray-700 font-semibold">Projets :</span>
              <span className="ml-1">
                {projetsPerso.length === 0 && (
                  <span className="text-gray-400 ml-2">Aucun projet référencé</span>
                )}
                {projetsPerso.map((projet, i) => (
                  <span key={projet.slug}>
                    {i > 0 && ', '}
                    <Link
                      to={`/projets/${projet.slug}`}
                      className="text-orange-700 hover:underline font-medium"
                    >
                      {projet.project}
                    </Link>
                  </span>
                ))}
              </span>
            </div>
            {personne.linkedin && (
              <div>
                <a
                  href={personne.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-700 hover:underline"
                >
                  Voir le profil LinkedIn
                </a>
              </div>
            )}
          </div>
        </div>
        {/* Paragraphe principal à droite de la photo */}
        <div className="flex-1 w-full">
          <section>
            <h2 className="text-xl font-semibold mb-2">À propos</h2>
            <p className="text-gray-700">
              {personne.bio || "Ce porteur de projet n'a pas encore renseigné sa biographie."}
            </p>
          </section>
        </div>
      </div>

      {/* Autres paragraphes en dessous */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Parcours</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec facilisis enim leo at velit. Suspendisse potenti. Mauris euismod, justo at cursus cursus, enim erat dictum erat, nec dictum urna erat nec erat.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Engagements</h2>
        <p className="text-gray-700">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer facilisis, justo at pretium cursus, enim erat dictum erat, nec dictum urna erat nec erat. Proin ac neque nec sapien cursus dictum.
        </p>
      </section>

      <div className="mt-8">
        <Link to="/profils" className="text-orange-700 hover:underline">
          ← Retour à la liste des profils
        </Link>
      </div>
    </div>
  );
}