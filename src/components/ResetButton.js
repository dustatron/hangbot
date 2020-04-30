import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ResetButton = (props) => {
  const mainBox = {
    margin: '3rem',
    textAlign: 'center'
  };
  return (
    <div style={mainBox}>
      <Button onClick={() => props.whereResetClicked()} variant="dark" size="lg">
        Reset
      </Button>
    </div>
  );
};

ResetButton.propTypes = {
  whereResetClicked: PropTypes.func
};

export default ResetButton;
