import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    text: 'Hello from Modus!'
  }

  render () {
    const { text } = this.state;

    return (
      <div>
        <input defaultValue={text} />
        <button onClick={this.onBtnClick}>Set Text</button>
      </div>
    )
  }

  onBtnClick = () => {
    this.setState({
      text: 'Text changed!'
    })
  }
}

export default MyComponent

