import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventCalendar from './components/EventCalendar';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import AccessModal from './components/AccessModal';

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

  const renderContent = () => {
    switch (activeSection) {
      case 'events':
        return <EventCalendar onRegisterClick={handleRegisterClick} />;
      case 'gallery':
        return <Gallery />;
      default:
        return (
          <>
            <Hero 
              onRegisterClick={() => handleRegisterClick()} 
              onAccessClick={handleAccessClick}
            />
            <EventCalendar onRegisterClick={handleRegisterClick} />
            <Gallery />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="pt-16">
        {renderContent()}
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

export default App;