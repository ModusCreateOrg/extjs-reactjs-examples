import React, { Component } from 'react';

class Grid extends Component {
  state = {}

  render () {
    const { className, data } = this.props;
    const { sort } = this.state;

    return (
      <table className={`grid ${className ? className : ''}`}>
        <thead>
          <tr>
            <th onClick={this.handleHeaderClick.bind(this, 'name')}>
              Name{this.getSort('name', sort)}
            </th>
            <th onClick={this.handleHeaderClick.bind(this, 'company')}>
              Company{this.getSort('company', sort)}
            </th>
            <th onClick={this.handleHeaderClick.bind(this, 'email')}>
              Email{this.getSort('email', sort)}
            </th>
          </tr>
        </thead>
        <tbody>
          {
            this.sortData(data, sort).map(item => (
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

  getSort (dataIndex, sort) {
    return sort && sort.dataIndex === dataIndex ?
      ` (${sort.direction})` :
      null;
  }

  handleHeaderClick = (dataIndex) => {
    const { sort } = this.state;

    const direction = sort && sort.dataIndex === dataIndex ?
      (sort.direction === 'ASC' ? 'DESC' : 'ASC') :
      'ASC';

    this.setState({
      sort: {
        dataIndex, direction
      }
    });
  }

  sortData (data, sort) {
    if (sort) {
      const { dataIndex, direction } = sort;
      const dir = direction === 'ASC' ? 1 : -1;

      return data.slice().sort((A, B) => {
        const a = A[ dataIndex ];
        const b = B[ dataIndex ];

        if (a > b) {
          return 1 * dir;
        }

        if (a < b) {
          return -1 * dir;
        }

        return 0;
      });
    }

    return data;
  }
}

export default Grid;
