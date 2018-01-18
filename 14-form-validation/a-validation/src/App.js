import React, { Component } from 'react';
import './App.css';
import '../node_modules/purecss/build/base.css';
import '../node_modules/purecss/build/forms.css';

class Field extends Component {
  static defaultProps = {
    value: '',
    type: 'text'
  }
  state = {
    invalidmsg: null,
    value: this.props.value
  }
  render () {
    const {
      name,
      id = name,
      label,
      onChange
    } = this.props;
    const { value, invalidmsg } = this.state;
    const inputProps = {
      ...this.props,
      id,
      value,
      onChange: (e) => this.handleChange(e, onChange)
    };
    return (
      <div className="pure-control-group">
        <label htmlFor={id}>{label}</label>
        <input {...inputProps} style={{minWidth: '200px'}} />
        {
          invalidmsg ? 
            <span className="pure-form-message-inline">{invalidmsg}</span> : 
          null
        }
      </div>
    );
  }
  handleChange (e, onChange) {
    this.setState({
      value: e.target.value
    });
    this.validateField(e);
    if (onChange && typeof onChange === 'function') {
      onChange(e);
    }
  }
  validateField (e) {
    const { target } = e,
          { validity } = target,
          { valueMissing, valid } = validity;
    let   invalidmsg;
 
    if (valueMissing) {
      invalidmsg = 'This is a required field';
    } else if (!valid) {
      invalidmsg = this.props.invalidmsg || target.validationMessage;
    }
    this.setState({ invalidmsg });
  }
}
 
class App extends Component {
  render() {
    return (
      <div>
        <Field
          required
          name="test"
          label="required text field "
          onChange={(e) => console.log('change', e)}
        /><br/>
        <Field
          type="number"
          max={20}
          name="test"
          label="number field (20 max) "
          onChange={(e) => console.log('change', e)}
        />
      </div>
    )
  }
}

export default App;
