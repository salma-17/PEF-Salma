import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import Proprietaires from './pages/Proprietaires';
import Immeubles from './pages/Immeubles';
import Reunions from './pages/Reunions';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/proprietaires" element={<Proprietaires />} />
                    <Route path="/immeubles" element={<Immeubles />} />
                    <Route path="/reunions" element={<Reunions />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
