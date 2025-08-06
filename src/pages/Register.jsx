import React, { useState } from 'react';
import '../components/Register.css';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const { register } = useUser();
  const navigate = useNavigate();

  const mayuscula = /[A-Z]/;
  const minuscula = /[a-z]/;
  const numero = /\d/;
  const especial = /[^A-Za-z0-9]/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password || !confirmPassword) {
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
    if (password !== confirmPassword) {
      setMensaje('Las contraseñas no coinciden');
      return;
    }

    // --- USANDO EL CONTEXTO ---
    const result = await register(email, password);
    if (result.ok) {
      setMensaje('¡Registro exitoso!');
      setTimeout(() => navigate('/profile'), 1000);
    } else {
      setMensaje(result.error || "Error al registrarse");
    }
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