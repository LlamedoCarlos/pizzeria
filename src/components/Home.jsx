import React, { useEffect, useState } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudieron obtener las pizzas");
        }
        return response.json();
      })
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center my-5">Cargando pizzas...</p>;
  if (error) return <p className="text-center my-5 text-danger">Error: {error}</p>;
  if (!pizzas.length) return <p className="text-center my-5">No hay pizzas para mostrar.</p>;

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Nuestras Pizzas</h1>
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <div className="card h-100">
              <img
                src={pizza.img}
                className="card-img-top"
                alt={pizza.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{pizza.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">${pizza.price}</h6>
                <p className="card-text">{pizza.desc}</p>
                <h6>Ingredientes:</h6>
                <ul>
                  {pizza.ingredients.map((ing, idx) => (
                    <li key={idx}>{ing}</li>
                  ))}
                </ul>
                <button className="btn btn-success mt-auto" disabled>
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;