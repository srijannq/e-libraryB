import React from 'react';
import './RecentlyAddedBooks.css';

const recentlyAddedBooks = [
  { id: 1, title: 'New Book 1', author: 'Author 1' },
  { id: 2, title: 'New Book 2', author: 'Author 2' },
  { id: 3, title: 'New Book 3', author: 'Author 3' },
  { id: 4, title: 'New Book 4', author: 'Author 4' },
  { id: 5, title: 'New Book 5', author: 'Author 5' },
  { id: 6, title: 'New Book 6', author: 'Author 6' },
  { id: 7, title: 'New Book 7', author: 'Author 7' },
  { id: 8, title: 'New Book 8', author: 'Author 8' },
  { id: 9, title: 'New Book 9', author: 'Author 9' },
  // Add more books here
];

const RecentlyAddedBooks = () => {
  return (
    <div className="recently-added-books">
      <h2>Recently Added Books</h2>
      <div className="books-grid">
        {recentlyAddedBooks.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAddedBooks;
