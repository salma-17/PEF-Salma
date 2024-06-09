// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='row'>
            <div className='col-2'>
                <Navbar />
            </div>
            <div className='col-10'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
