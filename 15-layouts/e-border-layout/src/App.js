import React, { Component } from 'react';
import './App.css';

import SplitPane from 'react-split-pane';
class App extends Component {
  render () {
    return (
      <SplitPane split="horizontal" minSize={50} maxSize={300} defaultSize={100}>
        <div>North</div>
        <SplitPane split="horizontal" primary="second">
          <SplitPane split="vertical">
            <div>West</div>
            <SplitPane split="vertical" primary="second" defaultSize={200} maxSize={400} minSize={100}>
              <div>Center</div>
              <div>East</div>
            </SplitPane>
          </SplitPane>
          <div>South</div>
        </SplitPane>
      </SplitPane>
    );
  }
}

export default App;
