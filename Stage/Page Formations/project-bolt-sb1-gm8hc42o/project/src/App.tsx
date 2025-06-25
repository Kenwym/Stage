import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Offerings from './pages/Offerings';
import Formations from './pages/Formations';
import Coachings from './pages/Coachings';
import FormationDetail from './pages/FormationDetail';
import CoachingDetail from './pages/CoachingDetail';
import Trainers from './pages/Trainers';
import TrainerDetail from './pages/TrainerDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/notre-offre" element={<Offerings />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/coachings" element={<Coachings />} />
            <Route path="/formation/:id" element={<FormationDetail />} />
            <Route path="/coaching/:id" element={<CoachingDetail />} />
            <Route path="/formateurs" element={<Trainers />} />
            <Route path="/formateur/:id" element={<TrainerDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;