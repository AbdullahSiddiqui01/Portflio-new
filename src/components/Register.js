import React, { useState } from 'react';
import { registerUser } from '../services/authService';
import "../styles/Register.css";
import { NavLink } from "react-router-dom"

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    try {
      const result = await registerUser(userData);
      console.log('User registered:', result);
      // Optionally, redirect to user page or show success message
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="register__container">
      <div className="register__card">
        <h2 className="register__title">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="register__input-group">
            <input
              type="text"
              placeholder="Name"
              className="register__input-field"
              onChange={(e) => setName(e.target.value)}
            // required
            />
          </div>
          <div className="register__input-group">
            <input
              type="text"
              placeholder="Email"
              className="register__input-field"
              onChange={(e) => setEmail(e.target.value)}
            // required
            />
          </div>
          <div className="register__input-group">
            <input
              type="password"
              placeholder="Password"
              className="register__input-field"
              onChange={(e) => setPassword(e.target.value)}
            // required
            />
          </div>
          <button type="submit" className="register__button">Register</button>
        </form>
        <div className="register__footer">
          <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Register; 