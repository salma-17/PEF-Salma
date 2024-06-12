// src/components/LayoutOwner.js
import React from 'react';
import NavbarOwner from './NavbarOwner'; // Navbar spécifique pour les propriétaires
import { Outlet } from 'react-router-dom';

const LayoutOwner = () => {
    return (
        <div>
            <div>
                <NavbarOwner />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default LayoutOwner;
