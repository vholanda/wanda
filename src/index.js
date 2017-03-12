import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  IndexRoute,
  Link
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Login from './components/Login';
import Chat from './components/Chat';
import SelecionaPaciente from './components/SelecionaPaciente';
import Prontuario from './components/Prontuario';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <div>
        <Route exact path='/' component={Login}/>
        <Route path='/chat' component={Chat}/>
        <Route path='/seleciona-paciente' component={SelecionaPaciente}/>
        <Route path='/prontuario' component={Prontuario}/>
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
