import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeckContainer from '/DeckContainer.jsx';
import Card from './components/Card.jsx'


class WordContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container"> 
        <CardContainer />
      </div>
    );
  }
};

export default WordContainer;