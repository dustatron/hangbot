import React from 'react';
import PropTypes from 'prop-types';

function LetterBlanks(props) {
  const mainBox = {
    display: 'flex',
    justifyContent: 'center'
  };

  const outterBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px auto',
    minWidth: '25%',
    height: '74px',
    border: '5px solid #000000',
    boxSizing: 'border-box'
  };

  const greyBox = {
    display: 'inline-block',
    margin: '10px',
    width: '49px',
    height: '43px',
    background: '#C4C4C4'
  };

  const showBox = {
    display: 'inline-block',
    margin: '10px',
    width: '50px',
    height: 'auto',
    // padding: '0px 0px 20px 0px ',
    fontSize: '40px',
    textAlign: 'center'
  };
  return (
    <div style={mainBox}>
      <div style={outterBox}>
        {props.letters.toUpperCase().split('').map((letter) => {
          if (props.guessedLetters.includes(letter)) {
            return <div style={showBox}>{letter}</div>;
          } else if (letter === ' ') {
            return <div style={showBox}>{letter}</div>;
          } else {
            return <div style={greyBox} />;
          }
        })}
      </div>
    </div>
  );
}

LetterBlanks.propTypes = {
  letter: PropTypes.string,
  guessedLetters: PropTypes.array
};

export default LetterBlanks;
