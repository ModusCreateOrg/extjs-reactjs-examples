import React from 'react';
import Toolbar from './Toolbar';
import './App.css';

const panelStyle = {
  width: '300px',
  height: '300px',
  border: '1px solid #d6e2ea'
};

const App = () => (
  <div style={panelStyle} className="docked-horizontal">
    <Toolbar />
    <div className="body">
      a<br />b<br />c<br />d<br />e<br />f<br />g<br />h<br />
      i<br />j<br />k<br />l<br />m<br />n<br />o<br />p<br />
      q<br />r<br />s<br />t<br />u<br />v<br />w<br />x<br />
      y<br />z
    </div>
  </div>
);

export default App;
