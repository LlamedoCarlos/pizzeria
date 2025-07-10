import React, { useState } from "react";
import { pizzaCart } from "../components/pizzas";
import "../assets/css/Cart.css"; 

export const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const aumentar = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const disminuir = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Detalles del pedido:</h2>
      <ul className="cart-list">
        {cart.map((pizza) => (
          <li key={pizza.id} className="cart-item">
            <img
              src={pizza.img}
              alt={pizza.name}
              className="cart-img"
            />
            <span className="cart-name">{pizza.name}</span>
            <span className="cart-price">${pizza.price.toLocaleString()}</span>
            <button className="cart-btn" onClick={() => disminuir(pizza.id)}>
              -
            </button>
            <span className="cart-quantity">{pizza.quantity}</span>
            <button className="cart-btn" onClick={() => aumentar(pizza.id)}>
              +
            </button>
          </li>
        ))}
      </ul>
      <h3 className="cart-total">Total: ${total.toLocaleString()}</h3>
      <button className="btn-pay">Pagar</button>
    </div>
  );
};