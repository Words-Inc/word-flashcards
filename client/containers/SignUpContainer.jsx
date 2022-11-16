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
  createUser : (user) => dispatch(actions.createUserActionCreator(user)),
  loginUser : (user) => dispatch(actions.loginUserActionCreator(user))
})

// const handleClick = (e) => {
//   e.preventDefault();
//   //console.log(e.target.id);
//   const buttonClicked = e.target.id;
//   const username = document.querySelector('#username');
//   //console.log(username.value);
//   const password = document.querySelector('#password');
//   const user = { username: username.value, password: password.value};
//   buttonClicked === 'signUp' ? props.createUser(user) : props.loginUser(user);
//   username.value = '';
//   password.value = '';
// };

class SignUpContainer extends Component {

  constructor(props) {
    super(props);
  }
  
  

  render(){
    const {createUser, loginUser, card, isLogged, front} = this.props;
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
          if(buttonClicked === 'signup'){
            createUser()
          }
          else if(buttonClicked === 'login'){
            loginUser(res)
          }
        })
        .catch(err => {
          console.log(err);
          throw new Error(err);
        })
    }

    return(
      <div>
        <Card 
          card = {this.props.card}
          isLogged = {this.props.isLogged}
          front = {this.props.front}
        />
        <div className='signup-container'>
          <h2>Login or Sign Up</h2>
          <div>
            <input id="username" type="text" name="username" placeholder="username"></input>
            <input id="password" type="password" name="password" placeholder="password"></input>

            <button id ="signup" onClick={handleClick} >Sign Up</button>
            <button id ="login" onClick={handleClick} >Login</button>

          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);