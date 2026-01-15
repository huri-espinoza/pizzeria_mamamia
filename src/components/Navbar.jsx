import { Link } from "react-router-dom";
import { formatNumber } from "../helpers/formatNumber";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const {token, total} = useContext(AppContext);
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="d-flex align-items-center gap-2">
        <span className="navbar-brand mb-0 fw-bold">Pizzería Mamma Mia!</span>
        <Link className="btn btn-outline-light btn-sm" to="/">🍕 Home</Link>
        {!token && (
          <>
            <Link className="btn btn-outline-light btn-sm" to="/login">🔐 Login</Link>
            <Link className="btn btn-outline-light btn-sm" to="/register">📝 Register</Link>
          </>
        )}
        {token && (
          <>
            <Link className="btn btn-outline-light btn-sm" to="/profile">🔓 Profile</Link>
            <Link className="btn btn-outline-light btn-sm">🔒 Logout</Link>
          </>
        )}
      </div>

      <Link className="btn btn-info btn-sm" to="/cart">🛒 Total: ${formatNumber(total)}</Link>
    </nav>
  );
};

export default Navbar;
