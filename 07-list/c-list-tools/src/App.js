import React from 'react';
import data from './data';
import ListItem from './ListItem';
import Selectable from './Selectable';
import Tool from './Tool';

function handleItemClick (e) {
  console.log('item clicked');
}

function handleSelectionChange (selected) {
  console.log(`selection count: ${selected.length}`);
}

function handleToolClick (e) {
  e.stopPropagation();

  console.log('tool click');
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
            >
              {item.company === "Hivemind" && <Tool icon="Archive" />}
              <Tool onClick={handleToolClick}/>
            </ListItem>
          );
        });
      }
    }/>
  </div>
);

export default App;
