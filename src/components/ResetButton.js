import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const ResetButton = (props) => {
  const mainBox = {
    margin: "3rem",
    textAlign: "center"
  };
  return (
    <div style={mainBox}>
      <Button variant="dark" size="lg">
        ResetButton
      </Button>
    </div>
  );
};

ResetButton.propTypes = {};

export default ResetButton;
