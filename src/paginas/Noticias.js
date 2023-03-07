import React from "react";
import { Link } from "react-router-dom";
import Footer from "../componentes/footer";
import GNews from "../componentes/mediastack";
import Mediastack from "../componentes/mediastack";

export default class Noticias extends React.Component {
  render() {
    return (
      <>
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fa-sharp fa-solid fa-list-ul"></i>
          </label>
          <a className="enlace">
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
        <GNews />
        <Footer />
      </>
    );
  }
}
