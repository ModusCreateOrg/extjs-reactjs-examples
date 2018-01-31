import { UPDATE_USER } from '../actions';

const DEFAULT_USER = {
  id: 1,
  name: 'Bob Smith',
  email: 'bob@smith.com',
  phone: '+1 (321) 123-4567',
  company: 'Acme Inc',
  department: 'Engineering',
  title: 'Senior Software Engineer'
};

function user (user = DEFAULT_USER, action) {
  switch (action.type) {
    case UPDATE_USER:
      return Object.assign(
        {},
        user,
        action.change
      );
    default:
      return user;
  }
}

export default user;

