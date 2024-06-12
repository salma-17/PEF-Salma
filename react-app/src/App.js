// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LayoutAdmin from './admin_login/LayoutAdmin';
import LayoutOwner from './owner_login/LayoutOwner';
import Accueil from './pages/Accueil';
import Owners from './pages/Owners';
import Appartements from './pages/Appartements';
import Employes from './pages/Employes';
import Companys from './pages/Companys';
import Blooks from './pages/Blooks';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';  // Importez le composant Signup
import Profile from './pages/Profile';
import OwnerAccueil from './owners/OwnerAccueil';
import Payement from './owners/Payement';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/layoutOwner" element={<LayoutOwner />} > 
                    <Route index element={<OwnerAccueil />} />
                    <Route path="payement" element={<Payement />} />
                    <Route path="owners" element={<Owners />} />

                </Route>
                <Route path="/layoutAdmin" element={<LayoutAdmin />} >
                    <Route index element={<Accueil />} />
                    <Route path="owners" element={<Owners />} />
                    <Route path="appartements" element={<Appartements />} />
                    <Route path="employes" element={<Employes />} />
                    <Route path="companys" element={<Companys />} />
                    <Route path="blooks" element={<Blooks />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="notifications" element={<Notifications />} />

                </Route>
                
$            </Routes>
        </Router>
    );
}

export default App;