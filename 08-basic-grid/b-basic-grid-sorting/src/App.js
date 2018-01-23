import React, { Component } from 'react';
import Grid from './Grid';
import getData from './data';

const { data } = getData();

class App extends Component {
  render() {
    return (
      <Grid data={data} />
    );
  }
}

export default App;