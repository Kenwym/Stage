import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, MapPin, Euro, Star, CheckCircle, Calendar, Award } from 'lucide-react';

const formationsData = {
  'preparation-relation-distanciel': {
    title: 'Préparer la Relation : Avec qui s\'associer ?',
    subtitle: 'Formation en Distanciel',
    description: 'Cette formation vous accompagne dans la recherche et la sélection de votre futur associé. Apprenez à identifier les profils complémentaires et à établir des bases solides pour une collaboration durable.',
    duration: '14 heures',
    format: '4 ateliers de 3h30 en ligne',
    price: '500€ net par personne',
    minParticipants: 'Groupe de 8 minimum',
    rating: 4.65,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicCible: 'Porteurs de projets en recherche d\'un associé ou porteurs de compétences cherchant un projet',
    objectifs: [
      'Explorer les intérêts du co-entrepreneuriat',
      'Définir le profil idéal de son futur associé',
      'Apprendre à gérer la relation entre associés',
      'Établir des critères pour un fonctionnement performant'
    ],
    methodologie: [
      'Entretien téléphonique préalable personnalisé',
      'Séquences progressives avec apports théoriques',
      'Temps de réflexion individuelle guidée',
      'Échanges collectifs et partage d\'expériences',
      'Exercice final de pitch devant le groupe'
    ],
    programme: [
      {
        module: 'Module 1 - Les fondamentaux du co-entrepreneuriat',
        duree: '3h30',
        contenu: [
          'Pourquoi s\'associer ? Avantages et risques',
          'Les différents types d\'associations',
          'Auto-évaluation de ses compétences et besoins'
        ]
      },
      {
        module: 'Module 2 - Définir le profil de l\'associé idéal',
        duree: '3h30',
        contenu: [
          'Cartographie des compétences recherchées',
          'Valeurs et vision partagées',
          'Critères de personnalité et de compatibilité'
        ]
      },
      {
        module: 'Module 3 - Gérer la relation entre associés',
        duree: '3h30',
        contenu: [
          'Communication efficace entre associés',
          'Gestion des conflits et désaccords',
          'Prise de décision collaborative'
        ]
      },
      {
        module: 'Module 4 - Structurer la collaboration',
        duree: '3h30',
        contenu: [
          'Définition des rôles et responsabilités',
          'Mise en place d\'indicateurs de performance',
          'Pitch final et feedback du groupe'
        ]
      }
    ],
    evaluation: [
      'Questionnaire préalable d\'évaluation des besoins',
      'Évaluation continue pendant la formation',
      'Questionnaire de fin de formation',
      'Suivi à 2 mois post-formation'
    ],
    certification: 'Attestation de fin de formation et de présence',
    accessibilite: 'Formation adaptée aux personnes en situation de handicap sur demande'
  },
  'preparation-relation-presentiel': {
    title: 'Préparer la Relation : Avec qui s\'associer ?',
    subtitle: 'Formation en Présentiel',
    description: 'Version présentielle de notre formation phare, offrant une expérience immersive avec des interactions directes et un networking enrichissant entre participants.',
    duration: '14 heures',
    format: '2 jours consécutifs (4 ateliers de 3h30)',
    price: '500€ net par personne',
    minParticipants: 'Groupe de 8 minimum',
    rating: 3.87,
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publicCible: 'Porteurs de projets en recherche d\'un associé ou porteurs de compétences cherchant un projet',
    objectifs: [
      'Explorer les intérêts du co-entrepreneuriat',
      'Définir le profil idéal de son futur associé',
      'Apprendre à gérer la relation entre associés',
      'Établir des critères pour un fonctionnement performant'
    ],
    methodologie: [
      'Salle équipée avec matériel audiovisuel',
      'Supports visuels et paperboard',
      'Travaux de groupe en présentiel',
      'Jeux de rôle et mises en situation',
      'Networking entre participants'
    ],
    programme: [
      {
        module: 'Jour 1 Matin - Fondamentaux et auto-évaluation',
        duree: '3h30',
        contenu: [
          'Accueil et présentation des participants',
          'Les enjeux du co-entrepreneuriat',
          'Bilan personnel de compétences'
        ]
      },
      {
        module: 'Jour 1 Après-midi - Profil de l\'associé idéal',
        duree: '3h30',
        contenu: [
          'Atelier de définition des critères',
          'Exercices pratiques en binômes',
          'Synthèse collective'
        ]
      },
      {
        module: 'Jour 2 Matin - Gestion relationnelle',
        duree: '3h30',
        contenu: [
          'Techniques de communication',
          'Jeux de rôle sur la gestion de conflits',
          'Outils de prise de décision'
        ]
      },
      {
        module: 'Jour 2 Après-midi - Structuration et pitch',
        duree: '3h30',
        contenu: [
          'Définition des rôles et gouvernance',
          'Préparation des pitchs individuels',
          'Présentation et feedback collectif'
        ]
      }
    ],
    evaluation: [
      'Questionnaire préalable d\'évaluation des besoins',
      'Évaluation continue pendant la formation',
      'Questionnaire de fin de formation',
      'Suivi à 2 mois post-formation'
    ],
    certification: 'Attestation de fin de formation et de présence',
    accessibilite: 'Formation adaptée aux personnes en situation de handicap sur demande',
    satisfaction: {
      organisation: '4.65/5',
      global: '3.87/4'
    }
  }
};

const FormationDetail = () => {
  const { id } = useParams();
  const formation = formationsData[id as keyof typeof formationsData];

  if (!formation) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Formation non trouvée</h1>
          <Link to="/formations" className="text-blue-600 hover:text-blue-700">
            Retour aux formations
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
          to="/formations"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux formations
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
            <img
              src={formation.image}
              alt={formation.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {formation.title}
                </h1>
                <p className="text-xl text-blue-200">{formation.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Durée</div>
              <div className="font-semibold">{formation.duration}</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Participants</div>
              <div className="font-semibold">{formation.minParticipants}</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <Euro className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Prix</div>
              <div className="font-semibold">{formation.price}</div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 text-center">
              <Star className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Note</div>
              <div className="font-semibold">{formation.rating}/5</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
          <p className="text-gray-600 leading-relaxed text-lg">{formation.description}</p>
        </section>

        {/* Public Cible */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Public Visé</h2>
          <p className="text-gray-600 leading-relaxed">{formation.publicCible}</p>
        </section>

        {/* Objectifs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Objectifs Pédagogiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formation.objectifs.map((objectif, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600">{objectif}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Programme */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Programme Détaillé</h2>
          <div className="space-y-6">
            {formation.programme.map((module, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{module.module}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {module.duree}
                  </span>
                </div>
                <ul className="space-y-2">
                  {module.contenu.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Méthodes Pédagogiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formation.methodologie.map((methode, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600">{methode}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Évaluation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Évaluation et Suivi</h2>
          <div className="bg-blue-50 rounded-lg p-6">
            <ul className="space-y-3">
              {formation.evaluation.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Certification et Accessibilité */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Certification</h3>
              <p className="text-gray-600">{formation.certification}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Accessibilité</h3>
              <p className="text-gray-600">{formation.accessibilite}</p>
            </div>
          </div>
        </section>

        {/* Satisfaction (si disponible) */}
        {formation.satisfaction && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Satisfaction des Participants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {formation.satisfaction.organisation}
                </div>
                <div className="text-gray-600">Note d'organisation</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {formation.satisfaction.global}
                </div>
                <div className="text-gray-600">Satisfaction globale</div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Intéressé par cette formation ?</h2>
          <p className="mb-6 text-blue-100">
            Contactez-nous pour plus d'informations ou pour vous inscrire à cette formation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calendar className="w-5 h-5 mr-2" />
              S'inscrire
            </Link>
            <a
              href="mailto:contact@tigcre.org"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Plus d'informations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationDetail;