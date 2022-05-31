import React, { useEffect, useState } from 'react';
import HighScore from './HighScore';

const Scores = ({
  totalScore,
  setTotalScore,
  dices,
  rollCounter,

  onRollDice,

  roundCounter,
  setRoundCounter,
  newRound,
  isLocked1,
  isLocked2,
  isLocked3,
  isLocked4,
  isLocked5,
  isLocked6,
  isLocked7,
  isLocked8,
  isLocked9,
  isLocked10,
  isLocked11,
  isLocked12,
  isLocked13,
  setIsLocked1,
  setIsLocked2,
  setIsLocked3,
  setIsLocked4,
  setIsLocked5,
  setIsLocked6,
  setIsLocked7,
  setIsLocked8,
  setIsLocked9,
  setIsLocked10,
  setIsLocked11,
  setIsLocked12,
  setIsLocked13,
  onesScore,
  twosScore,
  threesScore,
  foursScore,
  fivesScore,
  sixesScore,
  threeOfAKindScore,
  fourOfAKindScore,
  fullHouseScore,
  smallStraight,
  largeStraight,
  yatzeScore,
  chanceScore,
  setOnesScore,
  setTwosScore,
  setThreesScore,
  setFoursScore,
  setFivesScore,
  setSixesScore,
  setThreeOfAKindScore,
  setFourOfAKindScore,
  setFullHouseScore,
  setSmallStraight,
  setLargeStraight,
  setYatzeScore,
  setChanceScore,
}) => {
  const [tempDices, setTempDices] = useState([]);

  const getDiceNumbers = () => {
    let temp = [];
    for (let i = 0; i < dices.length; i++) {
      temp = [...temp, dices[i].title + 1];
    }
    setTempDices(temp);
  };

  const sumOfSameNumber = (num) => {
    let tempScore = 0;
    for (let i = 0; i < tempDices.length; i++) {
      if (tempDices[i] === num) {
        tempScore += tempDices[i];
        if (num === 1) setOnesScore(tempScore);
        else if (num === 2) setTwosScore(tempScore);
        else if (num === 3) setThreesScore(tempScore);
        else if (num === 4) setFoursScore(tempScore);
        else if (num === 5) setFivesScore(tempScore);
        else if (num === 6) setSixesScore(tempScore);
      }
    }
    setTotalScore(totalScore + tempScore);
  };

  const unlockDices = () => {
    for (let i = 0; i < dices.length; i++) {
      dices[i].isLocked = false;
    }
  };

  useEffect(() => {
    getDiceNumbers();
  }, [rollCounter]);

  const onChance = () => {
    setRoundCounter(roundCounter + 1);
    setIsLocked7(true);
    unlockDices();
    getDiceNumbers();
    onRollDice();
    newRound();
    let tempChanceScore = 0;
    for (let i = 0; i < tempDices.length; i++) {
      tempChanceScore += tempDices[i];
    }
    setChanceScore(tempChanceScore);
    setTotalScore(totalScore + tempChanceScore);
  };

  const onThreeOfAKind = () => {
    setRoundCounter(roundCounter + 1);
    unlockDices();
    getDiceNumbers();
    onRollDice();
    newRound();
    setIsLocked8(true);
    const count = {};
    tempDices.forEach((element) => {
      count[element] = (count[element] || 0) + 1;
      if (count[element] >= 3) {
        let tempChanceScore = 0;
        for (let i = 0; i < tempDices.length; i++) {
          tempChanceScore += tempDices[i];
        }
        setThreeOfAKindScore(tempChanceScore);
        setTotalScore(totalScore + tempChanceScore);
      }
    });
  };

  const onFourOfAKind = () => {
    setRoundCounter(roundCounter + 1);
    unlockDices();
    getDiceNumbers();
    onRollDice();
    newRound();
    setIsLocked9(true);
    const countDices = {};
    tempDices.forEach((element) => {
      countDices[element] = (countDices[element] || 0) + 1;
      if (countDices[element] >= 4) {
        let tempChanceScore = 0;
        for (let i = 0; i < tempDices.length; i++) {
          tempChanceScore += tempDices[i];
        }
        setFourOfAKindScore(tempChanceScore);
        setTotalScore(totalScore + tempChanceScore);
      }
    });
  };

  const onFullHouse = () => {
    unlockDices();
    getDiceNumbers();
    onRollDice();
    newRound();
    setRoundCounter(roundCounter + 1);
    setIsLocked10(true);
    const count = {};
    let objSize = 0;
    tempDices.forEach((element) => {
      count[element] = (count[element] || 0) + 1;
      objSize = Object.keys(count).length;
    });
    for (let i = 0; i <= 6; i++) {
      if (objSize === 2 && count[i] === 3) {
        let tempScore = 25;
        setFullHouseScore(tempScore);
        setTotalScore(totalScore + tempScore);
      }
    }
  };

  const onYatze = () => {
    unlockDices();
    getDiceNumbers();
    onRollDice();
    setRoundCounter(roundCounter + 1);
    setIsLocked11(true);
    const count = {};
    let objSize = 0;
    tempDices.forEach((element) => {
      count[element] = (count[element] || 0) + 1;
      objSize = Object.keys(count).length;
      if (objSize === 1 && count[element] === 5) {
        let tempScore = 50;
        setYatzeScore(tempScore);
        setTotalScore(totalScore + tempScore);
      }
    });
    newRound();
  };

  const onSmallStraight = (tempDices) => {
    unlockDices();
    getDiceNumbers();
    onRollDice();
    newRound();
    setRoundCounter(roundCounter + 1);
    setIsLocked12(true);
    let tempScore = 30;
    const newSet = new Set(tempDices);
    const newArr = Array.from(newSet).sort();
    if (newSet.size < 4) return 0;
    console.log(newArr.length);
    if (
      (newArr[0] === 1 && newArr[3] === 4) ||
      (newArr[0] === 2 && newArr[3] === 5) ||
      (newArr[0] === 3 && newArr[3] === 6)
    ) {
      setSmallStraight(tempScore);
      setTotalScore(totalScore + tempScore);
    } else return 0;
  };

  const onLargeStraight = (tempDices) => {
    unlockDices();
    getDiceNumbers();
    onRollDice();
    newRound();
    setRoundCounter(roundCounter + 1);
    setIsLocked13(true);
    let tempScore = 40;
    const newSet = new Set(tempDices);
    const newArr = Array.from(newSet).sort();
    if (newSet.size < 5) return 0;
    if (
      (newArr[0] === 1 && newArr[4] === 5) ||
      (newArr[0] === 2 && newArr[4] === 6)
    ) {
      setLargeStraight(tempScore);
      setTotalScore(totalScore + tempScore);
    } else return 0;
  };

  const onOnes = () => {
    setRoundCounter(roundCounter + 1);
    unlockDices();
    sumOfSameNumber(1);
    onRollDice();
    setIsLocked1(true);
    newRound();
  };

  const onTwos = () => {
    setRoundCounter(roundCounter + 1);
    unlockDices();
    sumOfSameNumber(2);
    onRollDice();
    setIsLocked2(true);
    newRound();
  };

  const onThrees = () => {
    setRoundCounter(roundCounter + 1);
    unlockDices();
    sumOfSameNumber(3);
    onRollDice();
    setIsLocked3(true);
    newRound();
  };

  const onFours = () => {
    setRoundCounter(roundCounter + 1);
    unlockDices();
    sumOfSameNumber(4);
    onRollDice();
    setIsLocked4(true);
    newRound();
  };

  const onFives = () => {
    setRoundCounter(roundCounter + 1);
    unlockDices();
    sumOfSameNumber(5);
    onRollDice();
    setIsLocked5(true);
    newRound();
  };

  const onSixes = () => {
    setRoundCounter(roundCounter + 1);
    unlockDices();
    sumOfSameNumber(6);
    onRollDice();
    setIsLocked6(true);
    newRound();
  };

  return (
    <div>
      <div className='scores'>
        <div className='left'>
          <span className='score'>
            <button disabled={isLocked1} onClick={() => onOnes()}>
              Ones
            </button>
            {onesScore}
          </span>

          <span className='score'>
            <button disabled={isLocked2} onClick={() => onTwos()}>
              Twos
            </button>
            {twosScore}
          </span>
          <span className='score'>
            <button disabled={isLocked3} onClick={() => onThrees()}>
              Threes
            </button>
            {threesScore}
          </span>
          <span className='score'>
            <button disabled={isLocked4} onClick={() => onFours()}>
              Fours
            </button>
            {foursScore}
          </span>
          <span className='score'>
            <button disabled={isLocked5} onClick={() => onFives()}>
              Fives
            </button>
            {fivesScore}
          </span>
          <span className='score'>
            <button disabled={isLocked6} onClick={() => onSixes()}>
              Sixes
            </button>
            {sixesScore}
          </span>
        </div>

        <div className='right'>
          <span className='score'>
            <button disabled={isLocked8} onClick={() => onThreeOfAKind()}>
              Three of a Kind
            </button>
            {threeOfAKindScore}
          </span>
          <span className='score'>
            <button disabled={isLocked9} onClick={() => onFourOfAKind()}>
              Four of a Kind
            </button>
            {fourOfAKindScore}
          </span>
          <span className='score'>
            <button disabled={isLocked10} onClick={() => onFullHouse()}>
              Full House
            </button>
            {fullHouseScore}
          </span>
          <span className='score'>
            <button
              disabled={isLocked12}
              onClick={() => onSmallStraight(tempDices)}
            >
              Small Straight
            </button>
            {smallStraight}
          </span>
          <span className='score'>
            <button
              disabled={isLocked13}
              onClick={() => onLargeStraight(tempDices)}
            >
              Large Straight
            </button>
            {largeStraight}
          </span>
          <span className='score'>
            <button disabled={isLocked11} onClick={() => onYatze()}>
              Yatze
            </button>
            {yatzeScore}
          </span>
          <span className='score'>
            <button disabled={isLocked7} onClick={() => onChance()}>
              Chance
            </button>
            {chanceScore}
          </span>
        </div>
      </div>

      <div className='total-score'>Total Score: {totalScore}</div>
      <div className='highScore'>
        <HighScore roundCounter={roundCounter} totalScore={totalScore} />
      </div>
    </div>
  );
};

export default Scores;
