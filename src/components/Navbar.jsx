import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>
      {/* Botones centrados */}
      <div className="mx-auto d-flex">
        <button className="btn btn-secondary mx-1">
          <i className="bi bi-house-door-fill"></i> Home
        </button>
        <button className="btn btn-secondary mx-1">
          <i className="bi bi-box-arrow-in-right"></i> Login
        </button>
        <button className="btn btn-secondary mx-1">
          <i className="bi bi-person-plus-fill"></i> Register
        </button>
      </div>
      {/* Total a la derecha */}
      <div className="ms-auto">
        <span className="badge bg-info text-dark fs-6">
          💵 Total: $25.000
        </span>
      </div>
    </nav>
  );
}

export default Navbar;