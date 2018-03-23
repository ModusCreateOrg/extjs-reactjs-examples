import React from 'react';
import {PieChart, Pie} from 'recharts';
import data from './data';

export default () => {
  return (
    <PieChart width={350} height={300} data={data}>
      <Pie data={data} dataKey="uv" fill="#8884d8" label/>
    </PieChart>
  );
};