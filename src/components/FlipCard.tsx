import React, { useState } from "react";
import { Japanese } from "../interface/card.interface";
import styles from "./FlipCard.module.css";
import { FrontDetail, BackDetail } from "./CardDetails";
import Pill from "./Pill";

interface FlipCardInterface {
  data: Japanese;
}

const FlipCard: React.SFC<FlipCardInterface> = ({ data }) => {
  const [isFrontFacing, setIsFrontFacing] = useState(true);
  const toggleFacing = () => setIsFrontFacing(!isFrontFacing);

  return (
    <div
      onClick={toggleFacing}
      className={isFrontFacing ? styles.flipCard : styles.flipCardOpen}
      data-testid="flip-card"
    >
      <div>#{data.index}</div>

      <div className={styles.text}>
        {isFrontFacing ? (
          <FrontDetail
            hiragana={data.hiragana}
            text={data.text}
            furigana={data.furigana}
          />
        ) : (
          <BackDetail english={data.english} />
        )}
      </div>
      <div className={styles.tags}>
        {data.tags.map(tag => (
          <Pill key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default FlipCard;
