import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Companys.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEdit } from '@fortawesome/free-solid-svg-icons';
import companyImage from '../assets/Company.jpg';

Modal.setAppElement('#root');

const Companys = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [companyData, setCompanyData] = useState({
        name: '',
        address: '',
        phone: '',
        description: ''
    });
    const [editedName, setEditedName] = useState('');
    const [editedAddress, setEditedAddress] = useState('');
    const [editedPhone, setEditedPhone] = useState('');
    const [editedDescription, setEditedDescription] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/company');
                if (response.ok) {
                    const data = await response.json();
                    setCompanyData(data);
                } else {
                    console.error('Failed to fetch company data');
                }
            } catch (error) {
                console.error('Error fetching company data:', error);
            }
        };

        fetchData();
    }, []);

    const handleEdit = () => {
        setEditedName(companyData.name);
        setEditedAddress(companyData.address);
        setEditedPhone(companyData.phone);
        setEditedDescription(companyData.description);
        setIsEditing(true);
    };

    const handleSave = async () => {
        const updatedCompany = {
            name: editedName,
            address: editedAddress,
            phone: editedPhone,
            description: editedDescription,
        };
    
        try {
            const response = await fetch('http://localhost:8000/api/company', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedCompany),
            });
    
            if (response.ok) {
                console.log('Company information updated successfully');
                // Optionally update the local state to reflect the changes immediately
                setCompanyData(updatedCompany);
                setIsEditing(false);
            } else {
                console.error('Failed to update company information');
            }
        } catch (error) {
            console.error('Error updating company:', error);
        }
    };
    

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <div className="company-card">
            <div className="company-content">
                <img src={companyImage} alt={companyData.name} className="company-image" />
                <div className="company-info">
                    <h2> {companyData.name}</h2>
                    <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />  {companyData.address}
                    </p>
                    
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> {companyData.phone}
                    </p>
                    {!isEditing && (
                        <button onClick={handleEdit}>
                            <FontAwesomeIcon icon={faEdit} /> Edit
                        </button>
                    )}
                </div>
            </div>
            <div className="about-us">
                <h2>A Propos De Nous</h2>
                <p>
                     {companyData.description}
                </p>
            </div>
            <Modal
                isOpen={isEditing}
                onRequestClose={handleCancel}
                contentLabel="Edit Company Information"
                className="modal"
                overlayClassName="overlay"
            >
                <h2>Edit Company Information</h2>
                <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    placeholder="Company Name"
                />
                <input
                    type="text"
                    value={editedAddress}
                    onChange={(e) => setEditedAddress(e.target.value)}
                    placeholder="Address"
                />
                <input
                    type="text"
                    value={editedPhone}
                    onChange={(e) => setEditedPhone(e.target.value)}
                    placeholder="Phone"
                />
                <textarea
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    placeholder="Description"
                ></textarea>
                <button className="save" onClick={handleSave}>Save</button>
                <button className="cancel" onClick={handleCancel}>Cancel</button>
            </Modal>
        </div>
    );
};

export default Companys;
