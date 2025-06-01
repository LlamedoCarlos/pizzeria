import React from "react";
import "./Card.css";

function Card({ nombre, ingredientes, precio, imagen }) {
  return (
    <div className="card h-100 shadow">
      <img src={imagen} className="card-img-top card-img-uniform" alt={nombre} />
      <div className="card-body d-flex flex-column h-100">
        <h5 className="card-title">{nombre}</h5>
        <ul className="list-unstyled mb-3 flex-grow-1">
          {ingredientes.map((ing, i) => (
            <li key={i}>🍕 {ing}</li>
          ))}
        </ul>
        <div className="text-center mb-3">
          <span className="fw-bold fs-4">${precio}</span>
        </div>
        <div className="d-flex gap-5 justify-content-center mt-auto">
          <button className="btn btn-outline-dark">Ver más</button>
          <button className="btn btn-dark">Agregar</button>
        </div>
      </div>
    </div>
  );
}

export default Card;