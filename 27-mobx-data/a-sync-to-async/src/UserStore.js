import { action, observable } from 'mobx';

export default class UserStore {
  @observable user = {};

  @action
  fetchUser (id) {
    return fetch('/user.json')
    .then(resp => resp.json())
    .catch(e => console.log(e));
  }
}