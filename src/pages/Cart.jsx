import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { formatNumber } from "../helpers/formatNumber";


const Cart = () => {
  const {cart, addPizza, removePizza, total} = useContext(AppContext);
  return (
    <div className="container mt-4" style={{ height: "620px" }}>
      <h4 className="mb-4">Detalles del pedido:</h4>
      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex align-items-center justify-content-between mb-3"
        >
          <div className="d-flex align-items-center gap-3">
            <img src={pizza.img} alt={pizza.name} width="60" className="rounded" />
            <strong className="text-capitalize">{pizza.name}</strong>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span className="fw-bold text-success">${formatNumber(pizza.price)}</span>

            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => removePizza(pizza)}
            >
              -
            </button>

            <span className="fw-bold">{pizza.count}</span>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => addPizza(pizza)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <hr />

      <h4>
        Total: <span className="text-success">${formatNumber(total)}</span>
      </h4>

      <button className="btn btn-dark mt-3">Pagar</button>
    </div>
  );
};

export default Cart;
