import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const style = {
  background: 'purple',
};

class App extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
