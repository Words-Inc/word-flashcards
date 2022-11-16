import {combineReducers} from "redux";
import cardsReducer from './cardsReducer.js'

const reducers = combineReducers({
    cards: cardsReducer,
})


export default reducers;