import React, { Component } from 'react';
import './App.css';

const panelStyle = {
  width: '300px',
  height: '300px',
  border: '1px solid #d6e2ea'
};
class App extends Component {
  render() {
    return (
      <div style={panelStyle} className="docked-vertical">
        <div className="toolbar">
          <button>Left</button>
          <div style={{flex: 1}}></div>
          <button>Right</button>
        </div>
        <div className="body">
          a<br />b<br />c<br />d<br />e<br />f<br />g<br />h<br />
          i<br />j<br />k<br />l<br />m<br />n<br />o<br />p<br />
          q<br />r<br />s<br />t<br />u<br />v<br />w<br />x<br />
          y<br />z
        </div>
      </div>
    );
  }
}

export default App;
