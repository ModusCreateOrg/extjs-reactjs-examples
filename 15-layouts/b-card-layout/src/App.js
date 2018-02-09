import React from 'react';
import Layout from './Layout';

const containerStyle = { width: 100, height: 100, 
  border: '1px solid gray', color: 'white' };
const itemStyleA = { background: '#ee4d77', padding: 4 }
const itemStyleB = { background: '#b15b90', padding: 4 }

const App = ({ activeCard = 0 }) => (
  <Layout type="card">
    <div style={containerStyle}>
      {[<div style={itemStyleA}>one</div>, <div  style={itemStyleB}>two</div>][activeCard]}
    </div>
  </Layout>
);

export default App;
