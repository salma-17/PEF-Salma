import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faBuilding, faUser, faUsers, faIndustry, faBook, faChartBar } from '@fortawesome/free-solid-svg-icons';
import './NavbarOwner.css';  // Importez le fichier CSS
import logo from '../assets/logoS.png';

const NavbarOwner = () => {
    return (
        <nav className="" id='navbar'>
            <Link className="" to="/">
                <img src={logo} className="img-fluid rounded-circle" alt="Logo Syndic Gestion" />
            </Link>
            <div className='ligne'></div>
            <div className="" >
                <ul className="" id="navbarNav">
                    <li className="" id="nav-item">
                        <Link className="link" to="/layoutOwner">
                            Accueil
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link" to="/layoutOwner/payement">
                            Payement
                        </Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/layoutOwner/report">
                            Report
                        </Link>
                    </li>
                    <li className="item">
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
