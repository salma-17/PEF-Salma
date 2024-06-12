import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faUser, faUsers, faIndustry, faBook, faChartBar } from '@fortawesome/free-solid-svg-icons';
import './NavbarOwner.css';  // Importez le fichier CSS
import logo from '../assets/logoS.png';

const NavbarOwner = () => {
    return (
        <nav className="navbar navbar-expand-lg col-3">
            <Link className="navbar-brand" to="/">
                <img src={logo} className="img-fluid rounded-circle" alt="Logo Syndic Gestion" />
            </Link>
            <div className='ligne'></div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/layoutOwner">
                            Accueil
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/layoutOwner/payement">
                            Payement
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/layoutOwner/report">
                            Report
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='signout' to="/signin">
                            SignOut
                        </Link>
                    </li>
                    <li>
                        
                    </li>
                    
        
                </ul>
            </div>
        </nav>
    );
};
export default NavbarOwner;
