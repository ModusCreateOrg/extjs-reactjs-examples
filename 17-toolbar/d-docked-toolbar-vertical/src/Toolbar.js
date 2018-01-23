import React, { Component } from 'react';

const style = {
  display: 'flex',
  backgroundColor: '#d6e2ea',
  padding: '6px 8px',
  flexDirection: 'column'
};

class Toolbar extends Component {
  render() {
    return (
      <div style={style}>
        <button>Top</button>
        <div style={{flex: 1}}></div>
        <button>Bottom</button>
      </div>
    );
  }
}

export default Toolbar;