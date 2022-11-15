import React from 'react';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => ({
    saveToDeck : (card) => dispatch(actions.addCardActionCreator(card)),
})


const SaveButton = (props) => {
    const {card} = props;

    const handleClick() => {
        props.saveToDeck(card);
    }
    return (
        <>
            <span>{}</span>
            <button class = "saveButton">Save to Deck</button>
        </>
    )
}

export default SaveButton;