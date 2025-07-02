import React from 'react';
import { ArrowRight, MapPin, Clock, Users, Video } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
  onAccessClick: () => void;
}

export default function Hero({ onRegisterClick, onAccessClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent)] opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.1),transparent)] opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
              Apéri-TIGcRE
            </span>
            <br />
            <span className="text-gray-800 text-3xl sm:text-4xl lg:text-5xl">
              L'événement networking hybride
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Rejoignez notre communauté pour des soirées networking exceptionnelles en présentiel 
            ou présentez votre projet en visio. Connectez-vous avec des entrepreneurs, créatifs et professionnels passionnés.
          </p>

          {/* Event Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-100">
              <MapPin className="w-5 h-5 text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Paris & Strasbourg</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-100">
              <Clock className="w-5 h-5 text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">18h30 - 21h30</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-100">
              <Users className="w-5 h-5 text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">50-100 participants</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-100">
              <Video className="w-5 h-5 text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Format hybride</p>
            </div>
          </div>

          {/* Format Explanation */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-4xl mx-auto border border-orange-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Trois façons de participer :</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Présentiel Paris</h4>
                  <p className="text-sm text-gray-600">Participez en personne aux événements parisiens</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Centre Strasbourg</h4>
                  <p className="text-sm text-gray-600">Rejoignez le centre local avec connexion aux présentations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Video className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Présentation visio</h4>
                  <p className="text-sm text-gray-600">Présentez votre projet uniquement en ligne</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onRegisterClick}
              className="group bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>S'inscrire à un événement</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={onAccessClick}
              className="group bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-orange-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Déjà inscrit ?</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}