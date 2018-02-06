import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import User from './User';
import './App.css';

const App = () => (
  <div>
    <Router>
      <div className="nav-links">
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink exact activeClassName="active" to="/user">User</NavLink>
        <NavLink exact activeClassName="active" to="/about">About</NavLink>

        <Route exact path="/" component={Home}/>
        <Route path="/user" component={User}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
  </div>
);

export default App;