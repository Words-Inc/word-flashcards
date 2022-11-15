import * as types from './constants/actionTypes.js';
import { ADD_USER } from './constants/actionTypes.js';

export const addUserActionCreator = username => ({
  type: types.ADD_USER,
  payload: username,
});

