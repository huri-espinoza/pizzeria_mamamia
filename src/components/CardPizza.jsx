import { NavLink } from "react-router-dom";
import { formatNumber } from "../helpers/formatNumber";

const CardPizza = ({ pizza, addPizza }) => {
  const { id, name, img, ingredients, price } = pizza;
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <hr />

        <p className="text-muted mb-1 text-center">Ingredientes:</p>
        <ul className="text-center list-unstyled">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <hr />

        <h5 className="text-center">Precio: ${formatNumber(price)}</h5>
        <div className="d-flex justify-content-around">
          <NavLink to={`/pizza/${id}`} className="btn btn-outline-secondary btn-sm">
            Ver Más 👀
          </NavLink>
          <button className="btn btn-dark btn-sm" onClick={() => addPizza(pizza)}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
