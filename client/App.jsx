import React, { Component } from 'react';
import SignUpContainer from './containers/SignUpContainer.jsx';
import "./styles.scss"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <SignUpContainer />
      </div>
    );
  }
}

export default App;