import React from "react";
import PropTypes from "prop-types";

const TurnCount = (props) => {
  const mainBox = {
    textAlign: "center"
  };
  return (
    <div style={mainBox}>
      <h1>11 Turns remaining</h1>
    </div>
  );
};

TurnCount.propTypes = {};

export default TurnCount;
