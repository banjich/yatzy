import React, { useState, useEffect } from 'react';

const HighScore = ({ totalScore, roundCounter }) => {
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('highScore');
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });
  useEffect(() => {
    localStorage.setItem('highScore', JSON.stringify(highScore));
  }, [highScore]);

  if (roundCounter === 13) {
    if (totalScore > highScore) {
      setHighScore(totalScore);
    }
  }
  return (
    <div className='high-score'>
      {highScore > 0 && <div>High Score: {highScore}</div>}
    </div>
  );
};

export default HighScore;
