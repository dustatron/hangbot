import React from "react";
import Robot from "./Robot";
import LetterChoices from "./LetterChoices";
import LetterBlanks from "./LetterBlanks";
import TurnCount from "./TurnCount";
import ResetButton from "./ResetButton";
import "../App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winGame: null,
      wrongGuesses: 11,
      trackGuess: [ "a", "b", "c" ],
      currentWord: "string",
      wordList: [ "string", "string", "string" ]
    };
  }

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
              <Robot />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <LetterBlanks />
            </Col>
          </Row>

          <Row>
            <Col xs="12">
              <TurnCount />
            </Col>
          </Row>

          <Row>
            <Col>
              <LetterChoices />
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

export default App;
