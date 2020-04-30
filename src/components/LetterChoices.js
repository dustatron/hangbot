import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

function LetterChoices(props) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const mainBox = {
    margin: '20px auto',
    width: '100%',
    height: 'auto',
    background: '#FFFFFF',
    boxShadow: '0px 0px 20px rgba(102, 102, 102, 0.15)',
    borderRadius: '15px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  };

  const letterBox = useSpring({
    display: 'inline',
    padding: '5px',
    margin: '5px',
    width: '6%',
    fontSize: '30px',
    fontWeight: 'bold',
    cursor: 'pointer',
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 }
  });

  const handleLetterClick = (letter) => {
    props.onLetterClick(letter);
    props.updateGuessCounter(letter);
  };
  return (
    <div style={mainBox}>
      {letters.split('').map((letter) => {
        if (!props.guessedLetters.includes(letter)) {
          return (
            <animated.div
              onClick={() => {
                handleLetterClick(letter);
              }}
              style={letterBox}
            >
              {letter}
            </animated.div>
          );
        } else {
          return <animated.div style={letterBox} />;
        }
      })}
    </div>
  );
}

LetterChoices.propTypes = {
  onLetterClick: PropTypes.func,
  updateGuessCounter: PropTypes.func,
  guessedLetters: PropTypes.array
};

export default LetterChoices;
