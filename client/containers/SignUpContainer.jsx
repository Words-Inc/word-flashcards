import React from 'react';
import { connect } from 'react-redux';
import Card from './components/Card.jsx'
import * as actions from './actions/actions.js'

const mapDispatchToProps = dispatch => ({
  addUser : (username) => dispatch(actions.addUserActionCreator(username))
})

class SignUpContainer = props => {

  const handleClick = () => {
    const input = document.querySelector('input');
    props.setUsername(input.value);
    props.setPassword(input.value);
    input.value = '';
  };

  return(
    <div className="signUp">
      <h2>Sign Up</h2>
      <div>
        <input id="input" type="text" name="username" placeholder="username"></input>
        <input id="input" type="text" name="password" placeholder="password"></input>
        <button id ="button" onClick={handleClick} >Sign Up</button>
      </div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(SignUpContainer);