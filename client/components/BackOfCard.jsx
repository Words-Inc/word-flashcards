import React from "react";
import SaveButton from "./SaveButton.jsx";
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    flipCard : (boolean) => dispatch(actions.flipCardActionCreator(boolean))
})

const BackOfCard = props => {
    const {card, isLogged, front} = props;

    const handleClick = () => {
        props.flipCard(!props.front)
    }

    return (
        <div class="card">
            <h1>{card.word}</h1>
            <h4>Definition: {card.definition}</h4>
            <h4>Sentence: {card.sentence}</h4>
            {isLogged && <SaveButton card = {card}/>}
        </div>
    )
}

export default connect(null, mapDispatchToProps)(BackOfCard);