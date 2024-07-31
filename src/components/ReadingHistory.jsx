// src/components/ReadingHistory.js
import React from 'react';
import './ReadingHistory.css';

const ReadingHistory = ({ books }) => {
  return (
    <div className="reading-history">
      {books.map((book) => (
        <div key={book.id} className="history-book-item">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>Finished on: {book.finishedDate}</p>
        </div>
      ))}
    </div>
  );
};

export default ReadingHistory;
