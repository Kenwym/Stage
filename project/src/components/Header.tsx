import React, { useState } from 'react';
import { Calendar, Users, Image, Menu, X, User } from 'lucide-react';
import logo from '/images/nouveau_logo.jpg';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { id: 'home', label: 'Accueil', icon: Calendar },
    { id: 'events', label: 'Événements', icon: Users },
    { id: 'gallery', label: 'Galerie', icon: Image },
  ];

  // Fonction utilitaire pour revenir à la home si besoin
  const goHomeAndSection = (section: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // On attend le retour à la home avant de scroller (léger délai)
      setTimeout(() => onSectionChange(section), 50);
    } else {
      onSectionChange(section);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => goHomeAndSection('home')}
          >
            <img
              src={logo}
              alt="Logo Apéri-TIGcRE"
              className="w-10 h-10 rounded-lg object-cover group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Apéri-TIGcRE
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => goHomeAndSection(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === id
                    ? 'bg-orange-100 text-orange-600'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
            {/* Lien profils */}
            <button
              onClick={() => navigate('/profils')}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 text-gray-600 hover:text-orange-600 hover:bg-orange-50"
            >
              <User size={18} />
              <span className="font-medium">Profils</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-orange-100 py-4 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              {navigation.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    goHomeAndSection(id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
              {/* Lien profils mobile */}
              <button
                onClick={() => {
                  navigate('/profils');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-gray-600 hover:text-orange-600 hover:bg-orange-50"
              >
                <User size={20} />
                <span className="font-medium">Profils</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}