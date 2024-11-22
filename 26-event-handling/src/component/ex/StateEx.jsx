import React, { useState } from "react";

export default function StateEx() {
  const [state, setState] = useState(0);

  const disappear = () => {
    setState(1);
  };

  const show = () => {
    setState(0);
  };
  return (
    <div>
      {state === 0 ? (
        <div>
          <button onClick={disappear}>사라져라</button>
          <h1>안녕하세요</h1>
        </div>
      ) : (
        <div>
          <button onClick={show}>보여라</button>
        </div>
      )}
    </div>
  );
}
