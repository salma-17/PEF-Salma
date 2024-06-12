import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Appartements from './Appartements'; // Assuming the path to the Appartements component

const ParentComponent = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    fetchBlocks();
  }, []);

  const fetchBlocks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/blocks');
      setBlocks(response.data);
    } catch (error) {
      console.error('Error fetching blocks:', error);
    }
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Appartements blocks={blocks} />
    </div>
  );
};

export default ParentComponent;
