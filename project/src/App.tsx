import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import AccessModal from './components/AccessModal';
import HomePage from './components/HomePage';
import UserDashboardPage from './components/UserDashboardPage';
import ProjetsPage from './components/ProjetsPage';
import ProjetPage from './components/ProjetPage';
import ProfilPage from './components/ProfilPage';
import ProfilsPage from './components/ProfilsPage';

function AppContent() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | undefined>();

  const handleRegisterClick = (eventId?: string) => {
    setSelectedEventId(eventId);
    setIsRegistrationModalOpen(true);
  };

  const handleAccessClick = () => {
    setIsAccessModalOpen(true);
  };

  const handleSectionChange = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // On masque le header global sur les routes dashboard
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen bg-white">
      {!isDashboard && (
        <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      )}
      <main className={!isDashboard ? "pt-16" : ""}>
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onRegisterClick={handleRegisterClick} 
                onAccessClick={handleAccessClick}
              />
            } 
          />
          <Route path="/dashboard/:eventId" element={<UserDashboardPage />} />
          <Route path="/projets" element={<ProjetsPage />} />
          <Route path="/projets/:slug" element={<ProjetPage />} />
          <Route path="/profil/:slug" element={<ProfilPage />} />
          <Route path="/profils" element={<ProfilsPage />} />
        </Routes>
      </main>
      <Footer />

      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        eventId={selectedEventId}
      />

      <AccessModal
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;