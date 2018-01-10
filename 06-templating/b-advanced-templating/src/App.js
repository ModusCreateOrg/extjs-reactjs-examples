import React, { Component } from 'react';
import Members from './Members';
import './App.css';

const data = {
    name    : 'Smith Corp',
    address : {
        street : '1 Smith Blvd',
        city   : 'Smithville',
        state  : 'Smith',
        zip    : 12345
    },
    people  : [{
        name   : 'Bob Smith',
        email  : 'bob@smith.com',
        skills : ['cooking', 'building']
    }, {
        name   : 'Jane Smith',
        email  : 'jane@smith.com',
        skills : ['managing', 'presenting']
    }]
};

class App extends Component {
  render() {
    return (
      <Members data={data}/>
    );
  }
}

export default App;
