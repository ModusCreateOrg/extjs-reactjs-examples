import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';
import data from './data';

export default () => {
  return (
    <BarChart width={730} height={250} data={data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number"/>
      <YAxis dataKey="name" type="category"/>
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};
