import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import getData from './data';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css';

const { data } = getData();

class App extends Component {
  columns = [
    {
      headerName: 'Name',
      field: 'name',
      editable: true
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

export default App;
