import React, { useEffect } from 'react';

const Dices = ({ dices, setDices, allDices, roll, setRoll }) => {
  const lockDice = (dice) => {
    if (dice.isLocked === false) {
      dice.isLocked = true;
    } else dice.isLocked = false;
    let dicesCopy = [...dices];
    setDices(dicesCopy);
  };

  useEffect(() => {
    setInterval(() => {
      setRoll(false);
    }, 2000);
  }, []);

  let gifImg =
    'https://www.animatedimages.org/data/media/710/animated-dice-image-0064.gif';

  const imgStyle = {
    height: '60px',
    margin: '10px',
  };

  return (
    <div className='dices'>
      {dices.map((dice) => {
        return (
          <img
            className={dice.isLocked ? 'locked' : 'unlocked'}
            style={imgStyle}
            src={roll ? gifImg : allDices[dice.title]}
            onClick={() => lockDice(dice)}
            key={dice.id}
          ></img>
        );
      })}
    </div>
  );
};

export default Dices;
