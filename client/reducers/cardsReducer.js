import * as types from '../constants/actionTypes.js';


const initialState = {
  cardOfTheDay: { 
    word: "senioritis",
    definition: "an affliction of students in their final days of school characterized by a decline in motivation or performance",
    sentence: "I have senioritis."    
  },
  deck: [
    {word: "whacked", definition: "completely exahusted", sentence: "I am whacked."},
    {word: "tuckered", definition: "exhausted; worn out", sentence: "I am tuckered."},
    {word: "distressed", definition: "suffering from anxiety, sorrow, or pain", sentence: "I am distressed."},
    {word: "fatigue", definition: "extreme tiredness resulting from mental or physical exertion or illness", sentence: "I have fatigue."},
    {word: "exasperated", definition: "intensely irritated and frustrated", sentence: "I am exasperated."},
    {word: "unionize", definition: "become or cause to become members of a labor union", sentence: "I will unionize"},
    {word: "enervated", definition: "drained of energy or vitality", sentence: "I am enervated."},
  ],
  currentCard: { 
    word: "senioritis",
    definition: "an affliction of students in their final days of school characterized by a decline in motivation or performance",
    sentence: "I have senioritis."  
  },
  cardsInDeck: 7,
  isLogged: true,
  front: true,
  currentI: null 
}

const cardsReducer = (state = initialState, action) => {
  // const newState = Object.assign({}, state)

  switch (action.type) {

    case types.CREATE_USER:{  
      return {
        ...state,
        isLogged: true,
        cardOfTheDay: action.payload.wordOfTheDay
      }
    }
    
    case types.LOGIN_USER:{
      console.log('hello from inside the login user reducer');
      console.log(action)
      if(action.payload.state){
        return{
          ...action.payload.state,
          isLogged: true,
          cardOfTheDay: action.payload.cardOfTheDay
        }
      }
      return {
        ...state, 
        isLogged: true,
        cardOfTheDay: action.payload.cardOfTheDay
      }
    }

    case types.ADD_CARD:{
      for(const card of state.deck){
        if(card.word === state.currentCard.word) return {...state};
      }
      const newDeck = [...state.deck];
      newDeck.push(state.currentCard);
      const currentI = newDeck.length - 1;
      const cardsInDeck = newDeck.length;
      return {
        ...state,
        deck: newDeck,
        currentI,
        cardsInDeck
      }
    }

    case types.DELETE_CARD:{
      const deck = [...state.deck];
      deck.splice(1, state.currentI);
      return {
        ...state,
        deck
      }
    }

    case types.FLIP_CARD:{
      console.log('hello from inside the flip card reducer');
      const currentFront = state.front;
      return {
        ...state,
        front: !currentFront
      }
    }

    case types.PREV_CARD:{
      let currentCard;
      let currentI;
      if(state.currentI === null){
         currentCard = state.deck[0];
         currentI = 0;
      }
      else if(state.currentI > 0){
         currentCard = state.deck[state.currentI - 1];
         currentI = state.currentI - 1;
      }else{
         currentCard = state.deck[state.deck.length -1];
         currentI = state.deck.length - 1;
      }
      return {
        ...state,
        currentCard,
        currentI
      }
    }

    case types.NEXT_CARD:{
      let currentCard;
      let currentI;
      if(state.currentI === null){
         currentCard = state.deck[0];
         currentI = 0;
      }
      else if(state.currentI === state.deck.length - 1){
         currentCard = state.deck[0];
         currentI = 0;
      }else{
         currentCard = state.deck[state.currentI + 1];
         currentI = state.currentI + 1;
      }
      return {
        ...state,
        currentCard,
        currentI
      }
    }

    case types.CARD_OF_DAY:{
      return {
        ...state,
        cardOfTheDay: {
          id: null,
          word: action.payload.word,
          definition: action.payload.definition
        }
      }
    }

    default:{
      return state;
    }
  }
}

export default cardsReducer;