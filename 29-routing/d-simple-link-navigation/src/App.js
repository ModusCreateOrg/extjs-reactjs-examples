import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import User from './User';
import './App.css';

const App = () => (
  <div>
    <Router>
      <div>
        <Link to="/">Home<br/></Link>
        <Link to="/user">User<br/></Link>
        <Link to="/about">About</Link>

        <Route exact path="/" component={Home}/>
        <Route path="/user" component={User}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
  </div>
);

export default App;