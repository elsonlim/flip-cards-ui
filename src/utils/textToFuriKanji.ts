import { Furigana } from "../interface/card.interface";

const textToFuriKanji = (text: string, furiKanji: Furigana[]): Furigana[] => {
  const textArr = [];
  let remainingText = text;

  for (const curFuriKanji of furiKanji) {
    const indexOfKanji = remainingText.indexOf(curFuriKanji.kanji);
    const indexAfterKanji = indexOfKanji + curFuriKanji.kanji.length;
    const curFront = remainingText.slice(0, indexOfKanji);
    const curMiddle = remainingText.slice(indexOfKanji, indexAfterKanji);
    const curEnd = remainingText.slice(indexAfterKanji);

    if (curFront.length) {
      textArr.push({
        kanji: curFront,
        furi: "",
      });
    }

    if (curMiddle.length) {
      textArr.push(curFuriKanji);
    }

    remainingText = curEnd;
  }
  if (remainingText.length) {
    textArr.push({
      kanji: remainingText,
      furi: "",
    });
  }

  return textArr;
};

export default textToFuriKanji;
