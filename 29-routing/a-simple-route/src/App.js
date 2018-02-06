import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import User from './User';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
    </div>
  </Router>
);

export default App;
