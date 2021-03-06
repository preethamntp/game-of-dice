import styled, { css, keyframes } from "styled-components";

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  /* background: ${props => (props.primary ? "palevioletred" : "white")}; */
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  ${props =>
    props.primary &&
    !props.disabled &&
    css`
      background: palevioletred;
      color: white;
    `}
  ${props =>
    props.primary &&
    props.disabled &&
    css`
      color: #d12028;
      background: #fff;
    `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const HeaderOne = styled.h1`
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  color: white;
`;

const glow = keyframes`
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
        0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
        0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
`;

const zoomIn = keyframes`
    0% {
        transform: scale(1,1);
    }
    50% {
        transform: scale(1.2,1.2);
    }
    100% {
        transform: scale(1,1);
    }
`;

export const canvas = styled.canvas`
  border: 1px solid silver;
  background: white;
  cursor: -webkit-grab;
  display: block;
`;

export const Shine = styled.span`
  font-size: 28px;
  color: #fff;
  text-align: center;
  -webkit-animation: ${glow} 1s ease-in-out infinite alternate;
  -moz-animation: ${glow} 1s ease-in-out infinite alternate;
  animation: ${glow} 1s ease-in-out infinite alternate;
`;

const heartBeat = keyframes`
  0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 1.1 );
  }
  40%
  {
    transform: scale( .75 );
  }
  60%
  {
    transform: scale( 1.1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( .75 );
  }
`;

export const AnimatedBeats = styled.span`
  display: -moz-inline-stack;
  display: inline-block;
  animation: ${heartBeat} 1s 2000ms;
`;
