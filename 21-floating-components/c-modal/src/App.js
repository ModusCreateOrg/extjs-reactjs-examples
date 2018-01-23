import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Required to use React portals
import ReactDOM from 'react-dom';

class Floating extends Component {
  state = {
    show : !!this.props.show
  }

  onModalClick = () => {
    this.setState({
      show : false
    });
  }
  
  render() {
    const { modal, viewport, closeOnModalClick } = this.props;
    const { show } = this.state;
    const isModal = modal ? 'modal' : '';
    const doShow  = show  ? 'show'  : '';
    const clsName = `float-wrap ${isModal} ${doShow}`;
    const props   = {
      onClick : closeOnModalClick ? this.onModalClick : null
    };
    const float   = <div {...props} className={clsName}>
                      {this.props.children}
                    </div>;

    return viewport ? 
      ReactDOM.createPortal(float, document.body) : 
      float;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

          <Floating modal show viewport>
            <div className="modal-msg">
              <img src={logo} className="App-logo" alt="logo" />
              Loading...
            </div>
          </Floating>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
