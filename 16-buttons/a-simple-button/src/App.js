import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div>
        <div className="top-toolbar">
          <button onClick={this.handleAddUser}>Add User</button>
        </div>
      </div>
    );
  }
  handleAddUser = () => {
    // handle button click
    console.log('add user');
  }
}

export default App;

