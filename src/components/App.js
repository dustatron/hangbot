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
      winGame: null,
      wrongGuesses: 11,
      trackGuess: ['a', 'b', 'c'], 
      currentWord: "string",
      wordList: ["string", "string","string"]
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