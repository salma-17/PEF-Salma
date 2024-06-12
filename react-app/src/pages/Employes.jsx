import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEdit, faEnvelope, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Employes.css';

import cleaningImage from '../assets/cleaning.jpg';
import cleaning2Image from '../assets/cleaning2.jpg';
import deliveryImage from '../assets/delivery.jpg';
import electricienImage from '../assets/electricien.jpg';
import electricien2Image from '../assets/electricien2.jpg';
import marketImage from '../assets/market.jpg';
import teacherImage from '../assets/teacher.jpg';
import teacher2Image from '../assets/teacher2.jpg';

Modal.setAppElement('#root'); 

const Employes = () => {
    const [employesData, setEmployesData] = useState([
        { id: 1, name: 'Zeroual Chaimae', jobTitle: 'Agent de nettoyage', image: cleaningImage, description: "Avec plusieurs années d'expérience dans les services de nettoyage professionnel, Zeroual Chaimae veille à ce que chaque espace soit impeccable et désinfecté selon les normes les plus élevées.", phone: "+212 6 99 65 27 84", email: "zeroual@gmail.com" },
        { id: 2, name: 'Fatihi Youssra', jobTitle: 'Agent de nettoyage', image: cleaning2Image, description: "Fatihi Youssra apporte un sens aigu du détail et une passion pour la propreté à chaque travail. Avec son approche méticuleuse, elle veille à ce que chaque coin soit immaculé.", phone: "+212 6 64 67 66 24", email: "fatihi@gmail.com" },
        { id: 3, name: 'Alami Mounia', jobTitle: 'Expert en livraison', image: deliveryImage, description: "Alami Mounia, notre experte en livraison dévouée, veille à ce que les colis soient livrés rapidement et en toute sécurité. Avec son service efficace, les clients peuvent compter sur des livraisons ponctuelles.", phone: "+212 6 54 63 98 11", email: "alami@gmail.com" },
        { id: 4, name: 'Alaoui Redouane', jobTitle: 'Électricien', image: electricienImage, description: "Alaoui Redouane apporte une expertise étendue dans les systèmes électriques, veillant à ce que toutes les installations et réparations soient effectuées avec précision et sécurité.", phone: "+212 6 61 64 77 34", email: "alaoui@gmail.com" },
        { id: 5, name: 'ElRradi Ayoub', jobTitle: 'Électricien', image: electricien2Image, description: "ElRradi Ayoub est notre électricien de confiance, spécialisé dans le dépannage et la résolution efficace des problèmes électriques. Avec ses connaissances et ses compétences, il assure le bon fonctionnement de tous les systèmes électriques.", phone: "+212 6 11 04 67 34", email: "elrradi@gmail.com" },
        { id: 6, name: 'BenOmare Ismail', jobTitle: 'Assistant de marché', image: marketImage, description: "BenOmare Ismail est dévoué à offrir un service client exceptionnel dans notre département de marché. Avec son attitude amicale et sa connaissance des produits, il aide les clients dans leurs demandes et leurs achats.", phone: "+212 6 62 10 77 20", email: "benomare@gmail.com" },
        { id: 7, name: 'Saidi Rabab', jobTitle: 'Enseignant', image: teacherImage, description: "Saidi Rabab, notre enseignante expérimentée, apporte créativité et enthousiasme à chaque leçon. Avec ses méthodes d'enseignement innovantes, elle engage les étudiants et favorise l'amour de l'apprentissage.", phone: "+212 6 75 84 57 34", email: "saidi@gmail.com" },
        { id: 8, name: 'Hamouchi Loubna', jobTitle: 'Enseignant', image: teacher2Image, description: "Hamouchi Loubna est dédiée à fournir une éducation de qualité à nos étudiants. Avec sa passion pour l'enseignement et son engagement pour la réussite des élèves, elle crée un environnement d'apprentissage favorable.", phone: "+212 6 24 64 09 91", email: "hamouchi@gmail.com" },
    ]);
    

    const [jobTitles, setJobTitles] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', description: '', jobTitle:'', image: '' });
    const [editingId, setEditingId] = useState(null);
    const [selectedJobTitle, setSelectedJobTitle] = useState('');
    
    

    useEffect(() => {
        const titles = new Set(employesData.map(employee => employee.jobTitle));
        setJobTitles(Array.from(titles));
    }, [employesData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setFormData({ name: '', phone: '', email: '', description: '', jobTitle:'', image: '' });
        setEditingId(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            handleEditEmployee(editingId);
        } else {
            handleAddEmployee();
        }
    };

    const handleAddEmployee = () => {
        const formDataWithJobTitle = { ...formData, jobTitle: selectedJobTitle };
        fetch('http://localhost:8000/api/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataWithJobTitle),
        })
        .then(response => response.json())
        .then(data => {
            setEmployesData(prevData => [...prevData, data]);
            if (!jobTitles.includes(selectedJobTitle)) {
                setJobTitles(prevTitles => [...prevTitles, selectedJobTitle]);
            }
            handleCloseModal();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    const handleEditEmployee = (id) => {
        fetch(`http://localhost:8000/api/employees/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            setEmployesData(prevData => prevData.map(employee => (employee.id === id ? data : employee)));
            handleCloseModal();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    const handleDeleteEmployee = (id) => {
        const confirmDelete = window.confirm("Voulez-vous supprimer cet employé ?");
        if (confirmDelete) {
            fetch(`http://localhost:8000/api/employees/${id}`, {
                method: 'DELETE',
            })
            .then(() => {
                setEmployesData(employesData.filter(employee => employee.id !== id));
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    };
    

    const handleEditClick = (employee) => {
        setFormData(employee);
        setEditingId(employee.id);
        setIsModalOpen(true);
    };

    

    const handleJobTitleFilter = (jobTitle) => {
        setSelectedJobTitle(jobTitle);
    };

    const filteredEmployes = employesData.filter(employe =>
        (selectedJobTitle ? employe.jobTitle === selectedJobTitle : true)
    );
    return (
        <div>
            <h2>Liste des Employés</h2>
            <div className="job-titles">
                <p>Filtrer par métier:</p>
                <select value={selectedJobTitle} onChange={(e) => handleJobTitleFilter(e.target.value)}>
                    <option value="">Tous</option>
                    {jobTitles.map(title => (
                        <option key={title} value={title}>{title}</option>
                    ))}
                </select>
            </div>
            <div className="add-employee">
                <button onClick={handleOpenModal}>
                    <FontAwesomeIcon icon={faPlus} /> Ajouter un employé
                </button>
            </div>
        <section className="employes-content">
        {filteredEmployes.map((employe) => (
            <div className="employes-card" key={employe.id}>
                    <img src={employe.image} alt={employe.name} className="employes-image" />
                    <h3>{employe.name}</h3>
                    <h5>{employe.jobTitle}</h5>
                    <p>{employe.description}</p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> {employe.phone}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} /> {employe.email}
                    </p>
                    <div className="actions">
                        <button onClick={() => handleEditClick(employe)}>
                            <FontAwesomeIcon icon={faEdit} /> Editer
                        </button>
                        <button onClick={() => handleDeleteEmployee(employe.id)}>
                            <FontAwesomeIcon icon={faTrash} /> Supprimer
                        </button>
                    </div>
                </div>
            ))}
            
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Employee Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                <h2>{editingId ? 'Editer Employé' : 'Ajouter Employé'}</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nom:
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                    </label>
                    <label>
                       Métier:
                        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} />
                    </label>
                    <label>
                        Téléphone:
                        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                    </label>
                    <label>
                        Description:
                        <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
                    </label>
                    <label>
                        Image URL:
                        <input type="text" name="image" value={formData.image} onChange={handleInputChange} />
                    </label>
                        <div className="button-container">
                            <button type="submit">{editingId ? 'Mettre à jour' : 'Ajouter'}</button>
                            <button type="button" onClick={handleCloseModal}>Annuler</button>
                        </div>
                </form>
            </Modal>
        </section>
        </div>
    );
};

export default Employes;
