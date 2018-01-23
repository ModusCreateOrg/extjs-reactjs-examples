import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const { Divider, Item, Menu } = Dropdown;

class App extends Component {
  render () {
    return (
      <div>
        <div className="top-toolbar">
          <Dropdown
            text="User Controls"
            icon="add user"
            className="icon"
            floating labeled button
          >
            <Menu>
              <Item onClick={this.handleAddUser}>Add User</Item>
              <Divider />
              <Item onClick={this.handleRemoveUser}>Remove User</Item>
            </Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
  
  handleAddUser = () => {
    // handle menu item click
    console.log('add user')
  }
  handleRemoveUser = () => {
    // handle menu item click
    console.log('remove user');
  }
}

export default App;

