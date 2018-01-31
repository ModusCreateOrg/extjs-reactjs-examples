import React, { Component } from 'react';
import Menu from './Menu';

const style = {
  height: '300px',
  width: '300px',
  background: '#e02d42',
  padding: '12px',
  color: 'white',
  textAlign: 'center'
}

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
      <div style={style} onContextMenu={this.handleContextMenu}>
        right-click in this div to show a menu
        <Menu show={menuShow} x={x} y={y}>
          <div className="menu-item">First Menu Item</div>
          <hr />
          <div className="menu-item">Second Menu Item</div>
        </Menu>
      </div>
    );
  }
}

export default App;
