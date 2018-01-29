import React, { Component } from 'react';
import TabPanel from './TabPanel';

class App extends Component {
  render() {
    return (
      <TabPanel style={{ height: '400px', width: '600px' }}>
        <div tabtext="Home" icon="Home">
          Content for the first panel
        </div>
        <div tabtext="User" icon="User">
          ... and the second panel
        </div>
      </TabPanel>
    );
  }
}

export default App;
