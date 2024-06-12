// src/pages/Accueil.js

import React from 'react';
// import './Accueil.css'; // Importez le fichier CSS pour la page d'accueil
import { Link } from 'react-router-dom';
import image from '../assets/accueil.jpg'
import './OwnerAccueil.css'
import NavbarOwner from '../owner_login/NavbarOwner';

const OwnerAccueil = () => {
    return (
        <div className="accueil-container">
            <div className='img-acc'>
                <div className='div-acc'><p className='para-one'>Welcome to</p> <p className='para-tow'>Our Syndic Gestion</p></div>
            </div>
            <section className="accueil-content">
                <Link to="payement">
                    <div className="accueil-card">
                        <h2>payement</h2>
                        <p >Gérez les informations et les communications avec les appartements.</p>
                    </div>
                </Link>
                <Link to="report">
                    <div className="accueil-card">
                        <h2>report</h2>
                        <p>Suivez les détails de owners .</p>
                    </div>
                </Link>
                 
            </section>
            
        </div>
    );
};

export default OwnerAccueil;
