import React, { Component } from 'react';
import moment from 'moment';

class App extends Component {
 state = {
   value: moment().format('YYYY-MM-DD')
 };
 render() {
   return <input
     type="date"
     value={this.state.value}
     onChange={e => this.onChange(e)}
   />;
 }
 onChange (e) {
   this.setState({
     value: e.target.value
   });
 }
}

export default App;
