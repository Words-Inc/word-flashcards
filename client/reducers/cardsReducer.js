import * as types from '../constants/actionTypes.js';


const initialState = {
  cardOfTheDay: { 
    id: null,
    word: "",
    definition: "",
    sentence: ""    
  },
  deck: [],
  currentCard: { 
    id: null, 
    word: "",
    definition: "",
    sentence: "",
  },
  cardsInDeck: 0,
  isLogged: false,
  front: true,
  lastId: 100 
}

const cardsReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case types.CREATE_USER:{  
      return {
        ...newState,
        isLogged: true
      }
    }
    
    case types.LOGIN_USER:{
      console.log('hello from inside the login user reducer');
      console.log(action.payload)
      if(action.payload.state){
        return{
          ...action.payload.state,
          isLogged: true
        }
      }
      return {
        ...newState, 
        isLogged: true
      }
    }
    case types.ADD_CARD:{
      return state;
    }
    case types.DELETE_CARD:{
      return state;
    }
    case types.FLIP_CARD:{
      return state;
    }
    case types.PREV_CARD:{
      return state;
    }
    case types.NEXT_CARD:{
      return state;
    }
    default:{
      return state;
    }
  }
}

export default cardsReducer;