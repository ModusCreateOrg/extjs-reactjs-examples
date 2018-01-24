import React, { Component } from 'react';

class Form extends Component {
  state = {
    user: Object.assign({}, this.props.user)
  }

  componentWillReceiveProps ({ user }) {
    this.setState({
      user: Object.assign({}, user)
    });
  }

  render () {
    const { renderField, state, submit } = this;

    return (
      <form>
        { renderField(state, 'name') }
        { renderField(state, 'email') }
        { renderField(state, 'phone', 'Phone Number') }
        { renderField(state, 'company') }
        { renderField(state, 'department') }
        { renderField(state, 'title') }

        <button onClick={submit}>Submit</button>
      </form>
    );
  }

  renderField = (state, name, label = name.substr(0, 1).toUpperCase() + name.substr(1)) => {
    return (
      <div>
        <label>
          {label}
          <input
            type="text"
            name={name}
            value={state.user[ name ]}
            onChange={this.onFieldChange}
            />
        </label>
      </div>
    );
  }

  onFieldChange = (e) => {
    const { onChange } = this.props;
    const { name, value } = e.target;
    const change = { [ name ]: value };
    const user = Object.assign(this.state.user, change);

    if (onChange) {
      onChange(change);
    }

    this.setState({ user });
  }

  submit = (e) => {
    e.preventDefault();

    // do submit
  }
}

class App extends Component {
  render() {
    return (
      <Form onChange={(change) => {
        console.log('change', change);
      }}/>
    );
  }
}

export default App;
