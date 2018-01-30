import React from 'react';
import Form from './Form';

const App = () => (
  <Form
    onChange={change => {
      console.log('change', change);
    }}
  />
);

export default App;
