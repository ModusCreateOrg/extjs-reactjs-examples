import { LOAD_USER, UPDATE_USER } from '../actions';

const DEFAULT_USER = {
  id: 0,
  name: '',
  email: '',
  phone: '',
  company: '',
  department: '',
  title: ''
};

function user(user = DEFAULT_USER, action) {
  switch (action.type) {
    case UPDATE_USER:
      return Object.assign({}, user, action.change);
    case LOAD_USER:
      return Object.assign({}, action.data);
    default:
      return user;
  }
}

export default user;
