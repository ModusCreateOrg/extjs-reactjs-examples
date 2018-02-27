import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const MyHeader = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

// A MyClass instance is created when MyComponent is created since MyComponent
// includes a MyHeader node in the returned JSX
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

// An instance of MyComponent is returned by the application's main view: App
class App extends Component {
  render() {
    return (
      <MyComponent/>
    )
  }
}

export default App;
