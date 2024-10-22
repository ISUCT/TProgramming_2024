function anagrams(word, words) {
    function sortLetters(str) {
        return str.split('').sort().join('');
    }
    const sortedWord = sortLetters(word);
    return words.filter(w => sortLetters(w) === sortedWord);
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));