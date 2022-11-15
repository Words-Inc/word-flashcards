import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeckContainer from '/DeckContainer.jsx';
import Card from './components/Card.jsx'

const mapStateToProps = state => ({
  card: state.cards.currentCard,
  isLogged : state.cards.isLogged,
  front: state.cards.front,
  cardsInDeck : state.cards.cardsInDeck
})


class WordContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container"> 
        <Card 
          card = {this.props.card}
          isLogged = {this.props.isLogged}
          front = {this.props.front}
        />
        <button id='button' name='viewDeck' onClick={ }>View Deck</button>
        <span id='totalCardsInDeck'>{this.props.cardsInDeck}</span>
      </div>
    );
  }
};


export default connect(mapStateToProps, null)(WordContainer);