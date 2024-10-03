function anagrams(word, words) {
    return words.filter(wrd => wrd.split('').sort().join('') === word.split('').sort().join(''));
}