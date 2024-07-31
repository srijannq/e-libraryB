// src/components/BookSuggestions.js
import React from 'react';
import './BookSuggestions.css';

const BookSuggestions = ({ books }) => {
  return (
    <div className="book-suggestions">
      {books.map((book) => (
        <div key={book.id} className="suggested-book-item">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookSuggestions;
