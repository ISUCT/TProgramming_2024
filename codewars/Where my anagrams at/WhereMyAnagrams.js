function anagrams(word, words) {
    const sortWord = word.split("").sort().join("");
    return words.filter(word => word.split("").sort().join("") === sortWord);
}
