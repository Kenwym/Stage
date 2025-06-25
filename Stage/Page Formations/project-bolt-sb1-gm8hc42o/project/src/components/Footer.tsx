import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Mail, Phone, MapPin } from 'lucide-react';
import logo from './nouveau_logo.jpg'; // Import the image
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo TIGcRE"
              className="w-10 h-10 object-cover rounded-lg"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">
              TIGcRE
            </span>
          </Link>
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
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/formations" className="text-gray-300 hover:text-white transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link to="/coachings" className="text-gray-300 hover:text-white transition-colors">
                  Coachings
                </Link>
              </li>
              <li>
                <Link to="/formateurs" className="text-gray-300 hover:text-white transition-colors">
                  Formateurs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos réseaux sociaux</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="https://www.linkedin.com/company/tigcre/" className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/tigcre" className="text-gray-300 hover:text-white transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="https://x.com/TIGcRE" className="text-gray-300 hover:text-white transition-colors">
                  X (anciennement Twitter)
                </Link>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <Link to="https://tigcre.org/politique-de-confidentialite/" className="text-gray-400 hover:text-white transition-colors">
            Politique de confidentialité
          </Link>
          <span> - </span>
          <Link to="https://tigcre.org/mentions-legales/" className="text-gray-400 hover:text-white transition-colors">
            Mentions légales
          </Link>
          <p>
            TIGcRE est un organisme de formation enregistré auprès du préfet d'Ile-de-France sous le n° 11-75-54334-75. Cet enregistrement ne vaut pas agrément de l'Etat.
          </p>
          <p>&copy; 2025 TIGcRE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;