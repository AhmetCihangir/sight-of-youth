import { combineReducers } from 'redux';

import users from './user'; 

import posts from './posts';

export const reducers = combineReducers({ posts , users});



