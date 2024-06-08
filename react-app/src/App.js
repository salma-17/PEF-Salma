import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import Owners from './pages/Owners';
import Appartements from './pages/Appartements';
import Employes from './pages/Employes';
import Companys from './pages/Companys';
import Blooks from './pages/Blooks';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';

function App() {
    return (
        <Router>
            <div>
                <div className='row'>
                    <div className='col-2'>
                        <Navbar />
                    </div>
                    <div className='col-10 '>
                        <Routes>
                            <Route path="/"element={<Accueil />} />
                            <Route path="/owners" element={<Owners />} />
                            <Route path="/appartements" element={<Appartements />} />
                            <Route path="/employes" element={<Employes />} />
                            <Route path="/companys" element={<Companys />} />
                            <Route path="/blooks" element={<Blooks />} />
                            <Route path="/reports" element={<Reports />} />
                            <Route path="/notifications" element={<Notifications />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
