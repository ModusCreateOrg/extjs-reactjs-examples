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
     onChange={e => this.handleFieldChange(e)}
   />
 }
 handleFieldChange (e) {
   this.setState({
     checked: e.target.checked
   });
 }
}

export default Radio;