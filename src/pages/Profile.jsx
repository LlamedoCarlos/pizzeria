import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Perfil de usuario</h2>
      <div className="profile-info">
        <label>Email:</label>
        <span>usuario@ejemplo.com</span>
      </div>
      <button className="logout-btn" onClick={() => alert("Cerrar sesión (a implementar)")}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;