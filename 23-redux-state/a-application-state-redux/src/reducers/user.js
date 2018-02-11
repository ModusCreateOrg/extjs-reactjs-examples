import { UPDATE_USER } from '../actions';

const DEFAULT_USER = {
  id: 1,
  name: 'Don Draper',
  email: 'don.draper@scdp.com',
  phone: '+1 (212) 555-0112',
  company: 'Sterling Cooper Draper Pryce',
  department: 'Marketing',
  title: 'Creative Director'
};

function user(userData = DEFAULT_USER, action) {
  switch (action.type) {
    case UPDATE_USER:
      return Object.assign({}, userData, action.payload);
    default:
      return userData;
  }
}

export default user;
