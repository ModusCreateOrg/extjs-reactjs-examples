import React from 'react';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';
import data from './data';

export default () => {
  return (
    <ScatterChart width={730} height={250}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="uv" />
      <YAxis dataKey="pv" />
      <Legend />
      <Scatter name='uv / pv' data={data} fill='#8884d8'/>
    </ScatterChart>
  );
};

