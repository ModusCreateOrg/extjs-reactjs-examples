import React, { Component } from 'react';
import withFloat from './util/withFloat';

export class Box extends Component {
  state = {}

  componentWillMount() {
    const { float } = this.props;
    
    if (float) {
      this.float();
    }
  }
  
  render () {
    return <div className={this.state.cls}>My Box</div>;
  }
}

export default withFloat(Box);
