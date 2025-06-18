import '../assets/css/navbar.css';

export const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <span className="navbar-brand mb-0 h1 pointer">Pizzeria Mamma Mia!</span>
      <div className="d-flex flex-grow-1">
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light">🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-outline-light">🔓 Profile</button>
              <button className="btn btn-outline-light">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light">🔐 Login</button>
              <button className="btn btn-outline-light">🔐 Register</button>
            </>
          )}
        </div>
        {/* Spacer para empujar el total a la derecha */}
        <div className="ms-auto">
          <button className="btn cart-total">
            🛒 Total: ${total.toLocaleString()}
          </button>
        </div>
      </div>
    </nav>
  );
};