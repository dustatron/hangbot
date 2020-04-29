import React from 'react';
import 

class App extends React.Component {
  constructor(props) {
    this.state = {
      stateHasBeenUsed: false
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
      </React.Fragment>
    )
  }
}

export default App;