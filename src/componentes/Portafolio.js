import React from "react";
import "../App.css";

export default class Portafolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrar: false,
    };
    this.cambiarMostrar = this.cambiarMostrar.bind(this);
  }

  cambiarMostrar() {
    this.setState((prevState) => ({
      mostrar: !prevState.mostrar,
    }
    ));
  }

  render() {
    const { titulo, imagen, descripcion, link, boton } = this.props;
    const { mostrar } = this.state;
    const clase = mostrar ? "d-block" : "d-none";
    const botonTexto = mostrar ? "Mostrar menos" : "Mostrar más";

    return (
      
      <>

        <div className="portafolio-container">
          <h4 className="margenTitulo">{titulo}</h4>
          <div className="main">
            <img
              src={"imagenes/" + imagen}
              alt="imagenes"
              width="120px"
              className="imagenP"
            />

            <button
              className="btn btn-primary btn-custom1 mb-2"
              onClick={this.cambiarMostrar}
            >
              {botonTexto}
            </button>

            <p className={clase}>
              {descripcion}{" "}
              <a
                href={link}
                target="_blank"
                className={"btn-custom btn btn-" + boton + clase}
              >
                Ir al Proyecto
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
}
