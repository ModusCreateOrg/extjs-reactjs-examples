import { combineReducers } from 'redux';
import user from './user';

const userApp = combineReducers({ user });

export default userApp;