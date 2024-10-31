function duplicateEncode(word) {
    word = word.toLowerCase();
    let answer = '';

    for (let i = 0; i < word.length; i++) {
        if (word.split(word[i]).length - 1 > 1) {
            answer += ')';
        } else {
            answer += '(';
        }
    }

    return answer;
}
