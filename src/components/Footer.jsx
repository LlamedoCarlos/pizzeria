export const Footer = () => (
  <footer
    className="bg-dark text-light text-center py-3"
    style={{
      borderTop: "3px solid #1386c6",
      fontSize: "1rem",
      marginTop: "auto",
      letterSpacing: "0.5px"
    }}
  >
    <div>
      ©2021 - Pizzería Mamma Mia! - Todos los derechos reservados
    </div>
    <div style={{ fontSize: "0.95em", marginTop: "4px" }}>
      Contacto: <a href="mailto:contacto@mammamia.com" className="text-info" style={{ textDecoration: "none" }}>contacto@mammamia.com</a> | Tel: 11 1234-5678
    </div>
  </footer>
);