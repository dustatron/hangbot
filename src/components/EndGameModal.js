import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

function EndGameModal(props) {
  // const [ show, setShow ] = props.endGame;

  const handleClose = () => console.log('handleClose');
  const handleShow = () => console.log('handleCShow');

  return (
    <div>
      <Modal show={props.showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.endState ? 'You Win!' : 'You Lose'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

EndGameModal.propTypes = {
  showModal: PropTypes.bool,
  endState: PropTypes.bool
};

export default EndGameModal;
