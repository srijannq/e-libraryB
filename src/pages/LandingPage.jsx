import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section text-center text-white">
        <div className="hero-content container">
          <h1 className="display-4">Welcome to the E-Library</h1>
          <p className="lead">Your gateway to a world of books and knowledge.</p>
          <div className="hero-buttons mt-4">
            <Link to="/login" className="btn btn-outline-light btn-lg mx-2">Login</Link>
            <Link to="/register" className="btn btn-outline-light btn-lg mx-2">Sign Up</Link>
            <Link to="/home" className="btn btn-outline-light btn-lg mx-2">Enter Library</Link>
          </div>
        </div>
      </div>
      <div className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Features</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature card p-4 mb-4">
                <h3>Vast Collection</h3>
                <p>Access thousands of books across various genres and categories.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature card p-4 mb-4">
                <h3>Easy Search</h3>
                <p>Find the books you love with our intuitive search functionality.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature card p-4 mb-4">
                <h3>User-Friendly</h3>
                <p>Enjoy a seamless and engaging user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Testimonials</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial card p-4 mb-4">
                <p className="mb-2">"The best online library I've ever used!"</p>
                <p className="heart">&hearts; Sikandar</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial card p-4 mb-4">
                <p className="mb-2">"A fantastic resource for book lovers."</p>
                <p className="heart">&hearts; Raiqa Raza</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial card p-4 mb-4">
                <p className="mb-2">"Easy to navigate and a great selection of books."</p>
                <p className="heart">&hearts; Amit Pal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
