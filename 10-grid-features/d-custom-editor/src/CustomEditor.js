import React, { Component } from 'react';

class CustomEditor extends Component {
  state = {}

  componentDidMount () {
    this.refs.input.addEventListener('blur', this.onBlur);
    this.focus();
  }
  componentDidUpdate () {
    this.focus();
  }
  componentWillUnmount () {
    this.refs.input.removeEventListener('blur', this.onBlur);
  }

  focus () {
    // focus the input slightly after dbl-click
    setTimeout(() => {
      const { refs: { input } } = this;
      input.focus();
    });
  }

  get value () {
    let {
      props,
      state: { value }
    } = this;
    if (value == null) {
      value = props.value;
    }
    return value;
  }
  getValue () {
    return this.value;
  }
  onBlur = () => {
    this.props.stopEditing();
  }
  onChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }
  
  render () {
    return <input
      ref="input"
      type="email"
      value={this.value}
      onChange={this.onChange}
      style={{width: "100%"}}
    />;
  }
}

export default CustomEditor;

