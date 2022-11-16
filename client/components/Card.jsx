import React from 'react';
import { connect } from 'react-redux';
import BackOfCard from './BackOfCard.jsx';
import FrontOfCard from './FrontOfCard.jsx';


const Card = props => {
  const {card, isLogged, front} = props;
    
  return (
    <div className="card-component">
      {front && 
      <FrontOfCard 
        card ={card}
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