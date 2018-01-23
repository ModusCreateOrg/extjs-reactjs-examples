import React, { Component } from 'react';
import withMasking from './utils/withMasking';
import './App.css';

@withMasking
class App extends Component {
  static defaultProps = {
    onBeforeLoad: () => {},
    onLoad: () => {}
  }
  componentDidMount () {
    this.load();
  }
  load () {
    this.props.onBeforeLoad();
    // fetch remote content for this component
    // call onLoadEnd when done
    // we’re faking the request with a setTimeout()
    // to simulate the round trip time
    setTimeout(() => {
      this.props.onLoad()
    }, 3000); // 3 seconds
  }
  onLoad () {}
  render () {
    return <div style={{width: "200px", height: "200px" }}></div>;
  } 
}

export default App;
