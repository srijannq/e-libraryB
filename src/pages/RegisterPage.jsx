// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebaseConfig'; // Import Firebase config
import { signInWithPopup } from 'firebase/auth';
import './AuthPage.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and contain at least one uppercase letter.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Handle registration logic here
    console.log('Registering with', username, email, password);
    setError(''); // Clear any previous error messages
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('User signed in with Google:', user);
      navigate('/dashboard'); // Redirect after sign-in
    } catch (error) {
      console.error('Error signing in with Google', error);
      setError(`Failed to sign in with Google: ${error.message}`);
    }
  };

  return (
    <div className="auth-page container-fluid d-flex align-items-center justify-content-center">
      <div className="auth-container card shadow-lg p-4">
        <h1 className="text-center mb-4">Register</h1>
        <form onSubmit={handleRegister}>
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          <div className="form-group mb-3 position-relative">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
              type={passwordVisible ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="position-absolute eye-icon"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              <i className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`} />
            </span>
          </div>
          <div className="form-group mb-3 position-relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              className="form-control"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="position-absolute eye-icon"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              <i className={`fa ${confirmPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`} />
            </span>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Register</button>
        </form>
        <button onClick={handleGoogleSignIn} className="btn btn-danger btn-block mt-3">
          Sign Up with Google
        </button>
        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
