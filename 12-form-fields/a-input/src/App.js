import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <form className="login-form">
        <input type="text" />
        <input type="password" />
        <input type="url" />
        <input type="search" />
      </form>
    );
  }
}

export default App;
