import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="top-toolbar">
        <button onClick={this.handleAddUser}>Add User</button>
      </div>
    );
  }
  handleAddUser = () => {
    // handle button click
    console.log('add user');
  }
}

export default App;

