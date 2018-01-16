import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <form className="login-form">
        <input type="text" /><br />
        <input type="password" /><br />
        <input type="url" /><br />
        <input type="search" /><br />
      </form>
    );
  }
}

export default App;
