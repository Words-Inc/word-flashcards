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
      console.log('hello from inside the create user reducer');
      console.log(action.payload);
      fetch('/api/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(action.payload)
      })
        .then(res => res.json())
        .then(res => {
          if(res.status === 201){
            return Object.assign({}, state, {isLogged: true})
          }else return;
        })
        .catch(err => {
          console.log(err);
          throw new Error(err);
        })
          
        
      return newState;
    }
    
    case types.LOGIN_USER:{
      console.log('hello from inside the login user reducer');
      fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(action.payload)
      })
        .then(res => res.json()) 
        .then(res => {
          return state;
        })
        .catch(err => {
          console.log(err);
          throw new Error(err);
        })
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