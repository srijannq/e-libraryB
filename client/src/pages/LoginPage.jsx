// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css'; // Assuming you have shared CSS for auth pages
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing Font Awesome icons

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = (e) => {
    e.preventDefault();
    // Password validation: at least one uppercase letter and at least 8 characters long
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and contain at least one uppercase letter.');
      return;
    }

    // Handle login logic here
    console.log('Logging in with', email, password);
    setError(''); // Clear any previous error messages
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Logging in with Google');
  };

  return (
    <div className="auth-page container-fluid d-flex align-items-center justify-content-center">
      <div className="auth-container card shadow-lg p-4">
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          <div className="form-group mb-3 position-relative">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3 position-relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="position-absolute eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
          <button type="button" className="btn btn-danger btn-block mt-3" onClick={handleGoogleLogin}>
            <i className="fab fa-google mr-2"></i>Login with Google
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
