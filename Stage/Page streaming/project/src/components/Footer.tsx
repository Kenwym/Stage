import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AT</span>
              </div>
              <span className="text-xl font-bold">Apéri-Tigcre</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              La communauté networking hybride qui rassemble entrepreneurs, créatifs et professionnels 
              en présentiel et en ligne.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Centres</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin size={16} className="mt-1" />
                <div>
                  <p className="font-medium text-white">Paris</p>
                  <p className="text-sm">Événements en présentiel</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin size={16} className="mt-1" />
                <div>
                  <p className="font-medium text-white">Strasbourg</p>
                  <p className="text-sm">Centre local + connexion visio</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <Video size={16} className="mt-1" />
                <div>
                  <p className="font-medium text-white">En ligne</p>
                  <p className="text-sm">Présentations projets</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} />
                <span>contact@aperi-tigcre.fr</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} />
                <span>+33 6 12 34 56 78</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin size={16} className="mt-1" />
                <div>
                  <p>Paris & Strasbourg</p>
                  <p className="text-sm">France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">
                À propos
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">
                Format hybride
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">
                RGPD
              </a>
              <a href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">
                Support technique
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Apéri-Tigcre. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">
            Fait avec ❤️ pour la communauté networking hybride
          </p>
        </div>
      </div>
    </footer>
  );
}