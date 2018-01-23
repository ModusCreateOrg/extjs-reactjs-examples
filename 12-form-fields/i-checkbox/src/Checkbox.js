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
     onChange={e => this.handleFieldChange(e)}
   />
 }
 handleFieldChange (e) {
   this.setState({
     checked: e.target.checked
   });
 }
}

export default Checkbox;