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
  createUser : () => dispatch(actions.createUserActionCreator()),
  loginUser : () => dispatch(actions.loginUserActionCreator())
})

function SignUpContainer (props) {

  const {word, createUser, loginUser, card, isLogged, front} = props;
  console.log(props)
  function handleClick(e) {
    console.log(isLogged);
    // const {createUser, loginUser} = this.props;
    
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
    fetch(`/api/${buttonClicked}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(res => res.json()) 
    .then(res => {
      if(buttonClicked === 'signup') {
        createUser()
      }
      else if(buttonClicked === 'login') {
        loginUser(res)
      }
    })
    .catch(err => {
      console.log(err);
      throw new Error(err);
    })
  }

  return(
    <div className='signup-container'>
      <Card 
        card = {card}
        isLogged = {isLogged}
        front = {front}
      />
      <div className='signup-zone'>
        <h2 className='input-title'>Login or Sign Up</h2>
        <div className='input-fields'>
          <input className='username' id="username" type="text" name="username" placeholder="username"></input>
          <input className='password' id="password" type="password" name="password" placeholder="password"></input>

          <button className='signup-button' id ="signup" onClick={handleClick} >Sign Up</button>
          <button className='login-button' id ="login" onClick={handleClick} >Login</button>

        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);