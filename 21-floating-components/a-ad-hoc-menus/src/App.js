import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Menu extends Component {
  state = {}

  showMenu = (show) => {
    this.setState({
      show : show === true
    });
  }

  componentWillReceiveProps (props) {
    this.showMenu(props.show);
  }
  componentDidMount () {
    document.body.addEventListener('click', this.showMenu, false);
  }
  componentWillUnmount () {
    document.body.removeEventListener('click', this.showMenu, false);
  }
  
  render() {
    const { x, y, show : menuShow } = this.props;
    const { show = menuShow } = this.state;
    const menuStyle = {
      top      : y,
      left     : x
    };

    return show ?
      (
        <div style={menuStyle} className="menu">
          {this.props.children}
        </div>
      ) :
      null;
  }
}

class App extends Component {
  state = {}

  onContextMenu = (e) => {
    e.preventDefault();

    const { clientX : x, clientY : y } = e;
    const menuShow = true;
    
    this.setState({ menuShow, x, y });
  }

  render() {
    const { menuShow, x, y } = this.state;

    return (
      <div className="App">
        <header className="App-header" onContextMenu={this.onContextMenu}>
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
