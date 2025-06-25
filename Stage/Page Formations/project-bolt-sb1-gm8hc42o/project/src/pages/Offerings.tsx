import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, ArrowRight, Clock, MapPin, Euro } from 'lucide-react';

const Offerings = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre Offre
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos formations et coachings personnalisés pour développer vos compétences entrepreneuriales et relationnelles.
          </p>
        </div>

        {/* Main Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Formations Card */} 
          <div className="bg-gradient-to-br from-orange-50 to-orange-0 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Formations</h2>
            </div>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Programmes complets pour apprendre à identifier et gérer les relations entre associés. 
              Disponibles en présentiel et distanciel.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-3 text-orange-400" />
                <span>14 heures de formation</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-3 text-orange-400" />
                <span>Présentiel et distanciel</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Euro className="w-5 h-5 mr-3 text-orange-400" />
                <span>À partir de 150€</span>
              </div>
            </div>

            <Link
              to="/formations"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors w-full justify-center"
            >
              Découvrir les formations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Coachings Card */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-0 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Coachings</h2>
            </div>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Accompagnement personnalisé pour optimiser vos relations professionnelles et 
              développer votre potentiel entrepreneurial.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-3 text-black" />
                <span>Sessions personnalisées</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-3 text-black" />
                <span>Présentiel et distanciel</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-3 text-black" />
                <span>Accompagnement individuel</span>
              </div>
            </div>

            <Link
              to="/coachings"
              className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-purple-900 transition-colors w-full justify-center"
            >
              Découvrir les coachings
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* LinkedIn Live Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Rediffusion Live LinkedIn
          </h3>
          <p className="text-gray-600 mb-6">
            Retrouvez nos dernières interventions et conseils d'experts en replay.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Voir les rediffusions
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offerings;