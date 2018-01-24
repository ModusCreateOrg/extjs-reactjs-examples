import React from 'react';
import SegmentedButton from './SegmentedButton';
import './App.css';

const App = () => {
  return (
    <SegmentedButton>
      <button value="one">One</button>
      <button value="two">Two</button>
      <button value="three">Three</button>
    </SegmentedButton>
  );
}

export default App;
