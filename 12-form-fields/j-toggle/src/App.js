import React, { Component } from 'react';
import './App.css'
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
         onChange={this.onToggleChange}
       />
       <div className="toggle-el"></div>
     </label>
   );
 }
 onToggleChange = (e) => {
   this.setState({
     checked: e.target.checked
   });
 }
}
class App extends Component {
 render () {
   return (
     <Toggle />
   );
 }
}

export default App;
