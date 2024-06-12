// src/pages/Accueil.js

import React from 'react';
import './Accueil.css'; // Importez le fichier CSS pour la page d'accueil
import { Link } from 'react-router-dom';
import image from '../assets/accueil.jpg'

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
                    <Link className='signout' to="/signin">SignOut</Link>
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
            {/* <div className='img-acc'>
                <img className='image' src={image} alt="your image" />
            </div> */}
            <section className="accueil-content">
                <Link to="appartements">
                    <div className="accueil-card">
                        <h2>Appartements</h2>
                        <p >Gérez les informations et les communications avec les appartements.</p>
                    </div>
                </Link>
                <Link to="owners">
                    <div className="accueil-card">
                        <h2>Owners</h2>
                        <p>Suivez les détails de owners .</p>
                    </div>
                </Link>
                <Link to="employes">
                    <div className="accueil-card">
                        <h2>Employes</h2>
                        <p>Organisez et enregistrez .</p>
                    </div>
                </Link>
                <Link to="companys">
                    <div className="accueil-card">
                        <h2>Companys</h2>
                        <p>Contactez-nous pour toute question ou assistance.</p>
                    </div>
                </Link>
                <Link to="blooks">
                    <div className="accueil-card">
                        <h2>Blooks</h2>
                        <p>Contactez-nous pour toute question ou assistance.</p>
                    </div>
                </Link>  
            </section>
            
        </div>
    );
};

export default Accueil;
