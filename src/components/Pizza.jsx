import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importa useParams

const Pizza = () => {
  const { id } = useParams(); // Obtené el id de la URL
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener la pizza");
        }
        return response.json();
      })
      .then((data) => {
        setPizza(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]); // Ahora depende del id

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <div className="container py-5">
      <div className="card" style={{ maxWidth: "540px", margin: "auto" }}>
        <img
          src={pizza.img}
          className="card-img-top"
          alt={pizza.name}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h2 className="card-title">{pizza.name}</h2>
          <h4 className="card-subtitle mb-2 text-muted">${pizza.price}</h4>
          <p className="card-text">{pizza.desc}</p>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
          <button className="btn btn-success mt-2">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;