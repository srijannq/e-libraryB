import React from 'react';
import './PopularBooks.css';

const popularBooks = [
  { id: 1, title: 'Popular Book 1', author: 'Author 1' },
  { id: 2, title: 'Popular Book 2', author: 'Author 2' },
  { id: 3, title: 'Popular Book 3', author: 'Author 3' },
  { id: 4, title: 'Popular Book 4', author: 'Author 4' },
  { id: 5, title: 'Popular Book 5', author: 'Author 5' },
  { id: 6, title: 'Popular Book 6', author: 'Author 6' },
  { id: 7, title: 'Popular Book 7', author: 'Author 7' },
  { id: 8, title: 'Popular Book 8', author: 'Author 8' },
  { id: 9, title: 'Popular Book 9', author: 'Author 9' },
  // Add more popular books here
];

const PopularBooks = () => {
  return (
    <div className="popular-books">
      <h2>Popular Books</h2>
      <div className="books-grid">
        {popularBooks.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBooks;
