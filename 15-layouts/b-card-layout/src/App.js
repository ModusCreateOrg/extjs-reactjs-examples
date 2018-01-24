import React from 'react';
import './App.css';

const App = ({activeCard = 0}) => (
  <div
    className="layout-card"
    style={{width: 100, height: 100, border: '1px solid gray'}}
  >
      {
        [
          <div>one</div>,
          <div>two</div>
        ][activeCard]
      }
  </div>
);

export default App;
