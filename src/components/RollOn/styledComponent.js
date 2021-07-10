import styled, { css } from "styled-components";

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
