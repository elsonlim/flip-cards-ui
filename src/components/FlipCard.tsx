import React from "react";
import { Japanese, FrontJapanese } from "../interface/card.interface";
import styles from "./FlipCard.module.css";
import textToFuriKanji from "../utils/textToFuriKanji";

interface FlipCardInterface {
  data: Japanese;
}

const FrontDetail: React.SFC<FrontJapanese> = ({
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

const Pills: React.SFC<{ tag: string }> = ({ tag }) => {
  return <div className={styles.pill}>{tag}</div>;
};

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
          <Pills tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default FlipCard;
