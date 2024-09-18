// src/pages/HomePage.js
import React from 'react';
import WelcomeMessage from '../components/WelcomeMessage';
import SearchBar from '../components/SearchBar';
import PopularBooks from '../components/PopularBooks';
import RecentlyAddedBooks from '../components/RecentlyAddedBooks';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
     <Navbar />
      <WelcomeMessage />
      <SearchBar />
      <PopularBooks />
      <RecentlyAddedBooks />
      <Categories />
      <Footer />
    </div>
  );
};

export default HomePage;
