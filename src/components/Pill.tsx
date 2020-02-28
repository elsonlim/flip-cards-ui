import React from "react";
import styles from "./Pill.module.css";

const Pill: React.SFC<{ tag: string }> = ({ tag }) => {
  return <div className={styles.pill}>{tag}</div>;
};

export default Pill;
