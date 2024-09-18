import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">E-Library</Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
        <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
        <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
        <Link to="/Adregister" onClick={() => setIsOpen(false)}>Admin</Link>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} />
      </div>
    </nav>
  );
};

export default Navbar;
