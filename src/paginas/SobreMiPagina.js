import React from "react";
import { Link } from "react-router-dom";
import Footer from "../componentes/footer";

export default class SobreMi extends React.Component {
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
    
      <Footer/>
      </>
        
    );
  }
}
