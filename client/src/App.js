import React from 'react';
import { BrowserRouter as Router, Routes, Route } from
'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Home from './pages/home/Home.js';
import Login from './components/Login'
import Footer from './components/footer/Footer.js';
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
