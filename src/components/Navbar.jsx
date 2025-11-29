import { formatNumber } from "../helpers/formatNumber";

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="d-flex align-items-center gap-2">
        <span className="navbar-brand mb-0 fw-bold">Pizzería Mamma Mia!</span>
        <button className="btn btn-outline-light btn-sm">🍕 Home</button>
        {!token && (
          <>
            <button className="btn btn-outline-light btn-sm">🔐 Login</button>
            <button className="btn btn-outline-light btn-sm">📝 Register</button>
          </>
        )}
        {token && (
          <>
            <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
            <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
          </>
        )}
      </div>

      <button className="btn btn-info btn-sm">🛒 Total: ${formatNumber(total)}</button>
    </nav>
  );
};

export default Navbar;
