function sort(str) {
    return str.split('').sort().join('');
}

function whereanagrams(word, words) {
    let box = [];
    let sortedWord = sortStr(word);

    for (let j = 0; j < words.length; j++) {
        if (sort(words[j]) === sortedWord) {
            box.push(words[j]);
        }
    }
    return box;
}

let result = whereanagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
console.log(result);