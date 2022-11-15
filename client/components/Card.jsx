import React from 'react';
import { connect } from 'react-redux';



const Card = props => {
  const {card, isLogged, front} = props;
    
  return (
    <div class="">
      {front && 
      <FrontOfCard 
        word ={card.word}
        isLogged = {isLogged}
      />}
      {!front && 
      <BackOfCard
        card = {card}
        isLogged = {isLogged}
      />}
    </div>
  )
}

export default FrontOfCard;