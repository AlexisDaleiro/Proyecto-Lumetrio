import React from "react";
import Contacto from "./contacto";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    const telefono = "+598 095673109"; // número de teléfono para copiar o agregar contacto

    if (navigator.clipboard) {
      navigator.clipboard.writeText(telefono);
      alert("Número copiado al portapapeles: " + telefono);
    } else {
      const input = document.createElement("input");
      input.setAttribute("value", telefono);
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      alert("Número copiado al portapapeles: " + telefono);
    }
  };

  render() {
    return (
      <>
        <footer className="pie-pagina">
          <div className="grupo-1">
            <div className="box">
              <h2>Sobre mi</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                deleniti!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                deleniti!
              </p>

              <iframe
                title="Mapa de ubicación"
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed/v1/place?q=Montevideo+Departamento+de+Montevideo,+Uruguay&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </div>
            <div className="box">
              <h2>Redes sociales y Contacto</h2>
              <div id="arriba" className="red-social">
                <a
                  href="https://www.facebook.com/Rodrigo.daleiro/"
                  className="fa-brands fa-facebook"
                ></a>
                <a
                  href="https://www.instagram.com/heartless_nmw/"
                  className="fa-brands fa-instagram"
                ></a>
                <a
                  href="https://www.linkedin.com/in/alexis-rodrigo-daleiro-cabrera-6b7021175/"
                  className="fa-brands fa-linkedin-in"
                ></a>
                <a
                  href="https://wa.me/+598095673109"
                  className="fa-brands fa-whatsapp"
                ></a>
                <a
                  href="#mantenerseAca"
                  className="fa-solid fa-mobile"
                  onClick={this.handleClick}
                ></a>
              </div>
            </div>
            <div className="box">
              <Contacto />
            </div>
          </div>
          <div className="grupo-2">
            <small>
              &copy; 2023<b> Alexis Daleiro </b> - Todos los derechos reservados
            </small>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
