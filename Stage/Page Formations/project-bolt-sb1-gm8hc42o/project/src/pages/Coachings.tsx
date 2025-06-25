import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Target, CheckCircle } from 'lucide-react';

const coachings = [
  {
    id: 'coaching-entrepreneurial',
    title: 'Coaching Entrepreneurial',
    description: 'Accompagnement personnalisé pour développer votre projet entrepreneurial et optimiser vos relations professionnelles.',
    duration: 'Sessions de 1h30',
    format: 'Individuel ou en binôme',
    objectives: [
      'Clarifier votre vision entrepreneuriale',
      'Identifier vos forces et axes d\'amélioration',
      'Développer votre leadership',
      'Optimiser vos relations professionnelles'
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'coaching-relationnel',
    title: 'Coaching Relationnel',
    description: 'Spécialisé dans l\'amélioration des dynamiques relationnelles entre associés et partenaires d\'affaires.',
    duration: 'Sessions de 2h',
    format: 'Individuel ou en groupe',
    objectives: [
      'Améliorer la communication interpersonnelle',
      'Résoudre les conflits constructivement',
      'Renforcer la cohésion d\'équipe',
      'Établir des relations de confiance durables'
    ],
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'coaching-strategique',
    title: 'Coaching Stratégique',
    description: 'Accompagnement dans la définition et la mise en œuvre de votre stratégie d\'association et de développement.',
    duration: 'Sessions de 2h30',
    format: 'Individuel',
    objectives: [
      'Définir une stratégie d\'association claire',
      'Structurer votre approche partenariale',
      'Anticiper les défis relationnels',
      'Créer un plan d\'action concret'
    ],
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const Coachings = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Coachings
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bénéficiez d'un accompagnement personnalisé pour développer votre potentiel entrepreneurial et optimiser vos relations professionnelles.
          </p>
        </div>

        {/* Coachings List */}
        <div className="space-y-12">
          {coachings.map((coaching, index) => (
            <div
              key={coaching.id}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={coaching.image}
                    alt={coaching.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {coaching.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {coaching.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-3 text-purple-600" />
                    <span>{coaching.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-3 text-purple-600" />
                    <span>{coaching.format}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-purple-600" />
                    Objectifs
                  </h3>
                  <ul className="space-y-2">
                    {coaching.objectives.map((objective, objIndex) => (
                      <li key={objIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/coaching/${coaching.id}`}
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Processus de Coaching
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un accompagnement structuré et personnalisé pour maximiser vos résultats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Diagnostic</h3>
              <p className="text-sm text-gray-600">Évaluation de vos besoins et objectifs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Plan d'action</h3>
              <p className="text-sm text-gray-600">Définition d'un programme personnalisé</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Accompagnement</h3>
              <p className="text-sm text-gray-600">Sessions régulières et suivi personnalisé</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Évaluation</h3>
              <p className="text-sm text-gray-600">Bilan des résultats et perspectives</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à commencer votre coaching ?
          </h2>
          <p className="mb-6 text-purple-100">
            Contactez-nous pour un entretien préalable gratuit et définir ensemble vos objectifs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Prendre rendez-vous
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Coachings;