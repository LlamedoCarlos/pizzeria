import React from "react";
import Card from "./Card";
// Puedes cambiar las imágenes locales si tienes en assets
import imgMuzzarella from "../assets/img/muzzarella.png";
import imgNapolitana from "../assets/img/napolitana.jpg";
import imgCuatroQuesos from "../assets/img/cuatro-quesos.jpg";

const pizzas = [
  {
    nombre: "Muzzarella",
    ingredientes: ["Queso muzzarella", "Salsa de tomate", "Aceitunas", "Orégano"],
    precio: 3800,
    imagen: imgMuzzarella,
  },
  {
    nombre: "Napolitana",
    ingredientes: ["Queso muzzarella", "Tomate en rodajas", "Ajo", "Aceitunas", "Orégano"],
    precio: 4100,
    imagen: imgNapolitana,
  },
  {
    nombre: "Cuatro quesos",
    ingredientes: ["Muzzarella", "Roquefort", "Parmesano", "Fontina", "Aceitunas"],
    precio: 4500,
    imagen: imgCuatroQuesos,
  },
  // Puedes agregar más pizzas aquí
];

function PizzaList() {
  return (
    <div className="container my-4">
      <div className="row g-4">
        {pizzas.map((pizza, i) => (
          <div className="col-12 col-sm-6 col-md-4" key={i}>
            <Card {...pizza} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PizzaList;