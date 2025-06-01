import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header className="banner-principal d-flex align-items-center justify-content-center">
      <div className="text-center text-white">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p className="lead">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
        <hr className="my-4" />
      </div>
    </header>
  );
}

export default Banner;