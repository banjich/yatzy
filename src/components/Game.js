import React, { useState, useEffect } from 'react';
import Dices from './Dices';
import dice1 from '../assets/images/1.png';
import dice2 from '../assets/images/2.png';
import dice3 from '../assets/images/3.png';
import dice4 from '../assets/images/4.png';
import dice5 from '../assets/images/5.png';
import dice6 from '../assets/images/6.png';
import Scores from './Scores';

const allDices = [dice1, dice2, dice3, dice4, dice5, dice6];

let rollCounter = 0;

const Game = () => {
  const [roundCounter, setRoundCounter] = useState(0);
  const [roll, setRoll] = useState(false);
  const [totalScore, setTotalScore] = useState(() => {
    const saved = localStorage.getItem('totalScore');
    const initialValue = JSON.parse(saved);
    return 0;
  });

  useEffect(() => {
    localStorage.setItem('totalScore', JSON.stringify(totalScore));
  }, [totalScore]);

  const [dices, setDices] = useState([
    { title: 1, isLocked: false, id: 1 },
    { title: 2, isLocked: false, id: 2 },
    { title: 3, isLocked: false, id: 3 },
    { title: 4, isLocked: false, id: 4 },
    { title: 5, isLocked: false, id: 5 },
  ]);

  const [isLocked1, setIsLocked1] = useState(false);
  const [isLocked2, setIsLocked2] = useState(false);
  const [isLocked3, setIsLocked3] = useState(false);
  const [isLocked4, setIsLocked4] = useState(false);
  const [isLocked5, setIsLocked5] = useState(false);
  const [isLocked6, setIsLocked6] = useState(false);
  const [isLocked7, setIsLocked7] = useState(false);
  const [isLocked8, setIsLocked8] = useState(false);
  const [isLocked9, setIsLocked9] = useState(false);
  const [isLocked10, setIsLocked10] = useState(false);
  const [isLocked11, setIsLocked11] = useState(false);
  const [isLocked12, setIsLocked12] = useState(false);
  const [isLocked13, setIsLocked13] = useState(false);
  const [onesScore, setOnesScore] = useState(0);
  const [twosScore, setTwosScore] = useState(0);
  const [threesScore, setThreesScore] = useState(0);
  const [foursScore, setFoursScore] = useState(0);
  const [fivesScore, setFivesScore] = useState(0);
  const [sixesScore, setSixesScore] = useState(0);
  const [chanceScore, setChanceScore] = useState(0);
  const [threeOfAKindScore, setThreeOfAKindScore] = useState(0);
  const [fourOfAKindScore, setFourOfAKindScore] = useState(0);
  const [fullHouseScore, setFullHouseScore] = useState(0);
  const [yatzeScore, setYatzeScore] = useState(0);
  const [smallStraight, setSmallStraight] = useState(0);
  const [largeStraight, setLargeStraight] = useState(0);

  useEffect(() => {
    for (let i = 0; i < dices.length; i++) {
      dices[i].title = Math.trunc(Math.random() * 6);
    }
    let copyDices = [...dices];
    setDices(copyDices);
    rollCounter += 1;
  }, []);

  const onRollDice = () => {
    rollCounter += 1;
    for (let i = 0; i < dices.length; i++) {
      if (!dices[i].isLocked) dices[i].title = Math.trunc(Math.random() * 6);
      setRoll(true);
    }
    let copyDices = [...dices];

    setDices(copyDices);
  };

  const newRound = () => {
    for (let i = 0; i < dices.length; i++) {
      dices[i].isLocked = false;
      for (let i = 0; i < dices.length; i++) {
        if (!dices[i].isLocked) dices[i].title = Math.trunc(Math.random() * 6);
      }
      let copyDices = [...dices];
      setDices(copyDices);
      rollCounter = 2;
    }
  };

  const onPlayAgain = () => {
    for (let i = 0; i < dices.length; i++) {
      dices[i].isLocked = false;
    }
    setRoundCounter(0);
    rollCounter = 0;
    rollCounter += 1;
    onRollDice();
    setTotalScore(0);
    setIsLocked1(false);
    setIsLocked2(false);
    setIsLocked3(false);
    setIsLocked4(false);
    setIsLocked5(false);
    setIsLocked6(false);
    setIsLocked7(false);
    setIsLocked8(false);
    setIsLocked9(false);
    setIsLocked10(false);
    setIsLocked11(false);
    setIsLocked12(false);
    setIsLocked13(false);
    setOnesScore(0);
    setTwosScore(0);
    setThreesScore(0);
    setFoursScore(0);
    setFivesScore(0);
    setSixesScore(0);
    setThreeOfAKindScore(0);
    setFourOfAKindScore(0);
    setFullHouseScore(0);
    setSmallStraight(0);
    setLargeStraight(0);
    setYatzeScore(0);
    setChanceScore(0);
  };

  return (
    <div className='container'>
      <Dices
        dices={dices}
        setDices={setDices}
        allDices={allDices}
        roll={roll}
        setRoll={setRoll}
      />

      <Scores
        isLocked1={isLocked1}
        isLocked2={isLocked2}
        isLocked3={isLocked3}
        isLocked4={isLocked4}
        isLocked5={isLocked5}
        isLocked6={isLocked6}
        isLocked7={isLocked7}
        isLocked8={isLocked8}
        isLocked9={isLocked9}
        isLocked10={isLocked10}
        isLocked11={isLocked11}
        isLocked12={isLocked12}
        isLocked13={isLocked13}
        setIsLocked1={setIsLocked1}
        setIsLocked2={setIsLocked2}
        setIsLocked3={setIsLocked3}
        setIsLocked4={setIsLocked4}
        setIsLocked5={setIsLocked5}
        setIsLocked6={setIsLocked6}
        setIsLocked7={setIsLocked7}
        setIsLocked8={setIsLocked8}
        setIsLocked9={setIsLocked9}
        setIsLocked10={setIsLocked10}
        setIsLocked11={setIsLocked11}
        setIsLocked12={setIsLocked12}
        setIsLocked13={setIsLocked13}
        onesScore={onesScore}
        twosScore={twosScore}
        threesScore={threesScore}
        foursScore={foursScore}
        fivesScore={fivesScore}
        sixesScore={sixesScore}
        threeOfAKindScore={threeOfAKindScore}
        fourOfAKindScore={fourOfAKindScore}
        fullHouseScore={fullHouseScore}
        smallStraight={smallStraight}
        largeStraight={largeStraight}
        yatzeScore={yatzeScore}
        chanceScore={chanceScore}
        setOnesScore={setOnesScore}
        setTwosScore={setTwosScore}
        setThreesScore={setThreesScore}
        setFoursScore={setFoursScore}
        setFivesScore={setFivesScore}
        setSixesScore={setSixesScore}
        setThreeOfAKindScore={setThreeOfAKindScore}
        setFourOfAKindScore={setFourOfAKindScore}
        setFullHouseScore={setFullHouseScore}
        setSmallStraight={setSmallStraight}
        setLargeStraight={setLargeStraight}
        setYatzeScore={setYatzeScore}
        setChanceScore={setChanceScore}
        totalScore={totalScore}
        setTotalScore={setTotalScore}
        newRound={newRound}
        dices={dices}
        rollCounter={rollCounter}
        onRollDice={onRollDice}
        roundCounter={roundCounter}
        setRoundCounter={setRoundCounter}
      />

      {roundCounter !== 13 && (
        <button
          disabled={rollCounter >= 4}
          className='rollbtn'
          onClick={() => onRollDice()}
        >
          {rollCounter <= 2 && '2 rools left'}
          {rollCounter === 3 && '1 rool left'}
          {rollCounter >= 4 && '0 rools left'}
        </button>
      )}
      {roundCounter === 13 && (
        <button className='restart' onClick={() => onPlayAgain()}>
          Play Again
        </button>
      )}
      <div className='game-over'>{roundCounter === 13 && 'GAME OVER!'}</div>
    </div>
  );
};

export default Game;
