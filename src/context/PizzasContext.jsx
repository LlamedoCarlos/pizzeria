import { createContext, useContext, useEffect, useState } from "react";

const PizzasContext = createContext();

export const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => {
        if (!response.ok) throw new Error("No se pudieron obtener las pizzas");
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

  return (
    <PizzasContext.Provider value={{ pizzas, loading, error }}>
      {children}
    </PizzasContext.Provider>
  );
};

export const usePizzas = () => useContext(PizzasContext);