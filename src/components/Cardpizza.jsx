import React from 'react';
import PropTypes from 'prop-types';
import '../main.css';

function PizzaCard({ title, cost, toppings, image }) {
  return (
    <div className="tarjeta-pizza">
      <div className="tarjeta">
        <img className="border rounded" src={image} alt={title} />
        <h2 className="text-start fs-3 m-2">{title}</h2>
        <hr />
        <p>Ingredientes:</p>
        <ul className="lista-ingredientes">
          {toppings.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <hr />
        <p className="precio-pizza fs-4 fw-bold">Precio: ${cost.toLocaleString()}</p>
      </div>
    </div>
  );
}

PizzaCard.propTypes = {
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  toppings: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
};

export default PizzaCard;