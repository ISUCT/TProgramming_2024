function anagrams(word, words) {
    let a = word.split('').sort().join('');
    return words.filter(w => w.split('').sort().join('') === a);
}