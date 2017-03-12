import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class MaskRG extends Component {

  state = {
    value: '',
    masked: '',
  }

  handleChange(event) {
    let value = String(event.target.value);
    var lastChar = value[value.length - 1];
    console.log(lastChar);
    if (/[0-9]/.test(lastChar)) {
      const arr = value.split('');
      let masked = value;
      masked.splice(1, 0, '.')
      console.log(masked)
      this.setState({
        value: value,
        masked
      })
    }

    // Call the onChange method if
    // if(this.props.onChange && typeof this.props.onChange == 'function')
    //   this.props.onChange();
  }

  render() {
    return (
      <TextField
        { ...this.props }
        onChange={this.handleChange.bind(this)}
        value={this.state.masked}
        />
    );
  }
}
