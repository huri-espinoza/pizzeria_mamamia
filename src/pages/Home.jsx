import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPizzas();
  }, []);

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

  return (
    <>
      <Header
        title="¡Pizzería Mamma Mia!"
        description="¡Tenemos las mejores pizzas que podrás encontrar!"
      />
      <main className="container my-5">
        {loading ? (
          <p className="text-center">Cargando pizzas...</p>
        ) : (
          <div className="row g-4">
            {pizzas.map((pizza, index) => (
              <div className="col-md-4" key={index}>
                <CardPizza pizza={pizza} />
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
