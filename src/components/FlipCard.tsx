import React from "react";
import { Japanese } from "../interface/card.interface";
import styles from "./FlipCard.module.css";
import { FrontDetail } from "./CardDetails";
import Pill from "./Pill";

interface FlipCardInterface {
  data: Japanese;
}

const FlipCard: React.SFC<FlipCardInterface> = ({ data }) => {
  return (
    <div className={styles.flipCard} data-testid="flip-card">
      <div>#{data.index}</div>

      <FrontDetail
        hiragana={data.hiragana}
        text={data.text}
        furigana={data.furigana}
      />

      <div className={styles.tags}>
        {data.tags.map(tag => (
          <Pill tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default FlipCard;
