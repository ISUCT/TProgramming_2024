function anagrams(word, words) {
    function sortWord(w) {
        return w.split('').sort().join('');
    }

    const sortedWord = sortWord(word);

    return words.filter(w => sortWord(w) === sortedWord);
}