import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { dataAsync } from './data';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css';
import 'ag-grid/dist/styles/theme-material.css';
class Grid extends Component {
  columns = [
    {
      headerName: 'Name',
      field: 'name'
    },
    {
      headerName: 'Company',
      field: 'company'
    },
    {
      headerName: 'Email',
      field: 'email'
    }
  ]
  datasource = {
    async getRows ({ endRow, startRow, successCallback }) {
      // retrieve data
      const data = await dataAsync({
        startRow,
        num: endRow - startRow
      });
      const lastRow = data.total <= endRow ? data.total : -1;
      successCallback(data.data, lastRow);
    }
  }
  render () {
    return (
      <div className="ag-theme-material">
        <AgGridReact
          containerStyle={{height: '400px'}}
          columnDefs={this.columns}
          datasource={this.datasource}
          rowModelType="infinite"
        />
      </div>
    );
  }
}
export default Grid;

