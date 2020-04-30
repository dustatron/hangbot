import React from 'react';
import PropTypes from 'prop-types';

const TurnCount = (props) => {
  const mainBox = {
    textAlign: 'center'
  };
  return (
    <div style={mainBox}>
      <h1>{props.currentTurnCount} Turns remaining</h1>
    </div>
  );
};

TurnCount.propTypes = {
  currentTurnCount: PropTypes.number
};

export default TurnCount;
