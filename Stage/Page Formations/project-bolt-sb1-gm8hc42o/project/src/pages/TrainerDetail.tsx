import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Award, Calendar, Mail, Star, CheckCircle, Clock, Users } from 'lucide-react';

const trainersData = {
  'guy': {
    name: 'Guy',
    title: 'Expert en Dynamiques Comportementales',
    image: '../components/nouveau_logo.jpg',
    rating: '?',
    experience: '?',
    description: "Riche de son expérience de Directeur des Ressources Humaines auprès d’un grand groupe, Guy se passionne pour les dynamiques comportementales individuelles et collectives.",
    specialties: [
      'Dynamiques comportementales',
      'Intelli7',
      'Ressources humaines'
    ],
    formations: [
      "Présentation de l’analyse de dynamique comportementale à l’aide de l’outil Intelli7",
      "Visualisation du compte-rendu individuel fourni par l’Intelli7",
      "Les clés de lecture pour un bon fonctionnement entre associés",
      "Compléter le profil de mon associé idéal défini lors de la formation précédente, « Avec qui s’associer ? »"
    ],
    certifications: ['?'],
    parcours: [],
    methodologie: [],
    temoignages: [],
    disponibilite: {
      jours: ['?'],
      horaires: '?',
      modalites: '?'
    },
    contact: 'contact@tigcre.org'
  },
  'thierry': {
    name: 'Thierry',
    title: 'Expert en Marketing et Développement Commercial',
    image: '../components/nouveau_logo.jpg',
    rating: '?',
    experience: "20+ ans d'expérience",
    description: "Avec plus de 20 années d’expérience de marketing et développement commercial en France et à l’étranger, Thierry accompagne les personnes et les équipes professionnelles dans la réussite de leur projet.",
    specialties: [
      'Marketing',
      'Développement commercial',
      'Accompagnement de projet'
    ],
    formations: [
      "Présentations Power Point",
      "Fiche projet vierge à remplir par le participant"
    ],
    certifications: ['?'],
    parcours: [],
    methodologie: [
      "Micro-ordinateur, projecteur, supports visuels, et paperboard",
      "Salle suffisamment grande pour permettre de former 3 à 4 sous-groupes, ou salle plénière et espaces adjacents",
      "Si vous avez un besoin spécifique à exprimer, merci de prendre contact avec l’équipe TIGcRE par mail à l’adresse suivante : contact@tigcre.org"
    ],
    temoignages: [],
    disponibilite: {
      jours: ['?'],
      horaires: '?',
      modalites: '?'
    },
    contact: 'contact@tigcre.org'
  },
  'jeanne': {
    name: 'Jeanne',
    title: 'Formatrice & Équicoach',
    image: '../components/nouveau_logo.jpg',
    rating: '?',
    experience: '?',
    description: "Familière de l’univers du sport, Jeanne dirige une activité d’équicoaching et met son savoir-faire de formatrice au service du développement individuel et collectif en entreprise.",
    specialties: [
      'Équicoaching',
      'Développement individuel',
      'Développement collectif',
      'Entreprise'
    ],
    formations: [
      "Présentations Power Point",
      "Fiche projet vierge à remplir par le participant"
    ],
    certifications: ['?'],
    parcours: [],
    methodologie: [
      "Micro-ordinateur, projecteur, supports visuels, et paperboard",
      "Salle suffisamment grande pour permettre de former 3 à 4 sous-groupes, ou salle plénière et espaces adjacents",
      "Si vous avez un besoin spécifique à exprimer, merci de prendre contact avec l’équipe TIGcRE par mail à l’adresse suivante : contact@tigcre.org"
    ],
    temoignages: [],
    disponibilite: {
      jours: ['?'],
      horaires: '?',
      modalites: '?'
    },
    contact: 'contact@tigcre.org'
  }
};

const TrainerDetail = () => {
  const { id } = useParams();
  const trainer = trainersData[id as keyof typeof trainersData];

  if (!trainer) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Formateur non trouvé</h1>
          <Link to="/formateurs" className="text-blue-600 hover:text-blue-700">
            Retour aux formateurs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/formateurs"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux formateurs
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{trainer.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {trainer.name}
              </h1>
              <p className="text-xl text-orange-600 font-semibold mb-2">
                {trainer.title}
              </p>
              <p className="text-gray-600 mb-4">{trainer.experience}</p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {trainer.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-yellow-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Présentation</h2>
          <p className="text-gray-600 leading-relaxed text-lg">{trainer.description}</p>
        </section>

        {/* Formations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Formations Animées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trainer.formations.map((formation, index) => (
              <div key={index} className="bg-yellow-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{formation}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Méthodologie / Moyens pédagogiques */}
        {trainer.methodologie.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Moyens pédagogiques et matériels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trainer.methodologie.map((methode, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{methode}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {trainer.certifications.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trainer.certifications.map((certification, index) => (
                <div key={index} className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{certification}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Disponibilité */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Disponibilité</h2>
          <div className="bg-yellow-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-orange-600" />
                  Jours
                </h3>
                <p className="text-gray-600">{trainer.disponibilite.jours.join(', ')}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-orange-600" />
                  Horaires
                </h3>
                <p className="text-gray-600">{trainer.disponibilite.horaires}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-orange-600" />
                  Modalités
                </h3>
                <p className="text-gray-600">{trainer.disponibilite.modalites}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Contactez {trainer.name.split(' ')[0]}</h2>
          <p className="mb-6 text-yellow-100">
            Intéressé par une formation ou un coaching ? N'hésitez pas à prendre contact directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${trainer.contact}`}
              className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Envoyer un email
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Formulaire de contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetail;