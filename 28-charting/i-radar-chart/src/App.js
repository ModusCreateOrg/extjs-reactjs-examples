import React from 'react';
import {RadarChart, Radar, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import data from './data';

export default () => {
  return (
    <RadarChart width={350} height={300} data={data}>
      <PolarGrid gridType="circle" />
      <Legend />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis angle={90} />
      <Radar name="uv" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
      <Radar name="pv" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
    </RadarChart>
  );
};
