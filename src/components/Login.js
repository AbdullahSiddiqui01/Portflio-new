import React, { useState } from 'react';
import '../styles/Login.css';
import { NavLink } from "react-router-dom"
import { loginUser } from '../services/authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({ email, password })
    };

    return (
        <div className="login-page"> {/* Added parent container */}
            <div className="login__container">
                <h2 className="login__title">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="login__input-group">
                        <label>Email:</label>
                        <input
                            type="text"
                            className="login__input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        // required
                        />
                    </div>
                    <div className="login__input-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            className="login__input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login__button">Login</button>
                </form>
                <div className="login__footer">
                    <p>Don't have an account? <NavLink to="/register">Sign Up</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
