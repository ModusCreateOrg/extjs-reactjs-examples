import React from 'react';
import Toolbar from './Toolbar';
import './App.css';

const panelStyle = {
  width: '300px',
  height: '300px',
  border: '1px solid #d6e2ea'
};

const App = () => (
  <div style={panelStyle} className="docked-vertical">
    <Toolbar />
    <div className="body">
      a b c d e f g h 
      i j k l m n o p 
      q r s t u v w x 
      y z
    </div>
  </div>
);

export default App;