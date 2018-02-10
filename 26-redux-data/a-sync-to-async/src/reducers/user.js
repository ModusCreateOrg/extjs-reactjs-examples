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

function user(userData = DEFAULT_USER, action) {
  switch (action.type) {
    case UPDATE_USER:
      return Object.assign({}, userData, action.payload);
    case LOAD_USER:
      return Object.assign({}, action.payload);
    default:
      return userData;
  }
}

export default user;
