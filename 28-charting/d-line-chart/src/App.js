import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';
import data from './data';

export default () => {
  return (
    <LineChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};
