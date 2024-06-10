// src/pages/Accueil.js

import React from 'react';
import './Accueil.css'; // Importez le fichier CSS pour la page d'accueil
import { Link } from 'react-router-dom';

const Accueil = () => {
    return (
        <div className="accueil-container">
            <header className="accueil-header">
                {/* <div className="search-bar">
                    <input type='text' placeholder="Rechercher..." />
                    <button>Rechercher</button>
                </div> */}
                <div className="user-options">
                    <img width="24" height="24" src="https://img.icons8.com/windows/32/737373/user-male-circle.png" alt="user-male-circle"/>
                    <Link className='signin' to="/signin">SignOut</Link>
                    <div className="notification-icon">
                        <Link to="/notifications">
                            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/737373/appointment-reminders.png" alt="appointment-reminders"/>
                        </Link>
                    </div>
                    {/* <div className="settings-icon">
                        <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/737373/settings.png" alt="settings"/> 
                    </div> */}
                </div>
            </header>
            <section className="accueil-content">
                <div className="accueil-card">
                    <h2>Propriétaires</h2>
                    <p >Gérez les informations et les communications avec les propriétaires.</p>
                </div>
                <div className="accueil-card">
                    <h2>Immeubles</h2>
                    <p>Suivez les détails et l'entretien des immeubles.</p>
                </div>
                <div className="accueil-card">
                    <h2>Réunions</h2>
                    <p>Organisez et enregistrez les réunions des copropriétaires.</p>
                </div>
                <div className="accueil-card">
                    <h2>Contact</h2>
                    <p>Contactez-nous pour toute question ou assistance.</p>
                </div>
            </section>
            
        </div>
    );
};

export default Accueil;
