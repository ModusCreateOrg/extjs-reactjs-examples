import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: '_default'
  };
  options = ['Solids', 'Stripes']
  render() {
    return (
      <select 
        value={this.state.value}
        onChange={e => this.handleSelectChange(e)}
      >
        {[
          <option disabled key="_default" value="_default">
            select one...
          </option>,
          ...this.options.map(
            item => (
              <option key={item} value={item.toLowerCase()}>{item}</option>
            )
          )
        ]}
      </select>
    );
  }
  handleSelectChange (e) {
    this.setState({
      value: e.target.value
    });
  }
}

export default App;
