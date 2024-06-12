import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './Blocks.css';

Modal.setAppElement('#root');

const Blocks = () => {
  const [blocks, setBlocks] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentBlock, setCurrentBlock] = useState({ id: null, name: '', apartments: [] });
  const [modalType, setModalType] = useState('');
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const apiUrl = 'http://localhost:8000/api/blocks';

  useEffect(() => {
    fetchBlocks();
  }, []);

  const fetchBlocks = async () => {
    try {
      const response = await axios.get(apiUrl);
      setBlocks(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching blocks:', error);
      setError('Error fetching blocks. Please try again.');
    }
  };

  const fetchApartmentsForBlock = async (blockId) => {
    try {
      const response = await axios.get(`${apiUrl}/${blockId}/apartments`);
      return response.data;
    } catch (error) {
      console.error('Error fetching apartments for block:', error);
      return [];
    }
  };

  const openModal = async (type, block = null) => {
    setModalType(type);
    if (block) {
      setCurrentBlock(block);
      if (type === 'details') {
        try {
          const apartments = await fetchApartmentsForBlock(block.id);
          console.log('Apartments:', apartments);
          setCurrentBlock((prevBlock) => ({ ...prevBlock, apartments: apartments || [] }));
        } catch (error) {
          console.error('Error fetching apartments:', error);
          setCurrentBlock((prevBlock) => ({ ...prevBlock, apartments: [] }));
        }
      }
    } else {
      setCurrentBlock({ id: null, name: '', apartments: [] });
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentBlock({ id: null, name: '', apartments: [] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentBlock({ ...currentBlock, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (modalType === 'add') {
      try {
        await axios.post(apiUrl, { name: currentBlock.name });
        fetchBlocks();
        setError(null);
      } catch (error) {
        console.error('Error adding block:', error);
        setError('Error adding block. Please try again.');
      }
    } else if (modalType === 'update') {
      try {
        await axios.put(`${apiUrl}/${currentBlock.id}`, { name: currentBlock.name });
        fetchBlocks();
        setError(null);
      } catch (error) {
        console.error('Error updating block:', error);
        setError('Error updating block. Please try again.');
      }
    }
    closeModal();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this block?')) {
      try {
        await axios.delete(`${apiUrl}/${id}`);
        fetchBlocks();
        setError(null);
      } catch (error) {
        console.error('Error deleting block:', error);
        setError('Error deleting block. Please try again.');
      }
    }
  };

  const filteredBlocks = blocks.filter((block) =>
    block.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blocks-container">
      <h1>Blocks Table</h1>
      {error && <div className="error">{error}</div>}

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <button className="add-button" onClick={() => openModal('add')}>
        Add blocks
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Appartments Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBlocks.map((block) => (
            <tr key={block.id}>
              <td>{block.id}</td>
              <td>{block.name}</td>
              <td>{block.apartments_count}</td>
              <td>
                <button className="details-button" onClick={() => openModal('details', block)}>
                  Details
                </button>
                <button className="update-button" onClick={() => openModal('update', block)}>
                  Update
                </button>
                <button className="delete-button" onClick={() => handleDelete(block.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Appartements Modal"
        style={{
          content: {
            width: '50%',
            margin: 'auto',
          },
        }}
      >
        {modalType === 'details' && currentBlock && (
          <div className="modal">
            <h2>Block Details</h2>
            <p>ID: {currentBlock.id}</p>
            <p>Name: {currentBlock.name}</p>
            <p>Appartments:</p>
            {currentBlock.apartments ? (
              <ul>
                {console.log('Apartments:', currentBlock.apartments)}
                {currentBlock.apartments.map((apartment) => (
                  <li key={apartment.id}>{apartment.floor}</li>
                ))}
              </ul>
            ) : (
              <p>No apartments available</p>
            )}

            <button onClick={closeModal}>Close</button>
          </div>
        )}
        {(modalType === 'add' || modalType === 'update') && currentBlock && (
          <div className="modal">
            <h2>{modalType === 'add' ? 'Add Block' : 'Update Block'}</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={currentBlock.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
              <button type="button" onClick={closeModal}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Blocks;
