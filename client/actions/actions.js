import * as types from '../constants/actionTypes.js';
import { CREATE_USER, LOGIN, ADD_CARD, DELETE_CARD, FLIP_CARD, PREV_CARD, NEXT_CARD } from '../constants/actionTypes.js';


export const createUserActionCreator = user => ({
  type: types.CREATE_USER,
  payload: user, 
});

export const loginUserActionCreator = user => ({
  type: types.LOGIN_USER,
  payload: user, 
});

export const addCardActionCreator = card => ({
  type: types.ADD_CARD,
  payload: card,
});

export const deleteCardActionCreator = card => ({
  type: types.DELETE_CARD,
  payload: card,
});

export const flipCardActionCreator = boolean => ({
  type: types.FLIP_CARD,
  payload: boolean,
});

export const prevCardActionCreator = () => ({
  type: types.PREV_CARD,
  payload: null,
});

export const nextCardActionCreator = () => ({
  type: types.NEXT_CARD,
  payload: null,
});