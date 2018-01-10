import React, { Component } from 'react';
import List from './List'
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

const data = [
  {
    id: 0,
    lastName: 'Fennell',
    firstName: 'Haydee',
    company: 'NitroSystems',
    hireDate: '27/11/2001',
  },
  {
    id: 1,
    lastName: 'Garling',
    firstName: 'Stan',
    company: 'Ulogica',
    hireDate: '13/05/2001',
  },
  {
    id: 2,
    lastName: 'Paquette',
    firstName: 'Gavin',
    company: 'MediaDime',
    hireDate: '27/01/2008',
  },
  {
    id: 3,
    lastName: 'Drolet',
    firstName: 'Vernon',
    company: 'Qualcore',
    hireDate: '04/05/1998',
  },
  {
    id: 4,
    lastName: 'Brier',
    firstName: 'Marcus',
    company: 'GrafixMedia',
    hireDate: '30/08/1995',
  },
  {
    id: 5,
    lastName: 'Pullman',
    firstName: 'Haley',
    company: 'Eluxa',
    hireDate: '05/06/2007',
  },
  {
    id: 6,
    lastName: 'Seal',
    firstName: 'Raylene',
    company: 'OpenServ',
    hireDate: '28/12/2005',
  },
  {
    id: 7,
    lastName: 'Sager',
    firstName: 'Danielle',
    company: 'Infratouch',
    hireDate: '18/12/1997',
  },
  {
    id: 8,
    lastName: 'Sprowl',
    firstName: 'Madelyn',
    company: 'Hivemind',
    hireDate: '09/12/1992',
  },
  {
    id: 9,
    lastName: 'Hollis',
    firstName: 'Drew',
    company: 'Hivemind',
    hireDate: '01/07/1993',
  },
]

class App extends Component {
  render() {
    return (
      <div style={{width: 400}}>
        <div>
          {'Open developer tools to see console output'}
        </div>
        <List 
          data={data}
          selection={'multi'}
          disclosure={(item) => {
            console.log('item disclosed', item);
          }}
        />
      </div>
    );
  }
}

export default App;
