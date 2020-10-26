export interface Furigana {
  kanji: string;
  furi: string;
}
export interface FrontJapanese {
  text: string;
  hiragana: string;
  furigana: Furigana[];
}

export interface BackJapanese {
  english: string;
}

export interface Japanese extends FrontJapanese, BackJapanese {
  index: number;
  tags: string[];
}
