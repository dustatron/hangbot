import React from "react";
import PropTypes from "prop-types";

const Robot = (props) => {
  const botStyle = {
    margin: "auto",
    width: "326px",
    height: "363px",
    background: "#000000",
    boxShadow: "0px 0px 30px rgba(121, 120, 120, 0.15)",
    borderRadius: "6px"
  };
  return (
    <div style={botStyle}>
      <h1>Robot</h1>
    </div>
  );
};

Robot.propTypes = {};

export default Robot;
