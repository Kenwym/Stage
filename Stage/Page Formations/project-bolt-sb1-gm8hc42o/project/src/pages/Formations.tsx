import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, MapPin, Euro, Star } from 'lucide-react';

const formations = [
  {
    id: 'preparation-relation-distanciel',
    title: 'Préparer la Relation : Avec qui s\'associer ?',
    subtitle: 'Formation en Distanciel',
    description: 'Explorez les intérêts du co-entrepreneuriat et définissez le profil idéal de votre futur associé.',
    duration: '14 heures',
    format: '4 ateliers de 3h30 en ligne',
    price: '500€',
    minParticipants: '8 minimum',
    rating: 4.65,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'Entretien téléphonique préalable',
      'Exercice final de pitch',
      'Échanges collectifs',
      'Supports pédagogiques inclus'
    ]
  },
  {
    id: 'preparation-relation-presentiel',
    title: 'Préparer la Relation : Avec qui s\'associer ?',
    subtitle: 'Formation en Présentiel',
    description: 'Version présentielle de notre formation phare pour une expérience immersive et interactive.',
    duration: '14 heures',
    format: '2 jours (4 ateliers de 3h30)',
    price: '500€',
    minParticipants: '8 minimum',
    rating: 3.87,
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'Salle équipée',
      'Supports visuels',
      'Paperboard inclus',
      'Networking entre participants'
    ]
  },
  {
    id: 'analyse-dynamique-distanciel',
    title: 'Analyse de Dynamique Comportementale',
    subtitle: 'Formation en Distanciel',
    description: 'Visualisez les complémentarités entre associés avec l\'outil Intelli7.',
    duration: '3h30',
    format: '1 atelier en ligne',
    price: '150€',
    minParticipants: '2-3 minimum',
    rating: 3.5,
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'Outil Intelli7 inclus',
      'Analyse personnalisée',
      'Expert en dynamiques',
      'Questionnaire préalable'
    ],
    prerequisite: 'Avoir suivi "Avec qui s\'associer ?"'
  },
  {
    id: 'analyse-dynamique-presentiel',
    title: 'Analyse de Dynamique Comportementale',
    subtitle: 'Formation en Présentiel',
    description: 'Version présentielle de l\'analyse comportementale pour un accompagnement personnalisé.',
    duration: '3h30',
    format: '1 atelier',
    price: '150€',
    minParticipants: '2-3 minimum',
    rating: 3.5,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'Accompagnement direct',
      'Analyse en temps réel',
      'Échanges personnalisés',
      'Rapport détaillé'
    ],
    prerequisite: 'Avoir suivi "Avec qui s\'associer ?"'
  }
];

const Formations = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Formations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Développez vos compétences relationnelles et entrepreneuriales avec nos programmes adaptés à vos besoins.
          </p>
        </div>

        {/* Formations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {formations.map((formation) => (
            <div
              key={formation.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={formation.image}
                  alt={formation.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{formation.rating}/5</span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {formation.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm">
                    {formation.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {formation.description}
                </p>

                {formation.prerequisite && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                    <p className="text-yellow-800 text-sm">
                      <strong>Prérequis :</strong> {formation.prerequisite}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm">{formation.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm">{formation.minParticipants}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm">{formation.format}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Euro className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm font-semibold">{formation.price}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Points forts :</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {formation.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/formation/${formation.id}`}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Besoin d'aide pour choisir ?
          </h2>
          <p className="text-gray-600 mb-6">
            Nos experts sont là pour vous accompagner dans le choix de la formation la plus adaptée à vos besoins.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Nous contacter
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Formations;