import React from 'react';
import PropTypes from 'prop-types';
import ResetButton from './ResetButton';
import { Modal, Button } from 'react-bootstrap';

function EndGameModal(props) {
  return (
    <div>
      <Modal show={props.showModal} onHide={props.onResetClick}>
        <Modal.Header closeButton>
          <Modal.Title>{props.endState ? 'You Win!' : 'You Lose'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.endState ? 'I am so proud of you. My human friend!' : "It' okay to not be perfect like a robot."}
          <br />
          Care to try again?
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onResetClick}> Restart Game </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

EndGameModal.propTypes = {
  showModal: PropTypes.bool,
  endState: PropTypes.bool,
  onResetClick: PropTypes.func
};

export default EndGameModal;
