import React from 'react';
import {RadarChart, Radar, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400},
  {name: 'Page B', uv: 3000, pv: 1398},
  {name: 'Page C', uv: 2000, pv: 9800},
  {name: 'Page D', uv: 2780, pv: 3908},
  {name: 'Page E', uv: 1890, pv: 4800},
  {name: 'Page F', uv: 2390, pv: 3800},
  {name: 'Page G', uv: 3490, pv: 4300}
];

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
