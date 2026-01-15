import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Pizza = () => {
  const {pizza, getPizza, loading, addPizza} = useContext(AppContext);

  useEffect(() => {
    getPizza();
  }, []);

  return (
    <div className="container mt-5" style={{ height: "600px" }}>
      {loading ? (
        <p className="text-center">Cargando pizza...</p>
      ) : (
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={pizza.img}
              alt={pizza.name}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6">
            <h2 className="text-capitalize">{pizza.name}</h2>

            <p className="text-muted">{pizza.desc}</p>

            <h4 className="mt-3">Ingredientes:</h4>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index} className="text-capitalize">
                   {ingredient}
                </li>
              ))}
            </ul>

            <h3 className="mt-4">
              Precio: ${pizza.price.toLocaleString("es-CL")}
            </h3>

            <button className="btn btn-dark mt-3" onClick={() => addPizza(pizza)}>Añadir al carrito</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pizza;
