import React from "react";
import styles from "./styles/practice.scss";

export default function Practice() {
  console.log(styles);
  return (
    <div>
      <h1>실습</h1>
      <div className="larva">
        <div className="body body1">
          <div className="eye eye-white">
            <div className="eye eye-black"></div>
          </div>
        </div>
        <div className="body body2"></div>
        <div className="body body3"></div>
        <div className="body body4"></div>
        <div className="body body5"></div>
        <img className="grass" src="/images/plant.png" alt="잔디" />
      </div>
    </div>
  );
}
