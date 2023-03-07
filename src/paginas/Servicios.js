import React from "react";
import { Link } from "react-router-dom";
import Footer from "../componentes/footer";

export default class Servicios extends React.Component {
  render() {
    return (
      <>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <i className="fa-sharp fa-solid fa-list-ul"></i>
          </label>
          <a href="#" className="enlace">
            <img src="imagenes/logoalexis.png" alt="" className="logo" />
          </a>
          <ul>
            <li>
              <Link to="/"> Inicio </Link>
            </li>
            <li>
              <Link to="/portafolio"> Portafolio</Link>
            </li>
            <li>
              <Link to="/sobre-mi"> Sobre Mi</Link>
            </li>

            <li>
              <Link to="/noticias"> Noticias </Link>
            </li>
            <li>
              <Link to="/servicios"> Servicios </Link>
            </li>
          </ul>
        </nav>
        <div className="servicios">
          <h2>Mis servicios</h2>
          <p>
            {" "}
            Ofrezco servicios como programador Front-End, con conocimientos en
            React, Bootstrap y Tailwind.
            <br />
            También sé utilizar Python y SQL a un nivel un poco más bajo pero aceptable
          </p>
        </div>
        <Footer />
      </>
    );
  }
}
