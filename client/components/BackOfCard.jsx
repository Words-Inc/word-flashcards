import React from "react";
import SaveButton from "./SaveButton.jsx";
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'



const mapDispatchToProps = dispatch => ({
  flipCard : () => dispatch(actions.flipCardActionCreator())
})

const BackOfCard = props => {
  const {card, isLogged, front} = props;
  // console.log('front: ', front)

  const handleClick = () => {
    props.flipCard(!props.front)
  }

  return (
    <div className="card" onClick={handleClick}>
        <h1>{card.word}</h1>
      <h3>Definition: {card.definition}</h3>
      <h3>Sentence: {card.sentence}</h3>
      {isLogged && <SaveButton card = {card}/>}
    </div>
  )
}

export default connect(null, mapDispatchToProps)(BackOfCard);