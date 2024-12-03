function anagrams(targetWord, wordList) {
    const sortedTarget = targetWord.split("").sort().join("");
    return wordList.filter(word => word.split("").sort().join("") === sortedTarget);
}
