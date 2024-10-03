function sortString(str) {
    return str.split('').sort().join('');
}

function anagrams(word, words) {
    let box = [];
    let sortedWord = sortString(word);

    for (let j = 0; j < words.length; j++) {
        if (sortString(words[j]) === sortedWord) {
            box.push(words[j]);
        }
    }
    return box;
}

let result = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
console.log(result);