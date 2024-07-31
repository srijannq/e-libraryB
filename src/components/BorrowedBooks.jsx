import React from 'react';
import './BorrowedBooks.css';

const BorrowedBooks = ({ books, loading, error }) => {
  return (
    <div className="borrowed-books">
      {loading ? (
        <p className="loading">Loading borrowed books...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : books.length === 0 ? (
        <p className="no-books">No borrowed books found.</p>
      ) : (
        books.map((book) => (
          <div key={book.id} className="borrowed-book-item">
            <div className="book-details">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <p className="due-date">Due Date: {book.dueDate}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BorrowedBooks;
