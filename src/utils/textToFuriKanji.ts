import { furigana } from "../interface/card.interface";

const textToFuriKanji = (text: string, furiKanji: furigana[]) => {
  const textArr = [];
  let remainingText = text;
  while (furiKanji.length > 0 && remainingText.length > 0) {
    const curFuriKanji = furiKanji.shift() as furigana;
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
