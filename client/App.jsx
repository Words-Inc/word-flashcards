import React, { Component } from 'react';
import SignUpContainer from './containers/SignUpContainer.jsx';


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