import React from 'react';
import Layout from './Layout';

const containerStyle = { width: 200, height: 200, border: '4px solid #923131' };
const itemStyle = { backgroundColor: '#ff4b4b' };

const App = props => {
  return (
    <Layout type="fit">
      <div style={containerStyle}>
        <div style={itemStyle} />
      </div>
    </Layout>
  );
};

export default App;
