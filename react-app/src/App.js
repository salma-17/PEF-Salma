// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import Owners from './pages/Owners';
import Appartements from './pages/Appartements';
import Employes from './pages/Employes';
import Companys from './pages/Companys';
import Blooks from './pages/Blooks';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import SignIn from './login/SignIn';
// import SignUp from './login/SignUp';  // Importez le composant Signup
import Profile from './pages/Profile';
// import SignOut from './login/SignOut';  // Importez le composant ForgotPassword



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                {/* <Route path="/signup" element={<SignUp />} /> */}
                <Route path="/profile" element={<Profile />} />
                {/* <Route path="/signin" element={<SignOut />} /> */}
                <Route path="/" element={<Navigate to="/signin" replace />} />
                <Route path="/layout" element={<Layout />}>
                    <Route index element={<Accueil />} />
                    <Route path="owners" element={<Owners />} />
                    <Route path="appartements" element={<Appartements />} />
                    <Route path="employes" element={<Employes />} />
                    <Route path="companys" element={<Companys />} />
                    <Route path="blooks" element={<Blooks />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="notifications" element={<Notifications />} />

                </Route>
            </Routes>
        </Router>
    );
}

export default App;
