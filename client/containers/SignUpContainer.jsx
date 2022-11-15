import React from 'react';
import { connect } from 'react-redux';
import Card from './components/Card.jsx'
import * as actions from './actions/actions.js'


const mapDispatchToProps = dispatch => ({
  createUser : (user) => dispatch(actions.createUserActionCreator(user)),
  loginUser : (user) => dispatch(actions.loginUserActionCreator(user))
})

const handleClick = (e) => {
  const buttonClicked = e.target.id;
  const username = document.querySelector('username');
  const password = document.querySelector('password');
  const user = { username: username.value, password: password.value};
  buttonClicked === 'signUp' ? props.createUser(user) : props.loginUser(user);
  username.value = '';
  password.value = '';
};

class SignUpContainer extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <Card />
        <div className='container'>
          <h2>Login or Sign Up</h2>
          <div>
            <input id="username" type="text" name="username" placeholder="username"></input>
            <input id="password" type="text" name="password" placeholder="password"></input>
            <button id ="signUp" onClick={() => handleClick(e)} >Sign Up</button>
            <button id ="login" onClick={() => handleClick(e)} >Login</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(SignUpContainer);