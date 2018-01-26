import React from 'react';
import data from './data';
import ListItem from './ListItem';

function handleItemClick (e) {
  console.log('item clicked');
}

const App = () => (
  <div style={{width: '400px'}}>
      {data.map(item =>
        <ListItem key={item.id} onClick={handleItemClick} {...item}/>
      )}
  </div>
);

export default App;