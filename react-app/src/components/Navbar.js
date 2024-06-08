import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Importez le fichier CSS
import logo from '../assets/Syndic.png'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
            <img src={logo} className="img-fluid rounded-circle" alt="Logo Syndic Gestion" />
                Syndic Gestion
                
            </Link>
            <div className='ligne'></div>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/proprietaires">Propriétaires</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/immeubles">Immeubles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/reunions">Réunions</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
