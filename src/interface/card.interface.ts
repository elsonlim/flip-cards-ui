export interface furigana {
  kanji: string;
  furi: string;
}

export interface Japanese {
  index: number;
  tags: string[];
  text: string;
  hiragana: string;
  furigana: furigana[];
}
