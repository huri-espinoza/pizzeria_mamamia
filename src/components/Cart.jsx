import { useState } from "react";
import { pizzaCart } from "../assets/js/pizzas";
import { formatNumber } from "../helpers/formatNumber";


const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const addPizza = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCart(updatedCart);
  };

  const removePizza = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, { price, count }) => sum + price * count, 0);

  return (
    <div className="container mt-4" style={{ height: "620px" }}>
      <h4 className="mb-4">Detalles del pedido:</h4>
      {cart.map(({ id, img, name, price, count }) => (
        <div
          key={id}
          className="d-flex align-items-center justify-content-between mb-3"
        >
          <div className="d-flex align-items-center gap-3">
            <img src={img} alt={name} width="60" className="rounded" />
            <strong className="text-capitalize">{name}</strong>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span className="fw-bold text-success">${formatNumber(price)}</span>

            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => removePizza(id)}
            >
              -
            </button>

            <span className="fw-bold">{count}</span>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => addPizza(id)}
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
