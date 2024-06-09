// src/pages/Profile.js
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector(state => state.auth.user);

    return (
        <div>
            <h2>Profil de l'utilisateur</h2>
            {user ? (
                <div>
                    <p>Nom: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Aucun utilisateur connecté.</p>
            )}
        </div>
    );
};

export default Profile;
