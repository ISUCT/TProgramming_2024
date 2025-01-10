function anagrams(word, words) {
    const sortedWord = word.split('').sort().join('');
    return words.filter(wrd => {
        const sortedWrd = wrd.split('').sort().join('');
        return sortedWrd === sortedWord;
    });
}