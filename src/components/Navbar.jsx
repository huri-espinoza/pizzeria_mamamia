import { Link, NavLink } from "react-router-dom";
import { formatNumber } from "../helpers/formatNumber";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { SessionContext } from "../context/SessionContext";

const Navbar = () => {
  const { total } = useContext(AppContext);
  const { token, logout } = useContext(SessionContext);
  const handleLogout = () => {
    logout();
  };
  
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="d-flex align-items-center gap-2">
        <span className="navbar-brand mb-0 fw-bold">Pizzería Mamma Mia!</span>
        <NavLink className="btn btn-outline-light btn-sm" to="/">
          🍕 Home
        </NavLink>
        {!token && (
          <>
            <NavLink className="btn btn-outline-light btn-sm" to="/login">
              🔐 Login
            </NavLink>
            <NavLink className="btn btn-outline-light btn-sm" to="/register">
              📝 Register
            </NavLink>
          </>
        )}
        {token && (
          <>
            <NavLink className="btn btn-outline-light btn-sm" to="/profile">
              🔓 Profile
            </NavLink>
            <NavLink
              className="btn btn-outline-light btn-sm"
              onClick={handleLogout}
            >
              🔒 Logout
            </NavLink>
          </>
        )}
      </div>
      <NavLink className="btn btn-info btn-sm" to="/cart">
        🛒 Total: ${formatNumber(total)}
      </NavLink>
    </nav>
  );
};

export default Navbar;
