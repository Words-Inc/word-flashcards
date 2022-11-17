import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card.jsx'
import * as actions from '../actions/actions.js'

const mapStateToProps = state => ({
  card: state.cards.currentCard,
  isLogged : state.cards.isLogged,
  front: state.cards.front,
  cardsInDeck : state.cards.cardsInDeck
})

const mapDispatchToProps = dispatch => ({
  nextCard : () => dispatch(actions.nextCardActionCreator()),
  prevCard : () => dispatch(actions.prevCardActionCreator())
})





function WordContainer (props) {

  function handleClick(e){
    const buttonClicked = e.target.id;
    // const prevCard = document.querySelector('prevCard');
    // const nextCard = document.querySelector('nextCard');
    buttonClicked === 'prevCard' ? props.prevCard() : props.nextCard();
  }

 
  return(
    <div className="word-container"> 
      <Card 
        card = {props.card}
        isLogged = {props.isLogged}
        front = {props.front}
      />
      <button className='previous-button' id='prevCard' name='prevCard' onClick={handleClick}>Previous</button>
      <button className='next-button' id='nextCard' name='nextCard' onClick={handleClick}>Next</button>
      <h4>Cards in your deck: <span id='totalCardsInDeck'>{props.cardsInDeck}</span></h4>
    </div>
  );
  
};


export default connect(mapStateToProps, mapDispatchToProps)(WordContainer);