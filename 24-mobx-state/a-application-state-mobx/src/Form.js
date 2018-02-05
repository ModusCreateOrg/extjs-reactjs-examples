import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

const DEFAULT_USER = {
  company: '',
  department: '',
  mail: '',
  name: '',
  phone: '',
  title: ''
};

@observer
class Form extends Component {
  @observable user = this.props.user || DEFAULT_USER;

  render() {
    const { user } = this;

    return (
      <form>
        {this.renderField(user, 'name')}
        {this.renderField(user, 'email')}
        {this.renderField(user, 'phone', 'Phone Number')}
        {this.renderField(user, 'company')}
        {this.renderField(user, 'department')}
        {this.renderField(user, 'title')}

        <button onClick={this.submit}>Submit</button>
      </form>
    );
  }

  renderField(
    user,
    name,
    label = name.substr(0, 1).toUpperCase() + name.substr(1)
  ) {
    return (
      <div style={{ marginBottom: '12px' }}>
        <label style={{ textTransform: 'capitalize' }}>
          {label}
          <input
            type="text"
            name={name}
            value={user[name]}
            onChange={this.handleFieldChange}
            style={{ marginLeft: '12px' }}
          />
        </label>
      </div>
    );
  }

  @action.bound
  handleFieldChange(e) {
    const { onChange } = this.props;
    const { name, value } = e.target;

    this.user[name] = value;

    if (onChange) {
      onChange({ [name]: value });
    }
  }

  submit = e => {
    e.preventDefault();

    // do submit
  };
}

export default Form;
