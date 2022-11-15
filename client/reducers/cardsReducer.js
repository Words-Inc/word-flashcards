import * as types from '..constants/actionTypes.js';


const initialState = {
  cardOfTheDay: { 
    id: null,
    word: "",
    definition: "",
    sentence: ""    
  },
  deck: {},
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
  
}