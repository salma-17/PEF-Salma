import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './Appartements.css'; // Import your CSS file

Modal.setAppElement('#root');

const Appartements = () => {
  const [appartements, setAppartements] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentAppartement, setCurrentAppartement] = useState({ id: null, floor: '', number: '', block_id: '' });
  const [modalType, setModalType] = useState('');
  const [error, setError] = useState(null);
  const [floorSearch, setFloorSearch] = useState('');

  const apiUrl = 'http://localhost:8000/api/appartements';
  const blocksApiUrl = 'http://localhost:8000/api/blocks';

  useEffect(() => {
    fetchAppartements();
    fetchBlocks();
  }, []);

  const fetchAppartements = async () => {
    try {
      const response = await axios.get(apiUrl);
      setAppartements(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching appartements:', error);
      setError('Error fetching appartements. Please try again.');
    }
  };

  const fetchBlocks = async () => {
    try {
      const response = await axios.get(blocksApiUrl);
      if (response.data && Array.isArray(response.data)) {
        setBlocks(response.data);
      } else {
        console.error('API response is not valid:', response.data);
        setBlocks([]);
      }
      setError(null);
    } catch (error) {
      console.error('Error fetching blocks:', error);
      setError('Error fetching blocks. Please try again.');
      setBlocks([]);
    }
  };

  const openModal = (type, appartement = null) => {
    setModalType(type);
    setCurrentAppartement(appartement || { id: null, floor: '', number: '', block_id: '' });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentAppartement({ id: null, floor: '', number: '', block_id: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentAppartement({ ...currentAppartement, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modalType === 'add') {
        await axios.post(apiUrl, currentAppartement);
      } else if (modalType === 'update') {
        await axios.put(`${apiUrl}/${currentAppartement.id}`, currentAppartement);
      }
      fetchAppartements();
      closeModal();
    } catch (error) {
      console.error('Error submitting data:', error);
      setError('Error submitting data. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm('Are you sure you want to delete this appartement?')) {
        await axios.delete(`${apiUrl}/${id}`);
        fetchAppartements();
      }
    } catch (error) {
      console.error('Error deleting appartement:', error);
      setError('Error deleting appartement. Please try again.');
    }
  };

  const filteredAppartements = appartements.filter(appartement => appartement.floor.includes(floorSearch));

  return (
    <div className="appartements-container">
      <h1>Appartements Table</h1>
      {error && <div className="error">{error}</div>}
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search by floor..." 
          value={floorSearch} 
          onChange={(e) => setFloorSearch(e.target.value)} 
        />
      </div>
      <button className="add-button" onClick={() => openModal('add')}>Add Appartement</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Floor</th>
            <th>Number</th>
            <th>Block</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppartements.map((appartement) => (
            <tr key={appartement.id}>
              <td>{appartement.id}</td>
              <td>{appartement.floor}</td>
              <td>{appartement.number}</td>
              <td>{appartement.block ? appartement.block.name : '-'}</td>
              <td>
                <button className="details-button" onClick={() => openModal('details', appartement)}>Details</button>
                <button className="update-button" onClick={() => openModal('update', appartement)}>Update</button>
                <button className="delete-button" onClick={() => handleDelete(appartement.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Appartements Modal"
      >
        {modalType === 'details' && currentAppartement && (
          <div className="modal">
            <h2>Appartement Details</h2>
            <p>ID: {currentAppartement.id}</p>
            <p>Floor: {currentAppartement.floor}</p>
            <p>Number: {currentAppartement.number}</p>
            <p>Block: {currentAppartement.block ? currentAppartement.block.name : '-'}</p>
            <button className="cancel-button" onClick={closeModal}>Close</button>
          </div>
        )}
        {(modalType === 'add' || modalType === 'update') && (
          <div className="modal">
            <h2>{modalType === 'add' ? 'Add Appartement' : 'Update Appartement'}</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Floor:</label>
                <input
                  type="text"
                  name="floor"
                  value={currentAppartement.floor}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Number:</label>
                <input
                  type="number"
                  name="number"
                  value={currentAppartement.number}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Block:</label>
                <select
                  name="block_id"
                  value={currentAppartement.block_id}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Block</option>
                  {blocks.map((block) => (
                    <option key={block.id} value={block.id}>{block.name}</option>
                  ))}
                </select>
              </div>
              <button className="submit-button" type="submit">Submit</button>

              <button className="cancel-button" type="button" onClick={closeModal}>Cancel</button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Appartements;
