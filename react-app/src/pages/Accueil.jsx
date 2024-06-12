// src/pages/Accueil.js

import { useState, useEffect } from 'react';
import './Accueil.css'; // Importez le fichier CSS pour la page d'accueil
import { Link } from 'react-router-dom';
import axios from 'axios';
import image from '../assets/accueil.jpg';
import Employes from './Employes'; // Importez le composant Employes

const Accueil = () => {
    const [appartements, setAppartements] = useState([]);
    const [appartementCount, setAppartementCount] = useState(0); // État pour stocker le nombre d'appartements
    const [blooks, setBlooks] = useState([]);
    const [blooksCount, setBlooksCount] = useState(0);
    const [owners, setOwners] = useState([]);
    const [ownersCount, setOwnersCount] = useState(0);
    const [employes, setEmployes] = useState([]);
    const [employesCount, setEmployesCount] = useState(0);
  useEffect(() => {
    fetchAppartements();
  }, []);
  useEffect(() => {
    fetchBloocks();
  }, []);
  useEffect(() => {
    fetchOwners();
  }, []);
  useEffect(() => {
    fetchEmployes();
  }, []);

  const fetchAppartements = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/appartements');
      setAppartements(response.data);
      setAppartementCount(response.data.length); // Mettre à jour le nombre d'appartements
    } catch (error) {
      console.error('Error fetching appartements:', error);
    }
  };

  const fetchBloocks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/blocks');
      setBlooks(response.data);
      setBlooksCount(response.data.length); // Mettre à jour le nombre d'appartements
    } catch (error) {
      console.error('Error fetching blooks:', error);
    }
  };
  
  const fetchOwners = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/owners');
      setOwners(response.data);
      setOwnersCount(response.data.length); // Mettre à jour le nombre d'appartements
    } catch (error) {
      console.error('Error fetching blooks:', error);
    }
  };
  const fetchEmployes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/employees');
      setEmployes(response.data);
      setEmployesCount(response.data.length); // Mettre à jour le nombre d'appartements
    } catch (error) {
      console.error('Error fetching blooks:', error);
    }
  };
    return (
        <div className="accueil-container">
            <header className="accueil-header">
                {/* <div className="search-bar">
                    <input type='text' placeholder="Rechercher..." />
                    <button>Rechercher</button>
                </div> */}
                <div className="user-options">
                    {/* <p className='dash'>Dashbord Administrateur</p> */}
                    <img width="24" height="24" src="https://img.icons8.com/windows/32/737373/user-male-circle.png" alt="user-male-circle"/>
                    <Link className='signout' to="/signin">SignOut</Link>
                    <div className="notification-icon">
                        <Link to="/notifications">
                            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/737373/appointment-reminders.png" alt="appointment-reminders"/>
                        </Link>
                    </div>
                    
                </div>
            </header>
            
            <div className='count'>
              <p></p>
              <div className='app'>N Appretements: {appartementCount}</div>
              <div className='app'>N Blooks : {blooksCount}</div>
              <div className='app'>N Owners : {ownersCount}</div>
              <div className='app'>N Employes : {employesCount}</div>
            </div>

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
            <Employes />

        </div>
    );
};

export default Accueil;
