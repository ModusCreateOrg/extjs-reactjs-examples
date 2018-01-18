import React, { Component } from 'react';
import './App.css';

function cardLayout (WrappedComponent) {
  return class Enhanced extends WrappedComponent {
    render () {
      const container = super.render();
      const { children, activecard = 0 } = container.props;
      
      const items = React.Children.map(children, (item, i) => {
        return React.cloneElement(item, {
          className: (i === activecard) ? 'activecard' : null
        });
      });
      return React.cloneElement(container, {
        children: items,
        className: 'layout-card'
      });
    }
  }
}

@cardLayout
class App extends Component {
  render () {
    return (
      <div style={{width: 300, height: 300}}>
        <div>one</div>
        <div>two</div>
      </div>
    );
  }
}

export default App;
