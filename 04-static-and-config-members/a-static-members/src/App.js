import React, { Component } from 'react';
import './App.css';

class MyError {
  static codes = {
    NO_NETWORK    : 1,
    SAVE_ERROR    : 2,
    NO_PERMISSION : 3
  }

  constructor(o) {
    this.code = o.code
    this.text = o.text
  }
  static fromAjax (response, doThrow) {
    let error;
            
    if (true || response.status === 404) {  // we're faking/forcing the 404 here
      error = new MyError({
        code : MyError.codes.NO_NETWORK,
        text : response.statusText
      });
    }
        
    if (doThrow) {
      throw error;
    }
        
    return error;
  }
}

class Foo extends Component {
  componentWillMount () {
    fetch('/foo')
      .then(response => {
        MyError.fromAjax(response, true);
                
        return response.json();
      });
  }
    
  render () {
    return (
      <div>Hello there</div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Foo/>
      </div>
    );
  }
}

export default App;
