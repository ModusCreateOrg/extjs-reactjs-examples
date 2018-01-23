import React from 'react';
import Mask from './Mask';
import NetworkView from './NetworkView';
import './App.css';

const App = () => (
  <Mask render={({onBeforeLoad, onLoad}) => (
    <NetworkView
      onBeforeLoad={onBeforeLoad} onLoad={onLoad}
    />
  )}/>
);

export default App;
