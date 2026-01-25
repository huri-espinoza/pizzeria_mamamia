import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const {setLoading, loading, addPizza} = useContext(AppContext);
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/pizzas/${id}`
        );
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la pizza", error);
      } finally {
        setLoading(false);
      }
    };

    getPizza();
  }, [id]); 

   if (loading) {
    return (
      <div className="container text-center mt-5">
        <p>Cargando pizza...</p>
      </div>
    );
  }

  if (!pizza) {
    return (
      <div className="container text-center mt-5">
        <p>Pizza no encontrada</p>
      </div>
    );
  }

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
