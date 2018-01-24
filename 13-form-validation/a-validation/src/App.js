import React, { Component } from 'react';
import Field from './Field';
 
class App extends Component {
  render() {
    return (
      <div>
        <Field
          required
          name="test"
          label="required text field "
          onChange={(e) => console.log('change', e)}
        /><br/>
        <Field
          type="number"
          max={20}
          name="test"
          label="number field (20 max) "
          onChange={(e) => console.log('change', e)}
        />
      </div>
    )
  }
}

export default App;
