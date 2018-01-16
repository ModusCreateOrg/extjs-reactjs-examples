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
   invalidmsg: this.props.invalidmsg,
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
     onChange: (e) => this.handleChange_onChange(e, onChange)
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
 handleChange_onChange (e, onChange) {
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
     invalidmsg = target.validationMessage;
   }
   this.setState({ invalidmsg });
 }
}

class App extends Component {
  render() {
    return (
      <div>
        <Field
          invalidmsg="Field is required"
          name="test"
          label="test field"
          onChange={(e) => console.log('change', e)}
        /><br/>
        <Field
          invalidmsg="Field is required"
          name="test"
          label="test field"
          onChange={(e) => console.log('change', e)}
        /><br/>
      </div>
    )
  }
}

export default App;
