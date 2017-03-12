import React, {Component} from 'react';
import MaskRG from './MaskRG';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { API_URL } from '../Constants';
import Logo from '../wanda-text.svg';

const style = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(to bottom, #FC4968, #FB9564)',
};

export default class SelecionaPaciente extends Component {
  state = {
    rg: ""
  }

  handleRGChange(event) {
    this.setState({
      rg: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let headers = new Headers({
      'Authorization': `bearer ${window.localStorage.getItem('token')}`
    });

    fetch(`${API_URL}/profile?rg=${this.state.rg}`, {
      headers: headers
    }).then(response => response.json())
      .then(response => {
        window.localStorage.setItem('user', JSON.stringify(response));
      })
      .then(() => {
        if(this.state.rg)
          this.context.router.history.push('/prontuario');
      })
  }

  render() {
    return (
      <div style={style}>
        <img src={Logo} alt="Wanda" style={{maxWidth: 300}} />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField hintText="Digite o RG do paciente" value={this.state.rg} onChange={this.handleRGChange.bind(this)} required/>
        <FlatButton label="Ok" type="submit"/>
        </form>
      </div>
    );
  }
}

SelecionaPaciente.contextTypes = {
  router: React.PropTypes.object
};
