import React from "react";
import SaveButton from "./SaveButton.jsx";
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'

const mapDispatchToProps = dispatch => ({
  flipCard: () => dispatch(actions.flipCardActionCreator())
})

function FrontOfCard (props) {

  const { card, isLogged, front } = props;
  // console.log('front: ', front)

  const handleClick = () => {
    props.flipCard(!front)
  }

  return (
    <div className="card" onClick={handleClick}>
      <h1>{card.word}</h1>
      {isLogged && <SaveButton card = {card}/>}
    </div>
  )
}

export default connect(null, mapDispatchToProps)(FrontOfCard);