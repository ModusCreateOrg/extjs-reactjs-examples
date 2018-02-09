import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserForm from './UserForm';
import UserList from './UserList';

export default ({ match }) => (
  <div>
    <UserList />
    <Router>
      <Route path={`${match.url}/:userId`} component={UserForm}/>
    </Router>
  </div>
);
