import PropTypes from "prop-types";

export const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card card-pizza shadow-sm mb-4">
      <img
        src={img}
        className="card-img-top"
        alt={`Pizza ${name}`}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-2">{name}</h5>
        <p className="mb-1 text-muted" style={{ fontSize: "0.95rem" }}>
          Ingredientes:
        </p>
        <ul>
          {ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
        <p className="fw-bold fs-5 mb-3" style={{ marginTop: "auto" }}>
          Precio: ${price.toLocaleString()}
        </p>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm flex-fill">
            Ver Más &gt;&gt;
          </button>
          <button className="btn btn-dark btn-sm flex-fill">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};