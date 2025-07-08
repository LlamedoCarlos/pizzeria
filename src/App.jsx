
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Home  from './components/Home'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Register } from './components/Register';
import { Login } from './components/Login';
import {Cart } from "./components/Cart";
import Pizza from './components/pizza';
import { BrowserRouter, Routes, Route } from "react-router-dom";





  export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} /> {/* Ruta dinámica */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};