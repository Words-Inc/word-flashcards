import React from 'react';
import { connect } from 'react-redux';
import BackOfCard from './BackOfCard.jsx';
import FrontOfCard from './FrontOfCard.jsx';


const Card = props => {
  const {card, isLogged, front} = props;
    
  return (
    <div className="">
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

export default Card;