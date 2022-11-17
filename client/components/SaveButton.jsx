import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'

const mapDispatchToProps = (dispatch) => ({
  saveToDeck : () => dispatch(actions.addCardActionCreator()),
  deleteCard : () => dispatch(actions.deleteCardActionCreator())
})


const SaveButton = (props) => {
  const {card, deleteCard, saveToDeck} = props;

  const handleClick = () => {
    //if(card.id) deleteCard(card); 
    saveToDeck();
  }
    
  return (
    <div className='savebutton-holder'>
      <button className = "saveButton" onClick = {handleClick}>Save</button>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(SaveButton);