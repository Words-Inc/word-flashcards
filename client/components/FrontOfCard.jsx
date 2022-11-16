import React from "react";
import SaveButton from "./SaveButton.jsx";
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  flipCard: (boolean) => dispatch(actions.flipCardActionCreator(boolean))
})

const FrontOfCard = props => {
  const { word, isLogged, front } = props;

  const handleClick = () => {
    props.flipCard(!props.front)
  }

  return (
    <div className="card" onClick={handleClick}>
      <h1>{word}</h1>
      {isLogged && <SaveButton card = {card}/>}
    </div>
  )
}

export default connect(null, mapDispatchToProps)(FrontOfCard);