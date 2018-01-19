import React, { Component } from 'react';
import Mask from './Mask';
import NetworkView from './NetworkView';
import './App.css';

class App extends Component {
  render () {
    return (
      <Mask render={({onBeforeLoad, onLoad}) => (
        <NetworkView
          onBeforeLoad={onBeforeLoad} onLoad={onLoad}
        />
      )}/>
    );
  }
}

export default App;
