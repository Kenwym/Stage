import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Award, Calendar, Mail, Star, CheckCircle, Clock, Users } from 'lucide-react';

const trainersData = {
  'guy': {
    name: 'Guy',
    title: 'Experte en Relations Entrepreneuriales',
    image: '../components/nouveau_logo.jpg',
    rating: 0,
    experience: '15 ans d\'expérience',
    description: 'Marie Dubois est une experte reconnue dans l\'accompagnement des entrepreneurs. Forte de 15 années d\'expérience, elle a développé une approche unique pour aider les porteurs de projets à créer des associations durables et performantes. Sa passion pour les relations humaines et son expertise en psychologie organisationnelle font d\'elle une formatrice exceptionnelle.',
    specialties: ['Co-entrepreneuriat', 'Gestion relationnelle', 'Leadership', 'Communication interpersonnelle'],
    formations: [
      'Préparer la Relation : Avec qui s\'associer ? (Présentiel)',
      'Préparer la Relation : Avec qui s\'associer ? (Distanciel)'
    ],
    certifications: [
      'Certification Coach Professionnel (ICF)',
      'Master en Psychologie Organisationnelle',
      'Formation en Communication Non-Violente',
      'Certification en Analyse Transactionnelle'
    ],
    parcours: [
      {
        periode: '2020 - Aujourd\'hui',
        poste: 'Formatrice Senior chez Tigcre',
        description: 'Conception et animation des formations en relations entrepreneuriales'
      },
      {
        periode: '2015 - 2020',
        poste: 'Consultante en Management',
        description: 'Accompagnement d\'équipes dirigeantes dans la transformation organisationnelle'
      },
      {
        periode: '2010 - 2015',
        poste: 'Coach en Développement Personnel',
        description: 'Coaching individuel et collectif pour entrepreneurs et dirigeants'
      }
    ],
    methodologie: [
      'Approche personnalisée adaptée à chaque participant',
      'Alternance entre théorie et pratique',
      'Utilisation d\'outils d\'auto-évaluation',
      'Exercices de mise en situation',
      'Feedback constructif et bienveillant'
    ],
    temoignages: [
      {
        nom: 'Pierre L.',
        entreprise: 'Startup Tech',
        commentaire: 'Marie m\'a aidé à identifier le profil parfait pour mon associé. Grâce à ses conseils, j\'ai trouvé un partenaire avec qui je travaille maintenant depuis 2 ans en parfaite harmonie.'
      },
      {
        nom: 'Sarah M.',
        entreprise: 'Agence Marketing',
        commentaire: 'La formation de Marie m\'a ouvert les yeux sur l\'importance des dynamiques relationnelles. Son approche bienveillante et professionnelle est remarquable.'
      }
    ],
    disponibilite: {
      jours: ['Lundi', 'Mercredi', 'Vendredi'],
      horaires: '9h00 - 17h00',
      modalites: 'Présentiel et distanciel'
    },
    contact: 'marie.dubois@tigcre.org'
  },
  'jean-martin': {
    name: 'Jean Martin',
    title: 'Expert en Dynamiques Comportementales',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    experience: '12 ans d\'expérience',
    description: 'Jean Martin est un expert reconnu en analyse comportementale et en dynamiques d\'équipe. Spécialiste de l\'outil Intelli7, il révèle les complémentarités entre associés et optimise les performances collectives. Son approche scientifique et humaine permet aux entrepreneurs de mieux se comprendre et de créer des synergies exceptionnelles.',
    specialties: ['Analyse comportementale', 'Outil Intelli7', 'Psychologie des équipes', 'Dynamiques relationnelles'],
    formations: [
      'Analyse de Dynamique Comportementale (Présentiel)',
      'Analyse de Dynamique Comportementale (Distanciel)'
    ],
    certifications: [
      'Certification Intelli7 Expert',
      'Formation en Psychologie Comportementale',
      'Master en Ressources Humaines',
      'Certification en Analyse DISC'
    ],
    parcours: [
      {
        periode: '2018 - Aujourd\'hui',
        poste: 'Expert Intelli7 chez Tigcre',
        description: 'Spécialiste des analyses comportementales et des dynamiques d\'équipe'
      },
      {
        periode: '2014 - 2018',
        poste: 'Consultant RH Senior',
        description: 'Accompagnement des entreprises dans l\'optimisation des équipes'
      },
      {
        periode: '2012 - 2014',
        poste: 'Psychologue du Travail',
        description: 'Évaluation et développement des compétences comportementales'
      }
    ],
    methodologie: [
      'Utilisation d\'outils d\'évaluation scientifiques',
      'Analyse personnalisée des profils comportementaux',
      'Cartographie des complémentarités',
      'Recommandations concrètes et actionnables',
      'Suivi post-formation personnalisé'
    ],
    temoignages: [
      {
        nom: 'Marc D.',
        entreprise: 'Société de Conseil',
        commentaire: 'L\'analyse Intelli7 de Jean a révélé des aspects de ma personnalité que je ne soupçonnais pas. Cela m\'a permis de mieux choisir mes collaborateurs.'
      },
      {
        nom: 'Julie R.',
        entreprise: 'E-commerce',
        commentaire: 'Grâce à Jean, nous avons compris pourquoi certaines collaborations fonctionnaient mieux que d\'autres. Ses insights sont précieux.'
      }
    ],
    disponibilite: {
      jours: ['Mardi', 'Jeudi', 'Samedi'],
      horaires: '10h00 - 18h00',
      modalites: 'Présentiel et distanciel'
    },
    contact: 'jean.martin@tigcre.org'
  },
  'sophie-bernard': {
    name: 'Sophie Bernard',
    title: 'Coach en Développement Entrepreneurial',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    experience: '10 ans d\'expérience',
    description: 'Sophie Bernard est une coach certifiée spécialisée dans le développement entrepreneurial. Elle accompagne les entrepreneurs dans leur croissance personnelle et professionnelle, en les aidant à maximiser leur potentiel de réussite. Son approche holistique combine développement personnel, stratégie d\'entreprise et excellence relationnelle.',
    specialties: ['Coaching individuel', 'Stratégie d\'entreprise', 'Communication', 'Leadership transformationnel'],
    formations: [
      'Coaching Entrepreneurial',
      'Coaching Relationnel',
      'Coaching Stratégique'
    ],
    certifications: [
      'Certification ICF (International Coach Federation)',
      'Master en Management et Stratégie',
      'Formation en PNL (Programmation Neuro-Linguistique)',
      'Certification en Communication Assertive'
    ],
    parcours: [
      {
        periode: '2019 - Aujourd\'hui',
        poste: 'Coach Senior chez Tigcre',
        description: 'Accompagnement personnalisé d\'entrepreneurs et de dirigeants'
      },
      {
        periode: '2016 - 2019',
        poste: 'Consultante en Stratégie',
        description: 'Conseil en développement d\'entreprise et transformation digitale'
      },
      {
        periode: '2014 - 2016',
        poste: 'Responsable Formation',
        description: 'Conception et animation de programmes de développement professionnel'
      }
    ],
    methodologie: [
      'Coaching personnalisé selon les besoins individuels',
      'Définition d\'objectifs SMART et mesurables',
      'Outils de développement personnel avancés',
      'Accompagnement dans la mise en action',
      'Suivi régulier et ajustements continus'
    ],
    temoignages: [
      {
        nom: 'Thomas K.',
        entreprise: 'Startup FinTech',
        commentaire: 'Sophie m\'a accompagné dans une période de transition cruciale. Son coaching m\'a permis de clarifier ma vision et de prendre les bonnes décisions.'
      },
      {
        nom: 'Émilie P.',
        entreprise: 'Agence Créative',
        commentaire: 'Le coaching de Sophie a transformé ma façon de diriger mon équipe. Les résultats sont visibles au quotidien.'
      }
    ],
    disponibilite: {
      jours: ['Lundi', 'Mardi', 'Jeudi'],
      horaires: '9h00 - 17h00',
      modalites: 'Présentiel et distanciel'
    },
    contact: 'sophie.bernard@tigcre.org'
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
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
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
              <p className="text-xl text-blue-600 font-semibold mb-2">
                {trainer.title}
              </p>
              <p className="text-gray-600 mb-4">{trainer.experience}</p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {trainer.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
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

        {/* Parcours */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Parcours Professionnel</h2>
          <div className="space-y-6">
            {trainer.parcours.map((etape, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{etape.poste}</h3>
                      <span className="text-sm text-blue-600 font-medium">{etape.periode}</span>
                    </div>
                    <p className="text-gray-600">{etape.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Formations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Formations Animées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trainer.formations.map((formation, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{formation}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Approche Pédagogique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trainer.methodologie.map((methode, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600">{methode}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
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

        {/* Témoignages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainer.temoignages.map((temoignage, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-600 italic mb-4">"{temoignage.commentaire}"</p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {temoignage.nom.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{temoignage.nom}</div>
                    <div className="text-sm text-gray-500">{temoignage.entreprise}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Disponibilité */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Disponibilité</h2>
          <div className="bg-green-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-green-600" />
                  Jours
                </h3>
                <p className="text-gray-600">{trainer.disponibilite.jours.join(', ')}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-600" />
                  Horaires
                </h3>
                <p className="text-gray-600">{trainer.disponibilite.horaires}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-600" />
                  Modalités
                </h3>
                <p className="text-gray-600">{trainer.disponibilite.modalites}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Contactez {trainer.name.split(' ')[0]}</h2>
          <p className="mb-6 text-blue-100">
            Intéressé par une formation ou un coaching ? N'hésitez pas à prendre contact directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${trainer.contact}`}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Envoyer un email
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
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