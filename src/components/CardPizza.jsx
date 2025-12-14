import { formatNumber } from "../helpers/formatNumber";

const CardPizza = ({ pizza }) => {
  const {name, img, ingredients, price} = pizza;
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <hr />

        <p className="text-muted mb-1 text-center">Ingredientes:</p>
        <p className="text-center">
          <ul className="list-unstyled">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        </p>

        <hr />

        <h5 className="text-center">Precio: ${formatNumber(price)}</h5>
        <div className="d-flex justify-content-around">
          <button className="btn btn-outline-secondary btn-sm">
            Ver Más 👀
          </button>
          <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
