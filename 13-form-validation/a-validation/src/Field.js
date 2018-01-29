import React, { Component } from 'react';
import '../node_modules/purecss/build/base.css';
import '../node_modules/purecss/build/forms.css';
import './Field.css';

class Field extends Component {
  static defaultProps = {
    value: '',
    type: 'text'
  }
  state = {
    invalidMsg: null,
    value: this.props.value
  }

  render () {
    const {
      // name,
      // id = name,
      label,
      onChange
    } = this.props;
    const { value, invalidMsg } = this.state;
    const inputProps = {
      ...this.props,
      //id,
      value,
      onChange: (e) => this.handleChange(e, onChange)
    };
    return (
      <div className="pure-control-group">
        {/* <label htmlFor={id}>{label} */}
        <label>{label}
          <input {...inputProps} style={{minWidth: '200px'}} />
          {
            invalidMsg ? 
              <span className="pure-form-message-inline">{invalidMsg}</span> : 
            null
          }
        </label>
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
    let   invalidMsg;
 
    if (valueMissing) {
      invalidMsg = 'This is a required field';
    } else if (!valid) {
      invalidMsg = this.props.invalidMsg || target.validationMessage;
    }
    this.setState({ invalidMsg });
  }
}

export default Field;