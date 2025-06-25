import React from 'react';
import { X, ExternalLink, Users, MapPin, Video, Lightbulb, TrendingUp, ArrowRightLeft } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventId?: string;
}

export default function RegistrationModal({ isOpen, onClose, eventId }: RegistrationModalProps) {
  const handleRedirectToForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeTuY2_9RlgRkUsF-bcIm5aOl-OzcprvS02TbimJmwikQ8Q8Q/viewform', '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Inscription Apéri-tigcre</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Introduction */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Inscrivez-vous pour participer à l'Apéri-tigcre
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Remplissez notre formulaire d'inscription pour participer à nos événements networking hybrides. 
            </p>
          </div>

          {/* Types de candidatures */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-6 text-center">
              Quatre types de candidatures possibles :
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-orange-200 rounded-xl p-4 bg-orange-50">
                <div className="flex items-center space-x-3 mb-2">
                  <Lightbulb className="w-6 h-6 text-orange-600" />
                  <span className="font-semibold text-gray-800">Porteur de projet</span>
                </div>
                <p className="text-sm text-gray-600">
                  Vous avez un projet à présenter et cherchez des partenaires, investisseurs ou conseils
                </p>
              </div>

              <div className="border-2 border-blue-200 rounded-xl p-4 bg-blue-50">
                <div className="flex items-center space-x-3 mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-gray-800">Porteur de compétences</span>
                </div>
                <p className="text-sm text-gray-600">
                  Vous proposez vos compétences et expertise pour accompagner des projets
                </p>
              </div>

              <div className="border-2 border-green-200 rounded-xl p-4 bg-green-50">
                <div className="flex items-center space-x-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-gray-800">Cédant</span>
                </div>
                <p className="text-sm text-gray-600">
                  Vous souhaitez céder votre entreprise ou une partie de vos activités
                </p>
              </div>

              <div className="border-2 border-purple-200 rounded-xl p-4 bg-purple-50">
                <div className="flex items-center space-x-3 mb-2">
                  <ArrowRightLeft className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold text-gray-800">Repreneur</span>
                </div>
                <p className="text-sm text-gray-600">
                  Vous recherchez une entreprise à reprendre ou des opportunités d'acquisition
                </p>
              </div>
            </div>
          </div>

          {/* Modes de participation */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-6 text-center">
              Trois modes de participation :
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h5 className="font-medium text-gray-800 mb-1">Présentiel Paris</h5>
                <p className="text-sm text-gray-600">Participez directement aux événements parisiens</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h5 className="font-medium text-gray-800 mb-1">Centre Strasbourg</h5>
                <p className="text-sm text-gray-600">Centre local avec connexion aux présentations</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Video className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h5 className="font-medium text-gray-800 mb-1">Présentation visio</h5>
                <p className="text-sm text-gray-600">Présentez votre projet uniquement en ligne</p>
              </div>
            </div>
          </div>

          {/* Processus */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 mb-8">
            <h4 className="font-semibold text-gray-800 mb-4 text-center">📧 Processus de sélection</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="text-center">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-orange-600 font-bold">1</span>
                </div>
                <p><strong>Inscription</strong><br />Remplissez le formulaire</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-orange-600 font-bold">2</span>
                </div>
                <p><strong>Examen</strong><br />Notre équipe étudie votre profil (48h)</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-orange-600 font-bold">3</span>
                </div>
                <p><strong>Confirmation</strong><br />Réponse et détails de connexion</p>
              </div>
            </div>
          </div>

          {/* Format pitch */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h4 className="font-semibold text-gray-800 mb-3">🎤 Format pitch recommandé (1m30s)</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>1. Problème identifié</strong> - Quel problème résolvez-vous ?</p>
              <p><strong>2. Solution proposée</strong> - Comment votre solution répond au problème ?</p>
              <p><strong>3. Besoins</strong> - Financement, partenaires, compétences recherchées</p>
              <p className="mt-3 text-xs text-gray-600">
                💡 Possibilité de projeter des slides pendant votre présentation
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={handleRedirectToForm}
              className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Accéder au formulaire d'inscription</span>
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Le formulaire s'ouvrira dans un nouvel onglet
            </p>
          </div>

          {/* Contact info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Questions ? Contactez-nous à{' '}
              <a 
                href="mailto:pitch@tigcre.org" 
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                pitch@tigcre.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}