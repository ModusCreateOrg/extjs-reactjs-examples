import React, { Component } from 'react';
import { action, extendObservable, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import UserStore from './UserStore';

@inject(({ store }, { user }) => {
  return {
    store,
    user
  };
})
@observer
class Form extends Component {
  static defaultProps = {
    store: new UserStore(),
    @observable user: {}
  }

  @action
  componentDidMount() {
    const { store, user, userId } = this.props;

    if (store.fetchUser && userId) {
      store
        .fetchUser(userId)
        .then(userData => Object.assign(user, userData))
        .catch(console.log);
    }
  }

  render() {
    const { user } = this.props;
    const { renderField, submit } = this;

    return (
      <form>
        {renderField(user, 'name')}
        {renderField(user, 'email', undefined, 'email')}
        {renderField(user, 'phone', 'Phone Number', 'tel')}
        {renderField(user, 'company')}
        {renderField(user, 'department')}
        {renderField(user, 'title')}

        <button onClick={submit}>Submit</button>
        <br />
      </form>
    );
  }

  renderField = (user, name, label = name, type = 'text') => {
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
    const { onChange, user } = this.props;
    const { name, value } = e.target;

    user[name] = value;

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
