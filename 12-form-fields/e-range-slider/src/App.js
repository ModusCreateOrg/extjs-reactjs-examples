import React, { Component } from 'react';
import './App.css';

class App extends Component {
 state = {
   value: 50
 };
 render() {
   return (
     <input
       onChange={e => this.onChange(e)}
       type="range"
       value={this.state.value}
       min="0"
       max="100"
       step="10"
     />
   );
 }
 onChange (e) {
   this.setState({
     value: e.target.value
   });
 }
}

export default App;
