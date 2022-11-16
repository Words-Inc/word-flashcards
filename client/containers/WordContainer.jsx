import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card.jsx'

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


const handleClick = (e) => {
  const buttonClicked = e.target.id;
  const prevCard = document.querySelector('prevCard');
  const nextCard = document.querySelector('nextCard');
  buttonClicked === 'prevCard' ? props.prevCard() : props.nextCard();
};


class WordContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="word-container"> 
        <h1>Word container</h1>
        <Card 
          card = {this.props.card}
          isLogged = {this.props.isLogged}
          front = {this.props.front}
        />
        <button id='prevCard' name='prevCard' onClick={() => handleClick(e)}>Previous</button>
        <button id='nextCard' name='nextCard' onClick={() => handleClick(e)}>Next</button>
        <span id='totalCardsInDeck'>{this.props.cardsInDeck}</span>
      </div>
    );
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(WordContainer);