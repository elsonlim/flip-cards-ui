import React from "react";
import textToFuriKanji from "../utils/textToFuriKanji";
import { FrontJapanese } from "../interface/card.interface";
import styles from "./CardDetails.module.css";

export const FrontDetail: React.SFC<FrontJapanese> = ({
  text,
  hiragana,
  furigana,
}) => {
  const getTextWithFurigana = () => {
    const furiKanjiArray = textToFuriKanji(text, furigana);

    const texts = furiKanjiArray.map(furiKanji => {
      return (
        <div className={styles.furiKanji}>
          <div className={styles.furi}>{furiKanji.furi}</div>
          <div className={styles.kanji}>{furiKanji.kanji}</div>
        </div>
      );
    });

    return <div className={styles.text}>{texts}</div>;
  };

  return (
    <div className={styles.flipCardBody}>
      <div className={styles.fullText}>text: {getTextWithFurigana()}</div>
      <div>hiragana: {hiragana}</div>
    </div>
  );
};
