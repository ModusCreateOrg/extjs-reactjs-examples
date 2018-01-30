import React, { Component } from 'react';

function capitalize(str) {
  return str.substr(0, 1).toUpperCase() + str.substr(1);
}

class Form extends Component {
  state = {
    user: Object.assign({}, this.props.user)
  };

  componentWillReceiveProps({ user }) {
    this.setState({
      user: Object.assign({}, user)
    });
  }

  render() {
    const { renderField, state, submit } = this;

    return (
      <form>
        {renderField(state, 'name')}
        {renderField(state, 'email')}
        {renderField(state, 'phone', 'Phone Number')}
        {renderField(state, 'company')}
        {renderField(state, 'department')}
        {renderField(state, 'title')}

        <button onClick={submit}>Submit</button>
      </form>
    );
  }

  renderField = (state, name, label = capitalize(name)) => {
    return (
      <div style={{ marginBottom: '12px' }}>
        <label>
          {label}
          <input
            type="text"
            name={name}
            value={state.user[name] || ''}
            onChange={this.handleFieldChange}
            style={{ marginLeft: '12px' }}
          />
        </label>
      </div>
    );
  };

  handleFieldChange = e => {
    const { onChange } = this.props;
    const { name, value } = e.target;
    const change = { [name]: value };
    const user = Object.assign(this.state.user, change);

    if (onChange) {
      onChange(change);
    }

    this.setState({ user });
  };

  submit = e => {
    e.preventDefault();

    // do submit
  };
}

export default Form;
