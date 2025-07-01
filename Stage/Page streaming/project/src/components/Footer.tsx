import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Video } from 'lucide-react';
import logo from '/images/nouveau_logo.jpg'; // Import the image
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1 md:col-span-2">
        <a href="/" className="flex items-center space-x-2">
          <img
          src={logo}
          alt="Logo TIGcRE"
          className="w-10 h-10 object-cover rounded-lg"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">
          TIGcRE
          </span>
        </a>
        <p className="text-gray-300 mb-4 max-w-md">
          TIGcRE facilite le co-entrepreneuriat intergénérationnel.
          Formation à la relation, Mise en relation, Accompagnement de la relation.
        </p>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2 text-gray-300">
          <Mail className="w-4 h-4" />
          <span>contact@tigcre.org</span>
          </div>
        </div>
        </div>

        {/* Quick Links */}
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

        {/* Services */}
        <div>
        <h3 className="text-lg font-semibold mb-4">Nos réseaux sociaux</h3>
        <ul className="space-y-2 text-gray-300">
          <li>
          <a
            href="https://www.linkedin.com/company/tigcre/"
            className="text-gray-300 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          </li>
          <li>
          <a
            href="https://www.facebook.com/tigcre"
            className="text-gray-300 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          </li>
          <li>
          <a
            href="https://x.com/TIGcRE"
            className="text-gray-300 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            X (anciennement Twitter)
          </a>
          </li>
        </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <a
        href="https://tigcre.org/politique-de-confidentialite/"
        className="text-gray-400 hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        >
        Politique de confidentialité
        </a>
        <span> - </span>
        <a
        href="https://tigcre.org/mentions-legales/"
        className="text-gray-400 hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        >
        Mentions légales
        </a>
        <p>
        TIGcRE est un organisme de formation enregistré auprès du préfet d'Ile-de-France sous le n° 11-75-54334-75. Cet enregistrement ne vaut pas agrément de l'Etat.
        </p>
        <p>&copy; 2025 TIGcRE. Tous droits réservés.</p>
      </div>
      </div>
    </footer>
  );
}