import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {
 state = {
   checked: !!this.props.checked
 }
 render () {
   return (
     <label className="toggle-wrap">
       <div>{this.props.label}</div>
       <input type="checkbox"
         checked={this.state.checked}
         onChange={this.handleToggleChange}
       />
       <div className="toggle-el"></div>
     </label>
   );
 }
 handleToggleChange = (e) => {
   this.setState({
     checked: e.target.checked
   });
 }
}

export default Toggle;