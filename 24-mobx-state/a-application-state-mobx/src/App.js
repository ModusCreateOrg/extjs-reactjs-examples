import React from 'react';
import Form from './Form';

const user = {
  id: 1,
  name: 'Don Draper',
  email: 'don.draper@scdp.com',
  phone: '+1 (212) 555-0112',
  company: 'Sterling Cooper Draper Pryce',
  department: 'Marketing',
  title: 'Creative Director'
};

export default () => <Form user={user}/>;