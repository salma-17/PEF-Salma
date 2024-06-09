// src/login/SignUp.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/authActions';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.error);

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userData.password !== userData.passwordConfirm) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }

        dispatch(register(userData));
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2>Inscription</h2>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label htmlFor="name">Nom:</label>
                    <input
                        type="text"
                        id="name"
                        value={userData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe:</label>
                    <input
                        type="password"
                        id="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordConfirm">Confirmer le mot de passe:</label>
                    <input
                        type="password"
                        id="passwordConfirm"
                        value={userData.passwordConfirm}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="signup-button">S'inscrire</button>
                <div className="signup-links">
                    <Link to="/signin">connecte</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
