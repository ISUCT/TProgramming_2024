function duplicateEncode(word) {
    word = word.toLowerCase();
    let a = '';
    for (let i = 0; i < word.length; i++) {
        if (word.split(word[i]).length - 1 > 1) {
            a += ')';
        } else {
            a += '(';
        }
    }
    return a;
}