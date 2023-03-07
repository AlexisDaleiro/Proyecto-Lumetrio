import React from "react";
import { Link } from "react-router-dom";
import Footer from "../componentes/footer";
import Skills from "../componentes/skills";
import Portafolio from "../componentes/Portafolio";
import Presentacion from "../componentes/bienvenida";
import CV from "../componentes/CV";

function Inicio() {
  return (
    <>
      <div className="maininicio">
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
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

        <Presentacion />
        <div className="cv">
          <CV />
        </div>
        <h2 id="portafoliotitulo">Portafolio</h2>

        <div className="d-flex w-100">
          <Portafolio
            titulo="Facebook"
            descripcion="Actualmente llamado meta, facebook es una red social creada en 2004 por mark zucaritas"
            imagen="descarga.png"
            link="https://www.facebook.com"
            boton="primary "
          />
          <Portafolio
            titulo="Instagram"
            descripcion="Instagram es una aplicación y red social de origen estadounidense, propiedad de Meta. Creada por Kevin Systrom y Mike Krieger, fue lanzada el 6 de octubre de 2010."
            imagen="logoig.jfif"
            link="https://www.instagram.com"
            boton="danger "
          />
          <Portafolio
            titulo="League of Legends"
            descripcion="Juego horrible que siempre te vas sin ganas de jugar pero al otro dia volves para seguir perdiendo"
            imagen="lol.jfif"
            link="https://www.leagueoflegends.com/es-mx/"
            boton="warning "
          />
          
        </div>
        <Link to="/portafolio"> <button id="portafoliocompleto" className="btn btn-primary"> Portafolio Completo </button></Link>
        <div>
          <Skills />
        </div>

        <Footer />
      </div>
    </>
  );
}
export default Inicio;
