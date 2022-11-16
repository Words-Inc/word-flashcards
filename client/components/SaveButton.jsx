import React from 'react';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => ({
    saveToDeck : (card) => dispatch(actions.addCardActionCreator(card)),
    deleteCard : (card) => dispatch(actions.deleteCardActionCreator(card))
})


const SaveButton = (props) => {
    const {card, deleteCard, saveToDeck} = props;

    const handleClick = () => {
        if(card.id) deleteCard(card); 
        if(!card.id) saveToDeck(card);
    }
    
    return (
        <div>
            <span class = "saveButton" onClick = {handleClick}>{card.id && {'\u2605': any}}{!card.id && {'\u2606': any}}</span>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(SaveButton);