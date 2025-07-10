import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cart } from './pages/Cart.jsx';
import { CartProvider } from './context/CardContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { PizzasProvider } from './context/PizzasContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PizzasProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </PizzasProvider>
  </StrictMode>,
)
