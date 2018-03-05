import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="top-toolbar">
        <Button onClick={this.handleAddUser}>Add User</Button>
      </div>
    );
  }
  handleAddUser = () => {
    // handle button click
    console.log('add user');
  };
}

export default App;
