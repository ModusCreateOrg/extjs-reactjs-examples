import React, { Component } from 'react';

import getData from './data';
const { data } = getData();

class Grid extends Component {
  render () {
    const { className} = this.props;
    return (
      <table className={`grid ${className ? className : ''}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.company}</td>
                <td>{item.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}
export default Grid;

