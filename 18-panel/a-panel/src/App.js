import React, { Component } from 'react';
import Panel from './Panel';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faReact from '@fortawesome/fontawesome-free-brands/faReact';

class App extends Component {
  render() {
    return (
      <Panel
        title="My Panel"
        collapsible
        style={{width: '300px'}}
        preTools={
          <FontAwesomeIcon
            className="header-tool"
            icon={faReact}
            onClick={() => console.log('React button handler')}
          />
        }
      >
        1
        <br />
        2
        <br />
        3
      </Panel>
    );
  }
}
export default App;

