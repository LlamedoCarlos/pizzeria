import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import './index.css'; 
import './main.css';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="form-container">
        <Register />
        {/* <Login /> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;