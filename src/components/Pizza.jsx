import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPizza();
  }, []);

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

            <button className="btn btn-dark mt-3">Añadir al carrito</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pizza;
