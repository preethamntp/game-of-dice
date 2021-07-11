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

export const Shine = styled.span`
  font-size: 28px;
  color: #fff;
  text-align: center;
  -webkit-animation: ${glow} 1s ease-in-out infinite alternate;
  -moz-animation: ${glow} 1s ease-in-out infinite alternate;
  animation: ${glow} 1s ease-in-out infinite alternate;
`;
