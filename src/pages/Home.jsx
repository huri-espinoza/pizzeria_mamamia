import Header from "../components/header/Header";
import CardPizza from "../components/CardPizza";
import { pizzas } from '../assets/js/pizzas';

const Home = () => {
  return (
    <>
      <Header
        title="¡Pizzería Mamma Mia!"
        description="¡Tenemos las mejores pizzas que podrás encontrar!"
      />
      <main className="container my-5">
        <div className="row g-4">
          {pizzas.map((pizza, index) => (
            <div className="col-md-4" key={index}>
              <CardPizza pizza={pizza} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
