function duplicateEncode(word) {
    word = word.toLowerCase();
    let output = '';
    for (let i = 0; i < word.length; i++) {
        if (word.split(word[i]).length - 1 > 1) {
            output += ')';
        } else {
            output += '(';
        }
    }
    return output;
}