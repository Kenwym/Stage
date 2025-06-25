import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Target, CheckCircle, Calendar, MessageCircle } from 'lucide-react';

const coachingsData = {
  'coaching-entrepreneurial': {
    title: 'Coaching Entrepreneurial',
    description: 'Un accompagnement personnalisé pour développer votre projet entrepreneurial et optimiser vos relations professionnelles. Ce coaching vous aide à clarifier votre vision, identifier vos forces et développer votre leadership.',
    duration: 'Sessions de 1h30',
    format: 'Individuel ou en binôme',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectifs: [
      'Clarifier votre vision entrepreneuriale',
      'Identifier vos forces et axes d\'amélioration',
      'Développer votre leadership',
      'Optimiser vos relations professionnelles'
    ],
    methodologie: [
      'Entretien de diagnostic approfondi',
      'Définition d\'objectifs SMART',
      'Outils d\'auto-évaluation',
      'Plan d\'action personnalisé',
      'Suivi régulier et ajustements'
    ],
    deroulement: [
      {
        phase: 'Phase 1 - Diagnostic (2 sessions)',
        description: 'Évaluation complète de votre situation actuelle, de vos objectifs et de vos défis.',
        duree: '3h'
      },
      {
        phase: 'Phase 2 - Stratégie (3 sessions)',
        description: 'Élaboration d\'une stratégie personnalisée et d\'un plan d\'action concret.',
        duree: '4h30'
      },
      {
        phase: 'Phase 3 - Mise en œuvre (4 sessions)',
        description: 'Accompagnement dans l\'implémentation avec ajustements réguliers.',
        duree: '6h'
      },
      {
        phase: 'Phase 4 - Bilan (1 session)',
        description: 'Évaluation des résultats et définition des perspectives d\'évolution.',
        duree: '1h30'
      }
    ],
    benefices: [
      'Vision claire de votre projet entrepreneurial',
      'Confiance renforcée en vos capacités',
      'Amélioration de vos compétences relationnelles',
      'Stratégie d\'action concrète et réalisable',
      'Réseau professionnel élargi'
    ],
    profil: 'Entrepreneurs en devenir, porteurs de projets, dirigeants souhaitant développer leur leadership'
  },
  'coaching-relationnel': {
    title: 'Coaching Relationnel',
    description: 'Spécialisé dans l\'amélioration des dynamiques relationnelles entre associés et partenaires d\'affaires. Ce coaching vous aide à créer des relations professionnelles durables et performantes.',
    duration: 'Sessions de 2h',
    format: 'Individuel ou en groupe',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectifs: [
      'Améliorer la communication interpersonnelle',
      'Résoudre les conflits constructivement',
      'Renforcer la cohésion d\'équipe',
      'Établir des relations de confiance durables'
    ],
    methodologie: [
      'Analyse des dynamiques relationnelles',
      'Outils de communication efficace',
      'Techniques de résolution de conflits',
      'Exercices pratiques et mises en situation',
      'Feedback constructif et bienveillant'
    ],
    deroulement: [
      {
        phase: 'Phase 1 - Analyse relationnelle (2 sessions)',
        description: 'Cartographie des relations actuelles et identification des points de tension.',
        duree: '4h'
      },
      {
        phase: 'Phase 2 - Développement des compétences (3 sessions)',
        description: 'Acquisition d\'outils de communication et de gestion des conflits.',
        duree: '6h'
      },
      {
        phase: 'Phase 3 - Mise en pratique (3 sessions)',
        description: 'Application concrète des techniques avec accompagnement personnalisé.',
        duree: '6h'
      },
      {
        phase: 'Phase 4 - Consolidation (2 sessions)',
        description: 'Renforcement des acquis et planification du maintien des bonnes pratiques.',
        duree: '4h'
      }
    ],
    benefices: [
      'Communication plus fluide et efficace',
      'Réduction des tensions et conflits',
      'Climat de travail apaisé et productif',
      'Relations professionnelles renforcées',
      'Capacité à gérer les situations difficiles'
    ],
    profil: 'Associés en difficulté relationnelle, équipes dirigeantes, entrepreneurs en partenariat'
  },
  'coaching-strategique': {
    title: 'Coaching Stratégique',
    description: 'Accompagnement dans la définition et la mise en œuvre de votre stratégie d\'association et de développement. Ce coaching vous aide à structurer votre approche partenariale et à anticiper les défis.',
    duration: 'Sessions de 2h30',
    format: 'Individuel',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1200',
    objectifs: [
      'Définir une stratégie d\'association claire',
      'Structurer votre approche partenariale',
      'Anticiper les défis relationnels',
      'Créer un plan d\'action concret'
    ],
    methodologie: [
      'Analyse stratégique approfondie',
      'Modélisation des scénarios',
      'Outils de planification stratégique',
      'Matrices de décision',
      'Roadmap personnalisée'
    ],
    deroulement: [
      {
        phase: 'Phase 1 - Audit stratégique (2 sessions)',
        description: 'Analyse de votre situation actuelle et de vos ambitions stratégiques.',
        duree: '5h'
      },
      {
        phase: 'Phase 2 - Élaboration stratégique (3 sessions)',
        description: 'Définition de votre stratégie d\'association et de développement.',
        duree: '7h30'
      },
      {
        phase: 'Phase 3 - Plan d\'action (2 sessions)',
        description: 'Création d\'un plan d\'action détaillé avec jalons et indicateurs.',
        duree: '5h'
      },
      {
        phase: 'Phase 4 - Suivi stratégique (3 sessions)',
        description: 'Accompagnement dans la mise en œuvre et ajustements stratégiques.',
        duree: '7h30'
      }
    ],
    benefices: [
      'Vision stratégique claire et partagée',
      'Approche structurée des partenariats',
      'Anticipation des risques et opportunités',
      'Plan d\'action opérationnel',
      'Capacité d\'adaptation stratégique'
    ],
    profil: 'Dirigeants d\'entreprise, porteurs de projets ambitieux, entrepreneurs en phase de croissance'
  }
};

const CoachingDetail = () => {
  const { id } = useParams();
  const coaching = coachingsData[id as keyof typeof coachingsData];

  if (!coaching) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Coaching non trouvé</h1>
          <Link to="/coachings" className="text-purple-600 hover:text-purple-700">
            Retour aux coachings
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
          to="/coachings"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux coachings
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
            <img
              src={coaching.image}
              alt={coaching.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {coaching.title}
                </h1>
                <p className="text-xl text-purple-200">Accompagnement personnalisé</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Durée des sessions</div>
              <div className="font-semibold">{coaching.duration}</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Format</div>
              <div className="font-semibold">{coaching.format}</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
          <p className="text-gray-600 leading-relaxed text-lg">{coaching.description}</p>
        </section>

        {/* Profil */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Profil des Participants</h2>
          <p className="text-gray-600 leading-relaxed">{coaching.profil}</p>
        </section>

        {/* Objectifs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Objectifs du Coaching</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coaching.objectifs.map((objectif, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600">{objectif}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Déroulement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Déroulement du Coaching</h2>
          <div className="space-y-6">
            {coaching.deroulement.map((phase, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {phase.duree}
                  </span>
                </div>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Méthodologie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coaching.methodologie.map((methode, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600">{methode}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bénéfices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bénéfices Attendus</h2>
          <div className="bg-green-50 rounded-lg p-6">
            <ul className="space-y-3">
              {coaching.benefices.map((benefice, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefice}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Prêt à commencer votre coaching ?</h2>
          <p className="mb-6 text-purple-100">
            Contactez-nous pour un entretien préalable gratuit et définir ensemble vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Prendre rendez-vous
            </Link>
            <a
              href="mailto:contact@tigcre.org"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingDetail;