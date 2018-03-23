import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';
import data from './data';

export default () => {
  return (
    <AreaChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Area type="monotone" dataKey="pv" fill="#8884d8" fillOpacity={.6} />
      <Area type="monotone" dataKey="uv" fill="#82ca9d" fillOpacity={.6} />
    </AreaChart>
  );
};
