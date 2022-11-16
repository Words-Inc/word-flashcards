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

  useEffect(()=> {
    console.log("component did update");
    console.log(props.isLogged);
  }, []);
   
  

  return( 
    <div>
      {!props.isLogged && <SignUpContainer />}
      {props.isLogged && <WordContainer />}
    </div>
  );
}

  export default connect(mapStateToProps, null)(App);