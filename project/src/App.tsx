import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import AccessModal from './components/AccessModal';
import HomePage from './components/HomePage';

import UserDashboardPage from './components/UserDashboardPage';
import ProjetsPage from './components/ProjetsPage';
import ProjetPage from './components/ProjetPage';

function App() {
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

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
        <main className="pt-16">
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
          </Routes>
        </main>
        <Footer />

        <RegistrationModal
          isOpen={isRegistrationModalOpen}
          onClose={() => setIsRegistrationModalOpen(false)}
          eventId={selectedEventId}
        />

        {/* AccessModal n'est plus utilisé comme page, mais reste accessible en modale si besoin */}
        <AccessModal
          isOpen={isAccessModalOpen}
          onClose={() => setIsAccessModalOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;