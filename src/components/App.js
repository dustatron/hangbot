import React from 'react';
import Robot from './Robot';
import LetterChoices from './LetterChoices';
import LetterBlanks from './LetterBlanks';
import TurnCount from './TurnCount';
import ResetButton from './ResetButton';
import '../App.css';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import * as a from '../actions/ActionTypes';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const action = { type: a.SET_WORD };
    dispatch(action);
  }

  handleLetterClick = (letter) => {
    const { dispatch } = this.props;
    const action = { type: a.ADD_LETTER, letter: letter };
    dispatch(action);
  };

  handleDecrementingTurn = (letter) => {
    const { dispatch } = this.props;
    if (!this.props.currentWord.toUpperCase().split('').includes(letter)) {
      const action = { type: a.WRONG_GUESS };
      dispatch(action);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <h1 class="text-center"> HangBot </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Robot currentTurnCount={this.props.wrongGuesses} />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <LetterBlanks letters={this.props.currentWord} guessedLetters={this.props.trackGuess} />
            </Col>
          </Row>

          <Row>
            <Col xs="12">
              <TurnCount currentTurnCount={this.props.wrongGuesses} />
            </Col>
          </Row>

          <Row>
            <Col>
              <LetterChoices
                updateGuessCounter={this.handleDecrementingTurn}
                onLetterClick={this.handleLetterClick}
                guessedLetters={this.props.trackGuess}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ResetButton />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    winGame: state.winGame,
    wrongGuesses: state.wrongGuesses,
    trackGuess: state.trackGuess,
    currentWord: state.currentWord
  };
};

App = connect(mapStateToProps)(App);

export default App;
