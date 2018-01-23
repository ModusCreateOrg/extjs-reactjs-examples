import React, { Component } from 'react';
import MyError from './MyError';

class Foo extends Component {
  constructor(props) {
    super(props);

    fetch('/foo')
      .then(response => {
        MyError.fromAjax(response, true);
      })
      .catch(a => {
        // handle error here
      });
  }

  render() {
    return (
      <div>Hello there</div>
    );
  }
}

export default Foo;