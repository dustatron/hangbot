import React from 'react';
import Robot from './Robot';
import LetterChoices from './LetterChoices';
import LetterBlanks from './LetterBlanks';
import TurnCount from './TurnCount';
import ResetButton from './ResetButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateHasBeenUsed: false
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1> HangBot </h1>
        <Robot />
        <LetterBlanks />
        <TurnCount />
        <LetterChoices />
        <ResetButton />
      </React.Fragment>
    )
  }
}

export default App;