import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Privacy from './Pages/Privacy';
import Login from './Components/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/loginpage' element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
