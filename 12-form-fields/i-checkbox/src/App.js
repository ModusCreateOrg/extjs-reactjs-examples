import React, { Component } from 'react';
import Checkbox from './Checkbox';

class App extends Component {
 render () {
   return (
     <form>
       <label>
         Music
         <Checkbox name="music" value="music" checked />
       </label>
       <br />
       <label>
         Dance
         <Checkbox name="dance" value="dance" />
       </label>
     </form>
   );
 }
}

export default App;
