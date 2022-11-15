import React from 'react';
import LoginContainer from './containers/LoginContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <LoginContainer />
      </div>
    );
  }
}

export default App;