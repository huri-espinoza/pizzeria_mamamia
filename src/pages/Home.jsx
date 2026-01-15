import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Header from "../components/header/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const {pizzas, getPizzas, loading, addPizza} = useContext(AppContext);

  useEffect(() => {
    getPizzas();
  }, []);

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
                <CardPizza pizza = { pizza } addPizza = { addPizza } />
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
