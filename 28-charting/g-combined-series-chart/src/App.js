import React from 'react';
import {ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';
import data from './data';

export default () => {
  return (
    <ComposedChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Bar dataKey="uv" fill="#8884d8" />
      <Line dataKey="uv" stroke="#82ca9d" />
    </ComposedChart>
  );
};