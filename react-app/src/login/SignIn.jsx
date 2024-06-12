import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/authActions';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const type_id = useSelector((state) => state.auth.user.type_id || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('type_id after login:', type_id);

    dispatch(login({ email, password }))
      .then(() => {
        if (type_id === null) {
          navigate('/signin'); // Redirect to login page if type_id is null
          return;
        }
        else if (type_id === 1) {
          navigate('/layoutOwner'); // Redirect to Owner layout
        } else if (type_id === 0) {
          navigate('/layoutAdmin'); // Redirect to Admin layout
        }
      })
      .catch(() => {});
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2>Se connecter</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Courriel:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="type_id">type_id:</label>
          <input
            type="type_id"
            id="type_id"
            value={type_id}
            required
          />
        </div> */}
        <button type="submit" className="signin-button">Se connecter</button>
        <div className="signin-links">
          <Link to="/signup">Inscription</Link>
          <Link to="/forgot-password">Mot de passe oublié ?</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;