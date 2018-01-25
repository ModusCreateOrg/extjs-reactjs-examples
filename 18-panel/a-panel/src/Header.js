import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown';
import './Header.css';

class Header extends Component {
  render() {
    const { collapsible, preTools, postTools, title, toggleCollapse } = this.props;

    return (
      <div className="header">
        {title}
        <div style={{ flex: 1 }}></div>
        {preTools}
        {collapsible &&
          <FontAwesomeIcon
            className="collapse-tool header-tool"
            icon={faChevronDown}
            onClick={toggleCollapse}
          />
        }
        {postTools}
      </div>
    );
  }
}

export default Header;