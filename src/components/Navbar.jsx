import { Link, useNavigate } from "react-router-dom";
import '../assets/css/navbar.css';
import { useCart } from "../context/CardContext.jsx";
import { useUser } from "../context/UserContext"; 

export const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // o "/" si prefieres llevarlo al home
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <span className="navbar-brand mb-0 h1 pointer">Pizzeria Mamma Mia!</span>
      <div className="d-flex flex-grow-1">
        <div className="d-flex gap-3">
          <Link to="/" className="btn btn-outline-light">🍕 Home</Link>
          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline-light">🔓 Profile</Link>
              <button
                className="btn btn-outline-light"
                onClick={handleLogout}
              >
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light">🔐 Login</Link>
              <Link to="/register" className="btn btn-outline-light">🔐 Register</Link>
            </>
          )}
        </div>
        <div className="ms-auto">
          <Link to="/cart" className="btn cart-total">
            🛒 Total: ${total.toLocaleString()}
          </Link>
        </div>
      </div>
    </nav>
  );
};