import React, { Component } from 'react';
import FontAwesome from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/fontawesome-free-solid'
class App extends Component {
  render () {
    const style = {
      marginRight: '12px' // inline style example
    };
    return (
      <div>
        <div className="top-toolbar">
          <button onClick={this.onAddUser}>
            <FontAwesome icon={faUserPlus} style={style} />
            Add User
          </button>
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

