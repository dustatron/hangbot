import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { Transition } from 'react-spring/renderprops';

const Robot = (props) => {
  const botStyle = useSpring({
    position: 'relative',
    margin: 'auto',
    width: '326px',
    height: '363px',
    background: '#000000',
    boxShadow: '0px 0px 30px rgba(121, 120, 120, 0.15)',
    borderRadius: '6px',
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2500 }
  });

  const body = {
    position: 'absolute',
    width: '133px',
    height: '119px',
    left: '32%',
    top: '35%',
    background: '#FFFFFF'
  };
  const leftArm = {
    position: 'absolute',
    width: '24.16px',
    height: '80.07px',
    left: '79%',
    top: '35%',
    background: '#FFFFFF',
    transform: 'rotate(-109.89deg)'
  };
  const leftLeg = {
    position: 'absolute',
    width: '72px',
    height: '20px',
    left: '35%',
    top: '75%',
    background: '#FFFFFF',
    transform: 'rotate(-90.89deg)'
  };
  const leftFoot = {
    position: 'absolute',
    width: '19px',
    height: '52px',
    left: '35%',
    top: '78%',
    background: '#FFFFFF',
    transform: 'rotate(-90.89deg)'
  };
  const rightFoot = {
    position: 'absolute',
    width: '19px',
    height: '52px',
    left: '64%',
    top: '78%',
    background: '#FFFFFF',
    transform: 'rotate(-90.89deg)'
  };
  const rightLeg = {
    position: 'absolute',
    width: '72px',
    height: '20px',
    left: '50%',
    top: '75%',
    background: '#FFFFFF',
    transform: 'rotate(-90.89deg)'
  };
  const rightArm = {
    position: 'absolute',
    width: '24.16px',
    height: '80.07px',
    left: '17%',
    top: '35%',
    background: '#FFFFFF',
    transform: 'rotate(-87.17deg)'
  };

  const head = {
    position: 'absolute',
    width: '93px',
    height: '74px',
    left: '38%',
    top: '14%',
    background: '#FFFFFF'
  };

  const rightEye = {
    position: 'absolute',
    width: '20px',
    height: '20px',
    left: '55%',
    top: '20%',
    borderRadius: '50%',
    background: '#000000'
  };
  const leftEye = {
    position: 'absolute',
    width: '30px',
    height: '30px',
    left: '45%',
    top: '18.5%',
    borderRadius: '50%',
    background: '#000000'
  };
  const mouth = {
    position: 'absolute',
    width: '57px',
    height: '5px',
    left: '45%',
    top: '30%',

    background: '#000000'
  };

  const partArr = [ head, rightEye, leftEye, mouth, body, leftArm, rightArm, leftLeg, rightLeg, leftFoot, rightFoot ];

  return (
    <animated.div style={botStyle}>
      {partArr.splice(0, props.currentTurnCount).map((part) => <div style={part} />)}
    </animated.div>
  );
};

{
  /* <Transition
  items={items} keys={item => item.key}
  from={{ transform: 'translate3d(0,-40px,0)' }}
  enter={{ transform: 'translate3d(0,0px,0)' }}
  leave={{ transform: 'translate3d(0,-40px,0)' }}>
  {item => props => <div style={props}>{item.text}</div>}
</Transition> */
}

Robot.propTypes = {
  currentTurnCount: PropTypes.number
};

export default Robot;
