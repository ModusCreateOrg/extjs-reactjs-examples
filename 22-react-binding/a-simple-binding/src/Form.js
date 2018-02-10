import React, { Component } from 'react';

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
        {renderField(state, 'email', undefined, 'email')}
        {renderField(state, 'phone', 'Phone Number', 'tel')}
        {renderField(state, 'company')}
        {renderField(state, 'department')}
        {renderField(state, 'title')}

        <button onClick={submit}>Submit</button>
      </form>
    );
  }

  renderField = (state, name, label = name, type = 'text') => {
    return (
      <div style={{ marginBottom: '12px' }}>
        <label style={{textTransform: 'capitalize'}}>
          {label}
          <input
            type={type}
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
    const { name, value } = e.target;
    const user = Object.assign({}, this.state.user, { [name]: value });

    this.setState({ user });
  };

  submit = e => {
    e.preventDefault();

    // do submit
  };
}

export default Form;
