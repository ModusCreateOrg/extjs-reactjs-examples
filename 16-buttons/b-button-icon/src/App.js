import React, { Component } from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/fontawesome-free-solid';
import './App.css';

class App extends Component {
  render () {
    const style = {
      marginRight: '12px' // inline style example
    };

    return (
      <div className="top-toolbar">
        <button onClick={this.handleAddUser}>
          <FontAwesome icon={faUserPlus} style={style} />
          Add User
        </button>
      </div>
    );
  }
  handleAddUser = () => {
    // handle button click
    console.log('add user');
  }
}

export default App;

