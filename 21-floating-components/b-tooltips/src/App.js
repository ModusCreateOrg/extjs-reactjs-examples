import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Tooltip = ({ children, tiptext, position = 't-t'}) => {
  return <div data-tiptext={tiptext} className={`tooltip ${position}`}>
    {children}
  </div>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to&nbsp;
            <Tooltip tiptext="Example"> React</Tooltip>
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
