import React, { useState, useEffect, Component } from 'react';
import SignUpContainer from './containers/SignUpContainer.jsx';
import WordContainer from './containers/WordContainer.jsx';
import "./styles.scss"
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isLogged : state.cards.isLogged,
})




function App(props) {
  // constructor(props) {
  //   super(props);
  // }
  let wordOfTheDay = {};
  useEffect(()=> {
    console.log("component did update");
    console.log(props.isLogged);
  }, [props.isLogged]);

  useEffect(()=>{
    //fetch from the API and save the word to state
    const words = ["pizza", "podiatrist", "tintinnabulation", "perplex", "stifle", "graduation", "lugubrious", "hirsute", "unconscionable", "ephemeral", "hullabaloo", "cacophony"]
    const word = words[Math.ceil(Math.random()*words.length)];
    fetch(`https://dictionaryapi.com/api/v3/references/sd4/json/${word}?key=f69170b6-5524-4e59-b746-535d2388ef0e`, {
      method: 'GET'
    })
      .then(res => res.json()) 
      .then(res => {
        wordOfTheDay = {word: res[0].meta.id, definition: res[0].shortdef[0]};
        console.log(wordOfTheDay);
        })
  }, [])
   
  

  return( 
    <div>
      {!props.isLogged && <SignUpContainer word = {wordOfTheDay}/>}
      {props.isLogged && <WordContainer />}
    </div>
  );
}

  export default connect(mapStateToProps, null)(App);