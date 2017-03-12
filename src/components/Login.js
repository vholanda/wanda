import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import { API_URL } from '../Constants';
import Logo from '../wanda-text.svg';

const styleLogin = {
    padding: 15,
    maxWidth: 300,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    background: 'white',
    boxShadow: '0px 2px 6px 2px rgba(0,0,0,.3)',
    display: 'flex',
    borderRadius: 3,
    flexDirection: 'column',
    textAlign: 'center'
};

const styleWrapper = {
  background: 'linear-gradient(to bottom, #FC4968, #FB9564)',
  height: '100vh',
  textAlign: 'center',
  width: '100vw'
};

export default class Login extends Component {

    state = {
      rg: "",
      senha: ""
    };

    handleLogin(event) {
      event.preventDefault();

      const searchParams = new URLSearchParams();
      searchParams.set('grant_type', 'password');
      searchParams.set('username', this.state.rg);
      searchParams.set('password', this.state.senha);

      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

      fetch(`${API_URL}/security/token`, {
        method: 'POST',
        body: searchParams,
        headers: headers
      }).then(response => response.json())
        .then(response => {
          window.localStorage.setItem('token', response.access_token);
          if(this.state.rg && this.state.senha)
            this.context.router.history.push('/seleciona-paciente');
        })
    }

    handleRGChange(event) {
        this.setState({
          rg: event.target.value
        });
    }

    handleSenhaChange(event) {
        this.setState({
          senha: event.target.value
        });
    }

    render() {

        return(
          <div style={styleWrapper}>
            <img src={Logo} alt="Wanda" style={{maxWidth: 300}} />
            <div style={styleLogin}>
              <form onSubmit={this.handleLogin.bind(this)}>
                <TextField hintText="RG" required value={this.state.rg} onChange={this.handleRGChange.bind(this)}/><br/>
                <TextField hintText="Senha" required type="password" value={this.state.senha} onChange={this.handleSenhaChange.bind(this)}/><br/>
                <RaisedButton label="Entrar" primary={true} type="submit"/>
              </form>
            </div>
          </div>
        )
    }
}

Login.contextTypes = {
  router: React.PropTypes.object
};
