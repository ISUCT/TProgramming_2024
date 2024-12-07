function anagrams(word, words) {
    return words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));
}