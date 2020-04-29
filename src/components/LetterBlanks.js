import React from "react";
import PropTypes from "prop-types";

function LetterBlanks(props) {
  const mainBox = {
    textAlign: "center"
  };

  const outterBox = {
    textAlign: "center",
    display: "inline-block",
    margin: "10px auto",
    minWidth: "25%",
    height: "74px",
    border: "5px solid #000000",
    boxSizing: "border-box"
  };

  const greyBox = {
    display: "inline-block",
    margin: "10px",
    width: "49px",
    height: "43px",
    background: "#C4C4C4"
  };
  return (
    <div style={mainBox}>
      <div style={outterBox}>
        <div style={greyBox} />
        <div style={greyBox} />
        <div style={greyBox} />
        <div style={greyBox} />
        <div style={greyBox} />
        <div style={greyBox} />
        <div style={greyBox} />
      </div>
    </div>
  );
}

LetterBlanks.propTypes = {};

export default LetterBlanks;
