import headerBg from "../assets/img/Header.jpg";

export const Header = () => {
  return (
    <header
      style={{
        position: "relative", // Necesario para el fondo y el contenido
        backgroundImage: `url(${headerBg})`,
        backgroundSize: "cover", // Asegura que la imagen cubra todo el header
        backgroundPosition: "center", // Centra la imagen
        color: "white", // Color del texto
        padding: "4rem 0",
        width: "100vw", // Ocupa todo el ancho de la ventana
        marginLeft: "calc(-50vw + 50%)", // Elimina margin si el header está dentro de un container
        overflow: "hidden", // Evita que el contenido se desborde
      }}
    >
      <div
        style={{
          position: "absolute", // Cubre todo el header
          top: 0,
          left: 0,
          right: 0,
          bottom: 0, // Cubre todo el header
          background: "rgba(0,0,0,0.5)", // Fondo oscuro semitransparente
          zIndex: 1, // Asegura que el fondo esté detrás del contenido
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <h1>¡Bienvenidos a Pizzeria Mamma Mia!</h1>
        <p>
          La mejor pizza de la ciudad, hecha con ingredientes frescos y amor.
        </p>
        <hr
          style={{
            width: "70vw", // ancho de la línea
            border: "1px solid #fff", // color y grosor
            margin: "26px auto 0", // centrado y espacio arriba
          }}
        />
      </div>


      
    </header>
    
  );
};
