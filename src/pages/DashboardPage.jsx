import React from 'react';
import UserProfile from '../components/UserProfile';
import BorrowedBooks from '../components/BorrowedBooks';
import BookSuggestions from '../components/BookSuggestions';
import ReadingHistory from '../components/ReadingHistory';
import AccountSettings from '../components/AccountSettings';
import './DashboardPage.css';

const DashboardPage = () => {
  const borrowedBooks = [
    { id: 1, title: 'Borrowed Book 1', author: 'Author 1', dueDate: '2024-08-01' },
    { id: 2, title: 'Borrowed Book 2', author: 'Author 2', dueDate: '2024-08-10' },
    { id: 3, title: 'Borrowed Book 3', author: 'Author 3', dueDate: '2024-08-11' },
    




    // Add more borrowed books here
  ];

  const suggestedBooks = [
    { id: 1, title: 'Suggested Book 1', author: 'Author 1' },
    { id: 2, title: 'Suggested Book 2', author: 'Author 2' },
    // Add more suggested books here
  ];

  const readingHistory = [
    { id: 1, title: 'History Book 1', author: 'Author 1', finishedDate: '2024-07-01' },
    { id: 2, title: 'History Book 2', author: 'Author 2', finishedDate: '2024-07-10' },
    // Add more reading history here
  ];

  return (
    <div className="dashboard-page">
      <UserProfile />
      <div className="dashboard-content">
        <section className="dashboard-section">
          <h2>Borrowed Books</h2>
          <BorrowedBooks books={borrowedBooks} />
        </section>
        <section className="dashboard-section">
          <h2>Book Suggestions</h2>
          <BookSuggestions books={suggestedBooks} />
        </section>
        <section className="dashboard-section">
          <h2>Reading History</h2>
          <ReadingHistory books={readingHistory} />
        </section>
        <section className="dashboard-section">
          <h2>Account Settings</h2>
          <AccountSettings />
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
