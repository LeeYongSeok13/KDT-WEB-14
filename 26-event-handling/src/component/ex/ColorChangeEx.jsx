import React, { useState } from "react";

export default function ColorChangeEx() {
  const [message, setMessage] = useState("검정색 글씨");
  const [color, setColor] = useState("black");

  const changeRed = () => {
    setMessage("빨간색 글씨");
    setColor("red");
  };

  const changeBlue = () => {
    setMessage("파란색 글씨");
    setColor("blue");
  };

  return (
    <div>
      <h1 style={{ color: color }}>{message}</h1>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </div>
  );
}
