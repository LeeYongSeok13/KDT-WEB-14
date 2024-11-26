import React from "react";
import styles from "./styles/cssModule.module.css";

// CSS Module
// - 클래스명 중복 방지
// - css 파일 확장자 : module.css (단, CRA로 만든 프로젝트에서)
// - 리액트 고유

export default function CssModuleComponent() {
  console.log(styles);
  return (
    <div className={styles.container}>
      <div className={[styles.box, styles.red].join(" ")}></div>
      <div className={[styles.box, styles.orange].join(" ")}></div>
      <div className={`${styles.box} ${styles.yellow}`}></div>
      <div></div>
    </div>
  );
}
