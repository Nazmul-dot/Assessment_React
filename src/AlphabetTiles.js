// AlphabetTiles.js
import React, { useState } from 'react';
import './AlphabetTiles.css';

const AlphabetTiles = () => {
  const [outputString, setOutputString] = useState('');

  const handleClick = (letter) => {
    setOutputString((prevString) => {
    const len=prevString.length
    if(prevString.length>=2 && prevString[len-1]===prevString[len-2] && prevString[len-2]===letter ){
        return prevString.slice(0, -2) + '_';
    }else{
        return prevString+letter;
    }
    });
  };

  const renderAlphabetTiles = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.split('').map((letter) => (
      <div key={letter} className="tile" onClick={() => handleClick(letter)}>
        {letter}
      </div>
    ));
  };

  return (
    <div className="tile-container">
      {renderAlphabetTiles()}
      <div id="outputString">{outputString}</div>
    </div>
  );
};

export default AlphabetTiles;
