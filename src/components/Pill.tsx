import React from "react";
import styles from "./Pill.module.css";

const Pill: React.SFC<({
  tag: string,
  isFrontFacing: boolean
})> = ({ tag, isFrontFacing }) => {
  return <div className={isFrontFacing ? styles.pill : styles.backPill}>{tag}</div>;
};

export default Pill;
