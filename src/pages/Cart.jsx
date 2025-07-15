import React from "react";
import { useCart } from "../context/CardContext.jsx";
import { useUser } from "../context/UserContext"; 
import "../assets/css/Cart.css";

export const Cart = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart, total } = useCart();
  const { token } = useUser(); 

  if (cart.length === 0) {
    return <p className="cart-title">El carrito está vacío.</p>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Detalles del pedido:</h2>
      <ul className="cart-list">
        {cart.map((pizza) => (
          <li key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="cart-img" />
            <span className="cart-name">{pizza.name}</span>
            <span className="cart-price">${pizza.price.toLocaleString()}</span>
            <button className="cart-btn" onClick={() => removeFromCart(pizza.id)}>
              -
            </button>
            <span className="cart-quantity">{pizza.quantity}</span>
            <button className="cart-btn" onClick={() => addToCart(pizza)}>
              +
            </button>
            <button
              className="cart-btn cart-btn-delete"
              onClick={() => deleteFromCart(pizza.id)}
              style={{ marginLeft: "10px", background: "#e74c3c", color: "#fff" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h3 className="cart-total">Total: ${total.toLocaleString()}</h3>
      <button className="btn-pay" disabled={!token}>Pagar</button>
     
    </div>
  );
};