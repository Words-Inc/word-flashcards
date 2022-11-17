import * as types from '../constants/actionTypes.js';
import { CREATE_USER, LOGIN, ADD_CARD, DELETE_CARD, FLIP_CARD, PREV_CARD, NEXT_CARD, CARD_OF_DAY } from '../constants/actionTypes.js';


export const createUserActionCreator = (word) => ({
  type: types.CREATE_USER,
  payload: word,
});

export const loginUserActionCreator = data => ({
  type: types.LOGIN_USER,
  payload: data, 
});

export const addCardActionCreator = () => ({
  type: types.ADD_CARD,
  payload: null,
});

export const deleteCardActionCreator = () => ({
  type: types.DELETE_CARD,
  payload: null,
});

export const flipCardActionCreator = () => ({
  type: types.FLIP_CARD,
  payload: null,
});

export const prevCardActionCreator = () => ({
  type: types.PREV_CARD,
  payload: null,
});

export const nextCardActionCreator = () => ({
  type: types.NEXT_CARD,
  payload: null,
});

export const addCardOfTheDayActionCreator = (card) => ({
  type: types.CARD_OF_DAY,
  payload: card,
})