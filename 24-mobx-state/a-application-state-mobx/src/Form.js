import React, { Component } from 'react';
import { action, extendObservable, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import UserStore from './UserStore';

@inject(({ store }, { user }) => {
  return {
    store,
    user: user || (store && store.user)
  };
})
@observer
class Form extends Component {
  static defaultProps = {
    store: new UserStore(),
    @observable user: {}
  }

  @action
  componentWillMount() {
    const { store, user } = this.props;
    
    store.user = user;
  }

  render() {
    const { user } = this.props.store;

    return (
      <form>
        {this.renderField(user, 'name')}
        {this.renderField(user, 'email')}
        {this.renderField(user, 'phone', 'Phone Number')}
        {this.renderField(user, 'company')}
        {this.renderField(user, 'department')}
        {this.renderField(user, 'title')}

        <button onClick={this.submit}>Submit</button>
        <br />
      </form>
    );
  }

  renderField(user, name, label = name) {
    if (user[name] == null) {
      extendObservable(user, {
        [name]: ''
      });
    }

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
    const { onChange, store } = this.props;
    const { name, value } = e.target;

    store.user[name] = value;

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
