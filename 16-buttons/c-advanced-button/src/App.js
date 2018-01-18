import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
const { Divider, Item, Menu } = Dropdown;
class Main extends Component {
  render () {
    return (
      <div>
        <div className="top-toolbar">
          <Dropdown text="Add User" icon="add user" floating labeled button className="icon">
            <Menu>
              <Item onClick={this.onFindUser}>Find User</Item>
              <Divider />
              <Item onClick={this.doSomething}>Do Something</Item>
            </Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
  onFindUser = () => {
    // handle menu item click
    alert('find user');
  }
  doSomething = () => {
    // handle menu item click
    alert('do something');
  }
}
export default Main;

