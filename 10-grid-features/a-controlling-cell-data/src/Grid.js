import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import getData from './data';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css';
import 'ag-grid/dist/styles/theme-material.css';
const { data } = getData();
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
      field: 'email',
      cellRenderer: params => {
        return `<a href="mailto:${params.value}">${params.value}</a>`;
      }
    }
  ]
  render () {
    return (
      <div className="ag-theme-material">
        <AgGridReact
          containerStyle={{height: '400px'}}
          columnDefs={this.columns}
          rowData={data}
        />
      </div>
    );
  }
}
export default Grid;

