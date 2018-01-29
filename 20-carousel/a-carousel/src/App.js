import React, { Component } from 'react';
import Carousel from './Carousel';

class App extends Component {
  render() {
    return (
      <Carousel style={{ height: '400px', width: '600px' }}>
        <div>Content for the first panel</div>
        <div>... and the second panel</div>
      </Carousel>
    );
  }
}

export default App;
