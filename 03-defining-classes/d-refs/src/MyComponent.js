import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    text: 'Hello from Modus!'
  }

  render () {
    const { text } = this.state;

    return (
      <div>
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

