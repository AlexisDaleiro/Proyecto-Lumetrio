import React from "react";

export default class Contacto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nombre: "",
        email: "",
        mensaje: "",
      };
      this.submitted = this.submitted.bind(this);
      this.changed = this.changed.bind(this);
      this.changedE = this.changedE.bind(this);
      this.changedM = this.changedM.bind(this);
    }
    submitted(event) {
      alert(
        "Se envio el formulario de " +
          this.state.nombre +
          " con email " +
          this.state.email +
          " diciendo " +
          this.state.mensaje
      );
      event.preventDefault();
    }
  
    changed(event) {
      this.setState({
        nombre: event.target.value,
      });
    }
    changedE(event) {
      this.setState({
        email: event.target.value,
      });
    }
    changedM(event) {
      this.setState({
        mensaje: event.target.value,
      });
    }
  
    render() {
    return (
      <>
        <div className="container m-3 formulario">
          <h2>Contacto</h2>
          <form onSubmit={this.submitted}>
            <div className="form-group">
              <label className="mx-2"> Nombre </label>
              <input
                type="text"
                className="form-control cero"
                onChange={this.changed}
              />
            </div>
            <div className="form-group">
              <label className="mx-2"> Email </label>
              <input
                type="email"
                className="form-control uno"
                onChange={this.changedE}
              />
            </div>
            <div className="form-group">
              <label className="my-2"> Mensaje </label>
              <textarea
                className="form-control dos"
                onChange={this.changedM}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              {" "}
              Enviar{" "}
            </button>
          </form>
        </div>
      </>
    );
  }
}
