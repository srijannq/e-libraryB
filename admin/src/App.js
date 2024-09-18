import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register2 from './Components/Register2';
import Call from './Adminpanel/Call';


const App = () => {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Register2 />} />
      <Route path="/call" element={<Call />} />
    </Routes>
  </Router>

    </div>
  );
};

export default App;
