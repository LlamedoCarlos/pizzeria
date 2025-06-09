import React from 'react';
import Header from './Header';
import Cardpizza from './Cardpizza'; // ✅ Corregido: sin './components/' porque están en la misma carpeta
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  // Datos de las pizzas
  const pizzas = [
    {
      id: 1,
      name: "Pizza Napolitana",
      price: 5950,
      ingredients: ["mozzarella", "tomate", "jamón", "orégano"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
    },
    {
      id: 2,
      name: "Pizza Española",
      price: 6950,
      ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
    },
    {
      id: 3,
      name: "Pizza Pepperoni",
      price: 6950,
      ingredients: ["mozzarella", "pepperoni", "orégano"],
      img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"}
  ];

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <Cardpizza 
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;