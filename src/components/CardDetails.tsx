import React from "react";
import textToFuriKanji from "../utils/textToFuriKanji";
import { FrontJapanese, BackJapanese } from "../interface/card.interface";
import styles from "./CardDetails.module.css";

export const FrontDetail: React.SFC<FrontJapanese> = ({
  text,
  hiragana,
  furigana,
}) => {
  const getTextWithFurigana = () => {
    const furiKanjiArray = textToFuriKanji(text, furigana);

    return furiKanjiArray.map(furiKanji => {
      return (
        <div key={furiKanji.kanji} className={styles.furiKanji}>
          <div className={styles.furi}>{furiKanji.furi}</div>
          <div className={styles.kanji}>{furiKanji.kanji}</div>
        </div>
      );
    });
  };

  return (
    <div className={styles.flipCardBody}>
      <div className={styles.fullText}>{getTextWithFurigana()}</div>
      <div>{hiragana}</div>
    </div>
  );
};

export const BackDetail: React.SFC<BackJapanese> = ({ english }) => {
  return <div>{english}</div>;
};
