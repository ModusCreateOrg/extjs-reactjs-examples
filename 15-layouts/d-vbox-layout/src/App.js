import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="layout-vbox" style={{width: 100, height: 300}}>
        <div style={{height: 40}}>one</div>
        <div style={{flexGrow: 1}}>two</div>
        <div style={{flexGrow: 2}}>three</div>
        <div>four</div>
      </div>
    );
  }
}

export default App;
