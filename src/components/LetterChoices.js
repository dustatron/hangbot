import React from "react";
import PropTypes from "prop-types";

function LetterChoices(props) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const mainBox = {
    margin: "20px auto",
    width: "654px",
    height: "auto",
    background: "#FFFFFF",
    boxShadow: "0px 0px 20px rgba(102, 102, 102, 0.15)",
    borderRadius: "15px",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  };

  const letterBox = {
    display: "inline",
    padding: "5px",
    margin: "5px",
    fontSize: "30px",
    fontWeight: "bold"
  };
  return (
    <div style={mainBox}>
      {letters.split("").map((letter) => {
        return <div style={letterBox}>{letter}</div>;
      })}
    </div>
  );
}

LetterChoices.propTypes = {};

export default LetterChoices;
