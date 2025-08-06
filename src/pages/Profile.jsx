import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { email, getProfile, logout } = useUser();
  const [profileEmail, setProfileEmail] = useState(email || "");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
   
    const fetchProfile = async () => {
      const res = await getProfile();
      if (res.ok && res.data.email) {
        setProfileEmail(res.data.email);
        setMensaje("");
      } else {
        setMensaje("No autorizado o sesión expirada.");
      }
    };
    fetchProfile();
    
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <h2>Perfil de usuario</h2>
      {mensaje && <div className="mensaje">{mensaje}</div>}
      {profileEmail && (
        <div className="profile-info">
          <label>Email:</label>
          <span>{profileEmail}</span>
        </div>
      )}
      <button className="logout-btn" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;