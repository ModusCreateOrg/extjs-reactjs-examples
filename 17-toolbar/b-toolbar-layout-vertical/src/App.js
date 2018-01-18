import React, { Component } from 'react';
const toolbarStyle = {
  display: 'inline-flex',
  flexDirection: 'column',
  height: '300px',
  backgroundColor: '#d6e2ea',
  padding: '8px 6px'
};

class App extends Component {
  render() {
    return (
      <div style={toolbarStyle}>
        <button>Left</button>
        <div style={{flex: 1}}></div>
        <button>Right</button>
      </div>
    );
  }
}

export default App;
