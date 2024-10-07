function anagrams(word, words) {
  const sortedWord = word.split("").sort().join("");
  return words.filter((w) => w.split("").sort().join("") === sortedWord);
}
