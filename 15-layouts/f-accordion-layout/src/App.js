import React, { Component } from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import './App.css';

class App extends Component {
  render () {
    return (
      <Accordion style={{width: '400px'}}>
        {[1, 2, 3, 4, 5].map(item => (
            <AccordionItem title={`Item ${item}`} expanded={item === 1}>
                {`Item ${item} content`}
            </AccordionItem>
          )
        )}
      </Accordion>
    );
  }
}

export default App;
