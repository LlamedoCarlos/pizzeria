import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false; // Cambia esto a `true` para simular un usuario autenticado

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="btn btn-primary">🍕 Home</button>
        {token ? (
          <>
            <button className="btn btn-primary">🔓 Profile</button>
            <button className="btn btn-primary">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-primary">🔐 Login</button>
            <button className="btn btn-primary">🔐 Register</button>
          </>
        )}
        <button className="btn btn-primary">🛒 Total: ${total.toLocaleString()}</button>
      </div>
    </nav>
  );
};

export default Navbar;
