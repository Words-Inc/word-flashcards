import React from "react";
import SaveButton from "./SaveButton.jsx";

const FrontOfCard = props => {
    const {word, isLogged} = props;
    
    return (
        <div class="card">
            <h1>{word}</h1>
            {isLogged && <SaveButton />}
        </div>
    )
}

export default FrontOfCard;