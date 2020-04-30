import React from "react";
import PropTypes from "prop-types";

const Robot = (props) => {
  const botStyle = {
    position: "relative",
    margin: "auto",
    width: "326px",
    height: "363px",
    background: "#000000",
    boxShadow: "0px 0px 30px rgba(121, 120, 120, 0.15)",
    borderRadius: "6px"
  };

  const body = {
    position: "absolute",
    width: "133px",
    height: "119px",
    left: "32%",
    top: "35%",
    background: "#FFFFFF"
  };
  const leftArm = {
    position: "absolute",
    width: "24.16px",
    height: "80.07px",
    left: "79%",
    top: "35%",
    background: "#FFFFFF",
    transform: "rotate(-109.89deg)"
  };
  const leftLeg = {
    position: "absolute",
    width: "72px",
    height: "20px",
    left: "35%",
    top: "75%",
    background: "#FFFFFF",
    transform: "rotate(-90.89deg)"
  };
  const leftFoot = {
    position: "absolute",
    width: "19px",
    height: "52px",
    left: "35%",
    top: "78%",
    background: "#FFFFFF",
    transform: "rotate(-90.89deg)"
  };
  const rightFoot = {
    position: "absolute",
    width: "19px",
    height: "52px",
    left: "64%",
    top: "78%",
    background: "#FFFFFF",
    transform: "rotate(-90.89deg)"
  };
  const rightLeg = {
    position: "absolute",
    width: "72px",
    height: "20px",
    left: "50%",
    top: "75%",
    background: "#FFFFFF",
    transform: "rotate(-90.89deg)"
  };
  const rightArm = {
    position: "absolute",
    width: "24.16px",
    height: "80.07px",
    left: "17%",
    top: "35%",
    background: "#FFFFFF",
    transform: "rotate(-87.17deg)"
  };

  const head = {
    position: "absolute",
    width: "93px",
    height: "74px",
    left: "38%",
    top: "14%",
    background: "#FFFFFF"
  };

  const rightEye = {
    position: "absolute",
    width: "20px",
    height: "20px",
    left: "55%",
    top: "20%",
    borderRadius: "50%",
    background: "#000000"
  };
  const leftEye = {
    position: "absolute",
    width: "30px",
    height: "30px",
    left: "45%",
    top: "18.5%",
    borderRadius: "50%",
    background: "#000000"
  };
  const mouth = {
    position: "absolute",
    width: "57px",
    height: "5px",
    left: "45%",
    top: "30%",

    background: "#000000"
  };

  return (
    <div style={botStyle}>
      {/* Head Elements */}
      <div style={head} />
      <div style={rightEye} />
      <div style={leftEye} />
      <div style={mouth} />
      {/* Body Elements  */}
      <div style={body} />
      {/* Left Side */}
      <div style={leftArm} />
      <div style={leftLeg} />
      <div style={leftFoot} />
      {/* right side  */}
      <div style={rightArm} />
      <div style={rightLeg} />
      <div style={rightFoot} />
    </div>
  );
};

Robot.propTypes = {};

export default Robot;
