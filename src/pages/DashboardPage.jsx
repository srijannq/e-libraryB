import React from 'react';
import UserProfile from '../components/UserProfile';
import BorrowedBooks from '../components/BorrowedBooks';
import BookSuggestions from '../components/BookSuggestions';
import ReadingHistory from '../components/ReadingHistory';
import AccountSettings from '../components/AccountSettings';
import './DashboardPage.css';

const DashboardPage = () => {
    const borrowedBooks = [
      { id: 1, title: '400 Days', author: 'Chetan Bhagat', dueDate: '2024-08-01'},
      { id: 2, title: 'The Girl in room no.105', author: 'Chetan Bhagat', dueDate: '2024-08-10' },
      { id: 3, title: 'The Dhoni Touch', author: 'Bharat Sundaresan', dueDate: '2024-08-11' },
      
  
  
  
  
      // Add more borrowed books here
    ];
  
    const suggestedBooks = [
      { id: 1, title: 'Kalki', author: 'Kevin Missal' },
      { id: 2, title: 'Unlocking The Universe', author: 'Lucy Hawking,Stephen Hawking' },
      // Add more suggested books here
    ];
  
    const readingHistory = [
      { id: 1, title: 'One Arranged Murder', author: 'Chetan Bhagat', finishedDate: '2024-07-01' },
      { id: 2, title: 'The Story Of Tata', author: 'Peter Casey', finishedDate: '2024-07-10' },
      // Add more reading history here
    ];
  
    return (
      <div className="DashboardPage">
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