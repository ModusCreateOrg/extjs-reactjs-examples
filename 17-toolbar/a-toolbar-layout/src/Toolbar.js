import React, { Component } from 'react';

const toolbarStyle = {
  display: 'flex',
  width: '300px',
  backgroundColor: '#d6e2ea',
  padding: '6px 8px'
};

class Toolbar extends Component {
  render() {
    return (
      <div style={toolbarStyle}>
        <button>Left</button>
        <div style={{ flex: 1 }}></div>
        <button>Right</button>
      </div>
    );
  }
}

export default Toolbar;