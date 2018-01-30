import React, { Component } from 'react';
import Menu from './Menu';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {}

  handleContextMenu = (e) => {
    e.preventDefault();

    const { clientX : x, clientY : y } = e;
    const menuShow = true;
    
    this.setState({ menuShow, x, y });
  }

  render() {
    const { menuShow, x, y } = this.state;

    return (
      <div className="App">
        <header className="App-header" onContextMenu={this.handleContextMenu}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

          <Menu show={menuShow} x={x} y={y}>
            <div className="menu-item">First Menu Item</div>
            <hr />
            <div className="menu-item">Second Menu Item</div>
          </Menu>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
