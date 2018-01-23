import React, { Component } from 'react';

class App extends Component {
 state = {
   value: 50
 };
 render() {
   return <input
     type="number"
     value={this.state.value}
     onChange={e => this.handleChange(e)}
     step="10"
     min="0"
     max="100"
   />;
 }
 handleChange (e) {
   this.setState({
     value: e.target.value
   });
 }
}

export default App;
