import splitText from "./textToFuriKanji";

describe("furiKranji", () => {
  it("should return one object with kanji with furi as empty", () => {
    const kanjiString = "abcdefg";
    expect(splitText(kanjiString, [])).toMatchObject([
      { kanji: kanjiString, furi: "" },
    ]);
  });

  it("should split to different object with kanji and furi", () => {
    const kanjiString = "abcdefg";
    expect(
      splitText(kanjiString, [{ kanji: "cd", furi: "xyz" }]),
    ).toMatchObject([
      { kanji: "ab", furi: "" },
      { kanji: "cd", furi: "xyz" },
      { kanji: "efg", furi: "" },
    ]);
  });

  it.each([
    [
      "abcdefg",
      [{ kanji: "cd", furi: "xyz" }],
      [
        { kanji: "ab", furi: "" },
        { kanji: "cd", furi: "xyz" },
        { kanji: "efg", furi: "" },
      ],
    ],
    [
      "abcdefg",
      [
        { kanji: "a", furi: "zz" },
        { kanji: "cd", furi: "xyz" },
      ],
      [
        { kanji: "a", furi: "zz" },
        { kanji: "b", furi: "" },
        { kanji: "cd", furi: "xyz" },
        { kanji: "efg", furi: "" },
      ],
    ],
    [
      "abcdefg",
      [
        { kanji: "a", furi: "zz" },
        { kanji: "cd", furi: "xyz" },
        { kanji: "fg", furi: "234" },
      ],
      [
        { kanji: "a", furi: "zz" },
        { kanji: "b", furi: "" },
        { kanji: "cd", furi: "xyz" },
        { kanji: "e", furi: "" },
        { kanji: "fg", furi: "234" },
      ],
    ],
  ])(
    "should split to different object with multiple furi kanji",
    (text, furiKanji, expected) => {
      expect(splitText(text, furiKanji)).toMatchObject(expected);
    },
  );
});
