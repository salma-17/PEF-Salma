 import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faUser, faUsers, faIndustry, faBook, faChartBar } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';  // Importez le fichier CSS
import logo from '../assets/logoS.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg col-3">
            <Link className="navbar-brand" to="/">
                <img src={logo} className="img-fluid rounded-circle" alt="Logo Syndic Gestion" />
            </Link>
            <div className='ligne'></div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/layout">
                            <FontAwesomeIcon icon={faHome} /> Accueil
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/layout/appartements">
                            <FontAwesomeIcon icon={faBuilding} /> Appartements
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/layout/owners">
                            <FontAwesomeIcon icon={faUser} /> Owners
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/layout/employes">
                            <FontAwesomeIcon icon={faUsers} /> Employes
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/layout/companys">
                            <FontAwesomeIcon icon={faIndustry} /> Companys
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/layout/blooks">
                            <FontAwesomeIcon icon={faBook} /> Blooks
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/layout/reports">
                            <FontAwesomeIcon icon={faChartBar} /> Reports
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
