import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { login } from "../api/authenticator";

import './Desktop.css';
import logo from '../assets/logo-home.png';
import api from "../api/api";

class Desktop extends Component {
  state = { email: "", password: "", message: "" };
  handleLogin = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      const response = await api.post("/users/auth/sign_in", { email, password },
        { headers: { 'Content-Type': 'application/json' } });
      login(response.data.token);
      this.props.history.push("/home");
    } catch (e) {
      this.setState({ message: "Usuário e/ou senha inválido(s)" });
    }
  };
  render() {
    return (
      <div className="LOGIN">
        <form onSubmit={(event) => this.handleLogin(event)}>
          <img src={logo} className="LOGO" alt="ioasys" />
          <p className="BEMVINDO">BEM-VINDO AO EMPRESAS</p>
          <p className="LOREM">Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</p>
          <input required
            className="EMAIL" type="email" placeholder="E-mail" ref="email" id="icon-email"
            onChange={event => this.setState({ email: event.target.value })} />
          <input required
            className="PASSWORD" type="password" placeholder="Senha" ref="senha"
            onChange={event => this.setState({ password: event.target.value })} />
          <button type="submit">ENTRAR</button>
          <div className="ERROR">{this.state.message && <p>{this.state.message}</p>}</div>
        </form>
      </div>
    );
  }
}
export default withRouter(Desktop);