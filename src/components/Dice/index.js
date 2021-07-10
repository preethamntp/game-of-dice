import React from "react";
import "./die.css";

const Pip = () => <span className="pip" />;

const Face = ({ children }) => <div className="face">{children}</div>;

function index({ value }) {
  let pips = Number.isInteger(value)
    ? Array(value)
        .fill(0)
        .map((a, i) => <Pip key={i} />)
    : null;
  return <Face>{pips}</Face>;
}

export default index;
