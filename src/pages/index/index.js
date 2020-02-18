import React, { Component } from "react";
import user from "../../services/user";
import "./index.scss";

export default class Usuarios extends Component {
  state = {
    usuarios: []
  };

  componentDidMount() {
    this.loadUsuarios();
  }

  loadUsuarios = async () => {
    const response = await user.retriveUser();
    debugger;
    this.setState({ usuarios: response });
  };

  render() {
    const { usuarios } = this.state;
    return (
      <div className="user-list">
        {this.state.usuarios.map(usuario => (
          <article>{usuario.name}</article>
        ))}
      </div>
    );
  }
}
