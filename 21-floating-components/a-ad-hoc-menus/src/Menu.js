import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  state = {}

  showMenu = (show) => {
    this.setState({
      show: show === true
    });
  }

  componentWillReceiveProps ({ show }) {
    this.showMenu(show);
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
      top: y,
      left: x
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

export default Menu;