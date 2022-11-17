import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card.jsx'
import * as actions from '../actions/actions.js'

const mapStateToProps = state => ({
  card: state.cards.currentCard,
  isLogged : state.cards.isLogged,
  front: state.cards.front,
  cardsInDeck : state.cards.cardsInDeck
})

const mapDispatchToProps = dispatch => ({
  createUser : (word) => dispatch(actions.createUserActionCreator(word)),
  loginUser : (state) => dispatch(actions.loginUserActionCreator(state))
})

function SignUpContainer (props) {

  const {word, createUser, loginUser, card, isLogged, front, wordOfTheDay} = props;
  // console.log(word);
  
  function handleClick(e) {
    // console.log('isLogged: ', isLogged);
    
    e.preventDefault();
    //console.log(e.target.id);
    const buttonClicked = e.target.id;
    const username = document.querySelector('#username');
    //console.log(username.value);
    const password = document.querySelector('#password');
    const user = { username: username.value, password: password.value};
    console.log(user);
    //buttonClicked === 'signUp' ? createUser(user) : loginUser(user);
    username.value = '';
    password.value = '';
    let newState = {};
    if(buttonClicked === "signup"){
    fetch(`/api/signup`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(res => {
      if(res.status === 201) createUser(wordOfTheDay);
    })
    .catch(err => {
      console.log(err);
      throw new Error(err);
    })

    }else{
      fetch(`/api/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      })
      .then(res => res.json()) 
      .then(data => {
        console.log(data);
        const cardOfTheDay = {
          id: null,
          word: wordOfTheDay.word,
          definition: wordOfTheDay.definition
        }
        newState = {...data, cardOfTheDay};
        loginUser(newState);
      })
      .catch(err => {
        console.log(err);
        throw new Error(err);
      })
    }
    
  }

  return(
    <div className='signup-container'>
      <div className='card-zone'>
        <Card 
          card = {card}
          isLogged = {isLogged}
          front = {front}
        />
      </div>
      <div className='input-title'>
          <h2>Login or Sign Up</h2>
      </div>
      <div className='signup-zone'>
        <div className='input-fields'>
          <input className='username' id="username" type="text" name="username" placeholder="username"></input>
          <input className='password' id="password" type="password" name="password" placeholder="password"></input>
          <div className='button-holder'>
            <button className='signup-button' id ="signup" onClick={handleClick} >Sign Up</button>
            <button className='login-button' id ="login" onClick={handleClick} >Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);