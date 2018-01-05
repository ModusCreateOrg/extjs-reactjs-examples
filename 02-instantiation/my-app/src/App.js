import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const MyHeader = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const MyComponent = () => {
  return (
    <div>
      <MyHeader
        text="Hello from Modus!"
      />
      <div>Making the world better, one line of code at a time!</div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <MyComponent/>
    )
  }
}

export default App;
