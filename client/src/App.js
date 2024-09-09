// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import Categories from './components/Categories';
import Popup from './pages/Popup';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/" element={<Categories />} />
          <Route path="/category/:popup" element={<Popup />} />
          <Route path="*" element={<NotFoundPage />}></Route>  {/*This route should always be the last one to catch all unmatched routes. 404 Page.*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
