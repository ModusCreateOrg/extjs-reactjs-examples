import React, { Component } from 'react';

class App extends Component {
 state = {
   value: 50
 };
 render() {
   return <input
     type="number"
     value={this.state.value}
     onChange={e => this.onChange(e)}
     step="10"
     min="0"
     max="100"
   />;
 }
 onChange (e) {
   this.setState({
     value: e.target.value
   });
 }
}

export default App;
