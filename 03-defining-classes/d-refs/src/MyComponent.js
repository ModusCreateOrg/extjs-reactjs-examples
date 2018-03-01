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
        <input
          defaultValue={text}
          ref={ input => this.textInput = input }
        />
        <button onClick={this.onBtnClick}>Select Text</button>
      </div>
    );
  }

  onBtnClick = () => {
    const { textInput } = this;

    textInput.focus();
    textInput.setSelectionRange(0, textInput.value.length);
  }
}

export default MyComponent;

