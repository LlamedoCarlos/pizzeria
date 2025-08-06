import React, { useState } from 'react';
import '../assets/css/login.css';
import { useUser } from '../context/UserContext'; 
import { useNavigate } from 'react-router-dom'; 

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(false);
  const { login } = useUser(); 
  const navigate = useNavigate(); 

  const mayuscula = /[A-Z]/;
  const minuscula = /[a-z]/;
  const numero = /\d/;
  const especial = /[^A-Za-z0-9]/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMensaje('Todos los campos son obligatorios');
      return;
    }
    if (password.length < 6) {
      setMensaje('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    if (!mayuscula.test(password)) {
      setMensaje('La contraseña debe tener al menos una mayúscula');
      return;
    }
    if (!minuscula.test(password)) {
      setMensaje('La contraseña debe tener al menos una minúscula');
      return;
    }
    if (!numero.test(password)) {
      setMensaje('La contraseña debe tener al menos un número');
      return;
    }
    if (!especial.test(password)) {
      setMensaje('La contraseña debe tener al menos un carácter especial');
      return;
    }

    setCargando(true);

    // --- USANDO EL CONTEXTO ---
    const result = await login(email, password);
    if (result.ok) {
      setMensaje('¡Inicio de sesión exitoso!');
     
      setTimeout(() => navigate('/profile'), 1000);
    } else {
      setMensaje(result.error || "Error al iniciar sesión");
    }

    setCargando(false);
  };

  return (
    <div className="form-login-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">Iniciar Sesión</h2>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Escribe tu email"
          autoComplete="email"
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Escribe tu contraseña"
          autoComplete="current-password"
        />
        <button type="submit" disabled={cargando}>
          {cargando ? "Ingresando..." : "Ingresar"}
        </button>
        {mensaje && (
          <div className={`mensaje ${mensaje === "¡Inicio de sesión exitoso!" ? "exito" : "error"}`}>
            {mensaje}
          </div>
        )}
      </form>
    </div>
  );
};