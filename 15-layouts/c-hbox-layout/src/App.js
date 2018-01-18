import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div
        className="layout-hbox"
        style={{width: 300, height: 100, color: "white"}}
      >
        <div style={{width: 40, background: "#df8f2e"}}>fixed</div>
        <div style={{flexGrow: 1, background: "#f26f38"}}>flex 1</div>
        <div style={{flexGrow: 2, background: "#ee4d77"}}>flex 2</div>
        <div style={{background: "#b15b90"}}>wrap</div>
      </div>
    );
  }
}

export default App;
