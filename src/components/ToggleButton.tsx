import React from "react";
import styles from "./ToggleButton.module.css";

interface IProps {
    leftText: String;
    rightText: String;
    isDefaultSide: Boolean;
    setDefaultSide: Function;
}

const ToggleButton = ({leftText, rightText, isDefaultSide, setDefaultSide}: IProps) => {
  return (
    <div>
        <div className={`${styles.side} ${styles.left}${isDefaultSide ? ` ${styles.isSelected}` : ''}`}
            onClick={() => setDefaultSide(true)}>
            {leftText}
        </div>
        <div className={`${styles.side} ${styles.right}${isDefaultSide ? '' : ` ${styles.isSelected}`}`}
            onClick={() => setDefaultSide(false)}>
            {rightText}
        </div>
    </div>
  );
};

export default ToggleButton;
