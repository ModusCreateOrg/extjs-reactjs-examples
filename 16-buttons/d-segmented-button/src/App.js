import React, { Component } from 'react';
import SegmentedBtn from './SegmentedBtn';
import './App.css';

const App = () => {
  return (
    <SegmentedBtn>
      <button value="one">One</button>
      <button value="two">Two</button>
      <button value="three">Three</button>
    </SegmentedBtn>
  );
}

export default App;
