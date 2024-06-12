import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import './Owners.css'; // Import du fichier CSS pour le style

function Owners() {
  const [owners, setOwners] = useState([]);
  const [newOwner, setNewOwner] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [editOwner, setEditOwner] = useState(null); // État pour le propriétaire en cours d'édition
  const [showAddModal, setShowAddModal] = useState(false); // État pour contrôler l'affichage du modal d'ajout
  const [showEditModal, setShowEditModal] = useState(false); // État pour contrôler l'affichage du modal d'édition
  const [deleteIndex, setDeleteIndex] = useState(null); // État pour stocker l'index à supprimer
  const [filterByName, setFilterByName] = useState(''); // État pour stocker le filtre par nom
  const [errorMessage, setErrorMessage] = useState(''); // État pour le message d'erreur

<<<<<<< HEAD
  useEffect(() => {
    fetchOwners();
  }, []);

  const fetchOwners = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/owners');
      setOwners(response.data);
    } catch (error) {
      console.error('Error fetching owners:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewOwner({ ...newOwner, [name]: value });
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setEditOwner({ ...editOwner, [name]: value });
  };

  const validatePhoneNumber = (phone) => {
    return phone.startsWith('0');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleAddOwner = async () => {
    if (!validatePhoneNumber(newOwner.phone)) {
      setErrorMessage('Le numéro de téléphone doit commencer par un zéro.');
      return;
    }

    if (!validateEmail(newOwner.email)) {
      setErrorMessage("L'adresse email n'est pas valide.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/owners', newOwner);
      setOwners([...owners, response.data]);
      setNewOwner({
        name: '',
        email: '',
        phone: ''
      });
      setShowAddModal(false); // Fermer le modal après l'ajout
      setErrorMessage(''); // Réinitialiser le message d'erreur après une réussite
    } catch (error) {
      console.error('Error adding owner:', error);
    }
  };

  const handleEditOwner = async () => {
    if (!validatePhoneNumber(editOwner.phone)) {
      setErrorMessage('Le numéro de téléphone doit commencer par un zéro.');
      return;
    }

    if (!validateEmail(editOwner.email)) {
      setErrorMessage("L'adresse email n'est pas valide.");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:8000/api/owners/${editOwner.id}`, editOwner);
      const updatedOwners = owners.map((owner) =>
        owner.id === editOwner.id ? response.data : owner
      );
      setOwners(updatedOwners);
      setShowEditModal(false); // Fermer le modal après l'édition
      setErrorMessage(''); // Réinitialiser le message d'erreur après une réussite
    } catch (error) {
      console.error('Error editing owner:', error);
    }
  };

  const handleDeleteOwner = (index) => {
    setDeleteIndex(index);
  };

  const confirmDelete = async () => {
    if (deleteIndex !== null) {
      try {
        await axios.delete(`http://localhost:8000/api/owners/${owners[deleteIndex].id}`);
        const updatedOwners = owners.filter((_, i) => i !== deleteIndex);
        setOwners(updatedOwners);
        setDeleteIndex(null); // Réinitialiser l'index à supprimer après la suppression
      } catch (error) {
        console.error('Error deleting owner:', error);
      }
    }
  };

  const cancelDelete = () => {
    setDeleteIndex(null); // Annuler la suppression en réinitialisant l'index à supprimer
  };

  const handleEditRow = (index) => {
    setEditOwner({ ...owners[index], index });
    setShowEditModal(true); // Ouvrir le modal d'édition
  };

  const filteredOwners = owners.filter(owner =>
    owner.name.toLowerCase().includes(filterByName.toLowerCase())
  );

  return (
    <div>
      <h1>Owners</h1>
      <div>
        <input
          type="text"
          placeholder="Filter by name"
          value={filterByName}
          onChange={(e) => setFilterByName(e.target.value)}
        />
        <button onClick={() => setShowAddModal(true)}>Add Owner</button> {/* Bouton pour ouvrir le modal d'ajout */}
      </div>
      {showAddModal && (
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Owner</h5>
                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={newOwner.name}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={newOwner.email}
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  value={newOwner.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleAddOwner}>Add Owner</button>
              </div>
            </div>
          </div>
=======
const Owners = () => {
    return (
        <div>
            <h1>Owners</h1>
            <p>Liste des propriétaires et leurs informations.</p>
>>>>>>> daf83a487554fc9801848f8a112a6eae8fa6d16c
        </div>
      )}
      {showEditModal && (
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Owner</h5>
                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={editOwner?.name || ''}
                  onChange={handleEditInputChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={editOwner?.email || ''}
                  onChange={handleEditInputChange}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  value={editOwner?.phone || ''}
                  onChange={handleEditInputChange}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleEditOwner}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {deleteIndex !== null && (
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button type="button" className="btn-close" onClick={cancelDelete} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this owner?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cancelDelete}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={confirmDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOwners.map((owner, index) => (
              <tr key={index}>
                <td>{owner.name}</td>
                <td>{owner.email}</td>
                <td>{owner.phone}</td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill className="delete-btn" onClick={() => handleDeleteOwner(index)} />
                    <BsFillPencilFill className="edit-btn" onClick={() => handleEditRow(index)} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Owners;
