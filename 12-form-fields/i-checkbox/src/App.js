import React, { Component } from 'react';

class Checkbox extends Component {
 state = {
   checked: !!this.props.checked
 }
 render () {
   return <input
     type="checkbox"
     name={this.props.name}
     value={this.props.value}
     checked={this.state.checked}
     onChange={e => this.onFieldChange(e)}
   />
 }
 onFieldChange (e) {
   this.setState({
     checked: e.target.checked
   });
 }
}
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
