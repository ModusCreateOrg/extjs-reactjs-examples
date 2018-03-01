import React, { Component } from 'react';

class MyComponent extends Component {
  // sets the initial value of `text` on the component's state object
  state = {
    text: 'Hello from Modus!'
  }

  render () {
    const { text } = this.state;

    return (
      <div>
        {/* the input's value comes from the component's state.text */}
        <input value={text} readOnly />
        <button onClick={this.handleBtnClick}>Set Text</button>
      </div>
    )
  }

  // setting `text` on the component state results in render running once more
  // and updating the value of the input field
  handleBtnClick = () => {
    this.setState({
      text: 'Text changed!'
    })
  }
}

export default MyComponent

