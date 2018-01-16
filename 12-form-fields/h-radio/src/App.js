import React, { Component } from 'react';

class Radio extends Component {
 state = {
   checked: !!this.props.checked
 }
 render () {
   return <input
     type="radio"
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
