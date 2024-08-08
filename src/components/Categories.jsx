import React from 'react';
import './Categories.css';
import { useNavigate } from 'react-router-dom';

const categories = [
  'Fiction',
  'Non-Fiction',
  'Science',
  'Technology',
  'History',
  'Biography',
  // Add more categories here
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} 
          className="category-card"
          onClick={() => handleCardClick(category)}
            style={{ cursor: 'pointer' }}
          >
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
