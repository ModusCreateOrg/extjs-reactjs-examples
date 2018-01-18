import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div>
        <div className="top-toolbar">
          <button onClick={this.onAddUser}>Add User</button>
        </div>
      </div>
    );
  }
  onAddUser = () => {
    // handle button click
    alert('add user');
  }
}
export default App;

