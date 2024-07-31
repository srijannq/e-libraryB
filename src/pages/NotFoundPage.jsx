// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        {/* Button to navigate back to the homepage */}
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
