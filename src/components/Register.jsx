import React, { useState } from 'react';
import './Register.css';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Expresión regular para validar la contraseña
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: campos vacíos
    if (!email || !password || !confirmPassword) {
      setMensaje('Todos los campos son obligatorios');
      return;
    }
    // Validación: mínimo 6 caracteres
    if (password.length < 6) {
      setMensaje('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    // Validación: al menos una mayúscula, una minúscula, un número y un carácter especial
    if (!passwordRegex.test(password)) {
      setMensaje('La contraseña debe tener al menos una mayúscula, una minúscula, un número y un caracter especial');
      return;
    }
    // Validación: las contraseñas deben coincidir
    if (password !== confirmPassword) {
      setMensaje('Las contraseñas no coinciden');
      return;
    }

    // Si todo está bien
    setMensaje('¡Registro exitoso!');
    // Aquí podrías limpiar los campos si quieres:
    // setEmail('');
    // setPassword('');
    // setConfirmPassword('');
  };

  return (
    <div className="form-register-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">Registrarse</h2>
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
          autoComplete="new-password"
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirma tu contraseña"
          autoComplete="new-password"
        />
        <button type="submit">Registrarse</button>
        <p className="form-link">
          ¿Ya tienes una cuenta? <a className='link' href="/login">Inicia sesión</a>
        </p>
        {mensaje && (
          <div className={`mensaje ${mensaje === "¡Registro exitoso!" ? "exito" : "error"}`}>
            {mensaje}
          </div>
        )}
      </form>
    </div>
  );
};