// src/components/LayoutAdmin.js
import React from 'react';
import NavbarAdmin from './NavbarAdmin'; // Navbar spécifique pour les administrateurs
import { Outlet } from 'react-router-dom';

const LayoutAdmin = () => {
    return (
        <div className='row'>
            <div className='col-2'>
                <NavbarAdmin />
            </div>
            <div className='col-10'>
                <Outlet />
            </div>
        </div>
    );
};

export default LayoutAdmin;
