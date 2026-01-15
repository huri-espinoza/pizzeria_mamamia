import { createContext, useState, useEffect } from "react";
import { pizzaCart } from "../assets/js/pizzas";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [email, setEmail] = useState("usuario@correo.cl");
  const [cart, setCart] = useState(pizzaCart);
  const [pizza, setPizza] = useState(null);
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al obtener pizzas:", error);
    } finally {
      setLoading(false);
    }
  };

  const getPizza = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error al obtener pizzas:", error);
    } finally {
      setLoading(false);
    }
  };

  const addPizza = (pizza) => {
  setCart((prevCart) => {
    const exists = prevCart.find((p) => p.id === pizza.id);

    return exists
      ? prevCart.map((p) =>
          p.id === pizza.id ? { ...p, count: p.count + 1 }: p
        )
      : [...prevCart, { ...pizza, count: 1 }];
  });
};

  const removePizza = (pizza) => {
    const updatedCart = cart.map((p) =>
        p.id === pizza.id ? { ...p, count: p.count - 1 } : p
      )
      .filter((p) => p.count > 0);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, { price, count }) => sum + price * count, 0);

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        email,
        setEmail,
        cart,
        addPizza,
        removePizza,
        total,
        pizza,
        getPizza,
        pizzas,
        getPizzas,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
