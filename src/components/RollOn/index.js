import React, { useState, useEffect, useRef } from "react";
import Dice from "../Dice";
import {
  Button,
  Container,
  HeaderOne,
  Shine,
  AnimatedBeats
} from "./styledComponent";

import Realistic from "./Confetti";

const RollOn = ({ props }) => {
  const [playerOne, setPlayerOne] = useState(1);
  const [playerTwo, setPlayerTwo] = useState(1);

  const [playerOneCount, setPlayerOneCount] = useState(0);
  const [playerTwoCount, setPlayerTwoCount] = useState(0);

  const [playerOneHits, setPlayerOneHits] = useState(false);
  const [playerTwoHits, setPlayerTwoHits] = useState(false);

  const [winner, setWinner] = useState(50);

  useEffect(() => {}, [
    playerOne,
    playerTwo,
    playerOneCount,
    playerTwoCount,
    playerOneHits,
    playerTwoHits
  ]);
  const classCompRef = useRef(null);

  const getRandomInt = () => {
    let min = Math.ceil(1);
    let max = Math.floor(6);

    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const setOneTrueOrFalse = num => {
    if (playerOneCount >= winner) {
      setPlayerTwoHits(true);
      setPlayerOneHits(true);
      classCompRef.current.handlerFire();
    }
    if (num !== 6) {
      console.log("!6", num);
      setPlayerTwoHits(false);
      setPlayerOneHits(true);
    }
    if (num === 6) {
      console.log("6", num);
      setPlayerTwoHits(true);
    }
  };

  const setTwoTrueOrFalse = num => {
    if (playerTwoCount >= winner) {
      setPlayerTwoHits(true);
      setPlayerOneHits(true);
      classCompRef.current.handlerFire();
    }
    if (num !== 6) {
      console.log("!6", num);
      setPlayerTwoHits(true);
      setPlayerOneHits(false);
    }
    if (num === 6) {
      console.log("6", num);
      setPlayerOneHits(true);
    }
  };

  const playerOneCounts = () => {
    let countOne = getRandomInt();
    setPlayerOneCount(playerOneCount + countOne);
    setPlayerOne(countOne);
    console.log(countOne);

    setOneTrueOrFalse(countOne);
  };
  const playerTwoCounts = () => {
    let countTwo = getRandomInt();
    console.log(countTwo);
    setPlayerTwoCount(playerTwoCount + countTwo);
    setPlayerTwo(countTwo);
    setTwoTrueOrFalse(countTwo);
  };

  return (
    <div>
      <Container>
        <HeaderOne>
          Player 1 -{" "}
          {playerOne === 6 ? (
            <AnimatedBeats>
              {" "}
              <Shine>{playerOne}</Shine>
            </AnimatedBeats>
          ) : (
            playerOne
          )}
          <div>Count: {playerOneCount}</div>
          {playerOne === 6 ? (
            <Shine>
              <AnimatedBeats>
                {winner <= playerOneCount ? <p>Winner</p> : <p>Roll Again</p>}
              </AnimatedBeats>
            </Shine>
          ) : null}
        </HeaderOne>
        {[playerOne].map(v => (
          <Dice key={v} value={v} />
        ))}
      </Container>
      <Container>
        <HeaderOne>
          Player 2 -{" "}
          {playerTwo === 6 ? (
            <AnimatedBeats>
              {" "}
              <Shine>{playerTwo}</Shine>{" "}
            </AnimatedBeats>
          ) : (
            playerTwo
          )}
          <div>Count: {playerTwoCount}</div>
          {playerTwo === 6 ? (
            <Shine>
              <AnimatedBeats>
                {/* <p>Roll Again</p> */}
                {winner <= playerTwoCount ? <p>Winner</p> : <p>Roll Again</p>}
              </AnimatedBeats>
            </Shine>
          ) : null}
        </HeaderOne>
        {[playerTwo].map(v => (
          <Dice key={v} value={v} />
        ))}
      </Container>

      <Button disabled={playerOneHits} onClick={playerOneCounts} primary>
        Player 1
      </Button>
      <Button disabled={playerTwoHits} onClick={playerTwoCounts} primary>
        Primary 2
      </Button>
      <Realistic ref={classCompRef} />
    </div>
  );
};

export default RollOn;
