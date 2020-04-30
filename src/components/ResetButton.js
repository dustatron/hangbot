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
      <Button
        onClick={() => {
          props.onResetClick();
        }}
        variant="dark"
        size="lg"
      >
        ResetButton
      </Button>
    </div>
  );
};

ResetButton.propTypes = {
  onResetClick: PropTypes.func
};

export default ResetButton;
