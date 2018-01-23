import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    color: ''
  };
  options = ['Red', 'Blonde', 'Brown', 'Black']

  render() {
    return (
      <div>
        <input
          value={this.state.color}
          list="hair-color"
          onChange={e => this.handleChange(e)}
        />
        <datalist id="hair-color">
          {[this.options.map(
            item => <option key={item} value={item} />
          )]}
        </datalist>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      color: e.target.value
    });
  }
}

export default App;
