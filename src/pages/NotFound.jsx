import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => (
  <div className="notfound-container">
    <h1>¡404!</h1>
    <p className="emoji">🍕😱🍕</p>
    <h2>¡Oh no! La pizza que buscas no está en el horno...</h2>
    <p>Parece que te perdiste en el menú de Mamma Mía. <br /> 
    ¡Pero no te preocupes! Siempre puedes volver a casa y pedir otra pizza.</p>
    <Link to="/" className="home-link">Volver al inicio</Link>
    <div className="notfound-footer">
      <span>¿Se te antoja una pizza? 👀</span>
    </div>
  </div>
);

export default NotFound;