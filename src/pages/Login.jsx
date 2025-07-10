import React, { useState } from 'react';
import '../assets/css/login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

   // Expresiones regulares corregidas:
  const mayuscula = /[A-Z]/;
  const minuscula = /[a-z]/;
  const numero = /\d/;
  const especial = /[^A-Za-z0-9]/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: campos vacíos
    if (!email || !password) {
      setMensaje('Todos los campos son obligatorios');
      return;
    }
    // Validación: mínimo 6 caracteres
    if (password.length < 6) {
      setMensaje('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    // Validaciones una por una, con mensaje específico
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

    // Si todo está bien, muestra mensaje de éxito
    setMensaje('¡Inicio de sesión exitoso!');
    // Aquí podrías limpiar los campos o redirigir si quieres
    // setEmail('');
    // setPassword('');
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
        <button type="submit">Ingresar</button>
        {mensaje && (
          <div className={`mensaje ${mensaje === "¡Inicio de sesión exitoso!" ? "exito" : "error"}`}>
            {mensaje}
          </div>
        )}
      </form>
    </div>
  );
};