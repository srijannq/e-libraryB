import React from 'react';
import './Categories.css';

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
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
