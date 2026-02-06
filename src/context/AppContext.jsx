import { createContext, useState } from "react";
import { pizzaCart } from "../assets/js/pizzas";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [email, setEmail] = useState("usuario@correo.cl");
  const [cart, setCart] = useState(pizzaCart);
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
        email,
        setEmail,
        cart,
        setCart,
        addPizza,
        removePizza,
        total,
        setLoading,
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
