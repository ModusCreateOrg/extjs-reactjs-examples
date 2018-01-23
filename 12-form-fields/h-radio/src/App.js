import React, { Component } from 'react';
import Radio from './Radio';

class App extends Component {
 render () {
   const colorRadioName = 'color';
   return (
     <form>
       <label>
         Red
         <Radio name={colorRadioName} value="red" checked />
       </label>
       <br />
       <label>
         Blue
         <Radio name={colorRadioName} value="blue" />
       </label>
       <br />
       <label>
         Green
         <Radio name={colorRadioName} value="green" />
       </label>
     </form>
   );
 }
}

export default App;
