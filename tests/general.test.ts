import { Text } from "../src/index";

describe.each`
  description               | hebrew        | transliteration
  ${"no special features"}  | ${"לֶ֬חֶם"}   | ${"lechem"}
  ${"gemination"}           | ${"רַנֵּן"}   | ${"ranen"}
  ${"furtive patach, chet"} | ${"מָשִׁיחַ"} | ${"maschiach"}
  ${"furtive patach, ayin"} | ${"שָׁמֵ֑עַ"} | ${"schamea"}
  ${"furtive patach, he"}   | ${"גָבֹ֗הַּ"} | ${"gawoa"}
  ${"final qamets-he"}      | ${"מַלְכָּה"} | ${"malka"}
`("$description", ({ description, hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${description} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});
