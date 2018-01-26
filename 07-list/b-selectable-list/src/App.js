import React from 'react';
import data from './data';
import ListItem from './ListItem';
import Selectable from './Selectable';

function handleItemClick (e) {
  console.log('item clicked');
}

function handleSelectionChange (selected) {
  console.log(`selection count: ${selected.length}`);
}

const App = () => (
  <div style={{width: '400px'}}>
    <Selectable
      selection="multi"
      data={data}
      onSelectionChange={handleSelectionChange}
      render={({ getSelectedCls }) => {
        return data.map(item => {
          const { id } = item;

          return (
            <ListItem
              key={id}
              onClick={handleItemClick}
              className={getSelectedCls(id)}
              {...item}
            />
          );
        });
      }
    }/>
  </div>
);

export default App;
