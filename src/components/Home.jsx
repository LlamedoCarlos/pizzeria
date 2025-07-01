import { Header } from "./Header";
import { CardPizza } from "./CardPizza";
import { pizzas } from "./pizzas";
import '../assets/css/cardpizza.css';

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="container py-5">
        <div className="d-flex flex-wrap justify-content-center gap-5">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};