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
import EndGameModal from './EndGameModal';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldShowModal = () => {
    if (this.props.winGame !== null) {
      return true;
    } else {
      return false;
    }
  };

  checkForWin = () => {
    const mainLetters = this.props.currentWord.toUpperCase().split('');
    const tempArr = mainLetters.filter((letter) => this.props.trackGuess.includes(letter.toUpperCase()));

    if (tempArr.sort().join('') === mainLetters.sort().join('')) {
      return true;
    } else {
      return false;
    }
  };

  handleWinGame = () => {
    if (this.checkForWin()) {
      const { dispatch } = this.props;
      const action = { type: a.WIN_GAME };
      dispatch(action);
    }
  };

  componentDidMount() {
    const { dispatch } = this.props;
    const action = { type: a.SET_WORD };
    dispatch(action);
  }

  handleLetterClick = async (letter) => {
    const { dispatch } = this.props;
    const action = { type: a.ADD_LETTER, letter: letter };
    await dispatch(action);

    const isWin = this.checkForWin();
    if (isWin) {
      //user wins game
      this.handleWinGame();
    } else if (this.props.wrongGuesses <= 0 && !isWin) {
      //user loses game
      dispatch({ type: a.LOSE_GAME });
    }
  };

  handleDecrementingTurn = (letter) => {
    const { dispatch } = this.props;
    if (!this.props.currentWord.toUpperCase().split('').includes(letter)) {
      const action = { type: a.WRONG_GUESS };
      dispatch(action);
    }
  };

  handleResettingGame = () => {
    const { dispatch } = this.props;
    const action1 = { type: a.RESET_GAME };
    const action2 = { type: a.RESET_GUESS };
    const action3 = { type: a.RESET_LETTERS };
    const action4 = { type: a.SET_WORD };
    dispatch(action1);
    dispatch(action2);
    dispatch(action3);
    dispatch(action4);
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
              <EndGameModal
                onResetClick={this.handleResettingGame}
                showModal={this.shouldShowModal()}
                endState={this.props.winGame}
                mainWord={this.props.currentWord}
              />
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
